import React from 'react'
import Item from '../Item'

export default function Weekly({data}) {
  return (
    <div className='grid-container'>
     {data.map((item, i) => (
        <Item id={i} title={item.title} timeframe={item.timeframes.weekly} previous="Last week" />
     ))}
    </div>
  )
}
