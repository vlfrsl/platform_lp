import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = ({ className = 'fill-white/[0.06]' }) => {
  return (
    <svg className="m-auto left-0 right-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={className} d="M10.0013 1.66699C5.40964 1.66699 1.66797 5.40866 1.66797 10.0003C1.66797 14.592 5.40964 18.3337 10.0013 18.3337C14.593 18.3337 18.3346 14.592 18.3346 10.0003C18.3346 5.40866 14.593 1.66699 10.0013 1.66699ZM12.8013 11.917C13.043 12.1587 13.043 12.5587 12.8013 12.8003C12.6763 12.9253 12.518 12.9837 12.3596 12.9837C12.2013 12.9837 12.043 12.9253 11.918 12.8003L10.0013 10.8837L8.08464 12.8003C7.95964 12.9253 7.8013 12.9837 7.64297 12.9837C7.48464 12.9837 7.3263 12.9253 7.2013 12.8003C6.95964 12.5587 6.95964 12.1587 7.2013 11.917L9.11797 10.0003L7.2013 8.08366C6.95964 7.84199 6.95964 7.44199 7.2013 7.20033C7.44297 6.95866 7.84297 6.95866 8.08464 7.20033L10.0013 9.11699L11.918 7.20033C12.1596 6.95866 12.5596 6.95866 12.8013 7.20033C13.043 7.44199 13.043 7.84199 12.8013 8.08366L10.8846 10.0003L12.8013 11.917Z" />
    </svg>
  )
}

CloseIcon.propTypes = {
  className: PropTypes.string
}

export default CloseIcon
