// import React from 'react'
// import BlurBackground from './components/BlurBackground'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Projects from './components/Projects'
// import About from './components/About'
// import Contact from './components/Contact'
// import Education from './components/Education'

// function App() {
//   return (
//    <>
//       <BlurBackground/>
//       <Navbar/>
//       <main className='antialiased overflow-x-hidden max-w-7xl mx-auto
//       relative z-10'>
//         {/* <Navbar/> */}
//         <Hero/>
//         <Projects/>
//         {/* <Project/> */}
//         <About/>
//         <Education/>
//         {/* <Experience/> */}
//         {/* <Testimonial/> */}
//         <Contact/>
//       </main>
//    </>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BlurBackground />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
            <Hero />
            <Projects />
            <About />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;
