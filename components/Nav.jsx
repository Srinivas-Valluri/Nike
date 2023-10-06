
// import { headerLogo } from '@/assets/images/index'
// import Logo from '@/assets/images/header-logo.svg'
// import Image from 'next/image'
import { headerLogo } from '@/assets/images/index'
import Image from "next/image"


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav>
        <a href='/'>
          <Image
            src={headerLogo}
            alt="Nike Logo"
            width={130}
            height={29}
          />
        </a>
      </nav>
    </header>
  )
}

export default Nav