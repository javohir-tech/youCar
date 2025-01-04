//bootstrap
import { Button, ButtonGroup, Container, Dropdown, Form } from 'react-bootstrap'

export default function Filter() {
    return (
        <div className='my-5'>
            <Container>
                <h2 className='section-header'>Подбор авто</h2>
                <div className='p-4 shadow rounded'>
                    <div className='d-flex flex-column flex-md-row align-items-center gap-3'>
                        <ButtonGroup aria-label="Basic example" className='' style={{ borderRadius: "10px", background: "rgba(244, 244, 244, 1)" }}>
                            <button className='btn py-md-3 px-md-5 filter-btn'>Все</button>
                            <button className='btn py-md-3 px-md-5'>Новые</button>
                            <button className='btn py-md-3 px-md-5'>С пробегом</button>
                        </ButtonGroup>
                        <div className='d-flex gap-3'>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="наличии"
                            />
                            <label className="form-check-label" htmlFor="наличии">
                                В наличии
                            </label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="заказ"
                            />
                            <label className="form-check-label" htmlFor="заказ">
                                Под заказ
                            </label>
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-lg-row gap-3  align-itmes-center  mt-3'>

                        <Dropdown className='text-center dropdown'>
                            <p>Выберите марку</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                                Gelly
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">BMW</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Audi</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Honda</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown'>
                            <p>ВЫберите модель</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                                Monjaro
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown '>
                            <p>Страна</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                                Kitay
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">USA</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Italiya</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Russiya</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown'>
                            <p>Год</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                                0-2024
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown'>
                            <p>Цена</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                                3 000 000-4 500 000
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Container>
        </div>
    )
}
