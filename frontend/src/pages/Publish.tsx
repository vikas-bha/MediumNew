import React, { ChangeEvent, useState } from 'react'
import AppBar from '../components/AppBar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <AppBar />
            <div className='flex justify-center pt-8'>
                <div className='max-w-screen-lg w-full'>

                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 ">Title</label> */}
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="title" />
                    <TextEditor onChange={(e)=>setContent(e.target.value)}/>
                    <button onClick={async ()=>{
   const response=  await axios.post(`${BACKEND_URL}/api/v1/post`, {
            title, 
            content
        }, {
            headers :{
                Authorization : localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)
        
        
    }} type="submit" className="inline-flex items-center mt-2 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
        Publish post
    </button>

                </div>

            </div>

        </div>

    )
}

export default Publish

function TextEditor({onChange} : {onChange : (e: ChangeEvent<HTMLTextAreaElement>)=> void}) {
    return (
        <div>
    <div className="w-full mb-4  mt-2">
        <div className="flex items-center justify-between  border-b ">
            <div className="  bg-white rounded-b-lg  w-full">
                <label className="sr-only">Publish post</label>
                <textarea onChange={onChange} rows={8} className="block pl-2 pt-2 w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0" placeholder="Write an article..." required />
            </div>
        </div>
    
    </div>

</div>


            
       
   
       


    )
}