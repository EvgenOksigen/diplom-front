import React, { useState } from 'react'

const Menu =({ children, title }) =>{

  const [show, setShow] = useState(false)

    return(
        <div className ={show ? "nav-link active" : 'nav-link'} onClick={()=>setShow(!show)} onMouseLeave={()=>setShow(false)} >
          {title}
            <div style={show ? {height:`${children.length*53.31 + 6}px`}:undefined} className="menu" onMouseLeave={()=>setShow(false)}>
              <ul>
                {children.map((ch, i ) =><li key={i}>{ch}</li>)}
              </ul>
            </div>
      </div>
    )
}

export default Menu