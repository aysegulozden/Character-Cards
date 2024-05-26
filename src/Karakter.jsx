import React from 'react'


function Karakter({ karakter }) {
    const { id, title, desc, link, image } = karakter;
    return (
        <div className='Karakter'>
            <div>
                <img className='karakter-img' src={image} width={220} height={180} />
                <h4 className='karakter-title'>{title}</h4>
                <h5 className='karakter-desc'>{desc}</h5>
                <a className='karakter-link' href={link}>Güç Bilgileri</a>
            </div>

        </div>
    )
}

export default Karakter