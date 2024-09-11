import { connection } from "./connection.js";
// import { generateId } from "./ids.js";

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
  return await getCourseTable().select().where({ instructor_id: instructorId });
}

export async function getCourse(id) {
  return await getCourseTable().first().where({ id });
}

// export async function createJob({ companyId, title, description }) {
//   const job = {
//     id: generateId(),
//     companyId,
//     title,
//     description,
//     createdAt: new Date().toISOString(),
//   };
//   await getCourseTable().insert(job);
//   return job;
// }

// export async function deleteJob(id, companyId) {
//   const job = await getCourseTable().first().where({ id, companyId });
//   if (!job) {
//     return null;
//   }
//   await getCourseTable().delete().where({ id });
//   return job;
// }

// export async function updateJob({ id, companyId, title, description }) {
//   const job = await getJobTable().first().where({ id, companyId });
//   if (!job) {
//     return null;
//   }
//   const updatedFields = { title, description };
//   await getJobTable().update(updatedFields).where({ id });
//   return { ...job, ...updatedFields };
// }
