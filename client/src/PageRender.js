import React from 'react'
import {useParams} from 'react-router-dom'
import { NotFound } from './components/NotFound/NotFound'

const generatePage = (pageName) => {
  const component = () => require(`./pages/${pageName}`).default

  try {
    return React.createElement(component())
  } catch (error) {
    return <NotFound />
  }
}

const PageRender = () => { 
  const {page,id} = useParams()
  
  let pageNam = "";
  if(id){
    pageNam = `${page}/{id}`
  }else{
    pageNam = `${page}`
  }
  return generatePage(pageNam)
}

export default PageRender