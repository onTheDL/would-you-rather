import React from 'react'

export default function Option(props) {
  const { option, isSelected } = props

  return (
    <div className={isSelected ? 'user-answer-box' : ''}>
      <p >
        {option}
      </p>
      {isSelected && <span className='user-answer-tag'>&larr; Your Answer</span>}
    </div>
    
    
  )
}