import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import "./RoomDetail.scss"
import data from '../data.json';


const RoomDetail = () => {
    const history = useNavigate();
    let { id } = useParams();
    const [info, setInfo] = useState(data.find((item) =>
        item.RoomId === parseInt(id)
    ))

    return (
        <div className='RoomDetail-home'>
            <div className='top-main'>
                <h1>Hello Devs</h1>
            </div>
            <div className='container-company'>

                <div className='company-item' key={info.id}>
                    <div className='company-item-top'>
                        <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png' />
                        <h3>{info.RoomName}</h3>
                        <p>{info.RoomType}</p>
                        <button className='status'>{info.Status}</button>
                        <Link to={`/room/${info.RoomId}/candidate`}>
                            <button className='AddButton'>Thêm ứng viên vào phòng họp</button>
                        </Link>
                    </div>
                    <div className='company-item-mid'>
                        <p>{info.RoomDescription}</p>
                    </div>
                    <div className='company-item-bot'>
                        <button className='date'>
                            <h4>Feb 6, 2021</h4>
                            <p>Due date</p>
                        </button>
                        <button className='salary'>
                            <h4>$284,900.00</h4>
                            <p>Budget</p>
                        </button>

                    </div>
                </div>

                <div className='info-container'>
                    <h2>Thông tin cơ bản</h2>
                    <div className='form-edit'>
                        <div className='info-item' style={{ marginTop: '15px' }}>
                            <span>Logo phòng họp</span>
                            <input className='info' value={info.RoomName} />
                        </div>
                        <div className='info-item'>
                            <span>Tên phòng họp</span>
                            <input className='info' value={info.RoomName} />
                        </div>
                        <div className='info-item'>
                            <span>Email</span>
                            <input className='info' value={info.RoomName} />
                        </div>
                        <div className='info-item'>
                            <span>Số điện thoại</span>
                            <input className='info' value={info.RoomName} />
                        </div>
                        <div className='info-item'>
                            <span>Địa chỉ</span>
                            <input className='info' value={info.RoomName} />
                        </div>
                    </div>
                    <Link to={'/Room'}>
                        <button className='BackButton'>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;
