import React from 'react'
import skils from '../data/skils.json'

const SkilsBars = () => {
  return (
    <>
      <h5 className="mb-2">Tecnologías</h5>
        <div className="mb-3">
          {skils.tecnologias.map(([tecnologia, porcentaje], idx) => (
            <div key={idx} className="mb-2">
              <span>{tecnologia}</span>
              <div className="progress" style={{ height: '18px' }}>
                <div
                  className="progress-bar bg-acento"
                  role="progressbar"
                  style={{ width: `${porcentaje}%` }}
                  aria-valuenow={porcentaje}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {porcentaje}%
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default SkilsBars
