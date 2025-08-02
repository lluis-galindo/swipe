import React from 'react'
import { Card } from './card'
import { categoryColors, getRandomRotationFromText } from '@/models/data.model'

const StackCards = () => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id} className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Card color={categoryColors[item.category]} initialRotation={getRandomRotationFromText(item.question)} />
        </div>
      ))}
    </div>
  )
}

export default StackCards