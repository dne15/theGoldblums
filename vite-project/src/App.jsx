import Header from './components/Header'
import ApiButton from './components/ApiButton'
import Slideshow from './components/Slideshow'
import FavouriteButton from './components/FavouriteButton'
import VotingElement from './components/VotingElement'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My Vite App</h2>
        <ApiButton />
        <Slideshow />
        <FavouriteButton />
        <VotingElement />
      </main>
    </div>
  )
}