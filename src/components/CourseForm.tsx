"use client";

import {
  Button,
  Card,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useMemo, useState } from "react";
import instructors from "../mocks/instructors";

export const CourseForm = ({ initialCourseDetails }) => {
  const instructorOptions = useMemo(() => {
    return instructors.map((instructor) => ({
      value: instructor.id,
      label: instructor.name,
    }));
  }, []);

  const [form, setForm] = useState(initialCourseDetails);

  const onChange = (e) => {
    const { id, value } = e.target;
    if (id === "duration" || id === "price") {
      setForm({ ...form, [id]: Number(e.target.value) });
      return;
    }

    setForm({ ...form, [id]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Card className="min-h-screen">
      <h5 className="text-2xl font-bold tracking-tight text-center">
        {initialCourseDetails.id ? "Edit course" : "Create course"}
      </h5>
      <section className="flex flex-col items-center">
        <form
          className="flex max-w-md flex-col gap-4 w-full"
          onSubmit={onSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              value={form.title}
              onChange={onChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea
              id="description"
              value={form.description}
              onChange={onChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="instructor" value="Instructor" />
            </div>
            <Select
              id="instructorId"
              value={form.instructorId}
              onChange={onChange}
            >
              {instructorOptions.map((instructor) => (
                <option key={instructor.value} value={instructor.value}>
                  {instructor.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="duration" value="Duration in hours" />
            </div>
            <TextInput
              id="duration"
              type="number"
              value={form.duration}
              onChange={onChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              type="number"
              value={form.price}
              onChange={onChange}
            />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="level" value="Level" />
            </div>
            <Select id="level" value={form.level} onChange={onChange}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Select>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select id="category" value={form.category} onChange={onChange}>
              <option>Programming</option>
              <option>Machine Learning</option>
              <option>Web Frameworks</option>
              <option>Cloud</option>
            </Select>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </section>
    </Card>
  );
};
