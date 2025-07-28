import { Link } from "react-router-dom";
import Footer from "./Footer";

function Intro() {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center h-screen">
        <section style={{ fontFamily: "Fira Sans" }} className="p-10">
          <div className="items-center">
            <h2 className="text-2xl font-thin uppercase flex">
              <h1 className="animate-bounce bg-gradient-to-r from-slate-400 via-white to-[#5044e5] text-transparent bg-clip-text inline-block">
                Hello
              </h1>
              , I&rsquo;m
            </h2>
            <h1 className="font-bold text-8xl">Himanshu</h1>
            <h2 className="text-2xl font-thin uppercase text-end">
              <span className="bg-gradient-to-r from-indigo-400 via-white to-red-600 text-transparent bg-clip-text inline-block">
                a mern-stack developer
              </span>
            </h2>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="uppercase tracking-widest">
            <p>
              I&rsquo;m a rookie full stack developer and coder from india.
              <br />
            </p>
            <p className="text-center">
              you can check out my{" "}
              <a
                href="https://github.com/vhimanshu-official?tab=repositories"
                name={"github"}
                target="_blank"
                rel="noopener noreferrer"
                label={"Click here to view my github profile"}
                className="no-underline hover:underline italic animate-pulse"
              >
                github
              </a>{" "}
              or browse my{" "}
              <Link
                to="/projects"
                className="no-underline hover:underline italic animate-pulse"
              >
                projects
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
