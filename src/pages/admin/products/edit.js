import React from "react";
import {Card, Form, Input, Button} from 'antd';

class Edit extends React.Component {
	onFinish = (e) => {
		console.log(e)
	}

	render () {
		const shop_attr = [{
			name: '商品名字',
			help_mes: '请输入商品名字'
		}, {
			name: '价格',
			help_msg: '请输入商品价格'
		}]
		return <Card title="编辑商品">
			<Form name="shop_attr"
						initialValues={{remember: true}}
						onFinish={this.onFinish}>
				{shop_attr.map((el, index) => <Form.Item
					label={el.name}
					name={el.name}
					key={index}
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input placeholder="请输入商品名称"/>
				</Form.Item>)}
				<Form.Item>
					<Button type="primary" htmlType="submit">
						保存
					</Button>
				</Form.Item>
			</Form>
		</Card>
	}
}

export default Edit