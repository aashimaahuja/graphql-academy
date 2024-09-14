"use client";

import { CourseForm } from "@/components/CourseForm";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { courses } from "../../../../mocks/courses";

function EditCourse() {
  const params = useParams();
  const { id } = params;

  const courseDetails = useMemo(() => {
    return courses.find((course) => course.id === parseInt(id.toString()));
  }, [id]);

  return <CourseForm initialCourseDetails={courseDetails} />;
}

export default EditCourse;
