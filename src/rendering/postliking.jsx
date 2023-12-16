import React from 'react'

const postliking = (props) => {
  return (
    <div>
      <button onClick={props.functinality}> Like post {props.count} </button>
    </div>
  )
}

export default postliking