export default `

    input iRole{
        name: String
    }

    input iUser{
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        role: iRole
    }

    type User{
        _id: ID!
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        role: Role
    }

    type Query{
        allUsers: [User]!,
        getUser(_id: ID!): User!
    }

    type Mutation{
        createUser(user: iUser): User!
    }
`;