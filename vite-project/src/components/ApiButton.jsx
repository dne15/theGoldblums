import { useState } from 'react'

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
    <div style={{ marginTop: '1rem' }}>
      <button 
        onClick={fetchData}
        style={{
          backgroundColor: '#4a5568',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}
      >
        Fetch Data
      </button>
      {data && (
        <div style={{ marginTop: '0.5rem' }}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}