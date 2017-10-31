export default{
    Query:{
        allProjects: (parent, args, {models}) => models.Project.find(),
        getProject: (parent, args, {models}) => models.findOne(args)
    },
    Mutation:{
        createProject: (parent, args, {models}) => models.Project.create(args.project)
    }
}