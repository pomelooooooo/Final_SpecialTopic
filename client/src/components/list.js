import Axios from "axios";
import { useState } from "react";
import React, { Component } from "react";
import "../App.css";
import Header from "./header";
import Footer from "./footer";

function List() {
  const [newName, setNewName] = useState([""]);
  const [newLocation, setNewLocation] = useState([""]);
  const [newDescription, setNewDescription] = useState([""]);
  const [newPicture, setNewPicture] = useState([""]);

  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3001/place").then((Response) => {
      console.log(Response.data);
      setUserList(Response.data);
    });
  };

  const updatePlaceData = (id) => {
    Axios.put("http://localhost:3001/update", {
      name: newName,
      location: newLocation,
      description: newDescription,
      picture: newPicture,
      id: id,
    }).then((Response) => {
      setUserList(
        userList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                name: newName,
                location: newLocation,
                description: newDescription,
                picture: newPicture,
              }
            : val;
        })
      );
    });
  };

  const deletePlaceData = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App" onLoad={getUser}>
      <Header />
      <div className="container">
        <br />
        <h1>รายชื่อ</h1>
        <br />
        {userList.map((val, key) => {
          return (
            <div className="user card">
              <div className="card-body text-left">
                <h2 className="card-text">Update-Delelte</h2>
                <br />
                <div className="row">
                  <div className="col">
                    <p className="card-text">ชื่อ: {val.name}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขชื่อ"
                      onChange={(event) => {
                        setNewName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col">
                    <p className="card-text">จังหวัด: {val.location}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขจังหวัด"
                      onChange={(event) => {
                        setNewLocation(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <br />

                <div className="col-12">
                  <p className="card-text">รายละเอียด: {val.description}</p>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="แก้ไขรายละเอียด"
                    rows="4"
                    onChange={(event) => {
                      setNewDescription(event.target.value);
                    }}
                  />
                </div>
                <div className="col-12">
                  <p className="card-text">รูป: {val.picture}</p>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="แก้ไขรูป"
                    onChange={(event) => {
                      setNewPicture(event.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    className="btn btn-warning mx-3 "
                    onClick={() => {
                      updatePlaceData(val.id);
                      alert("Information has update!");
                    }}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => {
                      deletePlaceData(val.id);
                      alert("Are you sure to delete data!");
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default List;
