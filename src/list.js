import React from 'react'

export default function list({arr}) {
    return (
        <div>
            {arr.map(el => <li>{el}</li>)}
        </div>
    )
}
