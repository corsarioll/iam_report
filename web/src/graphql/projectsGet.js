import gql from 'graphql-tag';

const module = function(data){
	var proyects = ""
	if(data.admin){
		proyects = gql`{
			projectMany(filter:{admin:"${data.admin}"}) {
				name,
				_id,
				users
			}
		}`;
		
	}else{
		proyects = gql`{
			projectMany(filter:{users:["${data._id}"]}) {
				name,
				_id,
			}
		}`;
	}
	return proyects;	
}

export default module;