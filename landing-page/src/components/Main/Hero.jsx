import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
     
    <>
    <div className='hero'>
    <div className='main-first'>
       <div className='first-cont'>
        Earning Rewards <br/> 
        has never been <br/> 
        so easy
        </div>
        <div className='pix'>
        <img src="./assets/Frame 325.png" alt="iphones" style={{ margin: 10}} className='pixa'/>
        <img src="./assets/Frame 326.png" alt="download1" style={{ margin: 10}} className='pixb'/>
        <img src="./assets/iPhone 12 Pro Max.png" alt="download2" style={{right: 0, marginRight: 10}} className='pixc'/>
      </div>
      </div>
      <div>
          <div>
            <div>

              <div>
              <p>HOW IT WORKS</p>
                <p>What our customers <br /> say about us? </p>
                <div>
                <img src='' alt='track'/>
                <h3>Track your <span>savings</span></h3>
                <p>Track your savings and build spending habbits</p>
                </div>
                <div>
                  <h3>Accomplish your <span>goals</span></h3>
                  <p>Accomplish your savings <br/> goals</p>
                <img src='' alt='track'/>
                </div>
                <div>
                  <h3>Redeem <span>rewards</span></h3>
                  <p>Redeem rewards when you <br/> accomplish your savings <br /> goals </p>
                  <img src='' alt='track'/>
                  </div>
              </div>
                


                  {/* last hero section  */}
                  <div>
                    
              <div>
              <h6>WHAT THEY SAY</h6>
                <h3>What our customers <br /> say about us? </h3>
                <div>
                
                
                <p>It was hard to discipline myself <br /> 
                in the past. The rewards <br /> definitely help me achieve my goals.</p>
                <p>~Marry from Canada</p>
                <div><span>Prev</span></div>
                <div><span>Next</span></div>

                </div>
                  </div>



          </div>
          <div>
        
          </div>
      </div>
      </div>
      </div>

 </>
  );
};

export default Hero;
