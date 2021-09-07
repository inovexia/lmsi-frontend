import React from 'react'

const SignUp = ({
  match: {
    params: { RoleKey, InstituteId, Method, MethodValue },
  },
}) => {
  console.log(RoleKey)
  return (
    <div>
      <h1>{`Sign Up ${RoleKey}`}</h1>
    </div>
  )
}

export default SignUp
