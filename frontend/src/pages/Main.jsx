import React from 'react'
import CardList from '../components/CardList'
import LandingPage from '../components/LandingPage'
import Nabar from '../components/Navbar'

export default function Main() {
    return (
        <>
            <div className='sticky top-0 z-10'>
                <Nabar />
            </div>
            <div>
                <LandingPage />
            </div>
            <div>
                <CardList />
            </div>
        </>
    )
}
