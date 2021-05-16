import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {mainRouter} from "./router";

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/admin" render={routeProp => <App {...routeProp}/>}/>
			{mainRouter.map(el => {
				return <Route key={el.path} path={el.path} component={el.component}/>
			})}
			{/*如果没有匹配到就返回404*/}
			<Redirect to="/login" form='/'/>
			{/*如果没有匹配到就返回404*/}
			<Redirect to="/404"/>
		</Switch>
	</Router>,
	document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
