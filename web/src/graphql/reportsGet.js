import gql from 'graphql-tag';

const module = function(data){
	
	const reports = gql`{
		ReportMany(filter:{reporterId:"${data.reporter}",projectId:"${data.project}"}){
			importantInfo,
			tasks {
				reference
				description
				project
				assignedTo
				status
			}
		}
	}`;
	return reports;	
}

export default module;	