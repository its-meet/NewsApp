import React from 'react'
import NewsComp from './components/NewsComp'
import Signin from './components/Signin'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import SavedNews from './components/SavedNews'
function App() {
    const pageSize = 12;
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/'  element={<Signup/>} />
      <Route exact path='/signin'  element={<Signin/>} />
      <Route exact path='/general'   element={<NewsComp key='general' pageSize={pageSize} country='us' category='general'/>} />
      <Route path='business'  element={<NewsComp key='business' pageSize={pageSize} country='us' category='Business'/>} />
      <Route path='entertainment'  element={<NewsComp key='entertainment' pageSize={pageSize} country='us' category='Entertainment'/>} />
      <Route path='health'  element={<NewsComp key='health' pageSize={pageSize} country='us' category='Health'/>} />
      <Route path='science'  element={<NewsComp key='science' pageSize={pageSize} country='us' category='Science'/>} />
      <Route path='sports'  element={<NewsComp key='sports' pageSize={pageSize} country='us' category='Sports'/>} />
      <Route path='technology'  element={<NewsComp key='technology' pageSize={pageSize} country='us' category='Technology'/>} />
      <Route exact path='savearticle' element={<SavedNews/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
