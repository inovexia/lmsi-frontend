import React from 'react'
import { ucFirst } from '../../helpers/Utils'
const SignUp = ({
  match: {
    params: { InstituteId, Method, MethodValue, RoleKey },
  },
}) => {
  false && console.log(InstituteId, Method, MethodValue)
  return <h1>{`Sign Up ${ucFirst(RoleKey)}`}</h1>
}

export default SignUp
