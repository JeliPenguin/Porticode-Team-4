import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className=" h-40 bg-white">
          <button className=" border-black bg-black text-white m-2 rounded-full h-30 w-20">Feeling Lucky</button>
          <button className="border-black border-solid border-4 bg-white text-black m-2 rounded-full h-30 w-20">Timetable</button>
          <button className="right-0">Sign Out</button>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}

          </div>
        </div>
      </div>
    </>
  );
}
