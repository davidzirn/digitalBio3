import React from "react";
import classes from "./Main.module.css";
const GeneralInfo = () => {
  return (
    <div
      style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 20% 100%)" }}
      className="h-[100vh] w-[100%] pt-[50px] relative bg-black"
    >
      <div className="flex  text-white">
        <div className="w-[20vw] "></div>
        <div className="flex-1">
          <h3 className="text-[50px] ">Lorem Ipsum</h3>
          <p>
            Veniam magna et irure esse fugiat sit quis laboris cillum cupidatat
            exercitation. Anim ipsum fugiat commodo veniam nulla sit. Id non
            eiusmod adipisicing laborum duis adipisicing. Fugiat ut ullamco sunt
            aliqua ea consectetur duis aliquip.
          </p>
        </div>
        <div className="w-[40vw] "></div>
      </div>
      <div className="flex  mt-[5vw] text-white">
        <div className="w-[30vw] "></div>
        <div className="flex-1">
          <h3 className="text-[50px] ">Lorem Ipsum</h3>
          <p>
            Veniam magna et irure esse fugiat sit quis laboris cillum cupidatat
            exercitation. Anim ipsum fugiat commodo veniam nulla sit. Id non
            eiusmod adipisicing laborum duis adipisicing. Fugiat ut ullamco sunt
            aliqua ea consectetur duis aliquip.
          </p>
        </div>
        <div className="w-[30vw] "></div>
      </div>
      <div className="flex mt-[5vw] text-white">
        <div className="w-[40vw] "></div>
        <div className="flex-1">
          <h3 className="text-[50px] ">Lorem Ipsum</h3>
          <p>
            Veniam magna et irure esse fugiat sit quis laboris cillum cupidatat
            exercitation. Anim ipsum fugiat commodo veniam nulla sit. Id non
            eiusmod adipisicing laborum duis adipisicing. Fugiat ut ullamco sunt
            aliqua ea consectetur duis aliquip.
          </p>
        </div>
        <div className="w-[20vw] "></div>
      </div>
    </div>
  );
};

export default GeneralInfo;
