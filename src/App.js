// import logo from './logo.svg';
import './App.css';
import {adminRouter} from './router/index'
import {Switch, Route, Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
import FrameComponent from './components/frame/index'
import {isLogin} from "./util";

function App (props) {
	return (
		isLogin() ?
			<FrameComponent>
				<Switch>
					{adminRouter.map(router => {
						return (
							<Route
								key={router.path}
								path={router.path}
								exact={router.exact}
								render={routeProps => {
									return <router.component {...routeProps}/>
								}}/>
						)
					})}
					<Redirect to='/404'/>
				</Switch>
				{props.children}
			</FrameComponent>
			: < Redirect to='/login'/>
	);
}

export default App;
