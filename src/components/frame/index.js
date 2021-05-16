import {Layout, Menu, Dropdown, Avatar, message} from 'antd';
import '../../pages/css/frame.css'
// import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {adminRouter} from "../../router"
import React from 'react'
import {withRouter} from 'react-router-dom'  // 如果想在页面进行跳转，需要使用withRouter
import {clearToken, getToken} from '../../util/index'
// const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class FrameComponent extends React.Component {
	state = {
		dropdownChild: [
			{
				id: 0,
				name: '通知中心'
			},
			{
				id: 1,
				name: '设置'
			},
			{
				id: 2,
				name: '推出'
			}
		]
	}

	menuClick = (el) => {
		let {history} = this.props
		if (el.key === '2') {
			clearToken()
			history.push('/login')
		} else {
			message.info(el.key)
		}
	}

	render () {
		let {dropdownChild} = this.state
		let {history, children} = this.props
		let menu_list = (<Menu>
				{dropdownChild.map(el =>
					<Menu.Item key={el.id} onClick={this.menuClick}>
						{el.name}
					</Menu.Item>
				)}

			</Menu>
		)
		const routes = adminRouter.filter(router => router.isShow)
		return (
			<Layout>
				<Header className="header" style={{'backgroundColor': '#428bca', 'textAlign': 'right'}}>
					<div className="logo"/>
					<Avatar style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
					<Dropdown overlay={menu_list} trigger={['click']} className="dropList">
						<a href="" className="ant-dropdown-link"
							 onClick={e => e.preventDefault()}>
							{getToken()}
						</a>
					</Dropdown>,
				</Header>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{height: '100%', borderRight: 0}}
						>
							{routes.map(el => {
								// return <SubMenu key={el.path} title={el.title}></SubMenu>
								return <Menu.Item key={el.path} onClick={p => {
									history.push(p.key)
								}}>
									{el.title}
								</Menu.Item>
							})}
						</Menu>
					</Sider>
					<Layout style={{padding: '0 24px 24px'}}>
						{/*<Breadcrumb style={{margin: '16px 0'}}>*/}
						{/*	<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
						{/*	<Breadcrumb.Item>List</Breadcrumb.Item>*/}
						{/*	<Breadcrumb.Item>App</Breadcrumb.Item>*/}
						{/*</Breadcrumb>*/}
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							{children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		)
	}

}

export default withRouter(FrameComponent)