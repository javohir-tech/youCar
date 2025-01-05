//bootstrap
import { Button } from 'react-bootstrap'

//images
import banner from '../assets/banner.png'
import balon from '../assets/balon.png'

//AOS animation
import 'aos/dist/aos.css';
import AOS from 'aos';

//react 
import { useEffect } from 'react';


export default function Banner() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          offset: 200,     // Animatsiya boshlanishigacha 200px masofa
          delay: 50,
        }); // Animatsiya davomiyligi (ms)
      }, []);

    return (
        <section className='mb-3 banner-section rounded position-relative px-3 pt-5 ' >
            <div className="row ">
                <div className="col-lg-5 order-2 order-lg-1">
                </div>
                <div className='col-lg-6 order-1 order-lg-2' data-aos="fade-up">
                    <h1>О нашей компании</h1>
                    <p>
                        Мы имеем огромный опыт работы с
                        автомобильным рынком Кореи и тщательно отбираем автомобили
                        для наших клиентов, учитывая их потребности и бюджет.
                        Мы работаем только с надежными поставщиками и перевозчиками,
                        чтобы обеспечить безопасность и надежность доставки.
                    </p>
                    <Button variant='primary' className='py-3'>Связаться с нами</Button>
                </div>
            </div>
            <span className='position-absolute  banner-section__img'><img src={banner} alt="img" data-aos="fade-left"/></span>
            <span className='position-absolute banner-lines banner-line__one' data-aos="fade-up"></span>
            <span className='position-absolute banner-lines banner-line__two' data-aos="fade-down"></span>
            <span className='position-absolute banner-lines banner-line__three' data-aos="fade-up"></span>
            <div className='d-none d-lg-block'>
                <span className='position-absolute bg-primary p-5 text-light banner-section__afisha'>№1</span>
                <span className='position-absolute banner-img__one'><img src={balon} alt="" /></span>
                <span className='position-absolute banner-img__two'><img src={balon} alt="" /></span>
                <span className='position-absolute banner-img__three'><img src={balon} alt="" /></span>
                <span className='position-absolute banner-img__four'><img src={balon} alt="" /></span>
            </div>
        </section>
    )
}
