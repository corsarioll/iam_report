import gql from 'graphql-tag';

const module = function(data){
	
	const proyects = gql`{
		projectMany(filter:{users:["${data.userId}"]}){
			name,
			_id,
			users
		}
	}`;
	return proyects;	
}

export default module;