
import Accessbility from './Access'
import PrimaryNav from './PrimaryNav'

const Navbar = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <Accessbility/>
        <PrimaryNav/>
    </div>
  )
}

export default Navbar
