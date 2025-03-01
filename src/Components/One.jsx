import React from "react";
import { motion } from "motion/react";
import { div } from "motion/react-client";

function One() {
  return (
    <div className="container">
      <motion.div className="header_line"></motion.div>

      <h1 className="header">Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}

export default One;
