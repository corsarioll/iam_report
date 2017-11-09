import gql from 'graphql-tag';

const module = function(data){
	
	const test = gql`{
    user() {
      firstName
      lastName
    }
  }`;
	return test;	
}

export default module;