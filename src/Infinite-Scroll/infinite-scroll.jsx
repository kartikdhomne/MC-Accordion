import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch function
  const fetchImages = async (index) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=10`;
      const result = await fetch(url);
      const res = await result.json();
      return res;
    } catch (error) {
      console.log("error:", error);
      return [];
    }
  };

  // Fetch initial + subsequent data
  const loadMore = async () => {
    if (loading) return; // prevent multiple triggers
    setLoading(true);
    const newData = await fetchImages(page);
    setData((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  // Fetch first page
  useEffect(() => {
    loadMore();
  }, []);

  // Detect scroll to bottom
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom && !loading) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "8px",
            textAlign: "center",
            background: "#fafafa",
          }}
        >
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
          />
          <p style={{ fontSize: "12px" }}>{item.title}</p>
        </div>
      ))}

      {loading && (
        <p style={{ gridColumn: "1/-1", textAlign: "center" }}>Loading...</p>
      )}
    </div>
  );
};

export default InfiniteScroll;
