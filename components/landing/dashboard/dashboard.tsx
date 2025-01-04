"use client";

import React from "react";
import { Box } from "@mui/material";
import dashboardbg from "@/public/assets/dashboardbg.jpeg"; // Background image
import ai from "@/public/assets/ai-transparent.png";
import house from "@/public/assets/house-transparent.png"; // Center symbol image

const Dashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative", // Ensures child elements are positioned relative to this container
        overflow: "hidden", // Prevents elements from spilling out of the viewport
        paddingTop: "140px", // Account for navbar height
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          height: "100vh",
          width: "100vw", // Ensures the background spans the full width
          position: "absolute",
          top: "140px",
          left: 0,
          zIndex: 1, // Set background at the lowest z-index
          backgroundImage: url(${dashboardbg.src}),
          backgroundSize: "cover", // Ensures the full background image is visible
          backgroundPosition: "center top", // Adjusted to align with the desired layout
          backgroundRepeat: "no-repeat", // Prevents tiling of the image
        }}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Slightly adjusted to float higher
          right: 0,
          width: "150px", // Adjust size to match design
          height: "150px", // Equal width and height for a circle
          overflow: "hidden", // Ensures the image stays contained
          backgroundImage: url(${ai.src}),
          backgroundSize: "contain", // Ensure the full image is visible inside the circle
          backgroundPosition: "center",
          zIndex: 2,
        }}
      ></Box>

        {/* Center Image */}
      <Box
        sx={{
          position: "absolute",
          top: "80%", // Slightly adjusted to float higher
          left: "50%", // Horizontally center
          transform: "translate(-50%, -50%)", // Adjust for proper centering
          width: "1500px", // Adjust size to match design
          height: "1500px", // Equal width and height for a circle
          overflow: "hidden", // Ensures the image stays contained
          backgroundImage: url(${house.src}),
          backgroundSize: "contain", // Ensure the full image is visible inside the circle
          backgroundPosition: "0 150px",
          backgroundRepeat: "no-repeat",
          zIndex: 3,
        }}
      ></Box>

      <div className="w-full h-[20rem] md:w-[28rem] md:h-[24rem] absolute md:left-10 top-[calc(50%+70px)] -translate-y-1/2 z-10 rounded-xl flex flex-col gap-1 text-sm">
        <div id="group-1" className="w-full h-1/2 bg-blue-300 bg-opacity-40 p-2 text-white font-medium rounded-t-xl flex flex-col">
          <p>Group 1</p>
          <div className="grid grid-cols-3 gap-1 w-full h-full">
            <div className="w-full bg-blue-300 bg-opacity-45 rounded-md flex items-center justify-center text-xs">
              Subgroup 1
            </div>
            <div className="w-full bg-blue-300 bg-opacity-45 rounded-md flex items-center justify-center text-xs">
              Subgroup 2
            </div>
            <div className="w-full bg-blue-300 bg-opacity-45 rounded-md flex items-center justify-center text-xs">
              Subgroup 3
            </div>
          </div>
        </div>
        <div id="bottom-group" className="h-1/2 w-full flex gap-1">
          <div id="group-2" className="w-1/2 h-full bg-blue-500 bg-opacity-40 p-2 text-white font-medium flex flex-col gap-1 rounded-bl-xl">
            <p>Group 4</p>
            <div className="grid grid-cols-2 gap-1 w-full h-full">
              <div className="w-full bg-blue-500 bg-opacity-45 rounded-md flex items-center justify-center">
                Subgroup 8
              </div>
              <div className="w-full bg-blue-500 bg-opacity-45 rounded-md flex items-center justify-center">
                Subgroup 9
              </div>
            </div>
          </div>
          <div id="group-3" className="w-[30%] h-full bg-blue-200 bg-opacity-40 p-2 text-white font-medium flex flex-col gap-1">
            <p>Group 2</p>
            <div className="grid grid-rows-2 gap-1 w-full h-full">
              <div className="w-full bg-blue-200 bg-opacity-45 rounded-md flex items-center justify-center">
                Subgroup 4
              </div>
              <div className="w-full bg-blue-200 bg-opacity-45 rounded-md flex items-center justify-center">
                Subgroup 5
              </div>
            </div>
          </div>
          <div id="group-4" className="w-[20%] h-full bg-blue-400 bg-opacity-40 p-2 text-white font-medium flex flex-col gap-1 rounded-br-xl">
            <p>Group 3</p>
            <div className="grid grid-rows-2 gap-1 w-full h-full">
              <div className="w-full bg-blue-400 bg-opacity-45 rounded-md flex items-center justify-center text-xs">
                Subgroup 6
              </div>
              <div className="w-full bg-blue-400 bg-opacity-45 rounded-md flex items-center justify-center text-xs">
                Subgroup 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
