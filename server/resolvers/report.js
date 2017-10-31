export default{
    Query:{
        allReports: (parent, args, {models}) => models.Report.find(),
        getReport: (parent, args, {models}) => models.findOne(args)
    },
    Mutation:{
        createReport: (parent, args, {models}) => models.Report.create(args.report)
    }
}