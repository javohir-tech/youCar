//icons
import { FaRegHeart } from "react-icons/fa";



export default function CarsCard({ carData }) {
  const { image, model, cost, country, year, engine, milage } = carData
  return (
    <div className='cars-card shadow'>
      <div className='card-image'>
        <img src={image[0]} alt={model} className='img-fluid w-100' style={{ height: "200px", borderRadius:"10px" }} />
      </div>
      <div className='card-info position-relative'>
        <div className='py-2 px-3'>
          <p className="car-model">{model}</p>
          <h3 className="car-price">{cost}$</h3>
          <div className='d-flex justify-content-between align-items-center text-secondary '>
            <p>{milage}km</p><p>Робот</p>
          </div>
          <div className='d-flex align-items-center text-secondary justify-content-between'>
            <p>1.4/100 л.с./{engine}</p><p>Полный привод</p>
          </div>
          <div className='d-flex align-items-center text-secondary'>
            <p>{country}</p>
          </div>
        </div>
        <span className="position-absolute heart"><FaRegHeart/></span>
      </div>
    </div>
  )
}
