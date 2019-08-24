import React from 'react'
import {render} from 'react-dom'

function Article() {
  const body = <section>Footer</section> 
 return(
      <div className="hello" style={{color:"red"}}>
        <h2>title</h2>
        <section>body</section> 
        { body }
        <h3 style={{color:"red"}}>
         "creation date : "{ (new Date()).toDateString()}
        </h3>
      </div>
    );
}

function App() {
 return (
    <div>
        <h1>App Name</h1>
        <Article/>
    </div>
  );
}

render(<App/> ,document.getElementById('root'))
