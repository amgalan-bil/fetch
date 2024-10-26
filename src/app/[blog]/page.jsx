"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react"
import { useRouter } from "next/navigation";
import Nav from "@/app/components/navbar"

const Info = () => {

    const path = usePathname()
    const [info, setInfo] = useState()
    const router = useRouter()

    const details = async () => {
        const JSONdata = await fetch(`https://dev.to/api/articles${path}`)
        const data = await JSONdata.json()
        setInfo(data)
    }
    console.log(info)


    useEffect(() => {
        details()
    }, [])
    console.log(info)
    return (
        <Nav>
            <div>
                <div className="center">
                    {
                        info ? <div className="layout">
                            <img className="cover" src={info.cover_image} />
                            <div className="info">
                                <div className="author">
                                    <img className="profile" src={info.user?.profile_image} />
                                    <div>
                                        <div className="post_author">{info.user?.name}</div>
                                        <div> Posted on {info.readable_publish_date}</div>
                                    </div>
                                </div>

                                <div className="title">{info.title}</div>
                            </div>
                            <div className="description">
                                {info.body_markdown}
                            </div>
                        </div> : 'loading'
                    }
                </div>
            </div>
        </Nav>

    )
}

export default Info;