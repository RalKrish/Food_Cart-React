import React from 'react'
import propTypes from "prop-types"

const List2 = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
List2.propTypes = {
  children : propTypes.array
}


export default List2