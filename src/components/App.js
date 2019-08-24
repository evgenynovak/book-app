import React from 'react'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'
import articles from '../database.js'

function App() {
 return (
    <div>
        <h1>App Name</h1>
        <ArticleList articles={articles}/>
    </div>
  );
}

export default App
