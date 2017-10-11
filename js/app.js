import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './components/navigation.js'
import Home from './components/home.js'
import Resumé from './components/resumé.js'
import Portfolio from './components/portfolio.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page-wrapper">
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/home" /> }/>
            <Route exact path="/home"      component={ Home      }/>
            <Route exact path="/resumé"    component={ Resumé    }/>
            <Route exact path="/portfolio" component={ Portfolio }/>
          </Switch>
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('app')
)
