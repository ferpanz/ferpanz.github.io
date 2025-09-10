import React from 'react'
import skils from '../data/skils.json'
import perfil from '../assets/perfil_sin_fondo.png'

const Header = () => {
  return (
    <div className='header-bg rounded-3'>
      <div className='container p-4 d-flex align-items-center justify-content-end'>
        <div className="d-flex flex-column justify-content-center me-5">
          <h1 className='text-3xl font-bold mb-1 text-white'>{skils.nombre}</h1>
          <h4 className='text-xl font-bold mb-0 text-white'>{skils.subtitulo}</h4>
        </div>
        <img className='rounded-circle border border-4 border-white me-md-5'
          src={perfil}
          alt="perfil"
          style={{
            width: 140,
            height: 140,}}
        />
      </div>
    </div>
  )
}

export default Header