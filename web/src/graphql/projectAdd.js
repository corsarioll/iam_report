import gql from 'graphql-tag';

const module = function(data){
		
	const proyect = gql`mutation{
		projectCreate(record:{
			name:"${data.name}",
		}){
			record{
			name,	
			_id
}
		}
	}`;
	return proyect;
}

export default module;