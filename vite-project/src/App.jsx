import Header from './components/Header'
import ApiButton from './components/ApiButton'
import Slideshow from './components/Slideshow'
import FavouriteButton from './components/FavouriteButton'
import VotingElement from './components/VotingElement'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to My Vite App</h2>
        <ApiButton />
        <Slideshow />
        <FavouriteButton />
        <VotingElement />
      </main>
    </div>
  )
}