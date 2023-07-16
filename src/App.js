import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Body from "./components/Body/Body";
import DetailJob from "./components/Body/DetailJob/DetailJob"
import Company from "./components/Company/Company";
import Home from "./components/Home/Home";
import Event from "./components/Event/Event";
import DetailEvent from "./components/Event/DetailEvent/DetailEvent";
import { Provider } from 'react-redux';
import store from "./redux/saga/store.js"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Interview from "./components/Interview/Interview";
import SubmitJob from "./components/SubmitJob/SubmitJob";
import CVHandler from "./components/CVHandler/CVHandler";
import CVBuilder from "./components/CVBuilder/CVBuilder";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/body" element = {<Body/>} />
        <Route path="/body/detailjob/:id" element = {<DetailJob/>} />
        <Route path="/event" element = {<Event/>} />
        <Route path = "/event/detailevent/:id" element = {<DetailEvent/>}/>
        <Route path = "/personal-info" element = {<PersonalInfo/>}/>
        <Route path = "/interview" element = {<Interview/>}/>
        <Route path = "/submitjob" element = {<SubmitJob/>}/>
        <Route path = "/cvhandler" element = {<CVHandler/>}/>
        <Route path = "/cvbuilder" element = {<CVBuilder/>}/>
      </Routes>
    </Provider>
  )
}
export default App