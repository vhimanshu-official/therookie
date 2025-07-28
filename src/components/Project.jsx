import React from "react";

function Project({ tags, title, description, website, image, alt }) {
  return (
    <div>
      <div className="hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={alt}
          // className="object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <br />
        <h2 className="text-white font-bold text-2xl uppercase tracking-tighter">
          {title}
        </h2>
        <p>
          {tags.map((tag) => {
            return (
              <span key={tag} className="text-sm italic mr-2 font-serif">
                {tag}
              </span>
            );
          })}
        </p>
        <br />
        <p className="tracking-tight text-gray-300 text-lg">{description}</p>
        <br />
        <div>
          <a href={website} alt={alt}>
            <span className="underline underline-offset-8 italic font-serif text-2xl border-0 hover:decoration-black hover:after:decoration-white">
              View project
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
