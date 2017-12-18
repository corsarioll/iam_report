import gql from 'graphql-tag';

const module = function(data){
	const proyects = gql`{
		projectMany(filter:{users:["${data._id}"]}) {
			name,
			_id
		}
	}`;
	return proyects;	
}

export default module;