import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Addteammember = () => {
  const [imgUrl, setImgUrl] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
      ...data,
      img: imgUrl,
    };
    fetch("http://localhost:5000/members", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  //img url set
  const handelImagUpload = (e) => {
    const image = e.target.files[0];

    const fromData = new FormData();
    fromData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=79fd0b725c9bb9b85e875f16c38c1622",
        fromData
      )
      .then((res) => {
        setImgUrl(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-center font-bold text-4xl mb-3">Add logo</h1>
        <hr />
      </div>
      <div className="text-center">
        <form
          className="bg-indigo-500 w-3/4 text-center p-6 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-1/2 py-2 px-3 rounded-sm"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            className="my-3 w-1/2 py-2 px-3 rounded-sm"
            placeholder="describtion"
            {...register("pera", { required: true })}
          />
          <br />
          <input
            className="w-1/2 py-2 px-3 rounded-sm"
            placeholder="service price"
            type="file"
            {...register("price", { required: true })}
            onChange={handelImagUpload}
          />
          <br />
          <input
            disabled={!imgUrl ? true : false}
            className="btn btn-primary"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Addteammember;
