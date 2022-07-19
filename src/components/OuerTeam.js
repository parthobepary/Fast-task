import React, { useEffect, useState } from "react";

const OuerTeam = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="bg-gray-300">
      <div className="py-32">
        <div className="md:px-40 mb-10">
          <h1 className="mb-5 text-5xl text-center font-bold">Our Team</h1>
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {members?.map((m) => {
            return (
              <div
                key={m._id}
                className="text-center bg-white p-8 rounded-lg m-2"
              >
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={m.img} alt="" />
                  </div>
                </div>
                <h1 className="my-3 text-3xl font-bold">{m.name}</h1>
                <p>{m.pera}</p>
              </div>
            );
          })}
        </div>
        {/* list of team */}
      </div>
      <div className="mx-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex pb-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-20 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuerTeam;
