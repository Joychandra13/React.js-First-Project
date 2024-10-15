
import React from 'react'

function Vehicle() {
  return (
    <>
        <div style={{ paddingTop: "100px" }} className="container">
            <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 39, width: "100%" }}>
                <h1 className='text-center'>Find vehicles near you</h1>
            </div>
            <img src="img/Map.png" className='find-vehicle'/>
            </div>
        </div>
    </>
  )
}

export default Vehicle ; 