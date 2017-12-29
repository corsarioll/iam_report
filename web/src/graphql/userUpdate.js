import gql from 'graphql-tag';

const module = function(data){
	
	const user = gql`mutation{
	 userUpdateOne(
		record:{
			userName:"${data.userName}",
			email:"${data.email}",
			firstName:"${data.firstName}",
			LastName:"${data.LastName}",
		},
		filter:{_id:"${data._id}"}){
			record{
				userName
			}
		}
	}`;
	return user;	
}

export default module;


