import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Editpage = () => {
  const { id } = useParams();
  const navigated = useNavigate()

  const [imgUrl, setImgUrl] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newTeam = { ...data, img: imgUrl };
    fetch(`http://localhost:5000/members/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTeam),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    alert("Added done");
    reset();
    navigated('/dashboard/manage/manageall')
  };

  //imgbb

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
      <div className="flex justify-center mt-48">
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

export default Editpage;
