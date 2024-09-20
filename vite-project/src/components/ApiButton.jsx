import { useState } from "react";
import { useEffect } from "react";

export default function ApiButton() {
  const [data, setData] = useState(null);

  //* When the component mounts, it calls the `fetchData` function to fetch a quote from the API.
  //* The fetched quote is then displayed in the component's JSX.
  //* The component also includes a button that, when clicked, calls the `fetchData` function to fetch a new quote.
  
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
