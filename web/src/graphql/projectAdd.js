import gql from 'graphql-tag';

const module = function(data){

	var users = JSON.stringify(data.users)
	users = users.replace(/\"([^(\")"]+)\":/g,"$1:");
	
	const proyect = gql`mutation{
		projectCreate(record:{
			name:"${data.name}",
			users:${users}
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