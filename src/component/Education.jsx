import React from "react";

const Education = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">
          EDUCATION
        </h2>
        <hr className="my-2 border-[#a993fe] w-3/12" />
        <p className="font-serif text-xs sm:text-sm">
          Here are some Education Information I've done.
        </p>
      </div>
      <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-10 xl:mt-16 gap-8">
        <div className="rounded-md bg-gradient-to-r flex flex-wrap justify-between items-center from-violet-500 to-fuchsia-500 px-4">
          <div>
            <h3 className="text-xl font-serif">Diploma in Engineering</h3>
            <h4 className="text-lg font-serif my-2 text-[#beaffa]">
              Bogra Ploytechnic Institute, Bogra
            </h4>
            <p className="text-lg font-serif">
              Group:{" "}
              <span className="text-sm">Computer Science & Engineering</span>
            </p>
            <p className="mt-2 text-[#daceff]">CGPA: 3.35 out of 4.00</p>
          </div>
          <figure>
            <img
              src="https://www.pngall.com/wp-content/uploads/2016/04/Education-Free-Download-PNG.png"
              alt="educationImage"
              className="h-[6rem]"
            />
            <figcaption className="text-center">2022</figcaption>
          </figure>
        </div>
        <div className="rounded-md flex flex-wrap justify-between items-center bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-3">
          <div>
            <h3 className="text-xl font-serif">
              Secondary School Certificate (SSC)
            </h3>
            <h4 className="text-lg font-serif my-2 text-[#beaffa]">
              Meghai E.U.I Multilateral High School, Sirajganj
            </h4>
            <p className="text-lg font-serif">
              Group: <span className="text-sm">Vocational</span>
            </p>
            <p className="mt-2 text-[#daceff]">GPA: 4.79 out of 5.00</p>
          </div>
          <figure>
            <img
              src="https://www.pngall.com/wp-content/uploads/2016/04/Education-Free-Download-PNG.png"
              alt="educationImage"
              className="h-[6rem]"
            />
            <figcaption className="text-center">2017</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Education;
