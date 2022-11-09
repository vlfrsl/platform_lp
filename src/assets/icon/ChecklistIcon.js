import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const ChecklistIcon = ({ className, fill }) => {
  return (
    <svg className={clsx(
      'm-auto left-0 right-0',
      className
    )} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0013 1.66699C5.40964 1.66699 1.66797 5.40866 1.66797 10.0003C1.66797 14.592 5.40964 18.3337 10.0013 18.3337C14.593 18.3337 18.3346 14.592 18.3346 10.0003C18.3346 5.40866 14.593 1.66699 10.0013 1.66699ZM13.9846 8.08366L9.25964 12.8087C9.14297 12.9253 8.98464 12.992 8.81797 12.992C8.6513 12.992 8.49297 12.9253 8.3763 12.8087L6.01797 10.4503C5.7763 10.2087 5.7763 9.80866 6.01797 9.56699C6.25964 9.32533 6.65964 9.32533 6.9013 9.56699L8.81797 11.4837L13.1013 7.20033C13.343 6.95866 13.743 6.95866 13.9846 7.20033C14.2263 7.44199 14.2263 7.83366 13.9846 8.08366Z" fill={fill}/>
    </svg>
  )
}

ChecklistIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
}

export default ChecklistIcon
