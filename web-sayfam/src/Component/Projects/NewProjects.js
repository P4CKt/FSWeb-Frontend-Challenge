function NewProjects() {
  const data = [
    {
      id: "01",
      name: "A Gratitude Journal",
      description:
        " A gratitude journal is a type of personal journal in which an individual cultivates a positive mindset by focusing on the good things in their life. By regularly recording and reflecting on things they are thankful for, they can experience a sense of gratitude and develop a more positive outlook. This simple yet effective method can contribute to improved mental well-being and greater overall happiness.",
      skills: ["react", "vercel", "axios", "router"],
      mlink: "https://github.com/P4CKt",
      plink: "https://fsweb-s10-challenge-lime.vercel.app/",
      pnglink: "./img/minnet-g.png",
    },
    {
      id: "02",
      name: "Watchlist",
      description:
        " Let me introduce you to a movie project that you'll love! This project is a fantastic tool that allows you to change the details of the movies you've watched, add your favorites, and easily select the next movie you want to watch. This project is perfect for any movie lover. It's ideal for keeping track of the movies you've watched, saving your favorites, and discovering new movies. Additionally, using this project can help you gain a better understanding of the film world.  Try the project now and take full control of the movies you've watched!",
      skills: ["react", "vercel", "prasa", "axios", "router"],
      mlink: "https://github.com/P4CKt/fsweb-s10g3-redux-watchlist",
      plink: "https://fsweb-s10g3-redux-watchlist-sigma.vercel.app/",
      pnglink: "./img/movie-g.png",
    },
  ];
  const colors = [
    "bg-[#E3E6A1]",
    "bg-[#DEC08F]",
    "bg-[#EAE0DA]",
    "bg-[#D2D794]",
    "bg-[#A5BBD1]",
  ];
  let arr = [...colors];
  function takeColors() {
    let item = arr[Math.floor(Math.random() * 4)];
    arr = arr.filter((items) => item !== items);
    return item;
  }
  return (
    <div className="flex-wrap flex justify-center">
      {data.map((item) => (
        <div key={item.id} className=" flex ">
          <div className="flex flex-col box-border  sm:mx-[3.2rem] w-[36rem]  sm:w-[50rem] ">
            <div className={`pl-[4rem]  rounded-[12px] ${takeColors()}`}>
              <h1 className="font-['Playfair-Display']  pt-[4.6rem] text-[2.9rem] pb-0 leading-[3.9rem] my-0 font-[700] text-left">
                {item.name}
              </h1>
              <div>
                <p
                  className={`sm:pr-[9.2rem] pr-[4rem] h-[120px] overflow-y-auto scrollbar-thumb-blue hover:overflow-y-scroll text-justify sm:text-left pt-[1.9rem] text-[20px] font-[400]`}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex-wrap pb-[3.5rem]	flex text-[1rem]  sm:text-[1.6rem] pr-[19rem] font-['Playfair-Display'] font-[700] ">
                {item.skills.map((items) => (
                  <p
                    key={items}
                    className="bg-white pt-[1rem] mx-[.45rem] mb-0 pr-[1rem] rounded-[76px] pl-[1rem] pb-[1rem] sm:p-[6px_20px_10px] "
                  >
                    {items}
                  </p>
                ))}
              </div>

              <div className="flex font-['Inter'] pb-[20rem] sm:pb-[32.6rem] font-[600] sm:text-[2rem] text-[1.6rem]">
                <a
                  href={item.mlink}
                  className=" flex-1 no-underline text-black text-left"
                >
                  View on Github
                </a>
                <a
                  href={item.plink}
                  className=" text-right no-underline text-black flex-1 pr-[3.9rem]"
                >
                  Go to app →
                </a>
              </div>
            </div>
            <div className="justify-center sm:mt-[-245px]  mt-[-180px]  mb-[50px] flex">
              <img
                alt="mockup"
                className="rounded-xl w-[36rem]  sm:w-[50rem]"
                src={item.pnglink}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewProjects;
