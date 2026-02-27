import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { FaCheck, FaQuoteRight } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// Import Components
import TopLearningSlider from '../Sliders/TopLearningSlider';
import UpcomingSlider from '../Sliders/UpcomingSlider';
import FeedbackSlider from '../Sliders/FeedbackSlider';
import CourseCard from '../Common/CourseCard';

const HomeSecond = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const coursesPerPage = 4;

    const splideRef1 = useRef(null);
    const splideRef2 = useRef(null);
    const splideRef3 = useRef(null);

    // Memoize course slices to prevent unnecessary recalculations
    const topLearningCourses = useMemo(() => courses, [courses]);
    const continueLearningCourses = useMemo(() => courses, [courses]);
    const upcomingCourses = useMemo(() => courses, [courses]);

    // Pagination logic for Continue Learning section
    const totalPages = Math.ceil(continueLearningCourses.length / coursesPerPage);
    const startIndex = currentPage * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const currentCourses = continueLearningCourses.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            console.log('🔍 HomeSecond: Fetching courses from API...');
            
            // Test API connectivity
            const response = await fetch('http://localhost:5002/api/public/courses');
            console.log('🔍 HomeSecond: Response status:', response.status);
            console.log('🔍 HomeSecond: Response ok:', response.ok);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('🔍 HomeSecond: API Response:', data);
            console.log('🔍 HomeSecond: Courses data:', data.data);
            
            if (data.success) {
                setCourses(data.data);
                console.log(`✅ HomeSecond: ${data.data.length} courses loaded`);
                console.log('🔍 HomeSecond: Course titles:', data.data.map(c => c.title));
            } else {
                setError(data.message || 'Failed to load courses');
                console.error('❌ HomeSecond: API Error:', data.message);
            }
        } catch (error) {
            setError('Failed to fetch courses');
            console.error('❌ HomeSecond: Fetch Error:', error);
            console.error('❌ HomeSecond: Full error details:', error);
            console.error('❌ HomeSecond: Error stack:', error.stack);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>
                {`
                    .equal-height-slide {
                        display: flex !important;
                    }
                    .equal-height-slide .udemy-cards {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }
                    .equal-height-slide .udemy-picture img {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                    }
                    .equal-height-slide .udemy-content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                    }
                    .equal-height-slide .udemy-course-list {
                        flex: 1;
                    }
                    .course-grid {
                        align-items: stretch;
                    }
                    .course-grid .udemy-cards {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                    }
                    .splide__slide {
                        height: auto;
                    }
                    .splide__slide .udemy-cards {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
            <section className='udemy-alert-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='udemy-alert-content'>
                                <p>For all the students who have the AI card purchased, please click the button to access the Student AI course details.</p>
                                <button className='alert-btn'>Click here!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='banner-section'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='udemy-hp-content'>
                                <h5>Learn AI the Smart Way</h5>
                                <h2>Simple, practical AI concepts designed for school students.</h2>
                                <p>Explore the basics of AI through guided lessons and real examples.Learn how artificial intelligence is shaping the world around us.</p>
                                <div>
                                    <button className='explore-btn'>Explore Courses</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 px-0'>
                            <div className='hm-banner-box'>
                                <img src="/hm_banner_02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Learning Section */}
            <section className='top-learn-section'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12 text-center'>
                            <div className='udemy-learn-content'>
                                <h5> Top <span className='top-learn-title'>Learning</span> </h5>
                                <div className='udemy-para-content'>
                                    <p>Most popular courses for students.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 mb-3'>
                            <TopLearningSlider 
                                topLearningCourses={topLearningCourses}
                                loading={loading}
                                error={error}
                                onRetry={fetchCourses}
                                splideRef={splideRef1}
                            />
                        </div>
                        <div className='text-center top-more-course mb-5'>
                            <button className='nw-thm-btn'>More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continue Learning Section */}
            <section className='continue-learn-section'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='udemy-learn-content'>
                                <h5> Continue <span className='top-learn-title'>Learning</span> </h5>
                                <div className='udemy-para-content'>
                                    <p>Continue your learning journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading courses...</span>
                                    </div>
                                    <p className="mt-3">Loading courses...</p>
                                </div>
                            ) : error ? (
                                <div className="text-center py-5">
                                    <div className="alert alert-danger">
                                        <h4>Error loading courses</h4>
                                        <p>{error}</p>
                                        <button className="btn btn-primary" onClick={fetchCourses}>
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            ) : courses.length === 0 ? (
                                <div className="text-center py-5">
                                    <h3>No courses available</h3>
                                    <p>Check back later for new courses.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="course-grid" style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                                        gap: '20px',
                                        marginTop: '20px',
                                        alignItems: 'stretch'
                                    }}>
                                       {currentCourses.map((course) => (
                                            <div key={course._id} style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: '100%'
                                            }}>
                                                <NavLink to={`/course/${course._id}`} className="text-decoration-none" style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: '100%'
                                                }}>
                                                    <CourseCard course={course} variant="continue-learning" />
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Pagination Controls */}
                                    {totalPages > 1 && (
                                        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                                            <button 
                                                className="btn btn-outline-primary d-flex align-items-center gap-2"
                                                onClick={handlePrevPage}
                                                disabled={currentPage === 0}
                                                style={{
                                                    opacity: currentPage === 0 ? 0.5 : 1,
                                                    cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
                                                }}
                                            >
                                                <MdChevronLeft size={20} />
                                                Previous
                                            </button>
                                            
                                            <span className="text-muted">
                                                {startIndex + 1}-{Math.min(endIndex, continueLearningCourses.length)} of {continueLearningCourses.length}
                                            </span>
                                            
                                            <button 
                                                className="btn btn-outline-primary d-flex align-items-center gap-2"
                                                onClick={handleNextPage}
                                                disabled={currentPage === totalPages - 1}
                                                style={{
                                                    opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                                                    cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer'
                                                }}
                                            >
                                                Next
                                                <MdChevronRight size={20} />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className='text-center top-more-course'>
                            <button className='nw-thm-btn'>More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Categories Section */}
            <section className='explore-category-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='udemy-learn-content'>
                                <h5> Explore <span className='top-learn-title'>Course Categories </span> </h5>
                                <div className='udemy-para-content'>
                                    <p>Explore different areas of learning.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-mg-6 col-sm-12 mb-3">
                            <div className="zb-hover-card">
                                <img src="/explore_01.jpg" className="img-fluid" alt="image" />
                                <div className="zb-hover-overlay">
                                    <h5 className="zb-hover-title">HTML & CSS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-mg-6 col-sm-12 mb-3">
                            <div className="zb-hover-card">
                                <img src="/explore_02.jpg" className="img-fluid" alt="image" />
                                <div className="zb-hover-overlay">
                                    <h5 className="zb-hover-title">JavaScript</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-mg-6 col-sm-12 mb-3">
                            <div className="zb-hover-card">
                                <img src="/explore_03.jpg" className="img-fluid" alt="image" />
                                <div className="zb-hover-overlay">
                                    <h5 className="zb-hover-title">React</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-mg-6 col-sm-12 mb-3">
                            <div className="zb-hover-card">
                                <img src="/explore_04.jpg" className="img-fluid" alt="image" />
                                <div className="zb-hover-overlay">
                                    <h5 className="zb-hover-title">Python</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-center top-more-course'>
                            <button className='nw-thm-btn'>More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className='choose-us-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='udemy-learn-content'>
                                <h5 className='text-white text-start fz-50'>  Why Should You  <span className='top-learn-title'> Choose Us</span></h5>
                            </div>
                            <div className="row">
                                <div className='col-lg-6 mb-3'>
                                    <div className='choose-main-content'>
                                        <div>
                                            <span className='choose-check-icon'> <FaCheck />
                                            </span>
                                        </div>
                                        <div className='choose-content'>
                                            <h6>Student-Focused Learning</h6>
                                            <p>Courses are designed specifically for students with age-appropriate explanations.</p>
                                        </div>
                                    </div>
                                    <div className='choose-main-content'>
                                        <div>
                                            <span className='choose-check-icon'> <FaCheck />
                                            </span>
                                        </div>
                                        <div className='choose-content'>
                                            <h6>Simple & Structured Content</h6>
                                            <p>Learn step by step with clear lessons, quizzes, and progress tracking.</p>
                                        </div>
                                    </div>
                                    <div className='choose-main-content'>
                                        <div>
                                            <span className='choose-check-icon'> <FaCheck />
                                            </span>
                                        </div>
                                        <div className='choose-content'>
                                            <h6>Secure Access with AI Card</h6>
                                            <p>One-time card access ensures safe and controlled learning for every student.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <div className='choose-main-content'>
                                        <div>
                                            <span className='choose-check-icon'> <FaCheck />
                                            </span>
                                        </div>
                                        <div className='choose-content'>
                                            <h6>Language Flexibility</h6>
                                            <p>Learn in English or Kannada based on your preferred language, making it easier to understand concepts.</p>
                                        </div>
                                    </div>
                                    <div className='choose-main-content'>
                                        <div>
                                            <span className='choose-check-icon'> <FaCheck />
                                            </span>
                                        </div>
                                        <div className='choose-content'>
                                            <h6>Trusted Certification</h6>
                                            <p>Receive a verified course completion certificate after finishing the course.</p>
                                        </div>
                                    </div>
                                    <div className='choose-main-content'>
                                        <div>
                                            <span className='choose-check-icon'> <FaCheck />
                                            </span>
                                        </div>
                                        <div className='choose-content'>
                                            <h6>Real-World AI Relevance</h6>
                                            <p>Explore how AI is used around you every day and how learning AI today can open doors to exciting future careers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='choose-picture'>
                                <img src="/choose_01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Popular Courses Section */}
            <section className='upcoming-section'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='udemy-learn-content'>
                                <h5> Upcomming <span className='top-learn-title'>Popular Courses </span> </h5>
                                <div className='udemy-para-content'>
                                    <p>Most popular courses for students.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 mb-3'>
                            <UpcomingSlider 
                                upcomingCourses={upcomingCourses}
                                loading={loading}
                                error={error}
                                onRetry={fetchCourses}
                                splideRef={splideRef3}
                            />
                        </div>
                        <div className='text-center top-more-course'>
                            <button className='nw-thm-btn'>More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our User Feedback Section */}
            <section className='feedback-section'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='udemy-learn-content'>
                                <h5> Our User <span className='top-learn-title'>Feedback </span> </h5>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <FeedbackSlider />
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Ask Question Section */}
            <section className='faq-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='udemy-learn-content'>
                                <h5> Frequently <span className='top-learn-title'> Ask Question </span> </h5>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='faq-cards'>
                                <div className="accordion zx-faq-accordion " id="zxFaq">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button  zx-faq-btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true">
                                                Who is this course designed for?
                                            </button>
                                        </h2>
                                        <div id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#zxFaq">
                                            <div className="accordion-body">
                                                Sign up for a free account, complete your profile, showcase your skills, and start bidding on projects that match your expertise.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed zx-faq-btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo">
                                                What makes this course easy to understand for students?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#zxFaq">
                                            <div className="accordion-body">
                                                Sign up for a free account, complete your profile, showcase your skills, and start bidding on projects that match your expertise.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed zx-faq-btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree">
                                                What type of knowledge or skills does this course help students develop?
                                            </button>
                                        </h2>
                                        <div id="collapseThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#zxFaq">
                                            <div className="accordion-body">
                                                Sign up for a free account, complete your profile, showcase your skills, and start bidding on projects that match your expertise.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed zx-faq-btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour">
                                                Why is this course useful for students at a school level?
                                            </button>
                                        </h2>
                                        <div id="collapseFour"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#zxFaq">
                                            <div className="accordion-body">
                                                Sign up for a free account, complete your profile, showcase your skills, and start bidding on projects that match your expertise.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed zx-faq-btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive">
                                                What learning materials are included in this course?
                                            </button>
                                        </h2>
                                        <div id="collapseFive"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#zxFaq">
                                            <div className="accordion-body">
                                                Sign up for a free account, complete your profile, showcase your skills, and start bidding on projects that match your expertise.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSecond;
