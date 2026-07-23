import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h3>Hello coding</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar 