"use client"
import { useRouter } from "next/navigation";


const Article = ({title, name, date, profilePic, coverPic, id})=>{

    const router = useRouter();
    
    const info=()=>{
        router.push(`/${id}`)
      }

    return(
        <div onClick={()=>info()} style={{width:"450px", height:"450px", display:"flex", flexDirection:"column", borderRadius:"15px", border:"solid 1px black", padding:"20px"}}>
            <div>
                <img style={{width:"450px", height:"300px", borderRadius:"15px"}} src={coverPic} />
            </div>
            <div style={{display:"flex",flexDirection:'column', gap:"20px"}}>
                <div>
                    <button>Technology</button>
                </div>
                <div style={{fontSize:"20px"}}>{title}</div>
                <div>
                    <div style={{display:'flex', gap:"8px"}}>
                        <img style={{width:"50px", height:'50px', borderRadius:"50%"}} src={profilePic} />
                        <div style={{marginTop:"10px",display:"flex", gap:"8px"}}>
                            <div>{name}</div>
                            <div>{date}, 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;