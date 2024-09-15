import React from "react";
import { CourseForm } from "@/components/CourseForm";
import { Course } from "@/types/Course";

function CreateCourse() {
  const initialCourseDetails: Course = {
    id: "",
    title: "",
    description: "",
    level: "Beginner",
    category: "Programming",
    instructor: {
      id: "",
      name: "",
    },
  };

  return <CourseForm initialCourseDetails={initialCourseDetails} />;
}

export default CreateCourse;
