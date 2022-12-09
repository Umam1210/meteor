import React from 'react'
import CardList from '../components/CardList'
import NavbarSignIn from '../components/NavbarSignIn'

export default function Home() {
    return (
        <>
            <div className='sticky top-0 z-10'>
                <NavbarSignIn />
            </div>
            <div className=''>
                <CardList />
            </div>
        </>
    )
}
