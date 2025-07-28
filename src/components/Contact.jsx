function Contact() {
  return (
    <section style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <div>
        <h1 className="font-extrabold text-5xl font-serif text-end">
          Contact Me
        </h1>
        <h2 className="uppercase font-sans tracking-tighter text-end text-xl">
          Let&rsquo;s get in touch!
        </h2>
      </div>
      <div className="text-end">
        <br />
        <br />
        <a
          name={"vhimanshu.official@gmail.com"}
          theme={"large"}
          rel="noopener noreferrer"
          href="mailto:vhimanshu.official@gmail.com?subject=Portfolio Inquiry&body=Hi Himanshu,"
          // href={"mailto:vhimanshu.official@gmail.com"}
          className="underline underline-offset-8 text-3xl italic font-serif decoration-1 hover:decoration-black hover:after:decoration-white"
        >
          vhimanshu.official@gmail.com
        </a>
        <div className="py-3 text-lg font-serif italic tracking-wider">
          <a
            name={"LinkedIn"}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/himanshuv8"}
            className="no-underline hover:underline"
          >
            LinkedIn
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            name={"Github"}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/vhimanshu-official"}
            className="no-underline hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
