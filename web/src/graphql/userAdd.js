import gql from 'graphql-tag';

const module = function(data){
	
	const test = gql`mutation{
		userCreate(record:{
			firstName:"${data.firsName}",
			LastName:"${data.LastName}",
			email:"${data.email}",
			role:"${data.role}",
			active:false,

		}){
			record{
				firstName
			}
		}
	}`;
	return test;	
}

export default module;