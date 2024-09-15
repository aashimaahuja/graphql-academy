import { GraphQLError } from "graphql";
import {
  getCourses,
  getCourse,
  getCoursesByInstructor,
  addCourse,
  deleteCourse,
  updateCourse,
} from "./data/courses.js";
import { getInstructors, getInstructor } from "./data/instructors.js";

export const resolvers = {
  Query: {
    courses: async (_root) => {
      const courses = await getCourses();
      return courses;
    },
    course: async (_root, { id }) => {
      const course = await getCourse(id);
      return course;
    },
    instructors: async (_root) => {
      const instructors = await getInstructors();
      return instructors;
    },
    instructor: async (_root, { id }) => {
      const instructor = await getInstructor(id);
      return instructor;
    },
  },
  Mutation: {
    addCourse: async (_root, { input }) => {
      const newCourse = await addCourse(input);
      return newCourse;
    },
    deleteCourse: async (_root, { id }) => {
      const course = await deleteCourse(id);
      return course;
    },
    updateCourse: async (_root, { id, input }) => {
      const course = await updateCourse(id, input);
      return course;
    },
  },

  Course: {
    instructor: (course, _args, { instructorLoader }) => {
      return instructorLoader.load(course.instructorId);
    },
  },
  Instructor: {
    courses: (instructor) => getCoursesByInstructor(instructor.id),
  },
};

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: "NOT_FOUND" },
  });
}
