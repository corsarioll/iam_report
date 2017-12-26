import gql from 'graphql-tag';

const module = function(){
	
	const users = gql`{
		userMany{
			firstName,
			email,
			LastName,
			userName,
			_id,
			role,
			roleId,
		}
	}`;
	return users;	
}

export default module;