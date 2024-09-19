import { useState } from "react";
import { useEffect } from "react";

export default function ApiButton() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/quotes");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      
      {data && (
        <div>
          <p className="quote">{data.quote}</p> {/* Access the quote property */}
          <div className="generateBtn">
          <button onClick={fetchData}>Generate New Quote</button>
          </div>
        </div>
      )}
    </div>
  );
}
