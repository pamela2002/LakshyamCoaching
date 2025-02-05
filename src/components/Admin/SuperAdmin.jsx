import React, { useState, useRef } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";
import NoteForm from "./NoteForm";
import NoteTable from "./NoteTable";
import backend from "../../backend";
import ContactTable from "./ContactTable";
import ClassForm from "./ClassForm";
import NoticeForm from "./NoticeForm";
import ApplyTable from "./ApplyTable";
import NoticeTable from "./NoticeTable";
import SubjectDetails from "./SubjectDetails";
import SubjectForm from "./SubjectForm";
import AddStudent from "./AddStudent";
import AllStudent from "./AllStudent";
import StudentPayment from "./StudentPayment";
import Dashboard from "./Dashboard";
import SnavBar from "./SnavBar";
import AddBanner from "./AddBanner";
import AllBanner from "./AllBanner";

const SuperAdmin = () => {
  const ref = useRef(null);
  const [noteList, setNoteList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [applyList, setApplyList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [bannerList, setBannerList] = useState([]);
  const [noteView, setNoteView] = useState("Dashboard");
  const [slideOpen, setSlideOpen] = useState(false);
  const [studentItem, setStudentItem] = useState([
    {
      id: 1,
      name: "▶ Student",
      isOpen: false,
      subItems: ["Add Student", "All Students"],
    },
  ]);
  const [subjectItem, setSubjectItem] = useState([
    {
      id: 1,
      name: "▶ Subject",
      isOpen: false,
      subItems: ["Add Subject", "All Subject"],
    },
  ]);
  const [noticeItem, setNoticeItem] = useState([
    {
      id: 1,
      name: "▶ News",
      isOpen: false,
      subItems: ["Add News", "All News"],
    },
  ]);
  const [banner, setBanner] = useState([
    {
      id: 1,
      name: "▶ Banner",
      isOpen: false,
      subItems: ["Add Banner", "All Banner"],
    },
  ]);
  const [noteItem, setNoteItem] = useState([
    {
      id: 1,
      name: "▶ Note",
      isOpen: false,
      subItems: ["Add Note", "All Note"],
    },
  ]);

  const toggleMenu = (itemId) => {
    setStudentItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleSubjectMenu = (itemId) => {
    setSubjectItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleNoticeMenu = (itemId) => {
    setNoticeItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleNoteMenu = (itemId) => {
    setNoteItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleBannerMenu = (itemId) => {
    setBanner((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const handleNoteTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    setNoteView("notetable");

    try {
      const response = await fetch(`${backend}super/getnote/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNoteList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleContactTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    setNoteView("contacttable");

    try {
      const response = await fetch(`${backend}super/contact/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setContactList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleApplyTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    setNoteView("applytable");

    try {
      const response = await fetch(`${backend}super/apply/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setApplyList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleNoticeTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);

    setNoteView("noticetable");

    try {
      const response = await fetch(`${backend}super/notice/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNoticeList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const handleClassForm = () =>{
  //   setNoteView("classform");
  // }
  const handleSubjectDetails = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);

    setNoteView("subjectdetails");
    try {
      const response = await fetch(`${backend}super/subject/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setSubjectList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleNoteForm = () => {
    setNoteView("noteform");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };
  const handleNoticeForm = () => {
    setNoteView("noticeform");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };
  const handleSubjectForm = () => {
    setNoteView("subjectform");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };

  const btnclicked = () => {
    if (!slideOpen) {
      ref.current.classList.remove("slider__close");
      ref.current.classList.add("slider__open");
      setSlideOpen(true);
    } else {
      ref.current.classList.add("slider__close");
      ref.current.classList.remove("slider__open");
      setSlideOpen(false);
    }
  };

  const handleAddStudentDetails = () => {
    setNoteView("addStudentForm");
  };

  const handleAllStudentDetails = () => {
    setNoteView("allStudentForm");
  };

  const handleStudentPayment = () => {
    setNoteView("addPaymentDetails");
  };
  const handleDashboard = async () => {
    setNoteView("Dashboard");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };

  const handleAddBanner = () => {
    setNoteView("addBannerForm");
  };
  const handleAllBanner = async () => {
    setNoteView("allBannerForm");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);

    try {
      const response = await fetch(`${backend}super/popup/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setBannerList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SnavBar />
      <div
        className="super-container"
        style={{
          display: "flex",
          backgroundColor: "rgba(22,34,57,0.85)",
          color: "white",
          height: "100vh",
        }}
      >
        <button
          className="hide__btn"
          style={{ position: "absolute", marginTop: 5 }}
          onClick={btnclicked}
        >
          {!slideOpen ? (
            <DoubleArrowIcon fontSize="small" />
          ) : (
            <ClearIcon fontSize="small" />
          )}
        </button>

        <div
          ref={ref}
          id="super-choose"
          className="super-choose"
          style={{ display: "flex", overflowY: "scroll" }}
        >
          <div
            onClick={handleDashboard}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Dashboard
          </div>

          <div
            style={{
              paddingTop: 20,
              textAlign: "left",
              marginLeft: 0,
              paddingLeft: 5,
            }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {noteItem.map((noteItems) => (
                <li key={noteItems.id}>
                  <span
                    onClick={() => toggleNoteMenu(noteItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                      color: "white",
                    }}
                    className="note__btn"
                  >
                    {noteItems.name}
                  </span>
                  {noteItems.isOpen && (
                    <ul style={{ padding: 10, color: "white" }}>
                      <li onClick={handleNoteForm}>Add Note</li>
                      <li style={{ marginTop: 10 }} onClick={handleNoteTable}>
                        All Note
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={handleContactTable}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Query Details
          </div>
          <div
            onClick={handleApplyTable}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Apply Details
          </div>

          <div
            style={{ paddingTop: 20, textAlign: "left", marginLeft: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {noticeItem.map((noticeItems) => (
                <li key={noticeItems.id}>
                  <span
                    onClick={() => toggleNoticeMenu(noticeItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                      color: "white",
                    }}
                    className="note__btn"
                  >
                    {noticeItems.name}
                  </span>
                  {noticeItems.isOpen && (
                    <ul style={{ padding: 10, color: "white" }}>
                      <li onClick={handleNoticeForm}>Add News</li>
                      <li style={{ marginTop: 10 }} onClick={handleNoticeTable}>
                        All News
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, textAlign: "left", marginLeft: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {banner.map((bannerItems) => (
                <li key={bannerItems.id}>
                  <span
                    onClick={() => toggleBannerMenu(bannerItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                      color: "white",
                    }}
                    className="note__btn"
                  >
                    {bannerItems.name}
                  </span>
                  {bannerItems.isOpen && (
                    <ul style={{ padding: 10, color: "white" }}>
                      <li onClick={handleAddBanner}>Add Banner</li>
                      <li style={{ marginTop: 10 }} onClick={handleAllBanner}>
                        All Banner
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, textAlign: "left", marginLeft: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {subjectItem.map((subjectItems) => (
                <li key={subjectItems.id}>
                  <span
                    onClick={() => toggleSubjectMenu(subjectItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                      color: "white",
                    }}
                    className="note__btn"
                  >
                    {subjectItems.name}
                  </span>
                  {subjectItems.isOpen && (
                    <ul style={{ padding: 10, color: "white" }}>
                      <li onClick={handleSubjectForm}>Add Subject</li>
                      <li
                        style={{ marginTop: 10 }}
                        onClick={handleSubjectDetails}
                      >
                        All Subject
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, textAlign: "left", marginLeft: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {studentItem.map((studentItems) => (
                <li key={studentItems.id}>
                  <span
                    onClick={() => toggleMenu(studentItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                      color: "white",
                    }}
                    className="note__btn"
                  >
                    {studentItems.name}
                  </span>
                  {studentItems.isOpen && (
                    <ul style={{ padding: 10, color: "white" }}>
                      {/* {studentItems.subItems.map((subItem) => (
                    <li onClick={handleStudentDetails} key={subItem}>{subItem}</li>
                  ))}  */}
                      <li onClick={handleAddStudentDetails}>Add Student</li>
                      <li
                        style={{ marginTop: 10 }}
                        onClick={handleAllStudentDetails}
                      >
                        All Student
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={handleStudentPayment}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶Student Payment
          </div>
        </div>

        <div
          style={{
            height: "98%",
            width: "100%",
            display: "flex",
            marginBottom: 20,
            overflowY: "scroll",
          }}
        >
          {noteView === "noteform" ? <NoteForm /> : null}
          {noteView === "notetable" ? (
            <NoteTable noteList={noteList} setNoteList={setNoteList} />
          ) : null}
          {noteView === "contacttable" ? (
            <ContactTable
              contactList={contactList}
              setContactList={setContactList}
            />
          ) : null}
          {noteView === "applytable" ? (
            <ApplyTable applyList={applyList} setApplyList={setApplyList} />
          ) : null}
          {noteView === "noticeform" ? <NoticeForm /> : null}
          {noteView === "noticetable" ? (
            <NoticeTable
              noticeList={noticeList}
              setNoticeList={setNoticeList}
            />
          ) : null}
          {noteView === "classform" ? <ClassForm /> : null}
          {noteView === "subjectdetails" ? (
            <SubjectDetails
              subjectList={subjectList}
              setSubjectList={setSubjectList}
            />
          ) : null}
          {noteView === "subjectform" ? <SubjectForm /> : null}
          {noteView === "addStudentForm" ? <AddStudent /> : null}
          {noteView === "allStudentForm" ? <AllStudent /> : null}
          {noteView === "addPaymentDetails" ? <StudentPayment /> : null}
          {noteView === "Dashboard" ? <Dashboard /> : null}
          {noteView === "addBannerForm" ? <AddBanner /> : null}
          {noteView === "allBannerForm" ? (
            <AllBanner bannerList={bannerList} setBannerList={setBannerList} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SuperAdmin;
