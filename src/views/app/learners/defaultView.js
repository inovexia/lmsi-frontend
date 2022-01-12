import React from 'react'
import { Link } from 'react-router-dom'

const LearnerList = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'row text-center'}>
      <div className={'col-12'}>
        <Link
          to={'/app/learners/invite'}
          className={'btn btn-outline-app my-3 mx-auto'}
        >
          Invite Learner
        </Link>
      </div>
      <div className={'col-12'}>
        <div className={'card'}>
          <div className={'card-body'}>
            <div className={'table-responsive'}>
              <table className={'table table-borderless mb-0'}>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>View Profile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/1`}>View Profile</Link>
                  </tr>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/2`}>View Profile</Link>
                  </tr>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/3`}>View Profile</Link>
                  </tr>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/4`}>View Profile</Link>
                  </tr>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/5`}>View Profile</Link>
                  </tr>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/6`}>View Profile</Link>
                  </tr>
                  <tr>
                    <td>Arafat Ahmed Chowdhury</td>
                    <td>2021134073</td>
                    <td>arafat.nayeem@gmail.com</td>
                    <Link to={`${match.url}/7`}>View Profile</Link>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnerList
