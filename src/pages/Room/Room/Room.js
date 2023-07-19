import React from 'react';
import { useState, useEffect } from 'react';
import "./room.scss"
import data from "./data.json"
import { Link, useParams } from 'react-router-dom';



const Room = () => {
    const [tableData, setTableData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [events, setEvents] = useState([]);
    useEffect(() => {
        setTableData(data);
    }, []);

    return (
        <div className='Room-home'>
            <h4>Các cuộc phỏng vấn gần đây</h4>
            <Link to={`/room/create`}>
                <button id='addRoom' >Thêm phòng họp</button>
            </Link>
            <div className='container-company'>
                {tableData.map((item) => (

                    <div className='company-item' key={item.id}>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png' />
                            <h3>{item.RoomName}</h3>
                            <p>{item.RoomType}</p>
                            <button className='status'>{item.Status}</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>{item.RoomDescription}</p>
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
                            <div className='adjustButton'>

                                <button className='DetailButton'><Link to={`/room/${item.RoomId}`}> Detail     </Link></button>

                                <button className='EditButton'  ><Link to={`/room/${item.RoomId}`}> Edit </Link></button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Room;