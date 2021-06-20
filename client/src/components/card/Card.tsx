import React from 'react'

import {
  Card,
  CardTitle,
  CardImage,
} from './card.styles'

const CardComponent = ({ title, image }: { title: string, image: string }) => (
  <Card>
    <CardTitle>
      {title}
    </CardTitle>
    <CardImage src={image} />
  </Card>
)

export default CardComponent