### Project Architecture

Implement API layer of this project

### PreRequisites

- Clone git repo https://github.com/aashimaahuja/graphql-academy
- Install extension SQLite viewer
- Markdown preview enhanced

### Implementing graphql queries for Courses Project

- courses
- courseById
- instructors
- instructorById

### Implementing Mutations

Any write operation in graphql is called mutation

- addCourse
- updateCourse
- deleteCourse

### Mutations

Defining mutations in schema

```js
type Mutation {
    addCourse(input: addCourseInput!): Course
    deleteCourse(id: ID!): Course
    updateCourse(id: ID!, input: updateCourseInput!): Course
}
```

```js
input addCourseInput {
    title: String!
    description: String
}
```
