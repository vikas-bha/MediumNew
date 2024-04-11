/* eslint-disable react-hooks/rules-of-hooks */
import  { useEffect, useState } from 'react'
import axios from 'axios';
import { BACKEND_URL } from '../config';

export interface BlogsProps {
    "content" : string;
    "title" : string;
    "id" : string;
    "author" :{
        "name" : string
    }
}
export const useBlogs = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogsProps[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{

    axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
        headers : {
            Authorization : localStorage.getItem("token")
        }
    }).then(response=>{
        // console.log(response);
        // console.log(response.data.posts)
        setBlogs(response.data.posts);
        setLoading(false);
    })
    },[])
  return {
    loading, blogs
  }
}


export const useBlog =({id}: {id: string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogsProps>();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{

    axios.get(`${BACKEND_URL}/api/v1/post/${id}`, {
        headers : {
            Authorization : localStorage.getItem("token")
        }
    }).then(response=>{
        // console.log(response);
        // console.log(response.data.posts)
        setBlog(response.data.post);
        setLoading(false);
    })
    },[id])
  return {
    loading, blog
  }
}
