import React from "react";
import {easeOut, motion} from "framer-motion";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">
    <motion.img 
      animate={{y: [0,50,0]}}
      transition={{duration: 6 ,repeat:Infinity}}
      src="../../public/assets/file1.jpg"
      className="max-w-sm rounded-[45px] border-b-4 border-teal-500 border-l-4  rounded-bl-none shadow-2xl" />
      <motion.img 
      animate={{x: [80,150,80]}}
      transition={{duration: 6 ,repeat:Infinity}}
      src="../../public/assets/file2.jpg"
      className="max-w-sm rounded-[45px] border-b-4 border-teal-500 border-l-4  rounded-bl-none shadow-2xl" />
    </div>
    <div className="flex-1">
      <motion.h1 
      animate={{x: 50, color: ['#ecff33','#33ffe3']}}
      transition={{duration: 2, delay: 1, ease:easeOut, repeat: Infinity}}
      className="text-5xl font-bold">latest job for you!!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
