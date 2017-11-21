import gql from 'graphql-tag';

const module = function(){
	
	const users = gql`{
		userMany{
			firstName,
			email,
			LastName,
			_id,
			role
		}
	}`;
	return users;	
}

export default module;