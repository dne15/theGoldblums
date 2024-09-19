import { useState } from 'react'

export default function FavouriteButton() {
  const [isfavourite, setIsfavourite] = useState(false)

  const togglefavourite = () => {
    setIsfavourite((prev) => !prev)
  }

  return (
    <button 
      onClick={togglefavourite} 
      style={{
        backgroundColor: isfavourite ? '#4a5568' : 'white',
        color: isfavourite ? 'white' : '#4a5568',
        border: '1px solid #4a5568',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        marginTop: '1rem'
      }}
    >
      {isfavourite ? 'Remove from favourites' : 'Add to favourites'}
    </button>
  )
}