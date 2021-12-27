import React, { useContext, useEffect, useState } from 'react'
import { Wizard, Steps, Step } from 'react-albus2'
import { Card } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'
import BottomNavigation from 'src/components/wizard/BottomNavigation'
import TopNavigation from 'src/components/wizard/TopNavigation'

import PersonalInfo from './PersonalInfo'
import Address from './Address'
import Qualification from './Qualification'

const Edit = ({ match }) => {
  const pageHeading = 'Complete Profile',
    { updateAppStore } = useContext(AppContext),
    [stepId, setStepId] = useState('personal-details'),
    onClickNext = (goToNext, steps, stepItem) => {
      const stepIndex = steps.indexOf(stepItem),
        stepTotal = steps.length
      stepItem.isDone = true
      if (stepTotal - 1 <= stepIndex) {
        return
      }
      goToNext()
      setStepId(steps[stepIndex + 1].id)
    },
    onClickPrev = (goToPrev, steps, stepItem) => {
      const stepIndex = steps.indexOf(stepItem)
      if (stepIndex === 0) {
        return
      }
      goToPrev()
      setStepId(steps[stepIndex - 1].id)
    }

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [updateAppStore])

  false && console.log(match)

  return (
    <section className={'complete-profile'}>
      <Card>
        <Card.Body className={'wizard'}>
          <Wizard>
            <TopNavigation
              className={'justify-content-center'}
              disableNav={false}
            />
            <Steps>
              <Step id={'personal-details'} name={'Personal Details'}>
                <PersonalInfo />
              </Step>
              <Step id={'address'} name={'Address'}>
                <Address />
              </Step>
              <Step id={'qualification'} name={'Qualification'}>
                <Qualification />
              </Step>
              <Step id={'done'} hideTopNav>
                <div className={'wizard-step text-center my-9 py-9'}>
                  <h2 className={'mb-2'}>Congratulation</h2>
                  <p>Your profile completed successfully</p>
                </div>
              </Step>
            </Steps>
            {stepId !== 'done' && (
              <BottomNavigation
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
                className={'d-flex justify-content-end'}
                prevLabel={'Back'}
                nextLabel={stepId === 'qualification' ? 'Finish' : 'Next'}
              />
            )}
          </Wizard>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Edit
