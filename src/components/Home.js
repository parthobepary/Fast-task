import React, { useState } from "react";
import img2 from "../imge/image2.jpg";
import img1 from "../imge/img1.jpg";

const Home = () => {
  const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
  necessitatibus error fugiat beatae ipsa reiciendis aliquid
  excepturi blanditiis dicta nisi!  Ratione temporibus reiciendis, sit, possimus animi officia recusandae dolor sapiente consequuntur et eum tenetur, delectus deserunt eveniet id est saepe facere esse? Itaque vitae in delectus quaerat id quo? Itaque perspiciatis corrupti natus non eos ipsam unde quibusdam, blanditiis animi quaerat at.`;
  const [red, setRed] = useState(false);
  console.log(red);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img1}
            className="md:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="md:ml-60 order-1">
            <h1 className="text-5xl font-bold">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            {red ? <p>{text}</p> : <p>{text.slice(0, 150)}</p>}
            <button
              onClick={() => setRed(!red)}
              className="text-red-500 font-bold"
            >
              {red ? "Less..." : "Red more..."}
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img2}
            className="md:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="md:mr-60">
            <h1 className="text-5xl font-bold">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            {red ? <p>{text}</p> : <p>{text.slice(0, 150)}</p>}
            <button
              onClick={() => setRed(!red)}
              className="text-red-500 font-bold"
            >
              {red ? "Less..." : "Red more..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
