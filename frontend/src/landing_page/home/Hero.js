import React from 'react';
import { Link } from "react-router-dom";

 function Hero() {
    return ( 
        <div className='container p-5 '>
            <div className='row text-center mb-5'>
                <img src="/media/images/homeHero.png" alt="heroimage" className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online plateform to invest in stocks, derivatives, mutual finds and more</p>
<Link class="nav-link active" aria-current="page" to="/signup">
                                <button className='p-2 fs-5 btn btn-primary' style={{width:"20%" ,margin:"0 auto"}}>Sign up Now</button>

              </Link>            </div>
        </div>
     );
 }
 
 export default Hero;