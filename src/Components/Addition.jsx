//react bootstrap
import { Button } from 'react-bootstrap'

//images
import image from '../assets/image.png'

export default function Addition() {
    return (
        <section className='addition-section my-5 rounded p-5 text-light'>
            <div className="row align-items-center g-2">
                <div className="col-md-6">
                    <h2>Не можете определится с выбором?</h2>
                    <p>Оставьте заявку, и наши менеджеры проконсультируют вас!</p>
                    <Button variant='primary' className='py-3 px-4' style={{ opacity: "0.6" }}>Оставить заявку</Button>
                </div>
                <div className='col-md-6'>
                        <img src={image} className='img-fluid' alt="img" style={{ width:"100%"}} />
                </div>
            </div>
        </section>
    )
}
