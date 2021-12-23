import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'

const StudentList = () => {
  const pageHeading = 'Student list',
    { updateAppStore } = useContext(AppContext)

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [updateAppStore])

  return (
    <div className={'students'}>
      <div className={'row text-center'}>
        <div className={'col-12'}>
          <Link
            to={'/app/students/invite'}
            className={'btn btn-outline-app my-3 mx-auto'}
          >
            Invite User
          </Link>
        </div>
        <div className={'col-12'}>
          <div className={'card'}>
            <div className={'card-body'}>
              <div className={'table-responsive'}>
                <table className={'table table-bordered mb-0'}>
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>NO. SLOTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Arafat Ahmed Chowdhury</td>
                      <td>2021134073</td>
                      <td>arafat.nayeem@gmail.com</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentList
