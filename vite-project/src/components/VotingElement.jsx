import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function VotingElement() {
  const [votes, setVotes] = useState(0)

  const upvote = () => {
    setVotes((prev) => prev + 1)
  }

  const downvote = () => {
    setVotes((prev) => prev - 1)
  }

  return (
    <div className="flex items-center space-x-2 mt-4">
      <Button onClick={upvote} variant="outline" size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </Button>
      <span className="text-xl font-bold">{votes}</span>
      <Button onClick={downvote} variant="outline" size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </Button>
    </div>
  )
}