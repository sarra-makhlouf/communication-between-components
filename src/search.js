import React from 'react'

export default function search({onChange}) {
    return (
        <div>
            <input type="text" onChange={(e) => onChange(e.target.value)}></input>
        </div>
    )
}
