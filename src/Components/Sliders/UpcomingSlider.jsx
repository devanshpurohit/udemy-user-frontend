import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CourseCard from '../Common/CourseCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpcomingSlider = ({ upcomingCourses = [], loading, error, onRetry, splideRef }) => {
    const goPrev = () => {
        splideRef.current?.splide.go("<");
    };

    const goNext = () => {
        splideRef.current?.splide.go(">");
    };

    return (
        <div className="zs-splide-wrapper" style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Splide
                ref={splideRef}
                options={{
                    type: "loop",
                    perPage: 4,
                    gap: "20px",
                    pagination: false,
                    arrows: false,
                    drag: true,
                    breakpoints: {
                        1400: { perPage: 4 },
                        1200: { perPage: 3 },
                        992: { perPage: 2 },
                        576: { perPage: 1 },
                    },
                    classes: {
                        slide: 'splide__slide equal-height-slide'
                    }
                }}
            >
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
                            <button className="btn btn-primary" onClick={onRetry}>
                                Try Again
                            </button>
                        </div>
                    </div>
                ) : (upcomingCourses || []).length === 0 ? (
                    <div className="text-center py-5">
                        <h3>No courses available</h3>
                        <p>Check back later for new courses.</p>
                    </div>
                ) : (
                    (upcomingCourses || []).map((course) => (
                        <SplideSlide key={course._id}>
                            <CourseCard course={course} />
                        </SplideSlide>
                    ))
                )}
            </Splide>

            {/* 👇 Arrows yaha hone chahiye */}
            <div className="zs-bottom-arrows" style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0 20px',
                marginTop: '20px'
            }}>
                <button className="zs-arrow-btn" style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '16px'
                }} onClick={goPrev}>
                    <FaArrowLeft />
                </button>
                <button className="zs-arrow-btn" style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '16px'
                }} onClick={goNext}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default UpcomingSlider;
