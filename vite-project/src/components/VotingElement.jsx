import { useState } from 'react'

export default function VotingElement() {
  const [votes, setVotes] = useState(0)

  const upvote = () => {
    setVotes((prev) => prev + 1)
  }

  const downvote = () => {
    setVotes((prev) => prev - 1)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
      <button onClick={upvote} style={{ backgroundColor: 'white', border: '1px solid #4a5568', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>
        ▲
      </button>
      <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{votes}</span>
      <button onClick={downvote} style={{ backgroundColor: 'white', border: '1px solid #4a5568', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>
        ▼
      </button>
    </div>
  )
}