import gql from 'graphql-tag';

const module = function(data){
	
	var tasks = organize(data.tasks)
	var project = organize(data.project)
	var reporter = organize(data.reporter)
	const report = gql`mutation{

		ReportCreate(record:{
				name:"test report",
				project:${project},
				reporter:{
					_id:"${data.reporter._id}",
					LastName:"${data.reporter.LastName}",
					email:"${data.reporter.email}",
					firstName:"${data.reporter.firstName}",
					role:"${data.reporter.role}"
				},
				importantInfo:"${data.importantInfo}",
				tasks:${tasks}
		}){
		record{
			name
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