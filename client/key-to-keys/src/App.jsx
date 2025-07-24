import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify"; //toastify
import "react-toastify/dist/ReactToastify.css"; //
import Home from './components/Home.jsx'
import CoursePage from "./components/pages/getcourses/CoursePage.jsx";
import ThankYou from "./components/pages/getcourses/ThankYou.jsx";


function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/thank-you" element={<ThankYou/>} />
          

      </Routes>
      <ToastContainer />
  </>
  );
}
export default App