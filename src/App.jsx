import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Routing from "./Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import PageLoader from "./components/PageLoader/PageLoader";

import "./App.css";

function App() {

  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    let registration;

    if ("serviceWorker" in navigator) {
      const onLoad = () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((reg) => {
            registration = reg;
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      };

      window.addEventListener("load", onLoad);

      return () => {
        // Cleanup function: Remove event listener and unregister service worker
        window.removeEventListener("load", onLoad);
        if (registration) {
          registration.unregister().then(() => {
            console.log("Service Worker unregistered:", registration);
          });
        }
      };
    }
  }, []);

  return (
    // <BrowserRouter>
    //   {isLoading ? <PageLoader /> : (
    //     <>
    //       <div className="pg__Wrap">
    //         <Header />
    //         <Routes>
    //           <Route path="/" element={<Routing />}>
    //             <Route index element={<Home />} />
    //             <Route path="home" element={<Home />} />
    //             <Route path="features" element={<Features />} />
    //             {/* <Route path="post/:topic" element={<PostDetails />} /> */}
    //             {/* <Route path="profile" element={<Profile />} /> */}
    //           </Route>
    //         </Routes>
    //         <Footer />
    //       </div>
    //     </>
    //   )
    //   }

    // </BrowserRouter>
    <BrowserRouter>
      <div className="pg__Wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Routing />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="features" element={<Features />} />
            {/* <Route path="post/:topic" element={<PostDetails />} /> */}
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;