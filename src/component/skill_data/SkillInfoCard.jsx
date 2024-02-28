import React from "react";

const SkillInfoCard = ({ heading, skills }) => {
  return (
    <div className="border-2 border-[#6751b9] ">
      <div className="px-5 py-2 border-b-2 border-b-[#382e68] text-2xl text-[#6751b9] font-mono font-semibold">
        <p>{heading}</p>
      </div>

      <div>
        {skills.map((item, index) => {
          return (
            <div key={index} className="px-5">
              <div className="flex justify-between mt-5">
                <p className="text-sm font-medium">{item.skill}</p>
                <p className="text-[#bc58ff]">{item.percentage}</p>
              </div>
              <div className="w-full h-[0.5rem] bg-[#382e68] rounded-lg my-3 overflow-hidden">
                <div
                  style={{ width: item.percentage }}
                  className="w-0 h-[0.5rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg duration-300"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillInfoCard;
