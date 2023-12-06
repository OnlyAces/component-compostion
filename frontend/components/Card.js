import React from 'react'
import Figure from './Figure'

export default function card({ title, text, imageURL, data}) {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure
            imageURL={imageURL}
            caption={date}
            />
        </div>
    )
}