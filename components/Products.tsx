import React from 'react'
import Product from './Product'

function Products() {
    const data = [
        {
            title: 'Arqitel',
            desc: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
            url: 'https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm',
            live: true,
            case: false,
            bg: '#5355ee',
        },
        {
            title: 'Cula',
            desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            url: 'https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4',
            live: true,
            case: false,
            bg: '#4a576b',
        },
        {
            title: 'Layout Land',
            desc: 'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.',
            url: 'https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4',
            live: true,
            case: true,
            bg: '#3e4365'
        },
        {
            title: 'Maniv',
            desc: 'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.',
            url: 'https://cdn.refokus.com/website/Maniv-Compressed.mp4',
            live: true,
            case: false,
            bg: '#2dcb76'
        },
        {
            title: 'Singularity',
            desc: 'A new site for Singularity that supports their growth and showcases their true identity as industry innovators.',
            url: 'https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm',
            live: true,
            case: false,
            bg: '#ff7548'
        },

    ]
  return (
    <div className='hidden sm:block mt-[8vw]'>
        {data.map((elem, index) => (
            <Product key={index} val={elem} />
        ))}  
    </div>
  )
}

export default Products
