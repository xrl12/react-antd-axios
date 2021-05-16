import React from "react";
import {Card, Button, Table, Popconfirm} from 'antd';

class List extends React.Component {
	add = () => {
		let {history} = this.props
		history.push('/admin/list/edit')
	}

	render () {
		/*
		* const columns = [
		* 	{
		* 		title: '序号',
		* 		dataIndex: 'id',
		* 		key: 'id',
		* 		width: 80,  当前列的宽度
		*			align: 'center' 相当于text-align:  center
		* 		render: (txt, record, index) => {  自定义返回的内容
		*					console.log(txt, record)
		*					return index + 1
					}
		* 	}
		* ]
		* 这里写了dataIndex的值是id则在dataSource里面的字典的key必须是id
		* const dataSource = [
		* 	{
		* 		id: 1
		* 	}
		* ]
		* */
		const columns = [{
			title: '序号',
			dataIndex: 'id', // 这里的值和数据源的key想对应
			key: '1',
			width: 80,
			align: 'center',
			render: (txt, record, index) => {
				return index + 1
			}
		}, {
			title: '名字',
			dataIndex: 'name',
			key: '2'
		}, {
			title: '价格',
			dataIndex: 'price',
			key: '3'
		}, {
			title: '操作',
			key: '4',
			render: index => <div>
				<Popconfirm title="确认删除此项吗？" onCancel={() => console.log('用户取消了')} onConfirm={(target) => {
					console.log(target)
					return console.log('用户点击了确定')
				}}>
					< Button type="primary" size="small">修改</Button>
					<Button type="danger" style={{'margin': '0 1rem'}} size="small">删除</Button>
				</Popconfirm>
			</div>
		}]
		const dataSource = [
			{
				// id: 1,
				name: '小明',
				price: '10',
				key: '1'
			}, {
				// id: 2,
				name: '小红',
				price: '20',
				key: '2'
			}, {
				// id: 3,
				name: '小刚',
				price: '30',
				key: '3'
			},
		]
		return <Card title="商品列表" extra={<Button type="primary" size="small" onClick={this.add}>添加</Button>}>
			<Table columns={columns} dataSource={dataSource} bordered={true}/>
		</Card>
	}
}

export default List