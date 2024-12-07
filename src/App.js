import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar'; 
import Hero from './components/Mainpage'; 
import Loader from './components/Loader/Loader'; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    

    const t1 = gsap.timeline();
    t1.from(".loader h3", {
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
    t1.to(".loader h3", {
      opacity: 0,
      x: -10,
      duration: 1,
      stagger: 0.1,
    });
    t1.to(".loader", {
      opacity: 0,
    });
    t1.to(".loader", {
      display: "none",
    });
    t1.from(".navbar .containers a,.navbar .containers .collapse .navbar-nav li a", {
      y: -40,
      duration: 0.1,
      opacity: 0,
      stagger: 0.1,
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
        // scroller: "body",
      },
    });

    t2.from(".mainDiv .section2 .section21", {
      x: -80,
      duration: 0.5,
      // delay: 0.5,
      opacity: 0,
      stagger: 0.5,
    });

    document.querySelectorAll(".section31").forEach((section, index) => {
      gsap.from(section, {
        x: index % 2 === 0 ? -220 : 220,
        opacity: 0,
        duration: 2,
      delay: 0.9,
      stagger: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 50%",
          scrub: 2,
          scroller: "body",
        },
      });
    });

    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top 80%",
        end: "top 0%",
        scrub: 2,
        scroller: "body",
        // markers: true, // Enable markers for debugging
      },
    });

    t4.from(".section5 .accordion .accordion-item", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      // delay: 0.5,
      stagger: 0.2,
    });
  },[]);

  return (
    <div>
      <Loader />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
