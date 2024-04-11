import AppBar from "./AppBar"
import { BlogsProps } from "../hooks"
import { Avatar } from "./BlogCard"

const FullBlog = ({blog} : {blog : BlogsProps}) => {
  return (
    <div>
        <AppBar/>
        <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className=" col-span-8">
            <div className="text-3xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                Post on 2nd December
            </div>
            <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-4">
                <div className="text-slate-600 tex-lg">
                Author

                    </div>                    
            <div className="flex">
                <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name || 'Anonymous'}/>

                </div>
                <div>
                <div className="text-xl font-bold">
                    {
                blog.author.name || "Anonymous"
            }
                    </div>
            <div className="pt-2 text-slate-500">
            Random CatchPhrase about the author's ability to grab attention
        </div>
                </div>

            </div>
        </div>
        
    </div>
        </div>
    </div>
  )
}

export default FullBlog