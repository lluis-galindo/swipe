import { TOTAL_STEPS } from '@/app/page';
import React from 'react'

type Props = {
    steps: number
}

const getColor = (steps: number): string => {
    const percentage = steps / TOTAL_STEPS * 100
    if (percentage > 60) return 'bg-green-500';
    if (percentage > 30) return 'bg-yellow-500';
    return 'bg-red-500';
}

const Timer = ({ steps }: Props) => {
  return (
   <div className={`${getColor(steps)} h-10 transition-all`} style={{ width: `${steps / TOTAL_STEPS * 100}%` }}></div>
  )
}

export default Timer