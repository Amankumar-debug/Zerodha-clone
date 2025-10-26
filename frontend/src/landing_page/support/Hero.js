import React from 'react';

function Hero() {
    return (  
       <div style={{backgroundColor:"rgb(56,126,209)",color:"white"}}>
        <div className='container px-5 '>
            <div className='row p-5 '>
                <div className='col-10'><h4>Support Portal</h4></div>
                
                <div className='col-2'><a href='' style={{color:"white"}}>Track Tocket</a></div>
                
            </div>
            <div className='row px-5 mt-4'>
                <div className='col-6 p-x-5 mb-5 '>
                    <p className='fs-4'>Search for an answer or browes help topics to create a ticket</p>
                    <input placeholder='Eg: how to i activate F&O, why is my order getting rejected...' style={{width:"100%",height:"4.5rem",borderRadius:".4rem",border:"white"}}></input>
                   
                    <div className="mt-2">
                <a href=''style={{color:"white"}}>Track account opening</a>
                     <a href=''style={{color:"white",marginLeft:"1rem"}}>Track Segment activation</a>
                      <a href=''style={{color:"white",marginLeft:"1rem"}}>intraday</a>
                       <a href=''style={{color:"white",marginLeft:"1rem"}}>margins</a>
                        <a href=''style={{color:"white"}}>Kite user manual</a>
                        </div>
                </div>
                <div className='col-6'>
                    <p className='fs-3 px-5 ' style={{marginLeft:"7rem"}}>Featured</p>
                    <div style={{marginLeft:"30%"}}>
                    1.<a href='' style={{color:"white"}}>Current Takeover and Delisting-January-2025</a><br/>
                    2.<a href='' style={{color:"white"}}>Latest intraday laverages - MIS and CO</a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Hero;