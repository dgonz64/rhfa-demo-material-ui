import React from 'react'
import classnames from 'classnames'
import { Button as MUIButton } from '@material-ui/core'

export const Button = ({
  type,
  text,
  children,
  ...rest
}) => {
  const addType = type == 'submit' ? { color: 'primary' } : {}

  return (
    <MUIButton type={type} {...addType} {...rest}>
      {text}{children}
    </MUIButton>
  )
}
