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
    <div>
      <button onClick={upvote}>
        ▲
      </button>
      <span>{votes}</span>
      <button onClick={downvote}>
        ▼
      </button>
    </div>
  )
}