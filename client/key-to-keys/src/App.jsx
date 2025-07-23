import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import CoursePage from "./components/pages/getcourses/CoursePage.jsx";
import VerifyRedirect from "./components/pages/getcourses/VerifyRedirect.jsx";
import ThankYou from "./components/pages/getcourses/ThankYou.jsx";


function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/verify-redirect" element={<VerifyRedirect/>} />
        <Route path="/thank-you" element={<ThankYou/>} />


      </Routes>

  );
}
export default App