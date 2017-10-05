import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './components/home.js'
import Resumé from './components/resumé.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        This is the Main Component!
        <Switch>
          <Route exact path="/"       component={ Home   } />
          <Route exact path="/resumé" component={ Resumé } />
        </Switch>
        <Link to="resumé" onClick={this.handleClick.bind(this)}>Resumé</Link>
      </main>
    )
  }
}

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('app')
)
