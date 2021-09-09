import React, { useState } from 'react'

const Number = () => {
  const min = 1,
    max = 50,
    [value, setValue] = useState(min),
    [timeout, updateTimeOut] = useState(null),
    increaseValue = speed => {
      setValue(oldValue => {
        return oldValue < max ? oldValue + 1 : max
      })
      updateTimeOut(
        setTimeout(() => {
          increaseValue(speed * 0.8)
        }, speed)
      )
    },
    decreaseValue = speed => {
      setValue(oldValue => {
        return oldValue > min ? oldValue - 1 : min
      })
      updateTimeOut(
        setTimeout(() => {
          decreaseValue(speed * 0.8)
        }, speed)
      )
    },
    buttonPress = doAction => {
      doAction(100)
    },
    buttonRelease = () => {
      timeout && clearTimeout(timeout)
    }

  return (
    <div className={'row gx-0 justify-content-center'}>
      <div className={'col-md-2'}>
        <div className={'input-group input-group-lg mb-3'}>
          <button
            type={'button'}
            className={'btn btn-outline-primary px-4'}
            onMouseDown={() => buttonPress(decreaseValue)}
            onMouseUp={() => buttonRelease()}
          >
            -
          </button>
          <input
            type={'text'}
            className={'form-control text-center'}
            aria-label={'Number'}
            readOnly={true}
            value={value}
          />
          <button
            type={'button'}
            className={'btn btn-outline-primary px-4'}
            onMouseDown={() => buttonPress(increaseValue)}
            onMouseUp={() => buttonRelease()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Number
