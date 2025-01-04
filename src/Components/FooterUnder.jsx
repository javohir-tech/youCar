import { Container } from 'react-bootstrap';
import { FaInstagram, FaVk, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <span className='text-primary footer-header'>You</span>
                        <span className='footer-header'>Car</span>
                        <div className='d-flex gap-3 social-media my-3'>
                            <a className='text-secondary' href="https://vk.com" target='_blank' rel="noopener noreferrer"><FaVk /></a>
                            <a className='text-secondary' href="https://www.whatsapp.com" target='_blank' rel="noopener noreferrer"><FaWhatsapp /></a>
                            <a className='text-secondary' href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                        <p className='under-line'>© 1-й автоброкерВнесём качественные изменения в Вашу жизнь!</p>
                    </div>
                    <div className="col-md-9 row">
                        <div className="col-6 col-md-3">
                            <h2>Компания</h2>
                            <ul>
                                <li><Link to="/">Компания</Link></li>
                                <li><Link to="/about">О нас</Link></li>
                                <li><Link to="/news">Новости</Link></li>
                                <li><Link to="/contacts">Контакты</Link></li>
                                <li><Link to="/">Избранные</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2>Автомобили</h2>
                            <ul>
                                <li><Link to="">Из Европы</Link></li>
                                <li><Link to="">Из США</Link></li>
                                <li><Link to="">Из ОАЭ</Link></li>
                                <li><Link to="">Из Китая</Link></li>
                                <li><Link to="">Из Кореи</Link></li>
                            </ul>
                        </div>
                        <div className=" col-md-5">
                            <h2>Марки</h2>
                            <div className='d-flex gap-3'>
                                <ul>
                                    <li><Link to="">Audi </Link></li>
                                    <li><Link to="">Aston Martin </Link></li>
                                    <li><Link to="">Acura </Link></li>
                                    <li><Link to="">Alfa Romeo</Link></li>
                                    <li><Link to="">Avatr </Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="">BMW</Link></li>
                                    <li><Link to="">Baic</Link></li>
                                    <li><Link to="">Byd</Link></li>
                                    <li><Link to="">Bentley</Link></li>
                                    <li><Link to="">Chery</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="">Cadillac</Link></li>
                                    <li><Link to="">Changan</Link></li>
                                    <li><Link to="">Chevrolet</Link></li>
                                    <li><Link to="">Citroen</Link></li>
                                    <li><Link to="">Daewoo</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="">Datsun</Link></li>
                                    <li><Link to="">Dodge</Link></li>
                                    <li><Link to="">EXEED</Link></li>
                                    <li><Link to="">Ferrari</Link></li>
                                    <li><Link to="">Fiat</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="">Ford</Link></li>
                                    <li><Link to="">GAC</Link></li>
                                    <li><Link to="">Geely</Link></li>
                                    <li><Link to="">Genesis</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
