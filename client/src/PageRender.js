import React from 'react'
import {useParams} from 'react-router-dom'

const PageRender = () => { 
  const {page,id} = useParams()
  
  console.log(useParams())
  return (
    <div>

    </div>
  )
}

export default PageRender