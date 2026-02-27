import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { BiSolidBadgeCheck } from 'react-icons/bi';

const CourseCard = ({ course, variant = 'default' }) => {
    const cardClass = 'udemy-cards';
    const pictureClass = 'udemy-picture';
    const contentClass = 'udemy-content';

    // Check if this is for continue learning (grid) - horizontal layout
    const isContinueLearning = variant === 'continue-learning';

    return (
        <NavLink to={`/course/${course._id}`} className="text-decoration-none">
            <div className={cardClass} style={{
                display: 'flex',
                flexDirection: isContinueLearning ? 'row' : 'column',
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                alignItems: isContinueLearning ? 'center' : 'stretch'
            }}>
                <div className={pictureClass} style={{
                    height: isContinueLearning ? '150px' : '200px',
                    width: isContinueLearning ? '200px' : '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                    alignSelf: isContinueLearning ? 'center' : 'stretch'
                }}>
                    <img 
                        src={course.thumbnail || course.courseImage || "/course_01.png"} 
                        alt={course.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <div className="udemy-category-box" style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        display: 'flex',
                        gap: '5px'
                    }}>
                        <span className="udemy-seller" style={{
                            background: '#ff6b6b',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}> Best Seller </span>
                        <span className="udemy-offer" style={{
                            background: '#4ecdc4',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}> 20% OFF </span>
                    </div>
                </div>
                <div className={contentClass} style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: isContinueLearning ? '15px' : '20px',
                    minWidth: '0'  // Prevent content overflow
                }}>
                    <div className='udemy-course-list' style={{
                        flex: '1'
                    }}>
                        <div className='udemy-course-top'>
                            <h4 style={{
                                fontSize: isContinueLearning ? '16px' : '18px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                lineHeight: '1.3',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: isContinueLearning ? 2 : 3,
                                WebkitBoxOrient: 'vertical'
                            }}>{course.title}</h4>
                            <span style={{ 
                                display: 'block',
                                marginBottom: '8px',
                                fontSize: '12px',
                                color: '#666'
                            }}> 
                                <FontAwesomeIcon icon={faUser} className="udemy-course-icon" style={{
                                    marginRight: '5px',
                                    color: '#007bff'
                                }} /> 
                                <span className="udemy-user">
                                    {course.instructor?.username || 'Instructor'}
                                </span>  
                            </span>
                            <p style={{
                                fontSize: isContinueLearning ? '12px' : '14px',
                                color: '#666',
                                lineHeight: '1.5',
                                marginBottom: '12px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: isContinueLearning ? 2 : 3,
                                WebkitBoxOrient: 'vertical'
                            }}>
                                {course.description 
                                    ? course.description.substring(0, isContinueLearning ? 60 : 100) + '...' 
                                    : 'Course description not available'
                                }
                            </p>
                        </div>

                        {variant !== 'simple' && (
                            <div className='udemy-course-bottom' style={{
                                marginTop: 'auto'
                            }}>
                                <div className='udemy-certificate-content' style={{
                                    marginBottom: '12px'
                                }}>
                                    <h6 style={{
                                        fontSize: '13px',
                                        color: '#28a745',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}> <span style={{fontSize: '16px'}}><BiSolidBadgeCheck /> </span> Certificate Guarantee</h6>
                                </div>

                                <ul className="rating-list" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    listStyle: 'none',
                                    padding: '0',
                                    marginBottom: '12px'
                                }}>
                                    <li style={{ color: '#ffc107' }}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li style={{ color: '#ffc107' }}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li style={{ color: '#ffc107' }}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li style={{ color: '#ffc107' }}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li style={{ color: '#ffc107' }}>
                                        <FontAwesomeIcon icon={faStarHalf} />
                                    </li>
                                </ul>

                                <div className='udemy-course-price' style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <span style={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: '#007bff'
                                    }}>₹{course.price || '999'}</span>
                                    <span style={{
                                        fontSize: '16px',
                                        color: '#999',
                                        textDecoration: 'line-through'
                                    }}>₹{course.originalPrice || '1999'}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default CourseCard;
