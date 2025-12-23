import React from 'react'
import video from '../videos/247183_small.mp4'

function TopLeft() {
    return (
        <div className='h-full w-full p-2'>
            <div className='h-full w-full p-2 bg-linear-to-b from-purple-700/50 to-purple-700/70 rounded-3xl shadow-[0_10px_50px_rgba(88,28,135,0.9),0_5px_25px_rgba(88,28,135,0.7)]'>
                <div className='flex items-center justify-center w-full h-full bg-linear-to-b from-purple-600/80 to-purple-900 p-3 rounded-2xl'>
                    <div className='aspect-video max-w-full max-h-full rounded'>
                        <video 
                            src={video} 
                            autoPlay 
                            loop 
                            muted 
                            className='w-full h-full object-contain rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopLeft