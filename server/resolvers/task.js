export default{
    Query:{
        allTasks: (parent, args, {models}) => models.Task.find(),
        getTask: (parent, args, {models}) => models.findOne(args)
    },
    Mutation:{
        createTask: (parent, args, {models}) => models.Task.create(args.task),
        updateTask: (parent, args, {models}) => models.Task.update(args.task)
    }
}