//useFetch
import { useFetch } from '../Hooks/useFetch'

//react router dom
import { Link } from 'react-router-dom'

//icons
import { FaArrowRight } from "react-icons/fa";

export default function NewsSection() {
    const {data} = useFetch("https://api.youcarrf.ru/news")
    console.log(data)
    return (
        <section className='news-section my-5'>
            <h1 className='section-header my-3'>
                Новости
            </h1>
            <div className='row g-2 news-card'>
                {data && data.map((news)=>{
                    return <div key={news.id} className='news-card col-md-6 col-lg-3'>
                        <div className='news-card__img'>
                            <img src={news.image} alt={news.title}  className='img-fluid rounded' style={{height:"180px", width:"100%"}}/>
                        </div>
                        <div className='news-card__info mt-3 d-flex flex-column ' style={{height:"180px",}}>
                            <h3 className='mb-3'>{news.title}</h3>
                            <p className='mb-auto'>{news.content.split(" ").slice(0, 25).join(" ")}...</p>
                            <Link>Подробнее<FaArrowRight className='ms-2'/></Link>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}