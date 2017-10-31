export default `

    input iReport_project{
        _id: ID!
    }
    input iReport_created_by{
        _id: ID!
    }

    input iReport{
        body: String,
        date: String!,
        project: iReport_project!,
        created_by: iReport_created_by! 
    }

    type Report{
        _id: ID!,
        body: String,
        date: String,
        project: Project!,
        created_by: User
    }

    type Query{
        allReports: [Report]!,
        getReport(_id: ID!): Report!
    }

    type Mutation{
        createReport(report: iReport): Report!
    }
`;