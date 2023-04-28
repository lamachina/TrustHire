import React, { useRef } from 'react'
import Landing from './Landing'


const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


function Home() {
    const parallax = useRef(null)
    return (
        <div>
            <Landing />
        </div>
    )
}

export default Home