//bootstarp
import { Button, Container } from 'react-bootstrap'

//components
import { CarsCard, Filter, SwiperCom } from '../Components'
import { useFetch } from '../Hooks/useFetch'
import { useEffect } from 'react'

export default function Home() {

  const {data,  isPending, error} =useFetch("https://api.youcarrf.ru/cars")

  useEffect(()=>{
    if(data){
      console.log(data)
    }
  }, [data])

  if(isPending){
    return <h1 className='text-center'>loading...</h1>
  }

  return (
    <Container>
      {/* banner section */}
      <section className='p-5 rounded banner-section rounded mt-3' style={{background:"rgba(244, 244, 244, 1)"}}>
      <div className="row">
        <div className="col-md-6">
          <h1>Новый Geely Monjaro!</h1>
          <p>Кроссовер Monjaro - премиальная модель Geely по уровню дизайна, материалов и технологий. </p>
          <Button  variant='primary'className='p-md-4' >Подробнее</Button>
        </div>
        <div className="col-md-6">
          <SwiperCom/>
        </div>
      </div>
      </section>

      {/* filter */}
      <Filter/>
      
      <section className='avto-katalok my-3'>
        <h2 className='section-header'>АВТОМОБИЛЬНЫЙ КАТАЛОГ</h2>

        <div className="row g-2">
        {
          data && data.map((car)=>{
            const {id} = car
            return <div className='col-lg-3 col-md-6'>
               <CarsCard key={id} carData = {car}/>
            </div>
          })
        }
        </div>
      </section>
    </Container>
  )
}
