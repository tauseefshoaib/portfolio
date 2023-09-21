import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          " Software Developer.",
          " React Native Developer.",
          " React JS Developer.",
          " Freelancer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
