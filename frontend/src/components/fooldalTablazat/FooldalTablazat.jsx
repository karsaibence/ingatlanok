import React, { useContext } from 'react'
import { IngatlanContext } from '../../context/IngatlanContext'
import TablazatSor from './TablazatSor'
import "./fooldaltablazat.css"

const FooldalTablazat = () => {
    const { ingatlanok, transformIdToCategory } = useContext(IngatlanContext)
    //transformIdToCategory();

    return (
        <div>
            <table className='fooldal'>
                <thead>
                    <tr>
                        <th>Kategoria</th>
                        <th>Leírás</th>
                        <th>Hirdetés dátuma</th>
                        <th>Tehermentes</th>
                        <th>Ár</th>
                        <th>Fénykép</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingatlanok.map((e, i) => {
                            return <TablazatSor key={i} e={e} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FooldalTablazat