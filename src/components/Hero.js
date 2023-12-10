import React, { Component } from 'react';
import Typed from "react-typed";

class Hero extends Component {
    render() {
        return (
            <div className="parallax m-0">
                <div className="main-cover" data-aos="fade-left">                
                    
                    <div className="p-4  shadow-lg writing rounded">
                        <h3>
                        <i class="bx bx-home"  style={{color:" #673AB7;"}}> I am </i>    
                        </h3>
                        <h1>   
                        <i class="bx bx-home" > <Typed
                        strings={[ 'Mohamed Adam','A Programmer' , 'A Developer' , 'And i have no life']}
                        typeSpeed={50}
                        backSpeed={50}
                        backDelay={1500}
                        smartBackspace='true'
                        loop='true'
                        >

                        </Typed> </i>  
                    
                        </h1>
                    </div>
                    <h1 className="mt-5">Talking About the WonderLand and it's Magicty </h1>
                    
                </div>
            </div>
        );
    }
}

export default Hero;