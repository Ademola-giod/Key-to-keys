import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import CoursePage from "./components/pages/getcourses/CoursePage.jsx";
import ThankYou from "./components/pages/getcourses/ThankYou.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/thank-you" element={<ThankYou/>} />


      </Routes>
    </BrowserRouter>
  );
}
export default App