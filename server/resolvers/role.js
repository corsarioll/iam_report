export default{
    Query:{
        allRoles: (parent, args, {models}) => models.Role.find(),
        getRole: (parent, args, {models}) => models.findOne(args)
    },
    Mutation:{
        createRole: (parent, args, {models}) => models.Role.create(args)
    }
}