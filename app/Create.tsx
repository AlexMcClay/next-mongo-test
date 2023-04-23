"use client";

import React, { useState } from "react";

type Props = {};

const Create = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [caption, setCaption] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async () => {
    const response = await fetch("/api/photos", {
      method: "POST",
      body: JSON.stringify({ name, caption, url }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    setName("");
    setCaption("");
    setUrl("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Create</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Create</button>
    </div>
  );
};

export default Create;
