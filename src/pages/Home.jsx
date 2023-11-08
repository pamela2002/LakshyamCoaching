import React from "react";
import MainBanner from "../components/Main Banner/MainBanner";
import myVideo from '../assets/images/course-video.mp4'
import WhyGradSchool from "../components/WhyGradSchool/WhyGradSchool";
import ComingSoonSection from "../components/ComingSoonSection/ComingSoonSection";
import CoursesSection from "../components/CoursesSection/CoursesSection";
import VideoSection from "../components/VideoSection/VideoSection";
import GallerySection from "../components/GallerySection/GallerySection";
// import TestimonialSection from "../components/CourseItem/TestimonialSection/TestimonialSection";
import  Testimonials  from "../components/Testimonials/Testimonials";
import ContactSection from "../components/ContactSection/ContactSection";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
    <div>
      <MainBanner
        heading6="Lakshyam Coaching"
        heading2a="Full Schooling Solution"
        // heading2b="Coaching"
        videoSource={myVideo}
        buttonText="Discover more"
        showFeaturesSection={true} 
        className = "banner-container"
      />
      <WhyGradSchool/>
      <ComingSoonSection/>
      <CoursesSection/>
      <VideoSection/>
      <GallerySection/>
      <Testimonials/>
      <ContactSection/>
      
    </div>
    </>
  );
}

export default Home;
