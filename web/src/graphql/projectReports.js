import gql from 'graphql-tag';

const module = function(data){
	
	const reports = gql`{
  ReportMany(filter:{projectId:"${data._id}"}){
    tasks {
      reference
      description
      project
      status
    },
    date
  }
}`;
	return reports;
}

export default module;