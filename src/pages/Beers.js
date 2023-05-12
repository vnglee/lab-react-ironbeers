import { useEffect, useState } from "react"
import header from "../assets/header.png"
import { Link } from "react-router-dom"
import axios from "axios"


const Beers = () => {

    const [beers, setBeers] = useState([])

    useEffect(()=> {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log('response data', response.data)
            setBeers(response.data)
        })
        .catch((err) => console.log(err))
    },[])

  return (
    <div>
    <Link to='/'><img src={header} alt="home"/></Link>
    
    {beers.map((allBeers)=> (

        <div key={allBeers._id}>
        <img src={allBeers.image_url} alt="{allBeers.name}" />
        <h3>{allBeers.name}</h3>
        <p>{allBeers.tagline}</p>
        <p>Created by: {allBeers.contributed_by}</p>
        <Link to={`/beers/${allBeers._id}`}>See Details</Link>
        </div>
    ))}
    
    </div>
  )

}

export default Beers

