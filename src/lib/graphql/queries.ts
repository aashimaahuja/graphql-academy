import { gql } from "@/generated";

const courseDetailsFragment = gql(`
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
      bio
    }
  }
`);

export const GET_COURSES = gql(`
  query Courses {
    courses {
      id
      title
      description
    }
  }
`);

export const GET_COURSE = gql(`
  query Course($id: ID!) {
    course(id: $id) {
      ...CourseDetail
    }
  }
`);

export const GET_INSTRUCTORS = gql(`
  query Instructors {
    instructors {
      id
      name
      bio
    }
  }
`);

export const ADD_COURSE_MUTATION = gql(`
  mutation AddCourse($input: addCourseInput!) {
    course: addCourse(input: $input) {
      ...CourseDetail
    }
  }
`);

export const DELETE_COURSE_MUTATION = gql(`
  mutation DeleteCourse($id: ID!) {
    course: deleteCourse(id: $id) {
      id
    }
  }
`);

export const UPDATE_COURSE_MUTATION = gql(`
  mutation UpdateCourse($id: ID!, $input: updateCourseInput!) {
    course: updateCourse(id: $id, input: $input) {
      id
    }
  }
`);
