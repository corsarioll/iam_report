import gql from 'graphql-tag';

const module = function(){
	
	const roles = gql`{
		roleMany{
			roleName,
			roleId
		}
	}`;
	return roles;	
}

export default module;