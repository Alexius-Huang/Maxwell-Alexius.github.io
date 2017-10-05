import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <div>Hello World</div>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)