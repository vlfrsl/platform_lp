import React from 'react'
import PropTypes from 'prop-types'

const Lock = ({ className }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8.33317V6.6665C5 3.90817 5.83333 1.6665 10 1.6665C14.1667 1.6665 15 3.90817 15 6.6665V8.33317" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0013 15.4167C11.1519 15.4167 12.0846 14.4839 12.0846 13.3333C12.0846 12.1827 11.1519 11.25 10.0013 11.25C8.85071 11.25 7.91797 12.1827 7.91797 13.3333C7.91797 14.4839 8.85071 15.4167 10.0013 15.4167Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.168 18.3335H5.83464C2.5013 18.3335 1.66797 17.5002 1.66797 14.1668V12.5002C1.66797 9.16683 2.5013 8.3335 5.83464 8.3335H14.168C17.5013 8.3335 18.3346 9.16683 18.3346 12.5002V14.1668C18.3346 17.5002 17.5013 18.3335 14.168 18.3335Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Lock.propTypes = {
  className: PropTypes.string
}

export default Lock
