import React from 'react'
import Button from '../button/Button'
import { PlanData } from '@/content/plan/plan'

const Plans = () => {
    return (
        <div className='w-full h-[35rem] bg-[url("/Images/Plan/planbg.png")] bg-cover bg-center bg-no-repeat
        flex flex-col justify-center items-center py-10'>

            {/* ✅ Title Centered */}
            <h2 className='text-3xl font-bold text-white mb-10'>
                Installation Plans
            </h2>

            {/* ✅ Horizontal Cards */}
            <div className='flex flex-row justify-center gap-3'>
                {PlanData.map((data, index) => (
                    <div key={index}
                        className='w-[7rem] h-[16rem] bg-blue-950 text-amber-50 rounded-xl
                        flex flex-col items-center justify-between p-5 shadow-lg shadow-black/40'>

                        <div className='text-center'>
                            <h4 className='text-lg font-semibold'>{data.name}</h4>
                            <p className='text-sm mt-1 opacity-90'>{data.for}</p>
                        </div>

                        <a href={data.link} download>
                            <Button/>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plans
