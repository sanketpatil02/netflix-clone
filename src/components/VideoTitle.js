import { original } from "@reduxjs/toolkit";
import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-white text-3xl font-bold">{title}</h1>
      <p className="py-4 w-1/4 text-white">{overview}</p>
      <div className="">
        <button className=" bg-white text-black text-lg p-2 px-6 border-solid border-black rounded-md hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="mx-2 bg-gray-300 text-white text-lg p-2 px-6 border-solid border-black bg-opacity-25 rounded-md">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
