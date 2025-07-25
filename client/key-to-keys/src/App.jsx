import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify"; //toastify
import "react-toastify/dist/ReactToastify.css"; //
import Home from './components/Home.jsx'
import CoursePage from "./components/pages/getcourses/CoursePage.jsx";
import ThankYou from "./components/pages/getcourses/ThankYou.jsx";
import MyCourse from "./components/pages/accessCourse/myCourse";





function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/thank-you" element={<ThankYou/>} />
        <Route path="/my-course" element={<MyCourse />} />

      </Routes>
      <ToastContainer />
  </>
  );
}
export default App