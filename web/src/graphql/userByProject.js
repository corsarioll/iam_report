import gql from 'graphql-tag';

const module = function(data){
	
	const users = gql`{
		userMany(filter:{projects:["${data._id}"]}) {
			firstName
			LastName
			email
			password
			role
			roleId
		}
	}`;
	return users;	
}

export default module;
