import gql from 'graphql-tag';

const module = function(data){
	
	const users = gql`{
		userOne(filter:{_id:"${data.id}"}){
			firstName,
			email,
			LastName,
			_id,
			role,
			roleId,
			active,
			googleId,
			image,
			userName
		}
	}`;
	return users;	
}

export default module;	