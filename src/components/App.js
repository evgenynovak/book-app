import React from 'react'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'
import articles from '../database.js'

function App() {
 return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">App Name</h1>
      </div>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App
