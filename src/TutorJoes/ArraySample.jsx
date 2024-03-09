import React from 'react'

const ArraySample = (props) => {
  console.log(props)
  const {items} = props
  return (
    <div>
      <h2>Item List</h2>
      {items.map((selcItem)=>{
        // console.log(selcItem)
      return <p key={selcItem.id} >{selcItem.name}</p>
    })}</div>
  )
}

export default ArraySample