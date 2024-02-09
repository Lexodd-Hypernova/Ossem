import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import TabSection from "./components/TabSection/TabSection";
import BlurSection from "./components/BlurSection/BlurSection";
import Cardcomp from "./components/ExpandCard/Cardcomp";

function App() {
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
    <>
      <Navbar />
      <Hero />
      <TabSection />
      <BlurSection />
      <Cardcomp />
    </>
  );
}

export default App;
