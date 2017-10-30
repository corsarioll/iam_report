export default `
    type Role{
        _id: ID!
        name: String
        users: [User]
    }

    type Query{
        allRoles: [Role]!
        getRole(_id: ID!): Role!
    }

    type Mutation{
        createRole(
            name: String
        ): Role!
    }
`;