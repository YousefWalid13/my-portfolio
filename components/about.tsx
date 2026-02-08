export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      {/* Mobile sticky heading */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-background/70 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-heading">
          About
        </h2>
      </div>

      <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          I’m a{" "}
          <span className="text-heading font-medium">Full Stack Developer</span>{" "}
          with a strong focus on building modern, scalable web applications. I
          specialize in developing robust back-end APIs using{" "}
          <span className="text-heading font-medium">ASP.NET Core</span> and
          crafting dynamic, responsive front-end interfaces with{" "}
          <span className="text-heading font-medium">React</span>.
        </p>

        <p>
          I enjoy working in collaborative, fast-paced environments where
          writing{" "}
          <span className="text-heading font-medium">
            clean, maintainable, and efficient code
          </span>{" "}
          matters. My approach emphasizes scalable web solutions, clean
          architecture patterns, RESTful APIs, and modern development practices.
        </p>

        <p>
          I’m currently pursuing a{" "}
          <span className="text-heading font-medium">
            Bachelor of Computer Science
          </span>{" "}
          at{" "}
          <span className="text-heading font-medium">Menoufia University</span>{" "}
          <span className="text-muted-foreground">(expected 2026)</span>. I’m
          continuously learning new technologies and enjoy contributing to
          impactful projects across the full development lifecycle.
        </p>
      </div>
    </section>
  );
}
