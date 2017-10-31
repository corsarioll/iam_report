export default `

    input iProject_user{
        _id: ID!
    }

    input iProject{
        name: String,
        users: [iProject_user]!,
        director: iProject_user
    }

    type Project{
        _id: ID!,
        name: String,
        users: [User],
        director: User!,
        reports: [Report]
    }

    type Query{
        allProjects: [Project]!,
        getProject(_id: ID!): Project!
    }

    type Mutation{
        createProject(project: iProject): Project!
    }
`;