import React from 'react';
import PokedexHeader from './components/PokedexHeader'
import {
	Input,
	Segment
} from'semantic-ui-react'
import './App.css';

class App extends React.Component {
	constructor(props) {
		 super(props)
		 this.state = {
		 		author: "@liptaki13",
		 	  name: "Ivan"
		 }
		 this.onChange = this.onChange.bind(this)
	}

	onChange(event, data) {
		this.setState({
			name: data.value
		})
	}

  render() {
  	return(
      <div className="App">
        <PokedexHeader 
        	author={this.state.author} 
        	name={this.state.name} 
        />
        <Segment basic>
        	<Input 
        		label={"Your Name"}
        		onChange={this.onChange}
        		value={this.state.name}
        	/>

        </Segment>
      </div>
    );
  }
}

export default App;
