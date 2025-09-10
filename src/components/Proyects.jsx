import React from 'react'
import proyectos from '../data/proyectos.json'
import ProyectCard from '../subcomponents/ProyectCard'

const Proyects = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {proyectos.map((proyecto, idx) => (
        <ProyectCard key={idx} {...proyecto} />
      ))}
    </div>
  )
}

export default Proyects