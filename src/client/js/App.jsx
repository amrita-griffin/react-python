import React, {Fragment} from 'react';
export default class App extends React.Component {
  render () {
    return (
    <Fragment>
      <p> 
      Hello from the React World!
      If you are able to open localhost:5000, you have a python server running.
      </p>
      <a href="/hello">Random Salutation from Python!</a>
    </Fragment>
    )
  }
}
