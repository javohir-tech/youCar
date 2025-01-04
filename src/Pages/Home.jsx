//bootstarp
import { Button, Container } from 'react-bootstrap'

//components
import { Addition, Banner, CarsCard, Comments, Filter, Marks, NewsSection, ReklamCard, SwiperCom } from '../Components'
import { useFetch } from '../Hooks/useFetch'
import { useEffect } from 'react'

//images
import key from '../assets/Vector.png'
import message from '../assets/message.png'
import car from '../assets/car.png'
import carBig from '../assets/carBIg.png'
import { useActionData } from 'react-router-dom'
import { Loader, Placeholder } from 'rsuite'

//action
// export const action = async ({ request }) => {
//   const formData = await request.formData()
//   let search = formData.get("search")
//   return search
// }


export default function Home() {

  // const searchParamFromAction = useActionData()

  const { data, isPending, error } = useFetch(`https://api.youcarrf.ru/cars`)

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  if (isPending) {
    return <div>
      <Placeholder.Paragraph rows={8} />
      <Loader backdrop content="loading..." vertical />
    </div>
  }

  return (
    <Container>
      {/* banner section */}
      <section className='p-5 rounded banner-section rounded mt-3' style={{ background: "rgba(244, 244, 244, 1)" }}>
        <div className="row">
          <div className="col-md-6">
            <h1>Новый Geely Monjaro!</h1>
            <p>Кроссовер Monjaro - премиальная модель Geely по уровню дизайна, материалов и технологий. </p>
            <Button variant='primary' className='p-md-4' >Подробнее</Button>
          </div>
          <div className="col-md-6">
            <SwiperCom />
          </div>
        </div>
      </section>

      {/* filter */}
      <Filter />

      <section className='avto-katalok my-3'>
        <h2 className='section-header'>АВТОМОБИЛЬНЫЙ КАТАЛОГ</h2>

        <div className="row g-2">
          {
            data && data.map((car) => {
              const { id } = car
              return <div key={id} className='col-lg-3 col-md-6'>
                <CarsCard carData={car} />
              </div>
            })
          }
        </div>
      </section>

      {/* reklam section  */}
      <section className='reklam-section my-5'>
        <h1 className='section-header'>Почему мы?</h1>
        <div className='row g-2'>
          <div className='col-md-6 col-lg-3'>
            <ReklamCard
              img={key}
              header={"Работаем под ключ"}
              description={"У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков."} />
          </div>
          <div className='col-md-6 col-lg-3'>
            <ReklamCard
              img={message}
              header={"онлайн-чат 24/7"}
              description={"Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором."} />
          </div>
          <div className='col-md-6 col-lg-3'>
            <ReklamCard
              img={car}
              header={"Упрощенный выбор авто"}
              description={"мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным."} />
          </div>
          <div className='col-md-6 col-lg-3'>
            <ReklamCard
              img={carBig}
              header={"Доставка"}
              description={"поставка в любой регион РФ, прямая связь без посредников"} />
          </div>

        </div>
      </section>

      {/* banner section  */}
      <Banner />

      {/* marks section  */}
      <Marks />

      {/* addition section */}
      <Addition />

      {/* news section */}
      <NewsSection />

      {/* comment section */}
      <Comments />

    </Container>
  )
}
