//react
import { useEffect } from 'react'

//custom hooks 
import { useFetch } from '../Hooks/useFetch'

//AOS animation
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Marks() {
    const { data } = useFetch("https://api.youcarrf.ru/marks")


    useEffect(() => {
        AOS.init({
          duration: 900,
          easing: 'ease-in-out',
          once: true,
          offset: 200,    
          delay: 50,
        });
      }, []);
    return (
        <section className='marks-section my-5'>
            <div className="row p-2">
                {data && data.map((mark) => {
                    return <div key={mark.id} data-aos="fade-up" className='col-6 col-md-4 col-lg-2 p-0'>
                        <img src={mark.image} className='img-fluid w-100' alt="" />
                    </div>
                })}
            </div>
        </section>
    )
}
