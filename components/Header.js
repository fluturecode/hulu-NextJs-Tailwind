import Image from 'next/image'
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className=''>
      <h1>Header</h1>
      <Image
      src={logo} width={200} height={100}
      />
    </header>
  )
}
