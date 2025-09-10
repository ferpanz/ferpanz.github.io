import React from 'react'
import senses from '../assets/proyectos/senses.jpeg'
import ipet98 from '../assets/proyectos/ipet98.png'
import logo from '../assets/proyectos/Logo.png'
import appPedidos from '../assets/proyectos/appPedidos.png'
import webPedidos from '../assets/proyectos/webPedidos.png'

const imagenes = {
  'senses.jpeg': senses,
  'ipet98.png': ipet98,
  'Logo.png': logo,
  'appPedidos.png': appPedidos,
  'webPedidos.png': webPedidos
}

const ProyectCard = ({ titulo, descripcion, link, imagen, tecnologias }) => {
  const imgSrc = imagenes[imagen] || ''

  return (
    <div className="card m-2 shadow bg-targeta text-white rounded-3" style={{ width: '20rem' }}>
      <img
        src={imgSrc}
        className="card-img-top grayscale-hover"
        alt={titulo}
        style={{ height: 180, objectFit: 'cover' }}
/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="mt-auto d-flex flex-column">
          <div className="mb-2">
            {tecnologias && tecnologias.map((tec, idx) => (
              <span key={idx} className="badge bg-secondary me-1">{tec}</span>
            ))}
          </div>
          <a
            href={link}
            className="btn btn-lg bg-acento text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProyectCard