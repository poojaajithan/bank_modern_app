import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`text-primary text-[18px] px-6 py-4 bg-blue-gradient font-poppins font-medium rounded-[10px] ${styles}`}>
        Get Started
    </button>
  )
}

export default Button; 