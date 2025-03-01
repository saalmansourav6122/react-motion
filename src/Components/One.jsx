import React from "react";
import { motion } from "motion/react";
import { div } from "motion/react-client";

function One() {
  return (
    <div className="container">
      <div className="wrapper">
        <motion.div
          animate={{
            scale: 2,
            transition: { duration: 2 },
          }}
          className="box_one"
        ></motion.div>
      </div>
    </div>
  );
}

export default One;
