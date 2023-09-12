import React from 'react'
import Item from '../Item'

export default function Daily({data}) {
  return (
    <div className='grid-container'>
     {data.map((item, i) => (
        <Item id={i} title={item.title} timeframe={item.timeframes.daily} previous="Yesterday" />
     ))}
    </div>
  )
}
