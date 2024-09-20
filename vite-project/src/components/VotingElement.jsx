/**
 * Renders a voting element with up and down vote buttons and a vote count display.
 * The component uses the `useState` hook to manage the vote count state.
 * The `upvote` and `downvote` functions update the vote count when the corresponding button is clicked.
 */
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