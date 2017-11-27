import gql from 'graphql-tag';

const module = function(data){

	var users = JSON.stringify(data.users)
	const proyect = gql`mutation{
		projectCreate(record:{
			name:"${data.name}",
			users:${users},
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