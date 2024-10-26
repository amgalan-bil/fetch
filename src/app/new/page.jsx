"use client"
import Nav from "@/app/components/navbar"
import { createElement, useState } from "react"


const Post = ()=>{

    const [title,setTitle] = useState("")
    const [content, setContent] = useState('')
    const [emptyVal, setEmptyVal] = useState(null)
    const [emptyContent, setEmptyContent] = useState(null)

    const titleValue=(e)=>{
        setTitle(e.target.value)
        console.log(title)
    }

    const contentValue = (e)=>{
        setContent(e.target.value)
        console.log(content)
    }

    const publish = ()=>{
        if(title){
            setEmptyVal(null);
        }else if(!title){
            setEmptyVal("Title is Required")
        }

        if(content){
            setEmptyContent(null);
        }else if(!content){
            setEmptyContent("Content is Required")
        }

        if(title && content){
            alert("publish success")
        }
    }

    return(
        <Nav>
            <div className="center">
                <div className="canvas">
                    <div className="titleInfo">
                        <input style={{height:"200px", width:"800px", fontSize:"40px", fontWeight:"bold", border:"none"}} onChange={(e)=>titleValue(e)} placeholder="New post title here..." />
                        {emptyVal?<div className="required">{emptyVal}*</div>:""}
                    </div>
                    <div className="attachments">

                    </div>
                    <div>
                        <input style={{height:"100px", width:"800px", border:"none"}} onChange={(e)=>contentValue(e)} placeholder="Write your post content here..." />
                        {emptyContent?<div className="required">{emptyContent}*</div>:""}
                    </div>
                </div>
            </div>
            <div className="publish">
                    <button className="publishBtn" onClick={()=>publish()}>Publish</button>
                    <button className="btn">Save Draft</button>
                    <button className="btn">Revert New Changes</button>
            </div>
        </Nav>
    )
}

export default Post;