import React from 'react'
import { WithWizard } from 'react-albus2'

import { Button } from 'src/components/Buttons'

const TopNavigation = ({ className, disableNav, topNavClick }) => {
  const getClassName = (steps, step, index, stepItem) => {
    if (steps.indexOf(step) === index) {
      return 'step-doing'
    }
    if (steps.indexOf(step) > index || stepItem.isDone) {
      stepItem.isDone = true
      return 'step-done'
    }
    return 'step'
  }

  const itemClick = (stepItem, push) => {
    if (disableNav) {
      return
    }
    topNavClick(stepItem, push)
  }

  return (
    <WithWizard
      render={({ next, previous, step, steps, go, push }) => (
        <div className={'d-flex justify-content-center'}>
          <ul
            className={`nav nav-tabs ${className}${
              disableNav ? ' disabled' : ''
            }`}
          >
            {steps.map((stepItem, index) => {
              if (!stepItem.hideTopNav) {
                return (
                  <li
                    key={`topNavStep_${index}`}
                    className={`nav-item ${getClassName(
                      steps,
                      step,
                      index,
                      stepItem
                    )}`}
                  >
                    <Button
                      className={'nav-link'}
                      onClick={() => itemClick(stepItem, push)}
                    >
                      <span>{stepItem.name}</span>
                      <small>{stepItem.desc}</small>
                    </Button>
                  </li>
                )
              }
              return <span key={`topNavStep_${index}`} />
            })}
          </ul>
        </div>
      )}
    />
  )
}

export default TopNavigation
