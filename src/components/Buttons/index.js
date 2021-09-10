import React from 'react'

export const Button = ({
  type = 'button',
  className,
  variant = 'primary',
  label = 'Click Me',
  disabled = false,
  children,
  onClick,
  onMouseDown,
  onMouseUp,
  onKeyDown,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onKeyDown}
      disabled={disabled}
    >
      {children ? children : label}
    </button>
  )
}

export const OutlineButton = ({
  type = 'button',
  className,
  variant = 'primary',
  label = 'Click Me',
  disabled = false,
  children,
  onClick,
  onMouseDown,
  onMouseUp,
  onKeyDown,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-outline-${variant} ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onKeyDown}
      disabled={disabled}
    >
      {children ? children : label}
    </button>
  )
}
