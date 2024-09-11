"use client";

import { useState, useEffect } from "react";
import { Button } from "flowbite-react";

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const fetchGreeting = async () => {
    const response = await fetch("http://localhost:9000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {greeting}`,
      }),
    });

    const { data } = await response.json();
    console.log(data);
    return data.greeting;
  };

  useEffect(() => {
    fetchGreeting().then(setGreeting);
  }, []);

  return (
    <main className="min-h-screen">
      <h1>{greeting}</h1>
      <Button>Click me</Button>
    </main>
  );
}
