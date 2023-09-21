import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Type from "./children/Type";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-3xl">
          Hi There! <span className="animate-wave">👋🏻</span>
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] my-3">
          I am Tauseef Shoaib
        </h1>
        {/* <div className="flex flex-row my-3"> */}
        <h2 className="text-3xl sm:text-5xl font-bold text-[#FAF9F6] mr-4">
          <Type />
        </h2>
        {/* <h2 className="text-3xl sm:text-5xl font-bold text-[#FAF9F6]"> */}

        {/* </h2> */}
        {/* </div> */}

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a react developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive mobile and web applications.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Know More About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
