import React from 'react'
import CallButton from '../components/CallButton'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <CallButton buyerId="sayan" sellerId="jatin" />
        </div>
    )
}

export default Home