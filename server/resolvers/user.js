export default{
    Query:{
        allUsers: (parent, args, {models}) => models.User.find(),
        getUser: (parent, args, {models}) => models.findOne(args)
    },
    Mutation:{
        createUser: (parent, args, {models}) => models.User.create(args.user)
    }
}