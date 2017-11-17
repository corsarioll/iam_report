import gql from 'graphql-tag';

const module = function(data){
	
	var tasks = JSON.stringify(data.users)
	tasks = tasks.replace(/\"([^(\")"]+)\":/g,"$1:");
	
	const report = gql`mutation{
		ReportCreate(record:{
		}){
			tasks:${tasks}
		}
	}`;
	return report;
}

export default module;