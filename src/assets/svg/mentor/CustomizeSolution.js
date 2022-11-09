import React from 'react'
import PropTypes from 'prop-types'

const CustomizeSolution = ({ className }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z" />
      <path d="M21.9881 18.95C21.6581 18.34 20.9581 18 20.0181 18C19.3081 18 18.6981 18.29 18.3381 18.79C17.9781 19.29 17.8981 19.96 18.1181 20.63C18.5481 21.93 19.2981 22.22 19.7081 22.27C19.7681 22.28 19.8281 22.28 19.8981 22.28C20.3381 22.28 21.0181 22.09 21.6781 21.1C22.2081 20.33 22.3081 19.56 21.9881 18.95Z" />
    </svg>
  )
}

CustomizeSolution.propTypes = {
  className: PropTypes.string
}

export default CustomizeSolution
