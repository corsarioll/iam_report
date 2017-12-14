import gql from 'graphql-tag';

const module = function(data){
	
	const test = gql`mutation{
		userCreate(record:{
			firstName:"${data.firstName}",
			LastName:"${data.LastName}",
			email:"${data.email}",
			role:"${data.role}",
			roleId:${data.roleId},
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