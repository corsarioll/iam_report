import gql from 'graphql-tag';

const module = function(data){
	
	var tasks = organize(data.tasks)
	
	const report = gql`mutation{

		ReportCreate(record:{
				projectId:"${data.project._id}",
				reporterId:"${data.reporter._id}",
				importantInfo:"${data.importantInfo}",
				tasks:${tasks}
		}){
		record{
			date
			}
		}
	}`;
	return report;
}

const organize = function (data){
	var process = ''
	process = JSON.stringify(data)
	process = process.replace(/\"([^(\")"]+)\":/g,"$1:")
	return process
}

export default module;