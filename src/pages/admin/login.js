import React from "react";
import {Card, Form, Input, Checkbox, Button} from 'antd'
import '../css/login.css'
import {setToken} from "../../util";
import {loinUser} from '../../api/auth/auth'

class Login extends React.Component {
	onFinish = (value) => {
		let {history} = this.props
		loinUser()
		setToken(value.username)
		history.push('/admin/list')
	}

	render () {
		return <Card title="登录" className='loginDiv'>
			<Form
				name="basic"
				initialValues={{remember: true}}
				onFinish={this.onFinish}
			>
				<Form.Item
					autoComplete='off'
					label="用户名"
					name="username"
					rules={[{required: true, message: '用户名不能为空'}]}
				>
					<Input/>
				</Form.Item>

				<Form.Item
					autoComplete='off'
					label="密码"
					name="pwd"
					rules={[{required: true, message: '密码不能为空'}]}
				>
					<Input.Password/>
				</Form.Item>

				<Form.Item name="remember" valuePropName="checked">
					<Checkbox>记住我</Checkbox>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						登录
					</Button>
				</Form.Item>
			</Form>
		</Card>
	}
}

export default Login