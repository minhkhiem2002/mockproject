import React, { useState } from 'react';
import './ReasonBlacklist.scss';
import users from '../user'
import background from '../../assets/background.webp';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function InterviewMeeting() {
    const { id } = useParams();
    console.log({ id });

    const user = users.find((item) => item.id === id);
    const [avt, setAvt] = useState(user.avt);
    const [name, setName] = useState(user.name);
    const [position, setPosition] = useState(user.position);
    const [skills, setSkills] = useState(user.skills);
    const [experience, setExperience] = useState(user.experience);
    const [status, setStatus] = useState(user.status);


    return (
        <div className="ReasonBlacklist-container" >
            <div className="ReasonBlacklist-tab-name">
                <div className="ReasonBlacklist-content-tab-name">
                    Thêm vào Blacklist
                </div>
                <div className="ReasonBlacklist-button-tab-name">
                    <button className="button-back">Back</button>
                </div>
            </div>
            <div className="ReasonBlacklist-content">
                <div className="ReasonBlacklist-candidate-info">
                    <div className="ReasonBlacklist-common-info">
                        <div className="ReasonBlacklist-common-info-title">
                            Thông tin ứng viên
                        </div>
                        <div className="ReasonBlacklist-common-info-content">
                            <div className="ReasonBlacklist-avt">
                                <img src={avt} alt="avt" />
                            </div>
                            <div className="ReasonBlacklist-name">
                                {name}
                            </div>
                            <div className="ReasonBlacklist-position">
                                {position}
                            </div>
                            <div className="ReasonBlacklist-skill-experience">
                                <div className="ReasonBlacklist-skill">
                                    <div className="ReasonBlacklist-skill-title">
                                        Kỹ năng
                                    </div>
                                    <div className="ReasonBlacklist-skill-content">
                                        {skills}
                                    </div>
                                </div>
                                <div className="ReasonBlacklist-experience">
                                    <div className="ReasonBlacklist-experience-title">
                                        Kinh nghiệm
                                    </div>
                                    <div className="ReasonBlacklist-experience-content">
                                        {experience} năm
                                    </div>

                                </div>
                            </div>
                            <div className={`ReasonBlacklist-status ${status === "Accept" ? "ReasonBlacklist-accept" : ""} 
                                ${status === "In process" ? "ReasonBlacklist-process" : ""} 
                                ${status === "Blacklist" ? "ReasonBlacklist-blacklist" : ""}  
                            `}>
                                {status}
                            </div>

                        </div>
                    </div>
                    <div className="ReasonBlacklist-cv">
                        <div className="ReasonBlacklist-cv-title">
                            CV ứng viên
                        </div>
                        <div className="ReasonBlacklist-cv-content">
                            <img src="https://static.cuongquach.com/resources/images/2018/07/mau-cv-dep-9.jpg" alt="avt" />
                        </div>
                    </div>
                </div>
                <div className="ReasonBlacklist-form">
                    <h2>Lý do cho vào danh sách đen</h2>
                    <div className="ReasonBlacklist-caution">
                        Hãy cẩn thận khi đưa ứng viên vào danh sách đen
                    </div>
                    <div className="ReasonBlacklist-name-admin">
                        <div className="ReasonBlacklist-name-admin-title">
                            Họ và tên Admin
                        </div>
                        <input type='text' className="ReasonBlacklist-form-name-admin" />
                    </div>
                    <div className="ReasonBlacklist-email">
                        <div className="ReasonBlacklist-email-title">
                            Email Admin
                        </div>
                        <input type='text' className="ReasonBlacklist-form-email" />
                    </div>
                    <div className="ReasonBlacklist-reason">
                        <div className="ReasonBlacklist-reson-title">
                            Lý do
                        </div>
                        <textarea type='text' className="ReasonBlacklist-form-reason" />
                    </div>
                    <div className="ReasonBlacklist-button">
                        <button className="ReasonBlacklist-cancel">
                            <Link to="/manage-candidate" className="ReasonBlacklist-link">Hủy</Link>
                        </button>
                        <button className="ReasonBlacklist-add">
                            <Link to="/manage-candidate" className="ReasonBlacklist-link">Thêm vào danh sách đen</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default InterviewMeeting;
