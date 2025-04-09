import React from 'react'
import { Link } from 'react-router-dom';

function  blog  (){
  return (
    <>
    <div>IM currently working on this project</div>
    <button>
      <Link to="/home">
      back to home</Link></button>
    </>
  )
}
export default blog;