import gql from 'graphql-tag';

const module = function(){
	
	const proyects = gql`{
		projectMany{
			name,
			_id,
			users
		}
	}`;
	return proyects;	
}

export default module;