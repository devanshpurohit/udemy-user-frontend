import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faStar, faClock, faUsers, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      console.log('🔍 Fetching courses from: http://localhost:5002/api/public/courses');
      const response = await fetch('http://localhost:5002/api/public/courses');
      console.log('🔍 Response status:', response.status);
      const data = await response.json();
      console.log('🔍 Response data:', data);
      
      if (data.success) {
        setCourses(data.data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to fetch courses');
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={fetchCourses}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="mb-3">All Courses</h2>
          <p className="text-muted">Discover our wide range of courses and start learning today!</p>
        </div>
      </div>

      <div className="row">
        {courses.length === 0 ? (
          <div className="col-12">
            <div className="text-center py-5">
              <h3>No Courses Available</h3>
              <p className="text-muted">Check back later for new courses.</p>
            </div>
          </div>
        ) : (
          courses.map(course => (
            <div key={course._id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 course-card">
                {/* Course Image */}
                <div className="position-relative">
                  {course.thumbnail || course.courseImage ? (
                    <img 
                      src={course.thumbnail || course.courseImage} 
                      className="card-img-top" 
                      alt={course.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div 
                      className="card-img-top d-flex align-items-center justify-content-center bg-light"
                      style={{ height: '200px' }}
                    >
                      <FontAwesomeIcon icon={faStar} size="3x" className="text-muted" />
                    </div>
                  )}
                  
                  {/* Course Level Badge */}
                  <span className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary">
                      {course.level || 'beginner'}
                    </span>
                  </span>
                </div>

                <div className="card-body d-flex flex-column">
                  {/* Course Title */}
                  <h5 className="card-title">{course.title}</h5>
                  
                  {/* Course Description */}
                  <p className="card-text text-muted flex-grow-1">
                    {course.description ? 
                      course.description.substring(0, 100) + '...' : 
                      'No description available'
                    }
                  </p>

                  {/* Course Meta */}
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faUsers} className="text-muted me-2" />
                      <small className="text-muted">
                        {course.totalEnrollments || 0} students enrolled
                      </small>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faClock} className="text-muted me-2" />
                      <small className="text-muted">
                        {course.duration || 1} months
                      </small>
                    </div>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
                      <small className="text-muted">
                        {course.averageRating || 0} ({course.ratings?.length || 0} reviews)
                      </small>
                    </div>
                  </div>

                  {/* Course Footer */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-0 text-primary">
                        <FontAwesomeIcon icon={faRupeeSign} />
                        {course.discountedPrice || course.price}
                      </h5>
                      {course.discountedPrice && course.discountedPrice < course.price && (
                        <small className="text-muted text-decoration-line-through">
                          <FontAwesomeIcon icon={faRupeeSign} />
                          {course.price}
                        </small>
                      )}
                    </div>
                    <Link 
                      to={`/course/${course._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Course
                    </Link>
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="card-footer bg-light">
                  <div className="d-flex align-items-center">
                    <small className="text-muted">
                      Instructor: {course.instructor?.username || 'Unknown'}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CoursesList;
