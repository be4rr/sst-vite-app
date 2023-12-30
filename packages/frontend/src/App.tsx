import { useState } from "react";

function App() {
  const [data, setData] = useState<string>();

  return (
    <>
      <div>API Endpoint: {import.meta.env.VITE_API_ENDPOINT}</div>
      <button
        onClick={async () => {
          const res = await fetch(import.meta.env.VITE_API_ENDPOINT);
          const data = await res.text();
          setData(data);
        }}
      >
        Fetch
      </button>
      {data && <div>{data}</div>}
    </>
  );
}

export default App;
