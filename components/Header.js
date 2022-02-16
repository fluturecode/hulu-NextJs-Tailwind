import Image from 'next/image'
import logo from '../assets/logo.png';
import { HeaderItem } from './HeaderItem';
import { HomeIcon } from '@heroicons/react/outline';

export const Header = () => {
  return (
    <header className=''>
        <div>
          <HeaderItem title='HOME' Icon={HomeIcon}/>
        </div>
      <Image 
        className='object-contain'
        src={logo}
        width={200}
        height={100}
      />
    </header>
  )
}
