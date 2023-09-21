import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Type from "./children/Type";
import { useNav } from "./context/context";

const Home = () => {
  const { nav } = useNav();

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-3xl">Hi There!</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200 my-3">
          I am Tauseef Shoaib
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600 mr-4">
          {nav ? null : <Type />}
        </h2>

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
