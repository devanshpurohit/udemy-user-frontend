import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from './Layouts/AppLayout';
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import AppLayout from "./Layouts/AppLayout";
import Home from "./Pages/Home";
import CourseDetails from "./Pages/CourseDetails";
import BuyCourse from "./Pages/BuyCourse";
import MyAccount from "./Pages/MyAccount";
import AddCart from "./Pages/AddCart";
import MyCourses from "./Pages/MyCourses";
import MyWishlist from "./Pages/MyWishlist";
import CourseDetailsView from "./Pages/CourseDetailsView";
import CourseDetailsContent from "./Pages/CourseDetailsContent";
import MyDashboard from "./Pages/MyDashboard";
import Quiz from "./Pages/Quiz";
import QuizPreview from "./Pages/QuizPreview";
import HomeSecond from "./Pages/HomeSecond";
import VideoPlayer from "./Pages/VideoPlayer";
import HeaderSecond from "./Layouts/HeaderSecond";
import CourseDetailsContentSecond from "./Pages/CourseDetailsContentSecond";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CourseList from "./CourseList";
import TestLogin from "./Pages/TestLogin";
import CoursesList from "./Pages/CoursesList";
import HomeRoute from "./Pages/HomeRoute";
import ProtectedRoute from "./Pages/ProtectedRoute";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <div>Something went wrong. Please refresh the page.</div>,

            children: [
                // {
                //     index: true,
                //     element: <Home />,
                // },
                // {
                //     path: "/",
                //     element: <Home />,
                // },

                {
                    path: "/test-login",
                    element: <TestLogin />,
                },

                {
                    path: "/courses",
                    element: <CourseList />,
                },

                {
                    path: "/all-courses",
                    element: <CoursesList />,
                },

                {
                    index: true,
                    element: <HomeRoute />,
                },

                {
                    path: "/",
                    element: <HomeRoute />,
                },


                {
                    path: "/course-details",
                    element: <CourseDetails />,
                },

                {
                    path: "/buy-course",
                    element: <BuyCourse />,
                },

                {
                    path: "/my-account",
                    element: <ProtectedRoute><MyAccount /></ProtectedRoute>,
                },

                {
                    path: "/add-cart",
                    element: <ProtectedRoute><AddCart /></ProtectedRoute>,
                },
                {
                    path: "/my-course",
                    element: <ProtectedRoute><MyCourses /></ProtectedRoute>,
                },

                {
                    path: "/my-wishlist",
                    element: <ProtectedRoute><MyWishlist /></ProtectedRoute>,
                },

                {
                    path: "/course-details-view",
                    element: <CourseDetailsView />,
                },

                {
                    path: "/course-details-content",
                    element: <CourseDetailsContent />,
                },

                {
                    path: "/course-details-content-second",
                    element: <CourseDetailsContentSecond />,
                },

                {
                    path: "/my-dashboard",
                    element: <ProtectedRoute><MyDashboard /></ProtectedRoute>,
                },

                {
                    path: "/quiz",
                    element: <ProtectedRoute><Quiz /></ProtectedRoute>,
                },

                {
                    path: "/quiz-preview",
                    element: <ProtectedRoute><QuizPreview /></ProtectedRoute>,
                },
                {
                    path: "/home-second",
                    element: <HomeSecond />,
                },

                {
                    path: "/video-player",
                    element: <VideoPlayer />,
                },

                {
                    path: "/header-second",
                    element: <HeaderSecond />,
                },

                {
                    path: "/login",
                    element: <Login />,
                },

                {
                    path: "/register",
                    element: <Register />,
                },





            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Router;
