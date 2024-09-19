import { useState } from 'react'

export default function FavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false)

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev)
  }

  return (
    <button onClick={toggleFavourite}>
      {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
    </button>
  )
}