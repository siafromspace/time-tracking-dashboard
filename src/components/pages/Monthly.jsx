import React from 'react'
import Item from '../Item'

export default function Monthly({data}) {
  return (
    <>
     {data.map((item, i) => (
        <Item title={item.title} timeframe={item.timeframes.monthly} previous="Last month" />
     ))}
    </>
  )
}
