import React, { useState } from 'react'
export const recipeContext = recipeContext(null);

const recipeContext = (props) => {

    const [data, setdata] = useState([])


  return (
    <recipeContext.provider value = {useState([])}>
      {props.children}
    </recipeContext.provider>
  )
}

export default recipeContext
