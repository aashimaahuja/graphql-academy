import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
});

const courseDetailsFragment = gql`
  fragment CourseDetail on Course {
    id
    title
    description
    duration
    level
    price
    category
    instructor {
      id
      name
    }
  }
`;

const GET_COURSES = gql`
  query Courses {
    courses {
      id
      title
      description
    }
  }
`;

const GET_COURSE = gql`
  query Course($id: ID!) {
    course(id: $id) {
      ...CourseDetail
    }
  }
  ${courseDetailsFragment}
`;

const GET_INSTRUCTORS = gql`
  query Instructors {
    instructors {
      id
      name
      bio
    }
  }
`;

const ADD_COURSE_MUTATION = gql`
  mutation AddCourse($input: addCourseInput!) {
    course: addCourse(input: $input) {
      ...CourseDetail
    }
  }
  ${courseDetailsFragment}
`;

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourse($id: ID!) {
    course: deleteCourse(id: $id) {
      id
    }
  }
`;

const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourse($id: ID!, $input: updateCourseInput!) {
    course: updateCourse(id: $id, input: $input) {
      id
    }
  }
`;

export const getCourses = async () => {
  const { data } = await apolloClient.query({
    query: GET_COURSES,
    fetchPolicy: "network-only",
  });
  return data.courses;
};

export const getCourse = async (id: string) => {
  const { data } = await apolloClient.query({
    query: GET_COURSE,
    variables: { id },
  });
  return data.course;
};

export const getInstructors = async () => {
  const { data } = await apolloClient.query({
    query: GET_INSTRUCTORS,
  });
  return data.instructors;
};

export const addCourse = async (course) => {
  const { data } = await apolloClient.mutate({
    mutation: ADD_COURSE_MUTATION,
    variables: { input: course },
    update: (cache, { data }) => {
      cache.writeQuery({
        query: GET_COURSE,
        variables: { id: data.course.id },
        data,
      });
    },
  });
  return data.course;
};

export const deleteCourse = async (id) => {
  const { data } = await apolloClient.mutate({
    mutation: DELETE_COURSE_MUTATION,
    variables: { id: id },
  });
  return data.course;
};

export const updateCourse = async (id, course) => {
  const { data } = await apolloClient.mutate({
    mutation: UPDATE_COURSE_MUTATION,
    variables: { id: id, input: course },
  });
  return data.course;
};
