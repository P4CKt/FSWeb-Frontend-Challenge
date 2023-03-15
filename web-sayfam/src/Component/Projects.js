import React from "react";
import NewProjects from "./Projects/NewProjects";
function Projects() {
  return (
    <section className="bg-[#FFFFFF] dark:bg-[#12121249] font-['Inter']  md:pt-[3.2rem] xl:pt-[5.2rem]">
      <h1 className="font-[500] font-['Inter']  text-[2.4rem] m-0 py-[2rem] xl:text-[36px] tracking-[.01em] leading-[44px]">
        Projects
      </h1>
      <div className="">
        <NewProjects />
      </div>
    </section>
  );
}

export default Projects;
