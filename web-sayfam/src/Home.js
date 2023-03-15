import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import Profile from "./Component/Profile";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import Theme from "./Component/Theme";
import { useEffect, useState } from "react";
import { ToggleContext } from "./Component/Context";

function Home() {
  const tMemory = Boolean(
    window.localStorage.getItem("theme") === "true" ? 1 : 0
  );
  const [toggle, setToggle] = useState(!tMemory);

  function handleClick() {
    setToggle(!toggle);
    window.localStorage.setItem("theme", toggle);
  }
  useEffect(() => {
    toggle
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [toggle]);

  return (
    <div className="">
      <ToggleContext.Provider value={{ handleClick, toggle }}>
        <Theme />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ToggleContext.Provider>
    </div>
  );
}

export default Home;
