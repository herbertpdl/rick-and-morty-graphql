import React from 'react'

import { Card } from './card.styles'

const CardComponent = ({ children }: { children: any }) => (
  <Card>
    {children}
  </Card>
)

export default CardComponent