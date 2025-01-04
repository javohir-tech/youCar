import { Button } from 'react-bootstrap'
import banner from '../assets/banner.png'
import balon from '../assets/balon.png'


export default function Banner() {
    return (
        <section className='mb-3 banner-section rounded position-relative px-3 pt-5 ' >
            <div className="row ">
                <div className="col-lg-5 order-2 order-lg-1">
                </div>
                <div className='col-lg-6 order-1 order-lg-2'>
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
            <span className='position-absolute  banner-section__img'><img src={banner} alt="img" /></span>
            <span className='position-absolute banner-lines banner-line__one'></span>
            <span className='position-absolute banner-lines banner-line__two'></span>
            <span className='position-absolute banner-lines banner-line__three'></span>
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
