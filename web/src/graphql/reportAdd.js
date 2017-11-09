import gql from 'graphql-tag';

const module = function(data){
		
	const report = gql`mutation{
		createUser(user:{
			name:"${data.name}",
			project:"${data.project}",
			tasks:"${data.tasks}",
			reporter:"${data.reporter}",
			date:"${data.date}",
		}){
			name
			date
		}
	}`;
	return report;
}

export default module;