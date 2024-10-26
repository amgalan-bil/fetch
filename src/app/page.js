"use client"

import { useEffect, useState } from "react";
import Article from "@/app/components/Article"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/navbar"

const Page = ()=>{

  const [articles, setArticles] = useState()
  const [count, setCount] = useState(1)
  const [value, setValue] = useState("")
  const router = useRouter()
  const getArticle = async()=>{
    const JSONdata = await fetch(`https://dev.to/api/articles?per_page=10&page=${count}`);
    const data = await JSONdata.json()
    setArticles(data)
    console.log(data)
  }

  useEffect(()=>{
    getArticle()
  },[count]);

  const goBack = ()=>{
    if(count === 1){
      return;
    }else{
      setCount(count - 1)
    }
  }

  const goForward = ()=>{

    if(filter.length){
      setCount(count + 1)
    }else{
      return;
    }
  }

  const filter = articles?.filter((item)=>{
    return item.title.toLowerCase().includes(value) || item.user.name.toLowerCase().includes(value)? item:null;
  })

  console.log(filter)

  return(
    <Nav articles = {articles} setArticles = {setArticles} setValue={setValue}>
      <div className="none">
        <div className="center">
          <div className="home">All Blog Post</div>
          <div className="grid">
            {filter?.length > 0 ?(filter?.map((item, index) =>{
              return <Article key={index} title ={item.title} date={item.readable_publish_date} name = {item.user.name} id = {item.id} profilePic = {item.user.profile_image} description = {item.description} coverPic = {item.cover_image}/>
            })):<div className="nothing">Nothing Found</div>}
          </div>
          <div className="footer">
            <div>
              <button className="skip" onClick={()=>goBack()}>Go Back</button>
            </div>
            <div className="count">{count}</div>
            <div>
              <button className="skip" onClick={()=>goForward()}>Go Forward</button>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  )

}

export default Page;