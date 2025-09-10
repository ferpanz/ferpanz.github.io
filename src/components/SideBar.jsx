import React from 'react'
import skils from '../data/skils.json'
import logo from '../assets/Logo.png'
import IconosRedes from '../subcomponents/IconosRedes'
import SkilsBars from '../subcomponents/SkilsBars'

// Función para calcular la edad automáticamente
const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date()
  const nacimiento = new Date(fechaNacimiento)
  let edad = hoy.getFullYear() - nacimiento.getFullYear()
  const m = hoy.getMonth() - nacimiento.getMonth()
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--
  }
  return edad
}

const fechaNacimiento = '1981-07-22'

const SideBar = () => {
  return (
    <div className="bg-targeta p-4 d-flex flex-column align-items-center min-vh-100 rounded-3">
      <img
        className="rounded-circle mb-3 d-none d-md-block"
        style={{ width: 120, height: 120, objectFit: 'cover' }}
        src={logo}
        alt="logo"
      />
      <div className="w-100 text-white">
        <h5 className="mt-3 mb-2">Datos personales</h5>
        <ul className="list-unstyled mb-3">
          <li><strong>Nacionalidad:</strong> {skils.otros[0][1]}</li>
          <li><strong>Edad:</strong> {calcularEdad(fechaNacimiento)} años</li>
        </ul>
        <h5 className="mb-2">Idioma</h5>
        <ul className="list-unstyled mb-3">
          {skils.idiomas.map(([idioma, nivel], idx) => (
            <li key={idx}><strong>{idioma}:</strong> {nivel}</li>
          ))}
        </ul>
        <SkilsBars />
        <IconosRedes />
      </div>
    </div>
  )
}

export default SideBar