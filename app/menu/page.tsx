'use client'
import React, { useEffect, useState } from 'react'
import { client } from '../lib/client'

const page = () => {
 
    const [menu, setMenu] = useState([])
    useEffect(() => {
      client.fetch(`
       *[_type == "menuData"]{
        id,
        title,
        subtitle,
        "image": image.asset->url,
        menuItems[] {
          id,
          title,
          subtitle,
          "image": image.asset->url,
          price,
          variants[] {
            name,
            price
          }
        }
      }
    `)
      .then((data) => 
      setMenu(data)).catch(console.error)
            
      }, [])
  
      console.log("I CALL THIS",menu);
    
    return (
      <div className='bg-zinc-950'>
          {/* <SingleManu data={menu}/> */}
      </div>
    )
}

export default page