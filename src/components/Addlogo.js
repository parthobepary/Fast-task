import React from "react";

const Addlogo = () => {
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-center font-bold text-4xl mb-3">Add logo</h1>
        <hr />
      </div>
      <div className="text-center">
        <input type="file" name="img" id="" />
        <button className="btn btn-success px-10">Submit</button>
      </div>
    </div>
  );
};

export default Addlogo;
