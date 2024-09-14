import DataLoader from "dataloader";
import { connection } from "./connection.js";

const getInstructorTable = () => connection.table("instructors");

export async function getInstructors() {
  const query = getInstructorTable().select();
  return await query;
}

export async function getInstructor(id: string) {
  return await getInstructorTable().first().where({ id });
}

export function createInstructorLoader() {
  return new DataLoader(async (ids: string[]) => {
    const instructors = await getInstructorTable().select().whereIn("id", ids);
    return ids.map((id) =>
      instructors.find((instructor) => instructor.id === id)
    );
  });
}
