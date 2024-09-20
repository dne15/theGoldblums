/**
 * The main App component that renders the application's header, API button, slideshow, favorite button, and voting element.
 */
import './App.css';
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
        <ApiButton />
        <Slideshow />
        <FavouriteButton />
        <VotingElement />
      </main>
    </div>
  )
}