import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen text-white  bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] overflow-x-scroll scrollbar-hide">
      {!loaded && <Loader />}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
