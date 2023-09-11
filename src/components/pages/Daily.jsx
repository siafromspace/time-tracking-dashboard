import React from 'react'
import Item from '../Item'

export default function Daily({data}) {
  return (
    <>
     {data.map((item, i) => (
        <Item title={item.title} timeframe={item.timeframes.daily} previous="Yesterday" />
     ))}
    </>
  )
}
