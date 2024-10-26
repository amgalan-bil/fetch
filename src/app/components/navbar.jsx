"use client"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { useState } from "react";


const Nav = ({children, articles, setArticles, setValue})=>{

    const router = useRouter();
    const path = usePathname()
    const home = ()=>{
        if(path === "/"){
            location.reload()
        }else{
            router.push("/")
        }
    }

    

  const handleInputValue=(e)=>{
    if(articles){
        setValue(e.target.value);
    }
  }


    const createPost = async() =>{

        router.push("/new")

    //     try{
    //     const JSONpost = await fetch(`https://dev.to/api/articles`,{
    //         method:"POST",
    //         headers:{
    //             "api-key":"fe4nEFAAgQNqE5oq5fHtFnps",
    //             "Access-Control-Allow-Headers": "*"
    //         },
    //         body:{
    //             article:{
    //                 title:"TEST",
    //                 description:"testing",
    //                 cover_image:"https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5beazyyi4d883jaduliq.jpg",
                    
    //             }
    //         }
    //     })
    //     const post = JSONpost.json()
    //     console.log(post);
    //     setArticles(...articles, post)
    // }catch(error){
    //     console.log(error)
    // }

    }
    return(
        <div>
            <div className="navigation">
                <div className="header">
                    <div>
                        <img onClick={()=>home()} className="logo" src="https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3%2F13d3b32a-d381-4549-b95e-ec665768ce8f.png" />
                    </div>
                    <div>
                        <input className="search" onChange={(e)=> handleInputValue(e)} placeholder="Search..." ></input>
                    </div>
                </div>
                <div className="createBlogDiv">
                    <button onClick={()=> createPost()} className="create">Create Blog</button>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Nav;