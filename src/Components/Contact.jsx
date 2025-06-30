import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='flex  items-center'>
                <img src='../../public/icons8-home-50.png' className='btn h-[40px] py-2' ></img>
                <div>
                    <p>Address:</p>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
             <div className='flex  items-center'>
               <button><img src='../../public/icons8-mail-50.png' className='btn h-[40px] py-2'></img></button> 
                <div>
                    <p>My Email:</p>
                    <p>lamiyarahmankhan01@gmail.com</p>
                </div>
            </div >
             <div className='flex  items-center'>
                <img src='../../public/icons8-call-48.png' className='btn h-[40px] py-2'></img>
                <div>
                    <p>Call Me Now:</p>
                    <p>+8801994063900</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <button ><img src='../../public/icons8-facebook-50.png' className='btn btn-success btn-soft h-[40px] py-2'></img></button>
                 <button ><img src='../../public/icons8-github-30.png' className='btn btn-success btn-soft h-[40px] py-2'></img></button>
                  <button ><img src='../../public/icons8-codeforces-24.png' className='btn btn-success btn-soft h-[40px] py-2'></img></button>
                   <button ><img src='../../public/icons8-codechef-50.png'className='btn btn-success btn-soft h-[40px] py-2'></img></button>
            </div>
        </div>
    );
};

export default Contact;