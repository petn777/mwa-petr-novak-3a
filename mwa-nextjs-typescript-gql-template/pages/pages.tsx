import React, { SetStateAction, useEffect, useState } from "react";
import { useGetPagesQuery } from "../generated/graphql-types";

interface Pages {
  date: string | null | undefined;
}

function Pages() {
  const { data, error, loading } = useGetPagesQuery();

  return (
    <div className="flex justify-center">
      <div className="w-[1100px] py-4">
        <h1 className="text-4xl py-10">Stránky</h1>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <div className="grid grid-cols-2 gap-7">
            {data?.posts?.nodes?.map((item) => (
              <div
                id={item?.id}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 p-7 rounded-xl"
              >
                <p className="text-xl font-bold">{item?.title}</p>
                <p className="">Slug: {item?.slug}</p>
                <p>
                  <Date date={item?.date} />
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Date({ date }: Pages) {
  const [dateArray, setDateArray] = useState<string[] | undefined>([]);

  useEffect(() => {
    const dateArraySplit = date?.split(/-|T/);
    setDateArray(dateArraySplit);
  }, []);

  console.log(dateArray);

  return (
    <div className="flex">
      Datum vytvoření:{" "}
      {dateArray ? (
        <span className="px-1">
          {dateArray[2]}.{dateArray[1]}.{dateArray[0]}
        </span>
      ) : (
        "Error!"
      )}
    </div>
  );
}

export default Pages;
