import React from 'react'
import style from '../Footer/fotter.css'








export default function Fotter() {
    return (
        <div  className='bg-dark  p-2  '>
            <div className="container  ">

                <div className="row my-1">

                    <div className="col-md-4 text-center">
                        <h3>location</h3>
                        <h5>2215 John Daniel Drive
                            Clark, MO 65243</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>AROUND THE WEB</h3>
                        <div className="row pt-5">
                            <div className="col-md-3"> 
                                <i class="fa-brands fa-facebook fa-shake fa-3x "></i>
                            </div>
                            <div className="col-md-3">
                                <i class="fa-brands fa-twitter fa-shake fa-3x"></i>
                            </div> <div className="col-md-3">
                                <i class="fa-brands fa-instagram fa-shake fa-3x"></i>
                            </div> <div className="col-md-3">
                                <i class="fa-brands fa-dribbble fa-shake fa-3x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <h5>2215 John Daniel Drive
                            Clark, MO 65243</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}
