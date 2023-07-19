import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navigate } from "react-router-dom";
import "./App.css"
import React from "react"
import "./style.css"
import Event from "./pages/Event/Event"
import IRALayout from "./layout/IRALayout"
import EventEdit from "./pages/Event/children/EventEdit"
import EventAdd from "./pages/Event/children/EventAdd"
import EventDetail from "./pages/Event/children/EventDetail"
import Home from "./pages/Interview/Home/Home";
import Edit from "./pages/Interview/Edit/Edit";
import Table from "./pages/Interview/Table/Table";
import Login from "./pages/Interview/Login/Login";
import PrivateRoute from "./pages/Interview/Login/PrivateRoute";
// import Navbar from "./pages/Interview/Navbar/Navbar";
import Register from "./pages/Interview/Register/Register";
import ResetPassword from "./pages/Interview/ResetPassword/ResetPassword";

import RecruitAdd from "./pages/Recruitment/RecruitAdd"
import Recruitment from "./pages/Recruitment/Recruitment"
import InterviewMain from "./pages/Interview/InterviewMain/InterviewMain"
import InterviewDetail from "./pages/Interview/InterviewDetail/InterviewDetail"
import InterviewMark from "./pages/Interview/InterviewMark/InterviewMark"
import Questions from "./pages/Interview/Questions/Questions"
import RecruitEdit from "./pages/Recruitment/RecruitEdit"
//import Table from './pages/RECer/Table.js'
import InterviewerCalendar from "./pages/Interview/InterviewerCalendar/InterviewerCalendar";
import InterviewInfo from './pages/interviewInfo/InterviewInfo.js'

import RoomDetail from './pages/Room/RoomDetail/RoomDetail.js'
import AddCandidate from './pages/AddCandidate/AddCandidate'

import ManageUser from './pages/Manage-user/Manage-user'
import DetailUser from './pages/Detail-user/Detail-user'
import ManageCandidate from './pages/Manage-candidate/Manage-candidate'
import BlackList from './pages/Blacklist/Blacklist'
import ReasonBlacklist from './pages/ReasonBlacklist/ReasonBlacklist'
import DetailBlacklist from './pages/Detail-blacklist/Detail-blacklist'
import AddInterviewer from "./pages/AddInterviewer/AddInterviewer";
import RoomEdit from "./pages/Room/RoomEdit/RoomEdit.js";
import RoomAdd from "./pages/Room/RoomAdd/RoomAdd";
import Room from "./pages/Room/Room/Room";




const App = (props) => {
    return (
            
            <Router>
                {/* <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes> */}

                <IRALayout>
                    <Routes>         
                        {/* <Route path="/reset" element={<ResetPassword/>}/>

                        <Route path="/register" element={<Register/>}/>
                        <Route path="*" element={<Navigate to="/login" />} /> */}

                        <Route  element = {<PrivateRoute/>}>
                        <Route path="*" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home/>} exact/>
                        <Route path="/table" element={<Table/>}/>

                        <Route path="/:id" element={<Edit/>}/>
                        </Route>           
                        <Route path="/event" element={<Event />}/>
                        <Route path="/event/:id" element={<EventDetail />}/>
                        <Route path="/event/edit/:id" element={<EventEdit />}/>
                        <Route path="/event/add" element={<EventAdd />}/>
                        
                        <Route path="/interview" element={<InterviewMain />} />
                        <Route path="/interview/detail/:id" element={<InterviewDetail />} />
                        <Route path="/interview/detail/:id/:mark_id" element={<InterviewMark />} />
                        <Route path="/questions" element={<Questions />} />
                        <Route path="/interviewercalendar" element={<InterviewerCalendar />}/>

                        <Route path="/recruitment" element={<Recruitment />} />
                        <Route path="/recruitment/add" element={<RecruitAdd />} />
                        <Route path="/recruitment/edit/:id" element={<RecruitEdit />} />
                        <Route path='manage-user' element={<ManageUser />} />
                        <Route path='detail-user/:id' element={<DetailUser />} />
                        <Route path='manage-candidate' element={< ManageCandidate />} />
                        <Route path="blacklist" element={< BlackList />} />
                        <Route path="reason-blacklist/:id" element={< ReasonBlacklist />} />
                        <Route path="detail-blacklist/:id" element={< DetailBlacklist />} />
                    {/* /* <Route path='/interviewers' element={<Table />} /> */ }
                        <Route path='/interviewers/:id' element={<InterviewInfo />} />
                        <Route path='/room' element={<Room/>} />
                        <Route path='/room/:id' element={<RoomDetail />} />
                        <Route path='/room/:id/candidate' element={<AddCandidate />} />
                        <Route path='/room/:id/candidate/interviewerassign' element={<AddInterviewer/>} />
                        <Route path='/room/:id' element={<RoomEdit />} />
                        <Route path='/room/create' element={<RoomAdd />} />

                    </Routes>
                </IRALayout>
        </Router>

    )
}

export default App
