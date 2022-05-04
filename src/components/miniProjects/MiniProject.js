import React from 'react'

const MiniProject = ({ name, image, link }) => {
  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
        <div className="h-auto w-auto m-3">
          <img src={image} alt="project screenshot" />
        </div>
        <div className="px-6 py-4">
          <h3 className="font-Montserrat font-semibold text-xl mb-2">{name}</h3>
          <a href={link} target="_blank" rel="noreferrer">
            <p className="text-gray-600">
              Go to CodeSandbox
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MiniProject