import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Manageall = () => {
  const [members, setMembers] = useState([]);
  const navigated = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  //delte

  const deleteOne = (id) => {
    const confird = window.confirm();
    if (confird) {
      fetch(`http://localhost:5000/members/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload()
        });
    }
  };
  //edut

  const editOne = (id) => {
    navigated(`/edit/${id}`)
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => {
              return (
                <tr key={m._id}>
                  <td>{m.name}</td>
                  <td>
                    <img className="w-20 rounded-full" src={m.img} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => deleteOne(m._id)}
                      class="btn btn-xs mr-3"
                    >
                      Delete
                    </button>
                    <button onClick={()=>editOne(m._id)} class="btn btn-xs">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageall;
