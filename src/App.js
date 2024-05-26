import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import scorpioIcon from "./images/scorpio.png";
import plantIcon from "./images/plant.png";
import ourpic from "./images/ourpic.jpeg";

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-300 px-4 py-8">
      <div className="relative flex flex-col items-center">
        <motion.button
          className="mb-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onClick={handleClick}
        >
          Click Here
        </motion.button>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-purple-700 cursor-pointer text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onClick={handleClick}
        >
          Happy Mother's Day, Ines!
        </motion.h1>
        <motion.img
          src={scorpioIcon}
          alt="Scorpio"
          className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <motion.div
        className="mt-10"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img
          src={ourpic}
          alt="Flower"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 object-cover"
        />
      </motion.div>
      <div className="flex mt-10 space-x-4">
        <motion.img
          src={plantIcon}
          alt="Plant"
          className="w-12 h-12 md:w-16 md:h-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.img
          src={plantIcon}
          alt="Plant"
          className="w-12 h-12 md:w-16 md:h-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.img
          src={plantIcon}
          alt="Plant"
          className="w-12 h-12 md:w-16 md:h-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>
      <motion.p
        className="mt-10 text-lg md:text-2xl text-purple-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        Thank you for all the love and care.
      </motion.p>
      {showMessage && (
        <motion.div
          className="mt-10 p-4 bg-purple-200 text-purple-900 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-2xl text-center">
            From Shahine to the best mom ever!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default App;
