//bootstrap
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

//react router dom
import { Form, Link, NavLink, } from 'react-router-dom'

//icons 
import { FaVk, FaWhatsapp, FaInstagram, FaPhoneAlt, FaChevronRight, FaRegBell } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-body-terti shadow">
      <Container className='d-block'>
        <div className='d-flex align-items-center flex-grow-1  gap-3'>
          <Link to="/" className='d-lg-none  navbar-main__link' href="#home">YouCar</Link>
          <div className='flex-grow-1 d-lg-none'>
            <input
              type="text"
              placeholder=" Search"
              className=" mr-sm-2 form-control"
            />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className='flex-column align-items-stretch gap-2'>
          <div className='d-flex align-items-lg-center mt-3 m-lg-0 justify-content-between '>
            <Nav className="me-auto nav-link">
              <NavLink className="me-3" to="/">Главная</NavLink>
              <NavLink className="me-3" to="/katalok">Каталог</NavLink>
              <NavLink className="me-3" to="/about">О нас</NavLink>
              <NavLink className="me-3" to="/news">Новости</NavLink>
              <NavLink className="me-3" to="/contact">Контакты</NavLink>
            </Nav>
            <div className='d-lg-none d-flex gap-2'>
              <div>
                <select className="form-select" aria-label="Default select example">
                  <option value="1">ru</option>
                  <option value="2">uz</option>
                  <option value="3">eng</option>
                </select>
              </div>
              <Link><FaRegBell style={{ fontSize: "22px ", color: "rgba(41, 56, 67, 1)" }} /></Link>
            </div>
            <div className=' gap-4 flex-column flex-lg-row  align-items-lg-center social-media d-none d-lg-flex'>
              <div className='d-flex gap-3'>
                <a className='text-secondary' href="" target='_blank'><FaVk /></a>
                <a className='text-secondary' href="" target='_blank'><FaWhatsapp /></a>
                <a className='text-secondary' href="" target='_blank'><FaInstagram /></a>
              </div>
              <a href='' target='_blank' className='mb-0 text-secondary'><FaPhoneAlt /> +7 (777) 777 77 77 </a>
              <a href='' target='_blank' className='mb-0 text-secondary'><MdOutlineEmail /> info@mail.ru </a>
              <div>
                <select className="form-select" aria-label="Default select example">
                  <option value="1">ru</option>
                  <option value="2">uz</option>
                  <option value="3">eng</option>
                </select>
              </div>
            </div>
          </div>
          <div className='under-section d-flex flex-column flex-lg-row align-items-lg-center gap-4 mt-3 mt-lg-0'>
            <Link to="/" className='navbar-brand d-none d-lg-block' href="#home">YouCar</Link>
            <div className='avtos d-flex align-items-center gap-1 justify-content-between p-3 p-lg-0 rounded '>
              <p className='mb-0'>Автомобили</p><span><FaChevronRight className='text-primary' /></span>
            </div>
            <div className='avtos d-flex align-items-center gap-1 justify-content-between p-3 p-lg-0 rounded'>
              <p className='mb-0'>Коммерческий транспорт</p><span><FaChevronRight className='text-primary' /></span>
            </div>
            <div className='avtos d-flex align-items-center gap-1 justify-content-between p-3 p-lg-0 rounded'>
              <p className='mb-0'>Мотоциклы</p><span><FaChevronRight className='text-primary' /></span>
            </div>
            <div className='flex-grow-1'>       
                <input
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 py-3 d-none d-lg-block form-control"
                  name='search'
                />
            </div>
            <div className='d-flex gap-4 flex-column flex-lg-row  align-items-lg-center social-media d-lg-none '>
              <div className='d-flex gap-3'>
                <a className='text-secondary' href="" target='_blank'><FaVk /></a>
                <a className='text-secondary' href="" target='_blank'><FaWhatsapp /></a>
                <a className='text-secondary' href="" target='_blank'><FaInstagram /></a>
              </div>
              <a href='' target='_blank' className='mb-0 text-secondary'><FaPhoneAlt /> +7 (777) 777 77 77 </a>
              <a href='' target='_blank' className='mb-0 text-secondary'><MdOutlineEmail /> info@mail.ru </a>
            </div>
            <div className='d-flex flex-column flex-lg-row'>
              <Button variant='' className='p-3'>Войти</Button>
              <Button variant='primary' className='p-3'>Регистрация</Button>
            </div>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
