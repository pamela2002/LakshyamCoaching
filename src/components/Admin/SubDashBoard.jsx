import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";

const SubDashBoard = (props) => {
  const [classs, setClasss] = useState("");
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [incomeList, setIncomeList] = useState([]);

  const handleAllStudentTable = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backend}super/student/${props.apiRoute}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentClass: classs,
          studentCourse: course,
          studentSubject: subject,
          studentEnrollment: enrollment,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setIncomeList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div style={{ width: "95%" }}>
        <h1>{props.headingDash}</h1>
        <div class="search-box">
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "60%" }}
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
          ></input>
          <button onClick={handleAllStudentTable}>Search</button>
        </div>
        <div style={{ marginTop: 10 }}>
          <Box sx={{ minWidth: "100%" }}>
            <FormControl
              style={{ width: "60%", backgroundColor: "white" }}
              className="student__field"
            >
              <InputLabel style={{ color: "black", marginLeft: -13 }}>
                Select Your Course
              </InputLabel>
              <Select
                label=""
                style={{ color: "black" }}
                onChange={(e) => setCourse(e.target.value)}
              >
                <MenuItem value="CBSE Board All Subjects">
                  {" "}
                  CBSE Board All Subjects
                </MenuItem>
                <MenuItem value="ICSE Board All Subjects">
                  ICSE Board All Subjects
                </MenuItem>
                <MenuItem value="Class 11 CBSE Boards + CUET">
                  Class 11 CBSE Boards + CUET
                </MenuItem>
                <MenuItem value="Class 11 ICSE Boards + CUET">
                  Class 11 ICSE Boards + CUET
                </MenuItem>
                <MenuItem value="Class 12 CBSE Boards + CUET">
                  Class 12 CBSE Boards + CUET
                </MenuItem>
                <MenuItem value="Class 12 ICSE Boards + CUET">
                  Class 12 ICSE Boards + CUET
                </MenuItem>
                <MenuItem value="JEE Mains ">JEE Mains </MenuItem>
                <MenuItem value="NEET ">NEET </MenuItem>
                <MenuItem value="Foundation Course JEE IIT / NEET">
                  Foundation Course JEE IIT / NEET
                </MenuItem>
                <MenuItem value="Commerce Board + CUET">
                  Commerce Board + CUET
                </MenuItem>
                <MenuItem value="CA Foundation">CA Foundation</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div style={{ marginTop: 10 }}>
          <select
            className="student__field"
            onChange={(e) => setClasss(e.target.value)}
            required
            style={{ height: 40 }}
          >
            <option disabled selected>
              Select Class
            </option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
            <option>VII</option>
            <option>VIII</option>
            <option>IX</option>
            <option>X</option>
            <option>XI</option>
            <option>XII</option>
          </select>
        </div>
        <div style={{ marginTop: 10 }}>
          <select
            className="student__field"
            onChange={(e) => setSubject(e.target.value)}
            required
            style={{ height: 40 }}
          >
            <option disabled selected>
              Select Subject
            </option>
            <option>English</option>
            <option>Hindi</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Social Science</option>
          </select>
        </div>

        {incomeList ? (
          <div
            className="table-scroll"
            style={{
              marginTop: 40,
              overflowX: "scroll",
              overflowY: "scroll",
              width: "100%",
            }}
          >
            <table>
              <tbody>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Enrollment No.
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Payment Type
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Date
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Fees
                  </th>
                </tr>

                {incomeList.map((item) => (
                  <tr
                    style={{ border: "1px solid black", padding: 5 }}
                    key={item._id}
                    onClick={() => {
                      console.log(item._id);
                    }}
                  >
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.paymentId}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.studentName}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.paymentType}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.lastIncomeDate}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.paymentMoney}
                    </td>

                    {/* <td style={{border:"1px solid black" , padding:5}}>
                <Button style={{marginBottom:5}} variant='contained' color='error' size='small' onClick={() => handleDelete(JSON.stringify(item._id))} >
                  Delete
                </Button>
                <Button variant='contained' color='success' size='small' onClick={()=>CustomerModalOpen(
                     item._id,item.noteTitle , item.noteSubject , item.noteClass , item.noteBatch , item.noteImage , item.notePdf, item.noteCourse
                )} >
                  Update
                </Button>
              </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default SubDashBoard;
