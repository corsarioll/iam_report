import gql from 'graphql-tag';

const module = function(data){
	
	const test = gql`mutation{
		createUser(user:{
			email:"${data.firstName}",
			firstName:"${data.firstName}",
			lastName:"${data.lastName}",
			password:"${data.password}",
			active:false,
			role:{
				name:"${data.role.name}"
			}
		}){
			firstName
			lastName
			email
			password
		}
	}`;
	return test;	
}

export default module;