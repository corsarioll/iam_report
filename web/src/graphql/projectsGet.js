import gql from 'graphql-tag';

const module = function(){
	
	const proyects = gql`{
		projectMany{
			name,
			_id,
			users {
				firstName
				LastName
				email
				password
				role
			}
		}
	}`;
	return proyects;	
}

export default module;