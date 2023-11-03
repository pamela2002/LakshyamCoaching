import React, {useState} from "react";
import './AllStudent.css'
import StudentInfo from "./StudentInfo";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const AllStudent = () =>{
    const [course, setCourse] = useState();
    const [studentTab, setStudentTab] = useState();
    const handleAllStudentTable = (e) =>{
      e.preventDefault();
      setStudentTab('studentInfo');
    }
    return(
    
        <div className="BoxStyle" style={{marginTop:40, margin:20}}>
        <h1 id="heading">All Student</h1>
        <div style={{border:'2px solid rgb(30, 144, 255)', padding:20}}>
        <h2 style={{textTransform:'capitalize'}}>Select Course</h2>
        <form onSubmit={handleAllStudentTable}>
        <label>Course Name:</label>
          {/* <select style={{width:"100%" , height:40}} type="text" value={course} onChange={(e) => setCourse(e.target.value)} >
                <option disabled selected>Select Your Course</option> 
                
                <option value="CBSE Board All Subjects">
                CBSE Board All Subjects
                </option>
                <option value="ICSE Board All Subjects">
                ICSE Board All Subjects
                </option>
                <option value="Class 11 CBSE Boards + CUET">
                Class 11 CBSE Boards + CUET
                </option>
                <option value="Class 11 ICSE Boards + CUET">
                Class 11 ICSE Boards + CUET
                </option>
                <option value="Class 12 CBSE Boards + CUET">
                Class 12 CBSE Boards + CUET
                </option>
                <option value="Class 12 ICSE Boards + CUET">
                Class 12 ICSE Boards + CUET
                </option>
                <option value="JEE Mains ">JEE Mains </option>
                <option value="NEET ">NEET </option>
                <option value="Foundation Course JEE IIT / NEET">
                Foundation Course JEE IIT / NEET
                </option>
                <option value="Commerce Board + CUET">Commerce Board + CUET</option>
                <option value="CA Foundation">CA Foundation</option>
          </select> */}

           {/* <Box sx={{ minWidth: 120 }}>  */}
           <Box >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" style={{color:'white'}}>Select Your Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         value={course}
          label="Select Your Course"
          onChange={(e) => setCourse(e.target.value)}
          style={{color:'white'}}
        >
          <MenuItem  value="CBSE Board All Subjects"> CBSE Board All Subjects</MenuItem>
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
                <MenuItem value="Commerce Board + CUET">Commerce Board + CUET</MenuItem>
                <MenuItem value="CA Foundation">CA Foundation</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <button style={{marginTop:15}}>Submit</button>
        </form>
        </div>
        {
        (studentTab==='studentInfo')?
        <StudentInfo/>:
        null
      }
        </div>
        
        
    )
}

export default AllStudent;