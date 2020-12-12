import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:1337/pages?slug=${slug}`);
      const data = await res.json();

      if (data.length) {
        setData(data[0]);
      }
    };

    fetchData();
  }, [slug]);

  if (!data) return "Loading...";

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Page;
