"use client";

import { Photo } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PhotoCard from "./PhotoCard";

type Props = {};

const UserPhotos = (props: Props) => {
  const { data, isLoading, isError, refetch } = useQuery<Photo[]>(
    "userPhotos",
    async () => {
      const response = await fetch("/api/photos?user=me");
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return [];
    }
  );

  //   console.log(data);

  useEffect(() => {
    const timeout = setInterval(() => {
      refetch();
      console.log("refetch");
    }, 3000);

    return () => clearInterval(timeout);
  }, [refetch, data]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  if (data === undefined) return <div>Loading...</div>;

  function isEmpty(obj: any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  return (
    <div>
      <h1>User Photos</h1>
      {data.map((photo) => {
        return <PhotoCard key={photo.id} {...photo} />;
      })}
    </div>
  );
};

export default UserPhotos;
