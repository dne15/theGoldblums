/**
 * A React component that renders a button to toggle a "favourite" state.
 * 
 * When the button is clicked, the `isFavourite` state is toggled, and the button
 * text updates to reflect the current state (either "Remove from favourites" or
 * "Add to favourites").
 */
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