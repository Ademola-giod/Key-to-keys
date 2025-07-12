
import HomeSec from "./pages/Home/HomeSec.jsx";
import JourneySection from "./pages/Home/JourneySection.jsx";
import KeysApproachSection from "./pages/Home/KeyApproachSection.jsx";
import LatestBlog from "./pages/Home/LatestBlog.jsx"
import VideoSnippet from "./pages/Home/VideoSnippet.jsx";
import AboutTutor from "./pages/Home/About.jsx";
import Footer from "./pages/Home/Footer.jsx";


export default function Home() {
  return (
    <div className="scroll-smooth">
      
      <HomeSec/>
      
      <JourneySection/>
      <KeysApproachSection/>
      <VideoSnippet/>
      <LatestBlog/>
      <AboutTutor/>
      <Footer/>


    </div>
  );
}
