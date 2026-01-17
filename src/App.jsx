// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Skills from './pages/Skills'
// import Resume from './pages/Resume'

// function App() {

//   return (
//     <>
// <Router>
//   <Routes>
//        <Route path='/' element={<Home />} />
//        <Route path='/about' element={<About />} />
//        <Route path='/contact' element={<Contact />} />
//        <Route path='/skill' element={<Skills /> }/>
//        <Route path='/resume' element={<Resume />} />
//   </Routes>
// </Router>
//     </>
//   )
// }

// export default App




// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Skills from './pages/Skills';
// import Resume from './pages/Resume';
// import Loader from './components/Loader'; // ← Yeh import zaruri hai

// function AppContent() {
//   const [loading, setLoading] = useState(false); // Start with false
//   const location = useLocation();

//   useEffect(() => {
//     // Har navigation pe loader dikhao
//     setLoading(true);

//     // Page change hone ke baad thoda delay mein hide karo
//     const hideTimer = setTimeout(() => {
//       setLoading(false);
//     }, 700); // Animation ke liye enough time

//     return () => clearTimeout(hideTimer);
//   }, [location.pathname]); // Important: pathname pe depend karo

//   // First time site open hone pe bhi loader dikhao
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Loader isLoading={loading} />

//       <Routes>
//         <Route path="/" element={<Loader />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/skill" element={<Skills />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Skills from './pages/Skills';
// import Resume from './pages/Resume';
// import Loader from './components/Loader';

// function AppContent() {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     // Loader show har page change pe
//     setLoading(true);
//     const hideTimer = setTimeout(() => setLoading(false), 700);
//     return () => clearTimeout(hideTimer);
//   }, [location.pathname]);

//   return (
//     <>
//       {loading && <Loader />}
//       {!loading && (
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/skill" element={<Skills />} />
//           <Route path="/resume" element={<Resume />} />
//         </Routes>
//       )}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Loader from './components/Loader';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // First page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Route change loader
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader isLoading={loading} />

      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

