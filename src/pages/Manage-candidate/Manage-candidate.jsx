import React, { useState } from 'react';
import './Manage-candidate.scss';
import background from '../../assets/background.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import user from '../user'
import { Link } from 'react-router-dom';


function ManageCandidate() {

    const ROWS_PER_PAGE = 11;
    const [initialSearchValue, setInitialSearchValue] = useState('');
    const [currentPageCandidate, setCurrentPageCandidate] = useState(1);
    const candidateUsers = user.filter(item => item.permission === "Candidate");

    //Candidate
    const handlePageChangeCandidate = (pageNumber) => {
        setCurrentPageCandidate(pageNumber);
    };

    const filteredCandidateUsers = candidateUsers.filter((item) => {
        return (
            item.name.toLowerCase().includes(initialSearchValue.toLowerCase()) ||
            item.email.toLowerCase().includes(initialSearchValue.toLowerCase())
        );
    });

    const totalRowsCandidate = filteredCandidateUsers.length;
    const totalPagesCandidate = Math.ceil(totalRowsCandidate / ROWS_PER_PAGE);

    const startRowCandidate = (currentPageCandidate - 1) * ROWS_PER_PAGE;
    const endRowCandidate = Math.min(startRowCandidate + ROWS_PER_PAGE, totalRowsCandidate);
    const currentRowsCandidate = filteredCandidateUsers.slice(startRowCandidate, endRowCandidate);

    //Search
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
        setInitialSearchValue(searchValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="Manage-candidate-container" >
            <div className="Manage-candidate-tab-name">
                <div className="Manage-candidate-content-tab-name">
                    Quản lý ứng viên
                </div>
                <div className="button-tab-name">
                    <button className="Manage-candidate-button-back">Back</button>
                </div>
            </div>

            <div className="Manage-candidate-search-container">
                <form className="Manage-candidate-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type name/email ..."
                        name="search"
                        className="Manage-candidate-form-search"
                        value={searchValue}
                        onChange={handleSearchInputChange}
                    />
                </form>
            </div>

            <div className="Manage-candidate-candidate-list">
                <div className="Manage-candidate-pagination">
                    <button
                        className="Manage-candidate-button-prev"
                        disabled={currentPageCandidate === 1}
                        onClick={() => handlePageChangeCandidate(currentPageCandidate - 1)}
                    >
                        <FontAwesomeIcon icon={faBackward} />
                    </button>

                    <div className="page-position">{currentPageCandidate} / {totalPagesCandidate}</div>

                    <button
                        className="Manage-candidate-button-next"
                        disabled={currentPageCandidate === totalPagesCandidate}
                        onClick={() => handlePageChangeCandidate(currentPageCandidate + 1)}
                    >
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>

                <div className="Manage-candidate-title">
                    <div className="Manage-candidate-name-candidate">Họ và tên/Email</div>
                    <div className="Manage-candidate-score-candidate">Điểm số</div>
                    <div className="Manage-candidate-date-register-candidate">Ngày đăng ký tài khoản</div>
                    <div className="Manage-candidate-position">Vị trí ứng tuyển</div>
                    <div className="Manage-candidate-status">Trạng thái ứng tuyển</div>
                    <div className="Manage-candidate-details-candidate">Chi tiết</div>
                </div>

                {currentRowsCandidate.filter((item) => {
                    return (
                        item.name.toLowerCase().includes(initialSearchValue.toLowerCase()) ||
                        item.email.toLowerCase().includes(initialSearchValue.toLowerCase())
                    );
                })
                    .map((item) => (
                        <div key={item.id}>
                            {item.permission === "Candidate" && ( // Kiểm tra điều kiện permission bằng "Candidate"
                                <div className="Manage-candidate-table-user">
                                    <div className="Manage-candidate-name-content-candidate">
                                        <div className="avt">
                                            <div className="Manage-candidate-circle">
                                                <img src={item.avt} alt="avt" />
                                            </div>
                                        </div>

                                        <div className="Manage-candidate-name-email">
                                            <div className="Manage-candidate-name-detail">{item.name}</div>
                                            <div className="Manage-candidate-email-detail">{item.email}</div>
                                        </div>
                                    </div>
                                    <div className="Manage-candidate-score-content-candidate">{item.score}</div>
                                    <div className="Manage-candidate-date-register-content-candidate">{item.date}</div>
                                    <div className="Manage-candidate-position-content">{item.position}</div>
                                    <div className="Manage-candidate-status-content">
                                        <div className={`frame-status ${item.status === "Accept" ? "Manage-candidate-accept" : ""} 
                                ${item.status === "In process" ? "Manage-candidate-process" : ""} 
                                ${item.status === "Blacklist" ? "Manage-candidate-blacklist" : ""} 
                                `}>{item.status}</div>
                                    </div>
                                    <div className="Manage-candidate-details-content-candidate" >
                                        <button className={`Manage-candidate-button-edit-candidate ${item.status === "Blacklist" ? "disable-blacklist" : ""}`}>
                                            <Link className={`Manage-candidate-color-button-add ${item.status === "Blacklist" ? "disable-link" : ""}`}
                                                to={item.status !== "Blacklist" ? `/reason-blacklist/${item.id}` : "#"}>
                                                Add blacklist
                                            </Link>
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

            </div>
        </div>
    );
}
export default ManageCandidate;