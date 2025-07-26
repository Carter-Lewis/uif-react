import React from 'react'
import { navlinks } from '../../Constants/constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="home" className='flex items-center gap-2'>
              <img src="/Images/white-uif-logo.png" alt="Baylor UIF" />
            </a>

            <ul>
                {navlinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar