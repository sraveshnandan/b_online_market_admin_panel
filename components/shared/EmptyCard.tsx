import React from 'react'

type Props = {
    title: string
}

const EmptyCard = ({ title }: Props) => {
    return (
        <div className='w-full h-fit flex items-center justify-center'>
            <span className='text-xl font-semibold text-red-600'>{title}</span>
        </div>
    )
}

export default EmptyCard