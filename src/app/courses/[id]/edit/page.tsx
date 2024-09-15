"use client";

import { CourseForm } from "@/components/CourseForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourse } from "@/lib/graphql/queries";
import { Course } from "@/types/Course";
import Error from "@/components/Error";

function EditCourse() {
  const params = useParams();
  const { id } = params;
  const [courseDetails, setCourseDetails] = useState<Course>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getCourse(id.toString())
      .then(setCourseDetails)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Error />;
  }

  return <CourseForm initialCourseDetails={courseDetails} />;
}

export default EditCourse;
