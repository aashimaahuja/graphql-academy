import { getCourse, getCourses, getCoursesByInstructor } from "./db/courses.js";
import { getInstructor } from "./db/instructors.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    courses: async (_root) => {
      const items = await getCourses();
      return items;
    },
    instructor: async (_root, { id }) => {
      const instructor = await getInstructor(id);
      if (!instructor) {
        throw notFoundError("No Instructor found with id " + id);
      }
      return instructor;
    },
    course: async (_root, { id }) => {
      const course = await getCourse(id);
      if (!course) {
        throw notFoundError("No Instructor found with id " + id);
      }
      return course;
    },
  },
  Course: {
    instructor: (course, _args, { instructorLoader }) => {
      console.log(course.instructor_id);
      return instructorLoader.load(course.instructor_id);
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
