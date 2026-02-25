import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null);

const recipeContext = (props) => {

    const [data, setdata] = useState([]);

  return (
    <recipecontext.Provider value = {{data, setdata}}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default recipeContext
