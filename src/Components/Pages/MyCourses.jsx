import { faStar, faStarHalf, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import React, { useState, useEffect, useMemo } from 'react';
import { getBackendUrl } from '../../config/backendConfig';
import CourseCard from '../Common/CourseCard';
import { NavLink } from 'react-router-dom';

function MyCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMyCourses = async () => {
        try {
            setLoading(true);
            console.log('🔍 MyCourses: Fetching courses from API...');
            
            const response = await fetch('https://udemy-latest-backend-1.onrender.com/api/public/courses');
            console.log('🔍 MyCourses: Response status:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('🔍 MyCourses: API Response:', data);
            
            if (data.success) {
                setCourses(data.data);
                console.log(`✅ MyCourses: ${data.data.length} courses loaded`);
            } else {
                setError(data.message || 'Failed to load courses');
                console.error('❌ MyCourses: API Error:', data.message);
            }
        } catch (error) {
            setError('Failed to fetch courses');
            console.error('❌ MyCourses: Fetch Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyCourses();
    }, []);

    const myCoursesList = useMemo(() => courses, [courses]);

    return (
        <>
            <section className="main-tp-section">
                <div className="main-shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <div>
                                    <h3 className="lg_title text-center mb-2">My Course</h3>
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
                                                    My Course
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
                        <div className="udemy-tp-content">
                            <div>
                                <h3 className="nw-lg-title  mb-lg-0 mb-sm-2">My Courses</h3>
                            </div>

                            <div className="udemy-dropdown-box gap-3">
                                <div className="dropdown">
                                    <a
                                        href="javascript:void(0)"
                                        className="vertical-btn dropdown-toggle"
                                        id="acticonMenu2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        All Rated
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                        aria-labelledby="acticonMenu2"
                                    >
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav">
                                                5 Star
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                4 Star
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                3 Star
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                2 Star
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                1 Star
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown">
                                    <a
                                        href="javascript:void(0)"
                                        className="vertical-btn dropdown-toggle"
                                        id="acticonMenu2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Language
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                        aria-labelledby="acticonMenu2"
                                    >
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                English
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                Tamil
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown">
                                    <a
                                        href="javascript:void(0)"
                                        className="vertical-btn dropdown-toggle"
                                        id="acticonMenu2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Sort By
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                        aria-labelledby="acticonMenu2"
                                    >
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Announcement">
                                                Popular
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Announcement">
                                                Newest
                                            </a>
                                        </li>
                                        <li className="prescription-item">
                                            <a href="#" className="prescription-nav" >
                                                Oldest
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {loading ? (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading courses...</span>
                                </div>
                                <p className="mt-3">Loading your courses...</p>
                            </div>
                        ) : error ? (
                            <div className="col-12 text-center py-5">
                                <div className="alert alert-danger">
                                    <h4>Error loading courses</h4>
                                    <p>{error}</p>
                                    <button className="btn btn-primary" onClick={fetchMyCourses}>
                                        Try Again
                                    </button>
                                </div>
                            </div>
                        ) : myCoursesList.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <h3>No courses available</h3>
                                <p>You haven't enrolled in any courses yet.</p>
                            </div>
                        ) : (
                            myCoursesList.map((course) => (
                                <div key={course._id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                    <CourseCard course={course} variant="my-courses" />
                                </div>
                            ))
                        )}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dz-pagination-wrapper">
                                <div className="dz-pagination-info">
                                    <p>Showing 1 to {myCoursesList.length} of {myCoursesList.length} result</p>
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

export default MyCourses
    