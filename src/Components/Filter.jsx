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
                    <div className='d-flex align-itmes-center justify-content-between mt-3'>

                        <Dropdown >
                            <p>Выберите марку</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0'   id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <p>Выберите марку</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0'   id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <p>Выберите марку</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0'   id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <p>Выберите марку</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0'   id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <p>Выберите марку</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0'   id="dropdown-basic">
                                Dropdown Button
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
