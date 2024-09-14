import React from "react";
import { CourseForm } from "@/components/CourseForm";
import instructors from "@/mocks/instructors";

function CreateCourse() {
  const initialCourseDetails = {
    title: "",
    description: "",
    instructor: instructors[0].id,
    duration: "",
    level: "",
    price: "",
    category: "",
  };

  return <CourseForm initialCourseDetails={initialCourseDetails} />;
}

export default CreateCourse;
