import { faStar, faStarHalf, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { useState, useEffect, useMemo } from 'react';
import CourseCard from '../Common/CourseCard';
import { NavLink } from 'react-router-dom';

function MyWishlist() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWishlistCourses = async () => {
        try {
            setLoading(true);
            console.log('🔍 MyWishlist: Fetching courses from API...');
            
            const response = await fetch('http://localhost:5002/api/public/courses');
            console.log('🔍 MyWishlist: Response status:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('🔍 MyWishlist: API Response:', data);
            
            if (data.success) {
                setCourses(data.data);
                console.log(`✅ MyWishlist: ${data.data.length} courses loaded`);
            } else {
                setError(data.message || 'Failed to load courses');
                console.error('❌ MyWishlist: API Error:', data.message);
            }
        } catch (error) {
            setError('Failed to fetch courses');
            console.error('❌ MyWishlist: Fetch Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWishlistCourses();
    }, []);

    const wishlistCourses = useMemo(() => courses, [courses]);

    return (
        <>
            <section className="main-tp-section">
                <div className="main-shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <div>
                                    <h3 className="lg_title text-center mb-2">My Wishlist</h3>
                                    <div className="admin-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb custom-breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#" className="breadcrumb-link">
                                                        Home
                                                    </a>
                                                </li>

                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    My Wishlist
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="course-section">
                <div className="container">
                    <div className="row">
                        <div className="udemy-tp-content mt-3">
                            <div>
                                <h3 className="nw-lg-title mb-2">My Wishlist</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {loading ? (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading courses...</span>
                                </div>
                                <p className="mt-3">Loading your wishlist...</p>
                            </div>
                        ) : error ? (
                            <div className="col-12 text-center py-5">
                                <div className="alert alert-danger">
                                    <h4>Error loading courses</h4>
                                    <p>{error}</p>
                                    <button className="btn btn-primary" onClick={fetchWishlistCourses}>
                                        Try Again
                                    </button>
                                </div>
                            </div>
                        ) : wishlistCourses.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <h3>No courses in wishlist</h3>
                                <p>You haven't added any courses to your wishlist yet.</p>
                            </div>
                        ) : (
                            wishlistCourses.map((course) => (
                                <div key={course._id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                    <CourseCard course={course} variant="wishlist" />
                                </div>
                            ))
                        )}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dz-pagination-wrapper">
                                <div className="dz-pagination-info">
                                    <p>Showing 1 to {wishlistCourses.length} of {wishlistCourses.length} result</p>
                                </div>

                                <nav>
                                    <ul className="pagination dz-custom-pagination mb-0">
                                        <li className="page-item">
                                            <a className="page-link dz-page-link" href="#" aria-label="Previous">
                                                <MdChevronLeft />
                                            </a>
                                        </li>

                                        <li className="page-item active">
                                            <a className="page-link dz-page-link" href="#">1</a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link dz-page-link" href="#" aria-label="Next">
                                                <MdChevronRight />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyWishlist
    