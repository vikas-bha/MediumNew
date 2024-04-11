import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@vikas__bhardwaj/common/dist";

import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
   async function sendRequests (){
    try {
      const response =  await  axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        // console.log(response.data)
        const jwt = await response.data;
        console.log(jwt.jwt);
        localStorage.setItem("token", jwt.jwt);
        navigate("/blogs");
    } catch (error) {
        
        alert(error);
    }

    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-xl font-extrabold">
                            create an account
                    </div>
                    <div className="text-slate-400">
                        {/* Already have an account? */}
                        {type === "signin" ? "Don't have an account ? " : "Already have an account ?"}
                        <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-2 underline">{type === "signin" ? "Sign up" : "Log In"}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col  pt-4">
                   {
                    type === "signup"? <LabelledInput label="name" placeholder="Vikas Bhardwaj" onChange={(e) => {
                        setpostInputs(postInputs => ({
                            ...postInputs, name: e.target.value
                        }))
                    }} /> : null
                   }
                    <LabelledInput label="email" placeholder="VikasBhardwaj@gmail.com" onChange={(e) => {
                        setpostInputs(postInputs => ({
                            ...postInputs, email: e.target.value
                        }))
                    }} />
                    <LabelledInput label="password" type={"password"} placeholder="123456" onChange={(e) => {
                        setpostInputs(postInputs => ({
                            ...postInputs, password: e.target.value
                        }))
                    }} />
                    <button onClick={sendRequests} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign in"}</button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

const LabelledInput = ({ label, placeholder, onChange, type }: LabelledInputType) => {
    return <div>
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2 pt-2" >
                {label}
            </label>
            <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type={type || "text"} placeholder={placeholder} />
        </div>
    </div>

}