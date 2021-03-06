import React from 'react'
import { WithWizard } from 'react-albus2'

import { Button } from 'src/components/Buttons'

const BottomNavigation = ({
  className,
  onClickPrev,
  prevLabel,
  onClickNext,
  nextLabel
}) => {
  return (
    <WithWizard
      render={({ next, previous, step, steps }) => (
        <div className={`wizard-buttons ${className}`}>
          <Button
            variant={'app'}
            className={`me-3 ${steps.indexOf(step) <= 0 ? 'disabled' : ''}`}
            onClick={() => {
              onClickPrev(previous, steps, step)
            }}
          >
            {prevLabel}
          </Button>

          <Button
            variant={'app'}
            className={
              steps.indexOf(step) >= steps.length - 1 ? 'disabled' : ''
            }
            onClick={() => {
              onClickNext(next, steps, step)
            }}
          >
            {nextLabel}
          </Button>
        </div>
      )}
    />
  )
}
export default BottomNavigation
