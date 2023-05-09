import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "A full Stack Developer",
            "A Coder",
            "Code in java",
            "Enthsistic",
            "Motivated",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};

export default Type;
