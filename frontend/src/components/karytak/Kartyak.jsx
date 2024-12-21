import React, { useContext } from 'react'
import { IngatlanContext } from '../../context/IngatlanContext'
import Kartya from '../kartya/Kartya'
import "./kartyak.css"

const Kartyak = () => {
  const { ingatlanok, transformIdToCategory } = useContext(IngatlanContext)
  //transformIdToCategory();
  return (
    <div className='cards'>
      {
        ingatlanok.map((e, i) => {
          return <Kartya key={i} kategoria={e.kat.name} leiras={e.leiras}
            ar={e.ar} datum={e.hirdetesDatuma} mentes={e.tehermentes} kep={e.kepURL} />
        })
      }
    </div>
  )
}

export default Kartyak