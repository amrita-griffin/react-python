import React, {Fragment} from 'react';
export default class App extends React.Component {
  render () {
    return (
    <Fragment>
      <p> 
      Hello from a pure Front-end World!
      </p>
      <a href="/hello">Hello from a Python server!</a>
    </Fragment>
    )
  }
}
