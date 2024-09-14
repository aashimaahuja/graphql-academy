import { connection } from "./connection.js";
import { generateId } from "./ids.js";

const getCourseTable = () => connection.table("courses");

export async function countCourses() {
  const { count } = await getCourseTable().first().count("* as count");
  return count;
}

export async function getCourses(limit, offset) {
  const query = getCourseTable().select();
  if (limit) {
    query.limit(limit);
  }
  if (offset) {
    query.offset(offset);
  }
  return await query;
}

export async function getCoursesByInstructor(instructorId) {
  return await getCourseTable().select().where({ instructorId });
}

export async function getCourse(id) {
  return await getCourseTable().first().where({ id });
}

export async function addCourse({
  title,
  description,
  instructorId,
  duration,
  level,
  price,
  category,
}) {
  const course = {
    id: generateId(),
    title,
    description,
    instructorId,
    duration,
    level,
    price,
    category,
  };
  await getCourseTable().insert(course);
  return course;
}

export async function deleteCourse(id) {
  const course = await getCourseTable().first().where({ id });
  if (!course) {
    throw new Error(`Course not found: ${id}`);
  }
  await getCourseTable().delete().where({ id });
  return course;
}

export async function updateCourse({ id, title, description }) {
  const course = await getCourseTable().first().where({ id });
  if (!course) {
    return null;
  }
  const updatedFields = { title, description };
  await getCourseTable().update(updatedFields).where({ id });
  return { ...course, ...updatedFields };
}
