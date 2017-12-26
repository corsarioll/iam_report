import gql from 'graphql-tag';

const module = function(data){
	
	var usersOrganized = organize(data.users);
	
	const users = gql`query{
		userMany(filter:{_ids:${usersOrganized}}){
			userName,
			_id,
			image,
		}
	}`;
	return users;	
}

const organize = function (data){
	var process = ''
	process = JSON.stringify(data)
	process = process.replace(/\"([^(\")"]+)\":/g,"$1:")
	return process
}

export default module;