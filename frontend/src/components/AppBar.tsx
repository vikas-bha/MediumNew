import React from 'react'
import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'
const AppBar = () => {
  return (
    <div className='border-b flex py-4 justify-between px-10 '>

        <Link to={"/blogs"} className='flex flex-col justify-center cursor-pointer'>
            Medium
        </Link>
        <div>
<Link to={"/publish"}>
<button type="button" className=" mr-4 focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2  ">New</button>

</Link>
            <Avatar size={"big"} name='vikas'/>
        </div>
    </div>
  )
}

export default AppBar