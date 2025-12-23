import React from 'react'
import Right from './Right.jsx'
import TopLeft from './TopLeft.jsx'
import BottomLeft from './BottomLeft.jsx'

function Home() {
    return (
        <div>
            <div className="grid md:min-h-screen xl:min-h-screen md:grid-cols-5 md:grid-rows-4 gap-4 border p-5 bg-purple-400/90">
                <div className="h-50 sm:h-100 md:h-full xl:h-120 md:col-span-3 md:row-span-2 md:col-start-1">
                    <TopLeft />
                </div>
                <div className="h-60 md:h-full md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-3">
                    <BottomLeft />
                </div>
                <div className="min-h-90 md:h-full md:col-span-2 md:row-span-4 md:col-start-4">
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Home
