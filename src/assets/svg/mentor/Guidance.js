import React from 'react'
import PropTypes from 'prop-types'

const Guidance = ({ className }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" />
      <path d="M17.0809 14.1596C14.2909 12.2996 9.74094 12.2996 6.93094 14.1596C5.66094 14.9996 4.96094 16.1496 4.96094 17.3796C4.96094 18.6096 5.66094 19.7496 6.92094 20.5896C8.32094 21.5296 10.1609 21.9996 12.0009 21.9996C13.8409 21.9996 15.6809 21.5296 17.0809 20.5896C18.3409 19.7396 19.0409 18.5996 19.0409 17.3596C19.0309 16.1396 18.3409 14.9896 17.0809 14.1596ZM14.3309 16.5596L11.8109 19.0796C11.6909 19.1996 11.5309 19.2596 11.3709 19.2596C11.2109 19.2596 11.0509 19.1896 10.9309 19.0796L9.67094 17.8196C9.43094 17.5796 9.43094 17.1796 9.67094 16.9396C9.91094 16.6996 10.3109 16.6996 10.5509 16.9396L11.3709 17.7596L13.4509 15.6796C13.6909 15.4396 14.0909 15.4396 14.3309 15.6796C14.5809 15.9196 14.5809 16.3196 14.3309 16.5596Z" />
    </svg>
  )
}

Guidance.propTypes = {
  className: PropTypes.string
}

export default Guidance
