import React from 'react'
import PropTypes from 'prop-types'

const DocumentText = ({ className }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 5.83268V14.166C17.5 16.666 16.25 18.3327 13.3333 18.3327H6.66667C3.75 18.3327 2.5 16.666 2.5 14.166V5.83268C2.5 3.33268 3.75 1.66602 6.66667 1.66602H13.3333C16.25 1.66602 17.5 3.33268 17.5 5.83268Z" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.082 3.75V5.41667C12.082 6.33333 12.832 7.08333 13.7487 7.08333H15.4154" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66797 10.834H10.0013" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66797 14.166H13.3346" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

DocumentText.propTypes = {
  className: PropTypes.string
}

export default DocumentText
