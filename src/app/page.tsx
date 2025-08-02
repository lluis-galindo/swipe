"use client"
import StackCards from '@/components/stack-cards'
import Timer from '@/components/timer'
import React, { useEffect, useState } from 'react'

export const TOTAL_TIME = 60 // Total time in seconds
export const TOTAL_STEPS = 1000
export const STEP_TIME = TOTAL_TIME * 1000 / TOTAL_STEPS 

const data: Data[] = [
    {
        id: 1,
        title: 'History',
        question: 'In what year did World War II end?',
        category: 'history',
        goodResponse: '1945',
        badResponse: '1939',
    },
    {
        id: 2,
        title: 'Sports',
        question: 'Who won the football World Cup in 2010?',
        category: 'sports',
        goodResponse: 'Spain',
        badResponse: 'Brazil',
    },
    {
        id: 3,
        title: 'Arts',
        question: 'Who painted the Mona Lisa?',
        category: 'arts',
        goodResponse: 'Leonardo da Vinci',
        badResponse: 'Vincent van Gogh',
    },
    {
        id: 4,
        title: 'Science',
        question: 'What is the chemical element with symbol O?',
        category: 'science',
        goodResponse: 'Oxygen',
        badResponse: 'Gold',
    },
]

const Main = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [steps, setSteps] = useState(TOTAL_STEPS)

  useEffect(() => {
    //if (!gameStarted) return

    const timer = setInterval(() => {
      setSteps(prev => {
        if (prev > 0) {
          return prev - 1
        } else {
          clearInterval(timer)
          return 0
        }
      })
    }, STEP_TIME)

    return () => clearInterval(timer)
  }, [gameStarted])

  return (
    <div className='size-full flex flex-col bg-gray-100'>
      <Timer steps={steps}/>
      <div className="flex-1 flex items-center justify-center">
        <StackCards /> 
      </div>
    </div>
  )
}

export default Main