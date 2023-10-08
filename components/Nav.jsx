
// import { headerLogo } from '@/assets/images/index'
// import Logo from '@/assets/images/header-logo.svg'
// import Image from 'next/image'
import { headerLogo } from '@/assets/images/index'
import { navLinks } from '../constants'
import Image from "next/image"
import { hamburger } from '@/assets/icons'


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className='flex justify-between items-center max-container '>
        <a href='/'>
          <Image
            src={headerLogo}
            alt="Nike Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-end items-center gap-16 hidden lg:inline-flex '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray '
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=' inline-flex lg:hidden  '>
          <Image src={hamburger} height={25} width={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav