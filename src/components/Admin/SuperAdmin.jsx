import React, { useState,useRef } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ClearIcon from '@mui/icons-material/Clear';
import NoteForm from './NoteForm'
import NoteTable from './NoteTable'
import backend from '../../backend'
import ContactTable from './ContactTable'
import ClassForm from './ClassForm'
import NoticeForm from './NoticeForm'
import ApplyTable from './ApplyTable'
import NoticeTable from './NoticeTable'
import SubjectDetails from './SubjectDetails'
import SubjectForm from './SubjectForm'


const SuperAdmin = () => {
  const ref = useRef(null)
  const [noteList, setNoteList] = useState([])
  const [contactList, setContactList] = useState([])
  const [applyList, setApplyList] = useState([])
  const [noticeList, setNoticeList] = useState([])
  const [subjectList, setSubjectList] = useState([])
  const [noteView, setNoteView] = useState('noteform')
  const [slideOpen, setSlideOpen] = useState(false)
  

  const handleNoteTable = async() => {
    ref.current.classList.add( 'slider__close')
    ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)
    setNoteView('notetable')

    try {
        const response = await fetch(`${backend}getnote/`, {
          method: "GET",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        const resJson = await response.json();


        if (response.status === 200) {
          setNoteList(resJson);
          console.log('====================================');
          console.log(resJson);
          console.log('====================================');
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }

    }
  const handleContactTable = async() => {
    ref.current.classList.add( 'slider__close')
    ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)
      setNoteView('contacttable')
  
      try {
          const response = await fetch(`${backend}contact/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setContactList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
  
    }
    const handleApplyTable = async() => {
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)
      setNoteView('applytable')
  
      try {
          const response = await fetch(`${backend}apply/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setApplyList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
  
    }
    const handleNoticeTable = async() => {
       ref.current.classList.add( 'slider__close')
       ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)


      setNoteView('noticetable')
  
      try {
          const response = await fetch(`${backend}notice/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setNoticeList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
  
    }
    // const handleClassForm = () =>{
    //   setNoteView("classform");
    // }
    const handleSubjectDetails = async () =>{
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)



         setNoteView("subjectdetails");
         try {
          const response = await fetch(`${backend}subject/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setSubjectList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
     }
     const handleNoteForm = ()=>{
      setNoteView('noteform')
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)


    }
     const handleNoticeForm = ()=>{
      setNoteView('noticeform')
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)

     }
     const handleSubjectForm = ()=>{
      setNoteView('subjectform')
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)

     }

     const btnclicked = ()=>{
      if(!slideOpen){
      ref.current.classList.remove( 'slider__close')
       ref.current.classList.add( 'slider__open')
      setSlideOpen(true)
      }
      else{
        ref.current.classList.add( 'slider__close')
        ref.current.classList.remove( 'slider__open')
        setSlideOpen(false)
      }
      
    } 
  return (
    <>
      
        <div className='super-container' style={{display:"flex" , backgroundColor:('rgba(22,34,57,0.85)'), color:"white"}}>
        
        <button className='hide__btn' style={{ position:"absolute" ,marginTop:5}} onClick={btnclicked}>
        {
          (!slideOpen)? 
          <DoubleArrowIcon fontSize='small'/>
          :
          <ClearIcon fontSize='small'/>

        }
        </button>
        <div ref={ref} id='super-choose' className='super-choose' style={{display:"flex" , overflow:"hidden"}}>
        
        <div onClick={handleNoteForm} style={{padding:20, cursor:"pointer"}} className='note__btn'>
          Note Form
        </div>
        <div onClick={handleNoteTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Note Details
        </div>
        <div onClick={handleContactTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Query Details
        </div>
        <div onClick={handleApplyTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Apply Details
        </div>
        <div onClick={handleNoticeForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Notice Form
        </div>
        <div onClick={handleNoticeTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Notice details
        </div>
        <div onClick={handleSubjectForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Subject Form
        </div>
        {/* <div onClick={handleClassForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>Class</div> */}
        <div onClick={handleSubjectDetails} style={{padding:20 , cursor:"pointer"}} className='note__btn'>Subject Details</div>
        </div>
      {/* <Divider orientation='vertical'   style={{height:"93vh",color:"success"}}/> */}
      {
        (noteView==='noteform')?
        <NoteForm/>:
        null
      }
      {
        (noteView==='notetable')?
      <NoteTable noteList={noteList} setNoteList={setNoteList}/>:
      null
      }
      {
        (noteView==='contacttable')?
        <ContactTable contactList={contactList} setContactList={setContactList}/>:
        null
      }
      {
        (noteView==='applytable')?
        <ApplyTable applyList={applyList} setApplyList={setApplyList}/>:
        null
      }
      {
        (noteView==='noticeform')?
        <NoticeForm />:
        null
      }
      {
        (noteView==='noticetable')?
        <NoticeTable noticeList={noticeList} setNoticeList={setNoticeList}/>:
        null
      }
      {
        (noteView==="classform")?
       ( <ClassForm /> ) : null
      }
      {
        (noteView==="subjectdetails")?
       ( <SubjectDetails subjectList={subjectList} setSubjectList={setSubjectList} /> ) : null
      }
      {
        (noteView==='subjectform')?
        <SubjectForm />:
        null
      }
        </div>
      
    </>
  )
}

export default SuperAdmin