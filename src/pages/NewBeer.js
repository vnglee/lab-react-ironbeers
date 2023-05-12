import header from "../assets/header.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const NewBeer = () => {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [tip, setTip] = useState('')
    const [attenuation, setAttenuation] = useState(0)
    const [description, setDescription] = useState('')
    const [contributed, setContributed] = useState('')


const navigate = useNavigate()

const body = {
        name: name,
        tagline: tagline,
        first_brewed: firstBrewed,
        brewers_tip: tip,
        attenuation_level: attenuation,
        description: description,
        contributed_by: contributed
}
const handleSubmit = (e) => {
    e.preventDefault()

    axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then((response) => {
            console.log('response data', response.data)
            setName('')
            setTagline('')
            setFirstBrewed('')
            setTip('')
            setAttenuation(0)
            setDescription('')
            setContributed('')
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
}


  return (
    <div className="AddBeerPage">
   <Link to='/'><img src={header} alt="home"/></Link>
    
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type='text' name='name' onChange={(e) => setName(e.target.value)} value={name} />

    <label>Tagline</label>
    <input type='text' name='tagline' onChange={(e) => setTagline(e.target.value)} value={tagline} />

    <label>Description</label>
    <input type='text' name='description' onChange={(e) => setDescription(e.target.value)} value={description} />

    <label>First Brewed</label>
    <input type='text' name='first brewed' onChange={(e) => setFirstBrewed(e.target.value)} value={firstBrewed} />

    <label>Brewers Tip</label>
    <input type='text' name='brewers tip' onChange={(e) => setTip(e.target.value)} value={tip} />

    <label>Attenuation Level</label>
    <input type='number' name='attenuation level' onChange={(e) => setAttenuation(e.target.value)} value={attenuation} />

    <label>Contributed By</label>
    <input type='text' name='contributed by' onChange={(e) => setContributed(e.target.value)} value={contributed} />

    <button type="submit">Add New</button>
    </form>
    </div>
  )
}

export default NewBeer