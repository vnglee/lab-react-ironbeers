import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import header from '../assets/header.png'

const BeersDetail = () => {

    const [beers, setBeers] = useState({
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: ''
    })

    const {beerId} = useParams()
    console.log('beer id', beerId)

    useEffect(()=> {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            console.log('response data', response.data)
            setBeers(response.data)
        })
        .catch((err) => console.log(err))
    },[beerId])

  return (
    <div>
     <Link to='/'><img src={header} alt="home"/></Link>
<br></br>
<br></br>
        <img src={beers.image_url} alt='' />
        <h2>{beers.name}</h2>
        <h5>{beers.tagline}</h5>
        <p>{beers.first_brewed}</p>
        <p>{beers.attenuation_level}</p>
        <p>{beers.description}</p>
        <p>{beers.contributed_by}</p>

    </div>
  )
}

export default BeersDetail
