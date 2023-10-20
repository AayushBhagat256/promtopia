"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;

  const [provider, setProvider] = useState(null)
  const [toggleDropDown,setToggleDropDown] = useState(false)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProvider(response)
    }
    setProvider()
  }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3' >
      <Link href={"/"} className='flex gap-2 flex-center'>
        <Image src={'/assets/images/logo.svg'} alt='logo' width={30} height={30} className='object-contain' />
        <p className='logo_text'>Promtopia</p>
      </Link>
      {/* Desktop nav  */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={'/create-prompt'} className='black_btn'>
              Create Post
            </Link>
            <button onClick={signOut} className='outline_btn'>Sign Out</button>
            <Link href={'/profile'}>
              <Image src={'/assets/images/logo.svg'}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {provider && Object.values(provider).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In

              </button>
            ))}
          </>
        )}
      </div>
      {/* Mobile Nav  */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image src={'/assets/images/logo.svg'}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={()=>{}}
            />
          </div>
        ) : (
          <>
            {provider && Object.values(provider).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In

              </button>
            ))}
          </>
        )}
      </div>
    </nav >
  )
}

export default Nav