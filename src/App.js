import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import User from 'pages/User'
import Artist from 'pages/Artist'
import Project from 'pages/Project'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/project" exact component={Project} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
