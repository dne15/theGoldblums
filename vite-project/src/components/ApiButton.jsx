import { useState } from 'react'

export default function ApiButton() {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/quotes')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <button onClick={fetchData}>
        Fetch Data
      </button>
      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}