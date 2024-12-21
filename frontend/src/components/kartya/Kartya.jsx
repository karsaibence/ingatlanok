import React from 'react'
import "./kartya.css"

const Kartya = (props) => {
  return (
    <div className='card'>
        <h3>{props.kategoria}</h3>
        <p>{props.leiras}</p>
        <div className='kep'>
            {props.kep}
        </div>
        <button>Szöveg</button>
    </div>
  )
}

export default Kartya