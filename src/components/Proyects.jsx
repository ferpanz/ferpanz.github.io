import React from 'react'
import proyectos from '../data/proyectos.json'
import ProyectCard from '../subcomponents/ProyectCard'

const Proyects = () => {
  return (
    <>
    <h2 className='text-2xl font-bold mb-4 mt-3 text-center text-white'>Proyectos</h2>
    <div className="d-flex flex-wrap justify-content-center">
      {proyectos.map((proyecto, idx) => (
        <ProyectCard key={idx} {...proyecto} />
      ))}
    </div>
    </>
  )
}

export default Proyects