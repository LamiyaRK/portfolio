import Lottie from 'lottie-react';
import React from 'react';
import anime from '../../public/laptop.json'
const Aboutme = () => {
   
    return (
        <div className='flex justify-between items-center w-5/6 mx-auto  h-[450px] my-[80px]'>
            <div className='w-[50%] '>
                <Lottie  
                animationData={anime}
                loop={true}/>
            </div>
           
              <div className="tabs tabs-lift w-[50%] h-[420px]">
  <input type="radio" name="tab" className="tab" aria-label="Introduction" />
  <div className="tab-content bg-base-100 border-base-300 p-6 text-xl"><p>
  Hi, I’m <span className='text-[#019d91] font-medium'>Lamiya</span><br/><br/> — a <span className='text-[#019d91] font-medium'>frontend developer</span> who loves building <span className='text-[#019d91] font-medium'>smooth, clean web experiences and learning through challenges</span> . Alongside web development, I’ve also explored <span className='text-[#019d91] font-medium'>competitive programming</span>, which helped me grow <span className='text-[#019d91] font-medium'> strong problem-solving habits and a deeper understanding of code</span> . I’m currently expanding my skills with the goal of becoming a <span className='text-[#019d91] font-medium'>full stack developer</span>.
</p>
</div>

  <input type="radio" name="tab" className="tab" aria-label="Skills" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><div className="space-y-6">
  <div>
    <h3 className="text-xl font-semibold mb-2 text-[#019d91]">Technical Skills</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li>HTML, CSS, JavaScript</li>
      <li>React.js, Tailwind CSS</li>
      <li>Git & GitHub</li>
      <li>Basic Node.js & REST APIs</li>
    </ul>
  </div>
  <div>
    <h3 className="text-xl font-semibold mb-2 text-[#019d91]">Soft Skills</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li>Problem-solving and analytical thinking</li>
      <li>Creative eye for design and UI/UX</li>
      <li>Strong communication and collaboration</li>
      <li>Growth mindset and adaptability</li>
    </ul>
  </div>
</div>
</div>

  <input type="radio" name="tab" className="tab" aria-label="Hobbies" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><div>
  <h3 className="text-xl font-semibold mb-2 text-[#019d91]">Hobbies & Interests</h3>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
   Besides coding I enjoy :
    <li>Reading books that expand perspective and spark curiosity</li>
    <li>Learning new things that help me grow personally and creatively</li>
    <li>Sketching and journaling as a form of quiet expression</li>
    <li>Exploring calming and cozy visual aesthetics</li>
  </ul>
</div>

</div>    
            </div>
        </div>
    );
};

export default Aboutme;