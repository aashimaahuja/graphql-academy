import React from "react";
import { Label, TextInput, Card, Select, Button } from "flowbite-react";

function CourseForm() {
  return (
    <Card className="min-h-screen">
      <section className="flex flex-col items-center">
        <h1 className="text-xl font-semibold w-fit">Add course</h1>
        <form className="flex max-w-md flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput id="description" type="text" sizing="lg" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="instructor" value="Instructor" />
            </div>
            <TextInput id="instructor" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="duration" value="Duration in hours" />
            </div>
            <TextInput id="duration" type="number" sizing="sm" />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="level" value="Level" />
            </div>
            <Select id="level">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select id="category">
              <option>Programming</option>
              <option>Machine Learning</option>
              <option>Web Frameworks</option>
              <option>Cloud</option>
            </Select>
          </div>
          <Button type="submit">Add course</Button>
        </form>
      </section>
    </Card>
  );
}

export default CourseForm;
