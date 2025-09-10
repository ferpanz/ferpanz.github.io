import React from 'react'
import skils from '../data/skils.json'

const iconosRedes = {
  telegram: 'bi-telegram',
  linkedin: 'bi-linkedin',
  mastodon: 'bi-mastodon',
  fediverso: 'bi-globe',
  instagram: 'bi-instagram',
  mail: 'bi-envelope'
}

const IconosRedes = () => {
  return (
    <>
      <h5 className="mb-2">Redes</h5>
        <div className="d-flex flex-wrap gap-3">
          {skils.redes.map(([red, url], idx) => (
            <a
              key={idx}
              href={url ? url : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4"
              title={red}
              style={{ opacity: url ? 1 : 0.5 }}
            >
              <i className={`bi ${iconosRedes[red] || 'bi-globe'}`}></i>
            </a>
          ))}
        </div>
    </>
  )
}

export default IconosRedes
