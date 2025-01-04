

export default function ReklamCard({img, header, description}) {
  return (
    <div className='rounded shadow p-3 reklam-card '>
        <img src={img} className='img-fluid mb-3' alt="card img" />
        <h2 className="mb-3">{header}</h2>
        <p>{description}</p>
    </div>
  )
}
