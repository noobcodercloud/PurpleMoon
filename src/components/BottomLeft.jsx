import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

function BottomLeft() {

    // endTime = startTime + Duration
    const [EndTime, setEndTime] = useState(null)
    const [TimeLeft, setTimeLeft] = useState("01:00")

    useEffect(() => {

        setInterval(() => {
            const now = dayjs().format("HH:mm:ss")
            setTimeLeft(now)
        }, 1000);

    }, [])

    return (
        <div className='h-full w-full p-2'>
            <div className='h-full w-full p-2 bg-linear-to-b from-purple-700/50 to-purple-700/70 rounded-3xl shadow-[0_10px_50px_rgba(88,28,135,0.9),0_5px_25px_rgba(88,28,135,0.7)]'>
                <div className='flex items-center justify-center w-full h-full bg-linear-to-b from-purple-600/80 to-purple-900 p-3 rounded-2xl'>
                    <div className='h-full w-full p-3'>
                        <div className='w-full min-h-full rounded-2xl bg-purple-900/60 flex items-center justify-around text-4xl xl:text-6xl font-bold font-poppins border border-purple-700/60 flex-col'>
                            {/* {
                                !isBreak &&
                                <div className='text-[16px] sm:text-2xl xl:text-3xl'>
                                    Focus
                                </div>
                            }
                            {
                                isBreak &&
                                <div className='text-[16px] sm:text-2xl xl:text-3xl'>
                                    Break Time
                                </div>
                            } */}
                            {TimeLeft}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomLeft
