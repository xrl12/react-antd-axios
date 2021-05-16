export function setToken (value) {
	return localStorage.setItem('token', value)
}

export function getToken () {
	return localStorage.getItem('token')
}

export function isLogin () {
	return getToken() ? true : false
}

export function clearToken () {
	return localStorage.clear()
}