import axios_obj from './../index'

export function loinUser () {
	axios_obj.post('test', {username: 'aa', password: 'bb'})
}
