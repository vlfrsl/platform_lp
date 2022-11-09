import React from 'react'
import PropTypes from 'prop-types'

const ShareIdeas = ({ className }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM14.17 6.51L11.47 9.21C11.37 9.31 11.16 9.41 11.02 9.44L9.99 9.58C9.61 9.63 9.35 9.37 9.41 9L9.56 7.97C9.58 7.83 9.68 7.62 9.79 7.52L12.49 4.82C12.95 4.36 13.5 4.14 14.18 4.82C14.85 5.51 14.63 6.05 14.17 6.51Z" />
      <path d="M12.0002 14C6.99016 14 2.91016 17.36 2.91016 21.5C2.91016 21.78 3.13016 22 3.41016 22H20.5902C20.8702 22 21.0902 21.78 21.0902 21.5C21.0902 17.36 17.0102 14 12.0002 14Z" />
    </svg>
  )
}

ShareIdeas.propTypes = {
  className: PropTypes.string
}

export default ShareIdeas
