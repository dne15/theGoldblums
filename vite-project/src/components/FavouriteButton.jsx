import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function FavouriteButton() {
  const [isFavourite, setIsfavourite] = useState(false)

  const togglefavourite = () => {
    setIsfavourite((prev) => !prev)
  }

  return (
    <Button 
      onClick={togglefavourite} 
      variant={isFavourite ? "default" : "outline"}
      className="mt-4"
    >
      {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
    </Button>
  )
}