import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
    <br></br>
    <br></br>
    <Link to='/beers'>
    <img src={beers} alt="beers" />
    </Link>
    <h2>All Beers</h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus pharentra egestas lectus, sit amet eleifend ex tincidunt in. 
    Name dictum arcu ut dignissim varius.

<br></br>
<br></br>
    <Link to='/random-beer'>
    <img src={randomBeer} alt="randomBeer" />
    </Link>
    <h2>Random Beers</h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus pharentra egestas lectus, sit amet eleifend ex tincidunt in. 
    Name dictum arcu ut dignissim varius.
<br></br>
<br></br>
    <Link to='/new-beer'>
    <img src={newBeer} alt="newBeer" />
    </Link>
    <h2>New Beer</h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus pharentra egestas lectus, sit amet eleifend ex tincidunt in. 
    Name dictum arcu ut dignissim varius.


    </div>
  )
}

export default HomePage