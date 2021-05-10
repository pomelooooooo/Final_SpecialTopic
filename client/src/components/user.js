import Axios from "axios";
import { useState } from "react";
import React, { Component } from "react";
import "../App.css";
import Header from "./header";
import Footer from "./footer";

function User() {
  const [name, setName] = useState([""]);
  const [location, setLocation] = useState([""]);
  const [description, setDescription] = useState([""]);
  const [picture, setPicture] = useState([""]);

  const [userList, setUserList] = useState([]);

  const addPlace = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      location: location,
      description: description,
      picture: picture,
    }).then(() => {
      setUserList([
        ...userList,
        {
          name: name,
          location: location,
          description: description,
          picture: picture,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <br />
        <h1>เพิ่มสถานที่ท่องเที่ยว</h1>
        <hr />
        <div className="information">
          <form action="">
            <div className="row">
              <div className="col">
                <label htmlFor="first_name" className="formlabel">
                  ชื่อ
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อถสานที่ท่องเที่ยว"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="last_name" className="formlabel">
                  จังหวัด
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="จังหวัด"
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="first_name" className="formlabel">
                รายละเอียด
              </label>

              <textarea
                type="text"
                className="form-control"
                placeholder="รายละเอียดข้อมูล"
                rows="4"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <label htmlFor="tel" className="formlabel">
                รูปภาพ
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="link รูป"
                onChange={(event) => {
                  setPicture(event.target.value);
                }}
              />
            </div>

            <br />
            <button className="btn btn-success" onClick={addPlace}>
              บันทึกข้อมูล
            </button>
          </form>
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default User;
