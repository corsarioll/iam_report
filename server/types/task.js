export default `

    input iTask_project{
        _id: ID!
    }
    input iTask_assignedTo{
        _id: ID!
    }

    input iTask{
        done: Boolean,
        label: String,
        project: iTask_project,
        assignedTo: iTask_assignedTo
    }

    type Task{
        _id: ID!,
        done: Boolean,
        label: String,
        project: Project,
        assignedTo: User
    }

    type Query{
        allTasks: [Task]!
        getTask(_id: ID!): Task!
    }

    type Mutation{
        createTask(task: iTask): Task!,
        updateTask(task: iTask): Task!
    }
`;