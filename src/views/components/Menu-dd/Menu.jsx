import React, { useState } from 'react'

const Menu =({ children, title }) =>{

  const [show, setShow]=useState(false)

    return(
        <div className ={show ? "nav-link active" : 'nav-link'} onClick={()=>setShow(!show)}>
          {title}
            <div style={show ? {height:`${children.length*55.31 + 2}px`}:undefined} className="menu">
                {children}
            </div>
      </div>
    )
}

export default Menu