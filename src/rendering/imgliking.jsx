import React from 'react'

const imgliking = (props) => {
  return (
    <div>
      <button onClick={props.functionality}> Like Img {props.count} </button>
    </div>
  )
}

export default imgliking