import { faStar, faStarHalf, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaCheck, FaQuoteRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { getBackendUrl } from '../../config/backendConfig';

import { useRef, useState, useEffect, useMemo } from 'react';

// Import Components
import TopLearningSlider from '../Sliders/TopLearningSlider';
import UpcomingSlider from '../Sliders/UpcomingSlider';
import FeedbackSlider from '../Sliders/FeedbackSlider';
import CourseCard from '../Common/CourseCard';

function Home() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const splideRef1 = useRef(null);
    const splideRef3 = useRef(null);

    // Memoize course slices to prevent unnecessary recalculations
    const topLearningCourses = useMemo(() => courses, [courses]);
    const upcomingCourses = useMemo(() => courses, [courses]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            console.log('🔍 Home: Fetching courses from API...');
            
            // Test API connectivity
            const response = await fetch('https://udemy-latest-backend-1.onrender.com/api/public/courses');
            console.log('🔍 Home: Response status:', response.status);
            console.log('🔍 Home: Response ok:', response.ok);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('🔍 Home: API Response:', data);
            console.log('🔍 Home: Courses data:', data.data);
            
            if (data.success) {
                setCourses(data.data);
                console.log(`✅ Home: ${data.data.length} courses loaded`);
                console.log('🔍 Home: Course titles:', data.data.map(c => c.title));
            } else {
                setError(data.message || 'Failed to load courses');
                console.error('❌ Home: API Error:', data.message);
            }
        } catch (error) {
            setError('Failed to fetch courses');
            console.error('❌ Home: Fetch Error:', error);
            console.error('❌ Home: Full error details:', error);
            console.error('❌ Home: Error stack:', error.stack);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
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
                                <div className="d-flex gap-3">
                                    <NavLink to="/login" className='explore-btn'>Login</NavLink>
                                    <NavLink to="/register" className='explore-btn'>Register</NavLink>
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

            <section className='top-learn-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='udemy-learn-content'>
                                <h5> <span className='top-learn-title'>Top Learning</span> Courses</h5>
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
                        <div className='text-center top-more-course'>
                            <button className='nw-thm-btn'>More</button>
                        </div>
                    </div>
                </div>
            </section>

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
                                    <h5 className="zb-hover-title">HTML & CSS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-mg-6 col-sm-12 mb-3">
                            <div className="zb-hover-card">
                                <img src="/explore_03.jpg" className="img-fluid" alt="image" />
                                <div className="zb-hover-overlay">
                                    <h5 className="zb-hover-title">HTML & CSS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-mg-6 col-sm-12 mb-3">
                            <div className="zb-hover-card">
                                <img src="/explore_04.jpg" className="img-fluid" alt="image" />
                                <div className="zb-hover-overlay">
                                    <h5 className="zb-hover-title">HTML & CSS</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-center top-more-course'>
                            <button className='nw-thm-btn'>More</button>
                        </div>
                    </div>
                </div>
            </section>

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
                                            <p>Courses are designed specifically for
                                                students with age-appropriate explanations.</p>
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
                        <div className='col-lg-12'>
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

export default Home
