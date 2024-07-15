import "../src/assets/css/animate.css";
import "../src/assets/css/main.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/custom-animation.css";
import "../src/assets/css/flaticon_xoft.css";
import "../src/assets/css/font-awesome-pro.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/meanmenu.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/slick.css";
import "../src/assets/css/spacing.css";
import "../src/assets/css/swiper-bundle.css";
import Header from "../src/components/Header/Header";
import Body from "../src/components/Body/Body";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/NavPage/AboutPage";
import ContactPage from "./components/NavPage/ContactPage";
import Blog1 from "./components/NavPage/Blog/Blog1";
import Blog2 from "./components/NavPage/Blog/Blog2";
import BlogSideBar from "./components/NavPage/Blog/BlogSideBar";
import BlogDetails from "./components/NavPage/Blog/BlogDetails";
import Course1 from "./components/NavPage/Pages/Course1/Course1";
import Teacher from "./components/NavPage/Pages/Course1/Teacher";
import Checkout from "./components/NavPage/Pages/Course1/Checkout";
import Event from "./components/NavPage/Pages/Course1/Event";
import StudentReg1 from "./components/NavPage/Pages/Course1/StudentReg1";
import SignIn from "./components/NavPage/Pages/Course1/SignIN";
import Course2 from "./components/NavPage/Pages/Course2/Course2";
import TeacherDetails from "./components/NavPage/Pages/Course2/TeacherDetails";
import EventDetail from "./components/NavPage/Pages/Course2/EventDetail";
import SignUp from "./components/NavPage/Pages/Course2/SignUp";
import StudentReg2 from "./components/NavPage/Pages/Course2/StudentReg2";
import Testimonial from "./components/NavPage/Pages/Course2/Testimonial";
import CourseDetails from "./components/NavPage/Pages/CourseDetails/CourseDetails";
import Price from "./components/NavPage/Pages/CourseDetails/Price";
import Faq from "./components/NavPage/Pages/CourseDetails/Faq";
import Error from "./components/NavPage/Pages/CourseDetails/Error";
import Cart from "./components/NavPage/Pages/CourseDetails/Cart";
import InstructorReg from "./components/NavPage/Pages/CourseDetails/InstructorReg";
import Service1 from "./components/NavPage/Services/Service1";
import Service2 from "./components/NavPage/Services/Service2";
import Service3 from "./components/NavPage/Services/Service3";
import ServiceDetails from "./components/NavPage/Services/ServiceDetails";
import HomePage1 from "./components/NavPage/Home/HomePage1";
import HomePage2 from "./components/NavPage/Home/HomePage2";
import HomePage3 from "./components/NavPage/Home/HomePage3";
import HomePage4 from "./components/NavPage/Home/HomePage4";
import HomePage5 from "./components/NavPage/Home/HomePage5";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog1" element={<Blog1 />}></Route>
          <Route path="/blog2" element={<Blog2 />}></Route>
          <Route path="/blogsidebar" element={<BlogSideBar />}></Route>
          <Route path="/blogdetails" element={<BlogDetails />}></Route>
          <Route path="/course1" element={<Course1 />}></Route>
          <Route path="/course2" element={<Course2 />}></Route>
          <Route path="/coursedetails" element={<CourseDetails />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/teacherdetails" element={<TeacherDetails />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/eventdetails" element={<EventDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/testimonial" element={<Testimonial />}></Route>
          <Route
            path="/instructorRegistration"
            element={<InstructorReg />}
          ></Route>
          <Route
            path="/studentRegistration01"
            element={<StudentReg1 />}
          ></Route>
          <Route
            path="/studentRegistration02"
            element={<StudentReg2 />}
          ></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="service1" element={<Service1 />}></Route>
          <Route path="service2" element={<Service2 />}></Route>
          <Route path="service3" element={<Service3 />}></Route>
          <Route path="servicedetails" element={<ServiceDetails />}></Route>
          <Route path="/home1" element={<HomePage1 />}></Route>
          <Route path="/home2" element={<HomePage2 />}></Route>
          <Route path="/home3" element={<HomePage3 />}></Route>
          <Route path="/home4" element={<HomePage4 />}></Route>
          <Route path="/home5" element={<HomePage5 />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
