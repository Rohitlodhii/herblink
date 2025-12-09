
import { useTranslation } from 'react-i18next';
import Accessbility from './Access'
import PrimaryNav from './PrimaryNav'

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full h-full flex flex-col'>
        <Accessbility/>
        <PrimaryNav/>
    </div>
  )
}

export default Navbar
