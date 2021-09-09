import React from 'react'

export const Button = ({
  type = 'button',
  variant = 'primary',
  label = 'Click Me',
  onClick,
  onMouseDown,
  onMouseUp,
  onKeyDown,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onKeyDown}
    >
      {label}
    </button>
  )
}

export const OutlineButton = ({
  type = 'button',
  variant = 'primary',
  label = 'Click Me',
  onClick,
  onMouseDown,
  onMouseUp,
  onKeyDown,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-outline-${variant}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onKeyDown}
    >
      {label}
    </button>
  )
}
