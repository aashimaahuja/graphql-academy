import { Button, Card } from "flowbite-react";
import Link from "next/link";

export default function Error() {
  return (
    <Card className="min-h-screen flex flex-col text-center items-center">
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="text-lg">Something went wrong</p>
      <Link href="/courses">
        <Button color="blue" className="mt-4 mx-auto">
          Go back to courses
        </Button>
      </Link>
    </Card>
  );
}
