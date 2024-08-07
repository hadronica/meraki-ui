import React from 'react'

type IContainerIconProps = {
  [key: string]: any
  children: React.ReactNode | React.ReactNode[]
}

const ContainerIcon = ({ children, ...restProps }: IContainerIconProps) => (
  <div {...restProps}>{children}</div>
)

export default ContainerIcon
