import React from 'react'
import Item from '../Item'

export default function Weekly({data}) {
  return (
    <>
     {data.map((item, i) => (
        <Item title={item.title} timeframe={item.timeframes.weekly} previous="Last week" />
     ))}
    </>
  )
}
