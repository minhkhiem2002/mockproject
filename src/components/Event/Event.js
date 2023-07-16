import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import "./Event.scss"
import Header from "./../Header/Header";
import event from "../../data/event.json"
import Footer from "./../Footer/Footer";

function Event() {
    const EVENTS_PER_PAGE = 3;
    const eventdata = event;
    const [currentPage, setCurrentPage] = useState(1);
    const [showResults, setShowResults] = useState(true);
    const totalEventPage = Math.ceil(eventdata.length / EVENTS_PER_PAGE);
    const paginatedData = eventdata.slice(
        (currentPage - 1) * EVENTS_PER_PAGE,
        currentPage * EVENTS_PER_PAGE
      );
    return (
        
        <div className = "event">
            <Header/>
            <h1 className = "text1"> Sự Kiện</h1>
            <p className = "text2">Các sự kiện nghiên cứu đang diễn ra tại FPT SoftWare</p> 
            <div className = "eventsplit">
                <div className = "eventleft">
                    <Container style = {{width: "90%", marginLeft: "20px", backgroundColor: "#f4f5f5", marginRight: "20px"}}>
                        <Row>
                        <div style = {{width: "100%", marginLeft: "20px"}}>
                            <h2> <span style = {{borderLeft: "6px solid #00b14f", marginLeft: "-20px"}}></span><span style = {{marginLeft: "10px"}}>Sự kiện đang diễn ra</span></h2>   
                        </div>
                        </Row>
                        <Row style = {{textAlign: "center"}}>
                        {paginatedData.map((item) => (
                            <div key = {item.id} style = {{textAlign: "center", backgroundColor: "white",width: "500px", marginLeft: "140px", borderRadius: "10px", marginTop: "30px"}}>
                                <img
                                src = {item.image}
                                alt = "Pictures"
                                width = "500px"
                                height = "300px" 
                                style={{ borderRadius: "10px 10px 0 0", marginLeft: "-12px"}}
                                />
                                <Row style = {{marginTop: "20px", marginBottom: "20px", marginLeft: "-20px"}}>
                                    <Col><i className="bi bi-calendar2-month" style = {{color: "#00b14f"}}></i> {item.time} </Col>
                                    <Col><i className="bi bi-person" style = {{color: "#00b14f", marginLeft: "-10px"}}></i> {item.author} </Col>
                                    <Col><i className="bi bi-chat-dots" style = {{color: "#00b14f"}}></i> No Comment </Col>
                                </Row>
                                <Row>
                                    <p style = {{fontSize: "20px", fontWeight: "600", lineHeight: "28px", fontStyle: "normal", textAlign: "left"}}>{item.name}</p>
                                </Row>
                                <Row>
                                    <p style = {{fontSize: "15px", color: "#4d5965", fontWeight: "400", lineHeight: "20px", fontStyle: "normal", textAlign: "left"}}> {item.article} </p>
                                </Row>
                                <Row xs = {3} key = {item.id}>
                                <Link to={`/event/detailevent/${item.id}`} style={{ textDecoration: "none" }} target="_blank" onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`/event/detailevent/${item.id}`, '_blank');
                                    }}>
                                    <Button className = "btn btn-md justify-center" variant = "outline-success" style = {{width: "150px", marginLeft: "170px", marginBottom: "20px"}}>Tìm hiểu thêm</Button>
                                </Link>
                                </Row>
                            </div>
                        ))}
                        {totalEventPage > 1 && (
            <div className="d-flex justify-content-center mt-3" style = {{marginBottom: "30px"}}>
              <Button
                variant="outline-success"
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                disabled={currentPage === 1}
                className="me-2 rounded-circle btn btn-md "
              >
               <span>&lt;</span>
              </Button>
              <span className="align-self-center">
                {currentPage}/{totalEventPage} trang
              </span>
              <Button
                variant="outline-success"
                onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                disabled={currentPage === totalEventPage}
                className="ms-2 rounded-circle btn btn-md "
                
              >
                <span>&gt;</span>
              </Button>
            </div>
          )}
                        </Row>
                    </Container>
                </div>
                <div className = "eventright">
                    <h4>Our Journal</h4>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Event;