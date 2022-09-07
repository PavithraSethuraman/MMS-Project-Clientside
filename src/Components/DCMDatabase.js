import React, {useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/AuthContext";
import DatePicker from "./DatePicker/DatePicker";




const DCMDatabase = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get("https://mms-application.herokuapp.com/api/dcm");
      setUserData(users.data);
    }
    fetchData();
  }, []);

  const [name, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(userData);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = userData.filter((user) => {
        const name = user.employeeName.toLowerCase();
         return name.startsWith(keyword);
      });
      setFoundUsers(results);
     
    } else {
      setFoundUsers(userData);
    }

    setName(keyword);
  };


const [startDate, setStartDate] = useState("")
const [endDate, setEndDate] = useState("")

// const dates = [];

// const getDatesInRange = () => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const date = new Date(start.getTime());

   

//     while (date <= end) {
//       dates.push(new Date(date).getTime());
//       date.setDate(date.getDate() + 1);
//     }
    
//     return dates;
//   };
//   getDatesInRange()

  const [foundDate, setFoundDate] = useState(userData)

  const filterDate = (e) => {
    const start =new Date(e.target.value)
    const end =new Date(e.target.value)
    const date = new Date(start);
    const dates = []
    while (date <= end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    
    if (start !== "") {
        const results = userData.filter((user) => {
          const newDate = user.createDate.includes(dates)
          
        //   console.log(newDate)
        //   let formatted_date = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate()
        //   console.log(formatted_date)
          return newDate
        });
        console.log(results)
        setFoundDate(results);
      } else {
        setFoundDate(userData);
      }
  
      setStartDate(start);
      setEndDate(end);
  };

  return (
    <>
      <div className="form-group">
        <div className="controls">
          <input
            type="text"
            id="search"
            value={name}
            onChange={filter}
            className="form-control"
            placeholder="Search Names Here..."
          />
          <div className="help-block with-errors"></div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ marginLeft: "400px" }}>
          From :{" "}
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={filterDate}
          />{" "}
          To :{" "}
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={filterDate}
          />
        </div>
      <br />
      <br />
      <div className="card">
      <div className="card-header">
        <h5 className="card-title text-center">Daily Customer Meet Details</h5>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-primary text-white text-center">
              <th>#</th>
              <th>Employee Name</th>
              <th>Date</th>
              <th>In Time</th>
              <th>Customer Name</th>
              <th>Needs</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Out Time</th>
            </tr>
          </thead>
          <tbody>
          {foundDate && foundDate.length > 0 ? foundDate.map((e, index) => {
             return (
                <tr key={index}>
                  <td className="text-center ">{e.dcmId}</td>
                  <td className="text-center ">{e.employeeName}</td>
            
                <td className="text-center ">{e.createDate}</td>
        
                  <td className="text-center ">{e.inTime}</td>
                  <td className="text-center ">{e.customerName}</td>
                  <td className="text-center ">{e.needs}</td>
                  <td className="text-center ">{e.mobile}</td>
                  <td className="text-center ">{e.email}</td>
                  <td className="text-center ">{e.outTime}</td>
                </tr>
              );
            }) :
            userData.map((e, index) => {
              return (
                <tr key={index}>
                  <td className="text-center ">{e.dcmId}</td>
                  <td className="text-center ">{e.employeeName}</td>
                  <td className="text-center ">{e.createDate}</td>
                  <td className="text-center ">{e.inTime}</td>
                  <td className="text-center ">{e.customerName}</td>
                  <td className="text-center ">{e.needs}</td>
                  <td className="text-center ">{e.mobile}</td>
                  <td className="text-center ">{e.email}</td>
                  <td className="text-center ">{e.outTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

    </>
  );
};

export default DCMDatabase;
