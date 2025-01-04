import React, { useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'

export default function Marks() {
    const { data } = useFetch("https://api.youcarrf.ru/marks")


    // useEffect(()=>{
    //     if(data){
    //         console.log(data)
    //     }
    // }, [data])
    return (
        <section className='marks-section my-5'>
            <div className="row p-2">
                {data && data.map((mark) => {
                    return <div key={mark.id} className='col-6 col-md-4 col-lg-2 p-0'>
                        <img src={mark.image} className='img-fluid w-100' alt="" />
                    </div>
                })}
            </div>
        </section>
    )
}
