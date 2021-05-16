import Login from "../pages/admin/login";
import DashBoard from "../pages/admin/dashboard";
import List from "../pages/admin/products/list";
import Edit from "../pages/admin/products/edit";
import NotPage from "../pages/admin/notPage";

export const mainRouter = [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/404',
		component: NotPage
	}
]

export const adminRouter = [
	{
		path: '/admin/dashboard',
		component: DashBoard,
		isShow: true,
		title: '面板',
		icon: 'FundTwoTone'
	},
	{
		path: '/admin/list',
		exact: true, // 表示全部匹配，才会进入
		component: List,
		isShow: true,
		title: '商品管理'
	},
	{
		path: '/admin/list/edit/:id?',
		component: Edit,
		isShow: false,
		title: '商品编辑'
	}
]