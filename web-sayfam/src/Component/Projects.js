import { ToggleContext } from "./Context";
import NewProjects from "./Projects/NewProjects";
import * as React from "react";
function Projects() {
  const { language } = React.useContext(ToggleContext);
  return (
    <section className="bg-[#FFFFFF] dark:bg-[#12121249] font-['Inter']  md:pt-[3.2rem] xl:pt-[5.2rem]">
      <h1 className="font-[500] font-['Inter']  text-[2.4rem] m-0 py-[2rem] xl:text-[36px] tracking-[.01em] leading-[44px]">
        {language === "en" ? "Projects" : "Projeler"}
      </h1>
      <div className="">
        <NewProjects />
      </div>
    </section>
  );
}

export default Projects;
