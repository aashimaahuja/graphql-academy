import DataLoader from "dataloader";
import { connection } from "./connection.js";

const getInstructorTable = () => connection.table("instructors");

export async function getInstructor(id) {
  return await getInstructorTable().first().where({ id });
}

export function createInstructorLoader() {
  return new DataLoader(async (ids) => {
    const instructors = await getInstructorTable().select().whereIn("id", ids);
    return ids.map((id) =>
      instructors.find((instructor) => instructor.id === id)
    );
  });
}
