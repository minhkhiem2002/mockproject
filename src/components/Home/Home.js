import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Header from "./../Header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  './Home.scss'
import Footer from "./../Footer/Footer";

function Home() {
    const texts = ['Định hướng nghề nghiệp', 'Việc làm mới', 'CV mới', 'Phúc lợi tốt', 'Mức lương cao'];
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
    }, [texts.length]);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div className = "home">
        <Header/>
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title style = {{fontSize: "15px", fontWeight: "600"}}> PRIMECMR - Tiếp lợi thế, nối thành công</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/5y9EYHhAwPs?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
              autoPlay
            ></iframe>
            <div className = "modalContainer">
                <div className = "modalContainer modalleft">
                    <img
                    src = "https://www.topcv.vn/v4/image/welcome/section-header/toppy-hr-tech.png?v=1.0.0"
                    alt = "imagebanner" 
                    width = "90%"
                    height = "90%"
                    />
                </div>
                <div className = "modalContainer modalright">
                    <p style = {{fontSize: "14px", marginTop: "20px", fontWeight: "400"}}>Trong sự nghiệp, chọn đúng việc, đi đúng hướng là một <span style = {{color: "#24a84b", fontWeight: "600"}}>lợi thế </span> <br/>
                        Định vị bản thân chính xác là một <span style = {{color: "#24a84b", fontWeight: "600"}}>lợi thế </span> <br/>
                        Kết nối bền chặt cùng đồng nghiệp cũng là một <span style = {{color: "#24a84b", fontWeight: "600"}}>lợi thế </span> <br/>
                        TopCV hiểu rõ, <span style = {{color: "#24a84b", fontWeight: "600"}}>lợi thế </span> nằm trong tay bạn! <br/>
                        <span style = {{color: "#24a84b", fontWeight: "600"}}>Với Hệ sinh thái HR Tech, TopCV luôn đồng hành để bạn thành công trong sự nghiệp</span>
                    </p>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
              Tìm hiểu thêm
            </Button>
          </Modal.Footer>
        </Modal>
            <div className = "homeheader">  
                <div className = "homeheader homeleft">       
                    <Col >
                        <Row> <p className = "hometext" style = {{fontSize: "40px", fontWeight: "bold", display: "block", marginLeft: "100px"}}>Ứng tuyển bất cứ nơi đâu! </p> </Row>
                        <Row> <p className = "hometext" style = {{fontSize: "28px", fontWeight: "bold", display: "block", marginLeft: "100px"}}> <span style = {{color: "#2c991c"}}>{texts[currentIndex]}</span> dành cho bạn </p> </Row>
                        <Row> <p style = {{ fontSize: "18px", fontWeight: "600", display: "block", marginLeft: "100px"}}><span className = "hometextlogo">PrimeCMR</span> - Khởi đầu thành công</p> </Row>
                        <Row style = {{border: "1px green solid" ,marginLeft: "90px", paddingLeft: "-20px", marginBottom: "15px"}}> 
                            <div className = "homebox">
                                <div className = "homebox homeboxleft">
                                    <i style = {{marginTop: "0px", marginLeft: "-10px", marginRight: "-10px", fontSize: "50px"}} className ="bi bi-award"></i>
                                </div>
                                <div className = "homebox homeboxright">
                                    <Col>
                                        <Row><p style = {{marginTop: "10px", marginLeft: "-30px", fontWeight: "500"}}>Việc làm xứng tầm</p></Row>
                                        <Row><p style = {{marginTop: "-10px", marginLeft: "-30px"}}>Thăng tiến nhanh, công việc hấp dẫn, thu nhập xứng tầm</p></Row>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                        <Row style = {{border: "1px green solid" ,marginLeft: "90px", paddingLeft: "-20px", marginBottom: "15px"}}> 
                            <div className = "homebox">
                                <div className = "homebox homeboxleft">
                                    <i style = {{marginTop: "0px", marginLeft: "-10px", marginRight: "-10px", fontSize: "50px"}} className ="bi bi-person-circle"></i>
                                </div>
                                <div className = "homebox homeboxright">
                                    <Col>
                                        <Row><p style = {{marginTop: "10px", marginLeft: "-30px", fontWeight: "500"}}>Cá nhân hóa trải nghiệm</p></Row>
                                        <Row><p style = {{marginTop: "-10px", marginLeft: "-30px"}}>Sử dụng công nghệ AI dự đoán, cá nhân hoá việc làm</p></Row>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                        <Row style = {{border: "1px green solid" ,marginLeft: "90px", paddingLeft: "-20px"}}> 
                            <div className = "homebox">
                                <div className = "homebox homeboxleft">
                                    <i style = {{marginTop: "0px", marginLeft: "-10px", marginRight: "-10px", fontSize: "50px"}} className ="bi bi-graph-up-arrow"></i>
                                </div>
                                <div className = "homebox homeboxright">
                                    <Col>
                                        <Row><p style = {{marginTop: "10px", marginLeft: "-30px", fontWeight: "500"}}>Đồng hành cùng bạn trên hành trình sự nghiệp</p></Row>
                                        <Row><p style = {{marginTop: "-10px", marginLeft: "-30px"}}>Tìm kiếm, kết nối, xây dựng thành công</p></Row>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </div>
                <div className = "homeheader homeright">
                    <img
                        className = "homeheader homeright jumpimage"
                        src = "https://www.topcv.vn/v4/image/welcome/mobile-app/mobile.png" 
                        alt = "jumpimage"
                    />
                </div>
            </div>
            <hr/>
            <div className = "homecontainer">
                <Container>
                    <div className = "homecontainer homecontainerheader">
                        <Col>
                            <Row>
                                <p>Tính năng nổi bật</p>
                            </Row>
                            <Row>
                                <span>Những tính năng của ứng dụng PrimeCMR giúp ứng viên dễ dàng ứng tuyển, <br/> nâng cao trải nghiệm tìm việc trong kỷ nguyên số</span>
                            </Row>
                        </Col>
                    </div>
                    <div className = "homecontainer homecontainerbody">
                        <Row>
                            <Col xs = {7}>
                            <p style = {{fontSize: "35px", color: "#28954b", fontWeight: "bold"}}>Chọn đúng việc - Đi đúng hướng</p>
                            <p style = {{fontSize: "20px", fontWeight: "400", color: "#606260"}}>Cá nhân hoá trải nghiệm tìm việc theo nhu cầu ứng viên gồm các tính năng <br/> Gợi ý việc làm phù hợp, Tìm kiếm việc làm, Việc làm gần bạn, Công ty nổi bật và Top Connect - Chat trực tiếp với Nhà tuyển dụng.</p>
                            </Col>
                            <Col style = {{textAlign: "center"}}>
                                <img    
                                src = "https://www.topcv.vn/v4/image/welcome/mobile-app/select_truejob.png"
                                alt = "img"
                                width = "90%"
                                height = "400px"
                                marginTop = "40px" 
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className = "homecontainer homecontainerbody" style = {{marginTop: "30px"}}>
                        <Row>
                            <Col style = {{textAlign: "center"}}>
                                <img    
                                src = "https://www.topcv.vn/v4/image/welcome/mobile-app/share_together.png"
                                alt = "img"
                                width = "90%"
                                height = "400px"
                                marginTop = "40px" 
                                />
                            </Col>
                            <Col xs = {7}>
                            <p style = {{fontSize: "35px", color: "#28954b", fontWeight: "bold"}}>Cùng chia sẻ - Cùng vươn xa</p>
                            <p style = {{fontSize: "20px", fontWeight: "400", color: "#606260"}}>Các bài viết chia sẻ kinh nghiệm thành công trong môi trường công sở, kinh nghiệm tìm việc, phát triển kỹ năng và viết CV được chọn lọc theo mức độ kinh nghiệm và số năm đi làm của ứng viên.</p>
                            </Col>
                        </Row>
                    </div>
                    <div className = "homecontainer homecontainerbody" style = {{marginTop: "30px"}}>
                        <Row>
                            <Col xs = {7}>
                            <p style = {{fontSize: "35px", color: "#28954b", fontWeight: "bold"}}>PrimeCMR Podcast</p>
                            <p style = {{fontSize: "20px", fontWeight: "400", color: "#606260"}}>Các Podcast với nội dung chiều sâu, hữu ích cho người đi làm được chia sẻ bởi chuyên gia và TopCV về các chủ đề tìm việc, phỏng vấn, ứng dụng công nghệ trong công việc.</p>
                            </Col>
                            <Col style = {{textAlign: "center"}}>
                                <img    
                                src = "https://www.topcv.vn/v4/image/welcome/mobile-app/topcv_podcast.png"
                                alt = "img"
                                width = "90%"
                                height = "400px"
                                marginTop = "40px" 
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className = "homecontainer homecontainerbody" style = {{marginTop: "30px"}}>
                        <Row>
                            <Col style = {{textAlign: "center"}}>
                                <img    
                                src = "https://www.topcv.vn/v4/image/welcome/mobile-app/tools.png"
                                alt = "img"
                                width = "90%"
                                height = "400px"
                                marginTop = "40px" 
                                />
                            </Col>
                            <Col xs = {7}>
                            <p style = {{fontSize: "35px", color: "#28954b", fontWeight: "bold"}}>Thêm công cụ - Thêm vượt trội</p>
                            <p style = {{fontSize: "20px", fontWeight: "400", color: "#606260"}}>Các công cụ hữu ích cho người đi làm bao gồm:
                            <li>Công cụ chuyển đổi lương Gross - Net</li>
                            <li>Công cụ tính thuế thu nhập cá nhân</li>
                            <li>Công cụ tính Bảo hiểm thất nghiệp</li>
                            <li>Công cụ tính BHXH 1 lần.</li></p>
                            </Col>
                        </Row>
                    </div>
                    <div className = "homecontainer homecontainerbody" style = {{marginTop: "30px"}}>
                        <Row>
                            <Col xs = {7}>
                            <p style = {{fontSize: "35px", color: "#28954b", fontWeight: "bold"}}>Định vị bản thân</p>
                            <p style = {{fontSize: "20px", fontWeight: "400", color: "#606260"}}>Các công cụ trắc nghiệm tính cách giúp cho ứng viên hiểu hơn về bản thân, bao gồm:
                            <li>Trắc nghiệm tính cách MBTI.</li>
                            <li>Trắc nghiệm đa trí thông minh MI.</li></p>
                            </Col>
                            <Col style = {{textAlign: "center"}}>
                                <img    
                                src = "https://www.topcv.vn/v4/image/welcome/mobile-app/mbti_mi.png"
                                alt = "img"
                                width = "90%"
                                height = "400px"
                                marginTop = "40px" 
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className = "homecontainer homecontainerbody" style = {{marginTop: "30px", marginBottom: "40px"}}>
                        <Row>
                            <Col style = {{textAlign: "center"}}>
                                <img    
                                src = "https://www.topcv.vn/v4/image/welcome/mobile-app/cv_profile.png"
                                alt = "img"
                                width = "90%"
                                height = "400px"
                                marginTop = "40px" 
                                />
                            </Col>
                            <Col xs = {7}>
                            <p style = {{fontSize: "35px", color: "#28954b", fontWeight: "bold"}}>Tạo CV & Profile</p>
                            <p style = {{fontSize: "20px", fontWeight: "400", color: "#606260"}}>Công cụ tạo CV online số 1 Việt Nam đã có phiên bản ứng dụng điện thoại.<br/>
                            Tạo CV, Cover Letter và Profile ngay trên điện thoại.<br/>
                            Thuận tiện, nhanh chóng, chuyên nghiệp và khác biệt.<br/>
                            Tăng 80% tỉ lệ ứng tuyển thành công.</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer/>
      </div>
    );
}

export default Home;
