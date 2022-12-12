import React, { FC } from 'react'
import { FormWrapper } from '../../styled'
import { Input, Button } from '../../components'

const SignIn: FC = () => {
  return (
    <FormWrapper>
      <div className="form-title">Enter new password</div>
      <div className="fields">
        <Input
          name="password"
          type="password"
          label="New Password"
          placeholder="Enter Password"
        />
        <Input
          name="confirm"
          type="password"
          label="Repeat Password"
          placeholder="Enter password"
        />
        <Button>Submit</Button>
      </div>
    </FormWrapper>
  )
}

export default SignIn
