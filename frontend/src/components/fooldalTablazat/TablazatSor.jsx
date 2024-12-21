import React from 'react'

const TablazatSor = (props) => {
    return (
        <tr>
            <td>{props.e.kat.name}</td>
            <td>{props.e.leiras}</td>
            <td>{props.e.hirdetesDatuma}</td>
            <td>{props.e.tehermentes}</td>
            <td>{props.e.ar}</td>
            <td>{props.e.kepURL}</td>
        </tr>
    )
}

export default TablazatSor