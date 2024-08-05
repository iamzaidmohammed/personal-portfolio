const Skills = () => {
  return (
    <section className="mt-10 w-full border-b-2">
      <h2 className="w-fit mx-auto text-6xl border-b-2 border-b-NeonGreen mb-10">
        Skills
      </h2>
      <div className="w-full text-center text-2xl md:text-3xl lg:text-5xl flex flex-col ">
        <div className="md:w-full xs:flex items-center justify-around md:mb-10">
          <p className="md:basis-1/2 mb-5 md:mb-0">HTML</p>
          <p className="md:basis-1/2 mb-5 md:mb-0">CSS</p>
        </div>
        <div className="md:w-full xs:flex items-center justify-around md:mb-10">
          <p className="mb-5 md:basis-1/2 md:mb-0">TAILWIND</p>
          <p className="mb-5 md:basis-1/2 md:mb-0">JAVASCRIPT</p>
        </div>
        <div className="md:w-full xs:flex items-center justify-around md:mb-10">
          <p className="mb-5 md:basis-1/2 md:mb-0">REACT</p>
          <p className="mb-5 md:basis-1/2 md:mb-0">PHP</p>
        </div>
        <div className="md:w-full xs:flex items-center justify-around md:mb-10">
          <p className="mb-5 md:basis-1/2 md:mb-0">MYSQL</p>
          <p className="mb-5 md:basis-1/2 md:mb-0"></p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
