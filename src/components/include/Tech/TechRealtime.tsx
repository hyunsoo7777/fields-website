import React from "react";
import { Mobile, PC } from "../../../utils/MediaQuery";

import TechIpad from "./TechIpad";
import TechImac from "./TechImac";

function TechRealtime() {
  return (
    <div>
      <PC>
        <div className=" w-fit h-fit flex place-items-center justify-center">
          <TechIpad></TechIpad>
          <TechImac></TechImac>
        </div>
      </PC>
      <Mobile>
        <div className="w-[403px] flex flex-col items-center">
          <TechIpad></TechIpad>
          <TechImac></TechImac>
        </div>
      </Mobile>
    </div>
  );
}

export default TechRealtime;
