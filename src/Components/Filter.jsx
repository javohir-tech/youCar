//bootstrap
import { useState } from 'react';
import { Button, ButtonGroup, Container, Dropdown, Form } from 'react-bootstrap'

export default function Filter({ filters, setFilters }) {

    const handleMarkChange = (value) => {
        setFilters(prev => ({
            ...prev,
            mark: value,  
        }));
    };

    const handleModelChange = (value) => {
        setFilters(prev => ({
            ...prev,
            model: value,  
        }));
    };

    const handleCountryChange = (value) => {
        setFilters(prev => ({
            ...prev,
            country: value,
        }));
    };

    const handleYearChange = (value) => {
        setFilters(prev => ({
            ...prev,
            year: value, 
        }));
    };

    const [activeButton, setActiveButton] = useState("all")

    const handleAllChange = () =>{
       setActiveButton("all")
        setFilters(prev => ({
            ...prev,
            year: "",
            country:"",
            model:"",
            mark:""
        }))
    }

    return (
        <div className='my-5'>
            <Container>
                <h2 className='section-header'>Подбор авто</h2>
                <div className='p-4 shadow rounded'>
                    <div className='d-flex flex-column flex-md-row align-items-center gap-3'>
                        <ButtonGroup aria-label="Basic example">
                            <button className={`btn py-md-3 px-md-5 ${activeButton === "all" ? "filter-btn" : ""}`} onClick={()=>handleAllChange()} >Все</button>
                            <button className={`btn py-md-3 px-md-5 ${activeButton === "news" ? "filter-btn" : ""}`} onClick={()=>setActiveButton("news")}>Новые</button>
                            <button className={`btn py-md-3 px-md-5 ${activeButton === "probek" ? "filter-btn" : ""}`} onClick={()=>setActiveButton("probek")}>С пробегом</button>
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
                                {filters.mark || "Chevrolet"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleMarkChange('Chevrolet')}>Chevrolet</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleMarkChange('BMW')}>BMW</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleMarkChange("Honda")}>Honda</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown'>
                            <p>ВЫберите модель</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                               {filters.model || "Tahoe 2"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleModelChange("tahone 2")}>Tahoe</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleModelChange("crider")}>Crider</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleModelChange("BMW")}>BMW</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleModelChange("Tahoe")}>Tahoe</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleModelChange("BMW m5 cs")}>BMW m5 cs</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown '>
                            <p>Страна</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                               {filters.country ||  "USA"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleCountryChange("USA")}>USA</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleCountryChange("NORTH KOREA")}>North Korea</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleCountryChange("Uzbekistan")}>Uzbekistan</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleCountryChange("Russia")}>Russia</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='text-center dropdown'>
                            <p>Год</p>
                            <Dropdown.Toggle className='filter-drapdowns border-0 w-100' id="dropdown-basic">
                                {filters.year || "0-2024"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleYearChange(2023)}>2023</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleYearChange(2024)}>2024</Dropdown.Item>
                                {/* <Dropdown.Item onClick={()=>handleYearChange("")}>Something else</Dropdown.Item> */}
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
