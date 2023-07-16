import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import userData from '../../data/userData.json'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/action/action.js';
import './Header.scss'

function Header() {
  const [isCompanyHovered, setCompanyHovered] = useState(false);
  const [isProfileHovered, setProfileHovered] = useState(false);
  const [isJobMenuOpen, setJobMenuOpen] = useState(false);

  const handleJobMenuEnter = () => {
    setJobMenuOpen(true);
  };

  const handleJobMenuLeave = () => {
    setJobMenuOpen(false);
  };
  const handleCompanyMouseEnter = () => {
    setCompanyHovered(true);
  };

  const handleCompanyMouseLeave = () => {
    setCompanyHovered(false);
  };

  const handleProfileMouseEnter = () => {
    setProfileHovered(true);
  };

  const handleProfileMouseLeave = () => {
    setProfileHovered(false);
  };
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedLoggedInStatus) {
      dispatch(login());
    }
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(login());
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isLoggedIn');
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { name, avatar } = userData;

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavLink to="/" >
          <Navbar.Brand >
            <p className="text text-center bg-secondary">PrimeCMR</p>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink
              to="/company"
              id="/company"
              className={`item ${isCompanyHovered ? 'text-success' : ''}`}
              style={{ textDecoration: 'none' }}
              onMouseEnter={handleCompanyMouseEnter}
              onMouseLeave={handleCompanyMouseLeave}
            >
              Công Ty
            </NavLink>
            <NavLink
              to="/cvhandler"
              className={`item ${isProfileHovered ? 'text-success' : ''}`}
              style={{ textDecoration: 'none' }}
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
            >
              Hồ sơ & CV
            </NavLink>
            <NavDropdown
              title="Việc làm"
              id="navbarScrollingDropdown"
              className="item job-link"
              onMouseEnter={handleJobMenuEnter}
              onMouseLeave={handleJobMenuLeave}
              show={isJobMenuOpen}
            >
              <NavDropdown.Item>
                <NavLink
                  to="/body"
                  className={`item ${isProfileHovered ? 'text-success' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-search ms-2"></i> Tìm việc làm
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/submitjob"
                  className={`item ${isProfileHovered ? 'text-success' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-clipboard-fill ms-2"></i> Việc làm đã ứng tuyển
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/event"
              className={`item ${isProfileHovered ? 'text-success' : ''}`}
              style={{ textDecoration: 'none' }}
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
            >
              Sự kiện
            </NavLink>
          </Nav>
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <div className="me-2">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="user-avatar"
                  onClick={handleDropdownToggle}
                />
              </div>
              <div  onClick={handleDropdownToggle}>
                <span>{name}</span>
                <i className="bi bi-chevron-down ms-1"></i>
              </div>
              {isDropdownOpen && (
                <NavDropdown
                  title=""
                  id="basic-nav-dropdown"
                  show={isDropdownOpen}
                  onToggle={handleDropdownToggle}
                  align="end"
                  className="ms-auto"
                >
                  <NavDropdown.Item>
                      <NavLink
                      to="/personal-info"
                      className={`item ${isProfileHovered ? 'text-success' : ''}`}
                      style={{ textDecoration: 'none' }}
                    ><i className="bi bi-person" style = {{color: "#00b14f", marginRight: "10px", marginTop: "5px"}}></i>Thông tin cá nhân
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink
                      to="/personal-info"
                      className={`item ${isProfileHovered ? 'text-success' : ''}`}
                      style={{ textDecoration: 'none' }}
                    ><i className="bi bi-gear" style = {{color: "#00b14f", marginRight: "10px", marginTop: "5px"}}></i>Phỏng vấn
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink
                      to="/submitjob"
                      className={`item ${isProfileHovered ? 'text-success' : ''}`}
                      style={{ textDecoration: 'none' }}
                    ><i className="bi bi-cloud-minus" style = {{color: "#00b14f", marginRight: "10px", marginTop: "5px"}}></i>Việc làm đã nộp
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left" style = {{color: "#00b14f", marginRight: "10px", marginTop: "5px"}}></i> <span style = {{fontSize: "18px", fontWeight: "600", color: "red"}}>Đăng xuất</span>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </div>
          ) : (
            <>
              <Button className="btn btn-md justify-content-md-end" variant="outline-success" onClick={handleLogin}>
                Đăng nhập
              </Button>{' '}
              <Button className="btn btn-md justify-content-md-end" variant="outline-success">
                Đăng ký
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
