import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function NavBar() {

  return (
    <nav className={` ${styles.navbar} border  p-2 m-2 bg-primary rounded text-center text-white`} >
        <Link href="/">
        <a>Acceuil</a>
        </Link>
        <Link href="/blog">
        <a>Blog</a>
        </Link>
        <Link href="/liste">
        <a>Liste</a>
        </Link>
    </nav>
  )
}
