import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function ApiButton() {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div className="mt-4">
      <Button onClick={fetchData}>Fetch Data</Button>
      {data && (
        <div className="mt-2">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}