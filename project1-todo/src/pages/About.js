import React from 'react'

const About = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ex mollitia recusandae non sed adipisci quis obcaecati quod neque iusto, odio, suscipit explicabo officia soluta perspiciatis quaerat labore iure numquam.</p>
      <button class="btn wave-effect wave-light" type="button" onClick={()=>{
        props.history.push('/');
      }}>Go to Home</button>
      <button class="btn wave-effect wave-light" type="button" onClick={()=>props.history.push('/contact')}>Go to Contact</button>
    </div>
  )
}

export default About
