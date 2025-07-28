import React from "react";
import Project from "./Project.jsx";
import t3 from "../../public/images/t3.jpg";
import projects from "../../public/images/projects.svg";
import blog from "../../public/images/blog.jpg";
import poll from "../../public/images/poll.jpg";

function Projects() {
  return (
    <section>
      {/* Desktop */}
      <div className="hidden md:flex flex-col mt-20 pl-20">
        <img src={projects} width={150} />
      </div>
      <div className="py-5 px-20 hidden md:flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 grid-flow-row gap-x-20 gap-y-20">
          <div className="max-w-fit">
            <Project
              tags={["React", "Vite", "TailwindCSS"]}
              title={"Tic-Tac-Toe"}
              description={`A small tic-tac-toe game with game's history as a game progresses.This feature allows players to review and see previous versions of a game's board.`}
              website={"https://tic-tac-toe-indol-one.vercel.app"}
              image={t3}
              alt={"Tic Tac Toe game snap"}
            />
          </div>
          <div className="max-w-fit">
            <Project
              tags={[
                "React.js",
                "TailwindCSS",
                "Express.js",
                "MongoDB Atlas",
                "Cors",
                "Image Kit",
              ]}
              title={"Blog"}
              description={`A personal admin side blog website where user can add, publish, categorize and delete blogs. User can also comment on blogs.`}
              website={"https://blog-client-weld.vercel.app"}
              image={blog}
              alt={"Blog website snap"}
            />
          </div>
          <div className="max-w-fit">
            <Project
              tags={[
                "Create React App",
                "Axios",
                "Cloudinary",
                "Cors",
                "MongoDB Atlas",
                "Express.js",
              ]}
              title={"Polling System"}
              description={`Real-time polling system where users can create polls, vote on them, and view results. The system supports multiple options per poll and real-time updates.`}
              website={"https://polling-system-client-one.vercel.app/"}
              image={poll}
              alt={"Polling System website snap"}
            />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col mt-20 pl-10">
        <img src={projects} width={150} />
      </div>
      <div className="p-5 md:hidden flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 grid-flow-row gap-x-4 gap-y-20">
          <div className="max-w-fit">
            <Project
              tags={["React", "Vite", "TailwindCSS"]}
              title={"Tic-Tac-Toe"}
              description={`A small tic-tac-toe game with game's history as a game progresses.This feature allows players to review and see previous versions of a game's board.`}
              website={"https://tic-tac-toe-indol-one.vercel.app"}
              image={t3}
              alt={"Tic Tac Toe game snap"}
            />
          </div>
          <div className="max-w-fit">
            <Project
              tags={[
                "React.js",
                "TailwindCSS",
                "Express.js",
                "MongoDB Atlas",
                "Cors",
                "Image Kit",
              ]}
              title={"Blog"}
              description={`A personal admin side blog website where user can add, publish, categorize and delete blogs. User can also comment on blogs.`}
              website={"https://blog-client-weld.vercel.app"}
              image={blog}
              alt={"Blog website snap"}
            />
          </div>
          <div className="max-w-fit">
            <Project
              tags={[
                "Create React App",
                "Axios",
                "Cloudinary",
                "Cors",
                "MongoDB Atlas",
                "Express.js",
              ]}
              title={"Polling System"}
              description={`Real-time polling system where users can create polls, vote on them, and view results. The system supports multiple options per poll and real-time updates.`}
              website={"https://polling-system-client-one.vercel.app"}
              image={poll}
              alt={"Polling System website snap"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
