import React, { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Header from './components/header';

export default function App() {
  const [api, setApi] = useState([])
  const [count, setCount] = useState(1)
  useEffect(() => {
    getFetch(count);
  }, [count])
  
  const getFetch = async (value) => {
    if (value <= 3) {
      await fetch(`/src/api/CONTENTLISTINGPAGE-PAGE${value}.json`).then(res => res.json()).then(res => setApi(res))
    }
  }

  console.log(count)
  return (
    <>
    <Header title={api?.page?.title} />
      <div className='container d-flex flex-wrap justify-content-center mb-2' style={{ gap: "20px" }}>
        {
          api?.page?.['content-items']?.content?.map((item, index) => (
            <div key={index}>
              <img className='img-fluid' src={`/src/assets/${item?.['poster-image']}` || '/src/assets/poster1.jpg'} alt={item?.['poster-image']} loading="lazy" />
              <p className='mt-1 mb-0'>{item.name}</p>
            </div>
          ))
        }
      </div>
      <Footer setCount={setCount} count={count} />
    </>
  )
}
