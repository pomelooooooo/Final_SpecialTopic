import Axios from "axios";
import { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import { Link } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  const [name, setName] = useState([""]);
  const [location, setLocation] = useState([""]);
  const [description, setDescription] = useState([""]);
  const [picture, setPicture] = useState([""]);

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

  return (
    <div className="App" onLoad={getUser}>
      <Header />
      <div className="container">
        <br />
        <h1>รูปภาพ</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="https://cms.dmpcdn.com/travel/2017/08/03/dbdabd7b-cbd8-4f36-b4f1-05fd51055d0c.jpg">
                <img
                  src="https://cms.dmpcdn.com/travel/2017/08/03/dbdabd7b-cbd8-4f36-b4f1-05fd51055d0c.jpg"
                  alt="Lights"
                  className="img-fluid2"
                />
              </a>
              <div className="text-center">
                <b>วัดพระแก้ว</b>
              </div>
            </div>
            <div className="col-md-4">
              <a href="https://cms.dmpcdn.com/travel/2017/08/03/b831d834-c87d-46d8-9b45-672dca0e8df2.jpg">
                <img
                  src="https://cms.dmpcdn.com/travel/2017/08/03/b831d834-c87d-46d8-9b45-672dca0e8df2.jpg"
                  alt="Lights"
                  className="img-fluid2"
                />
              </a>
              <div className="text-center">
                <b>เกาะมุก</b>
              </div>
            </div>
            <div className="col-md-4">
              <a href="https://cms.dmpcdn.com/travel/2017/08/03/33ae5382-06aa-4ff9-9bf4-eb30b328f29e.jpg">
                <img
                  src="https://cms.dmpcdn.com/travel/2017/08/03/33ae5382-06aa-4ff9-9bf4-eb30b328f29e.jpg"
                  alt="Lights"
                  className="img-fluid2"
                />
              </a>
              <div className="text-center">
                <b>ชิงช้าต้นไม้</b>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <a href="https://cms.dmpcdn.com/travel/2017/08/03/71bdbdd6-bc67-40a0-b9e5-b8155309592b.jpg">
                <img
                  src="https://cms.dmpcdn.com/travel/2017/08/03/71bdbdd6-bc67-40a0-b9e5-b8155309592b.jpg"
                  alt="Lights"
                  className="img-fluid2"
                />
              </a>
              <div className="text-center">
                <b>ไร่ชาฉุยฟง</b>
              </div>
            </div>
            <div className="col-md-4">
              <a href="https://cms.dmpcdn.com/travel/2017/08/03/c56b9abd-03ce-4c5e-862f-109035202301.jpg">
                <img
                  src="https://cms.dmpcdn.com/travel/2017/08/03/c56b9abd-03ce-4c5e-862f-109035202301.jpg"
                  alt="Lights"
                  className="img-fluid2"
                />
              </a>
              <div className="text-center">
                <b>เชียงคาน</b>
              </div>
            </div>
            <div className="col-md-4">
              <a href="https://cms.dmpcdn.com/travel/2017/08/03/44aa9e30-1540-47c8-abd8-e86029b256da.jpg">
                <img
                  src="https://cms.dmpcdn.com/travel/2017/08/03/44aa9e30-1540-47c8-abd8-e86029b256da.jpg"
                  alt="Lights"
                  className="img-fluid2"
                />
              </a>
              <div className="text-center">
                <b>ตึกชิโนโปตุกีส</b>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <h1>รายชื่อสถานที่ท่องเที่ยว</h1>
        <br />
        {userList.map((val, key) => {
          return (
            <div className="user card">
              <div className="card-body text-left">
                <h2 className="card-text">ข้อมูลรายชื่อสถานที่ท่องเที่ยว</h2>
                <br />
                <div className="row">
                  <div className="col">
                    <b className="font-weight-bold">ชื่อสถานที่ท่องเที่ยว: </b>
                    <p className="card-text">{val.name}</p>
                  </div>
                  <div className="col">
                    <b className="font-weight-bold">จังหวัด: </b>
                    <p className="card-text">{val.location}</p>
                  </div>
                </div>
                <br />

                <div className="col-12">
                  <b className="font-weight-bold">รายละเอียด: </b>
                  <p className="card-text ">{val.description}</p>
                </div>
                {/* <div className="col">
                    <p className="card-text">รูป: {val.picture}</p>
                  </div> */}

                <br />
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

export default App;
