import React from 'react'
import { ucFirst, getRoleId } from 'src/helpers/Utils'
const SignUp = ({
  match: {
    params: { InstituteId, Method, MethodValue, RoleKey = 'learner' },
  },
}) => {
  false && console.log(InstituteId, Method, MethodValue, getRoleId(RoleKey))
  return <h1>{`Sign Up ${ucFirst(RoleKey)}`}</h1>
}

export default SignUp
