import React from 'react';
import { Link } from 'react-router-dom'; 

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <Link to={'../../images/headshot'}></Link>
      <p>
      Full stack web developer educated at UCLA Extension. Passionate about problem solving and 
      creating efficient and effective solutions. A motivated worker who is also flexible based 
      on an ability to stay organized. A background in nutrition and wine making/wine sales leveraging 
      a unique perspective for a web developer. 
      </p>
      <p>
      I graduated from Cal Poly, San Luis Obispo in December 2021 with a degree in Nutrition, concentration
      in Applied Nutrition, and a minor in Fruit Science. After taking some time to travel and gain more
      expereince working at a winery, I decided that I not longer wished to pursue the field of nutrition. 
      As a result of talking to friends, industry professionals, and doing a lot of research, I realized that
      software development both interested and challenged me, so I wished to pursue this field.
      </p>
      <p>
        Outside of coding I enjoy baking for my friends and family, reading Hercule Poroit mystery books, 
        biking, and surfing on one of the two surfboards I shaped myself in college. Having been on the Cal 
        Poly sailing team sailing small two person sail boats, I am currently learning how to sail larger sail boats. 
      </p>
    </div>
  );
}