import AboutMe from "./AboutMe";
import Contact from "./Contact";
// import Footer from "./Footer";


function Connect() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center h-screen px-20 gap-x-20 py-20">
        <div>
          <AboutMe />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col justify-between items-center h-screen px-20 gap-x-20 py-20">
        <div>
          <AboutMe />
        </div>
        <div className="py-10 mt-10">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Connect;
