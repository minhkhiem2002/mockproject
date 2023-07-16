import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from './../Header/Header';
import userData from '../../data/userData.json';
import accountData from '../../data/account.json';
import './PersonalInfo.scss';
import SelectOption from "./../SelectOption/SelectOption";
import { ToastContainer, toast } from 'react-toastify';


function PersonalInfo() {
  const [name, setName] = useState(userData.name);
  const [gender, setGender] = useState(userData.gender);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [address, setAddress] = useState(userData.address);
  const [password, setPassword] = useState(accountData.password);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSave = () => {
    // Thực hiện lưu thông tin cá nhân
    toast.success("Thông tin cá nhân đã được lưu", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
  };

  const handlePasswordChange = () => {
    // Thực hiện thay đổi mật khẩu
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và xác nhận mật khẩu không khớp", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
      return;
    }
  
    // Thực hiện thay đổi mật khẩu
    toast.success("Mật khẩu đã được thay đổi", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
  
    // Cập nhật lại giá trị mật khẩu
    setPassword(newPassword);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={4} className="sidebar">
            <SelectOption/>
          </Col>
          <Col className="main-content">
            <div className="section">
              <h1 className="section-title">Information</h1>
              <div className="avatar-wrapper">
                <img src={userData.avatar} alt="Avatar" className="avatar" />
                <Button variant="outline-success" className="change-avatar-btn">
                  Change
                </Button>
                <Form style = {{marginLeft: "10px"}}>
                <Form.Group controlId="formHello">
                  <Form.Label>Chào bạn trở lại: <span style = {{fontSize: "18px", fontWeight: "500"}}>{name}</span></Form.Label>
                </Form.Group>
                <Form.Group controlId="formHello">
                    <Form.Label>User Name: <span style = {{fontSize: "18px", fontWeight: "500"}}>{accountData.username}</span></Form.Label>
                </Form.Group>
                </Form>
              </div>
              
              <Form style = {{marginTop: "10px"}}>
                <Form.Group controlId="formName">
                  <Form.Label>Họ và Tên</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Giới tính</Form.Label>
                  <Form.Control type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formAddress">
                  <Form.Label>Địa chỉ</Form.Label>
                  <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

              <Form style={{ marginTop: "10px" }}>
                {/* Form content */}
                <div className="d-flex justify-content-end">
                  {/* Button "Save" */}
                  <Button variant="outline-success" className="save-btn" onClick={handleSave}>
                    Save
                  </Button>
                  <ToastContainer />
                </div>
              </Form>
                <ToastContainer/>
              </Form>
            </div>
            <div className="section">
              <h1 className="section-title">Password</h1>
              <Form>
                <Form.Group controlId="formCurrentPassword">
                  <Form.Label>Mật khẩu hiện tại</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formNewPassword">
                  <Form.Label>Mật khẩu mới</Form.Label>
                  <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                  <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <Form style={{ marginTop: "10px" }}>
                {/* Form content */}
                <div className="d-flex justify-content-end">
                  {/* Button "Save" */}
                  <Button variant="outline-success" className="change-password-btn" onClick={handlePasswordChange}>
                  Change Password
                </Button>
                  <ToastContainer />
                </div>
              </Form>
               
              </Form>
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PersonalInfo;
