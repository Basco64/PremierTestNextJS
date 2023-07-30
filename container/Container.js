import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import Head from 'next/head'

export default function Container(props) {
    return (
        <>           
            <NavBar />
            {props.children}
        </>
    )
}
