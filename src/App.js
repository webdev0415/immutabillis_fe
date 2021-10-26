import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import User from 'pages/User'
import Collection from 'pages/Collection'
import Projects from 'pages/Projects'

import About from 'pages/About'
import Ones from 'pages/Ones'

import Gallery from 'pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route path="/about" exact component={About} />
        <Route path="/ones" exact component={Ones} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/collection" exact component={Collection} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
