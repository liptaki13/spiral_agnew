import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const Foo = ({ name }) => {
 return (
     <p>this is a Foo Component. It's name is {name}.</p>
     )
}

const Item = (props) => {
 return(
     <div>
     <p>this is an Item Component. It's name is {props.name}.</p>
     <Foo name={'wabby'} />
     <Foo name={'sobby'} />
     {item}
     </div>
     )
}

const item = <p>this is an item. elements are composable.</p>

const element = <div>
<h1>HI</h1>
<p>eat me</p>
<Item name='cool guy'/>
    
</div>

ReactDOM.render(
  //<React.StrictMode>
    // <App />
  //</React.StrictMode>,
    element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();
