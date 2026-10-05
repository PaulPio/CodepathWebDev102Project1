import { boardItems } from './data/items'
import BoardCard from './components/BoardCard'
import './App.css'

function App() {
  return (
    <div className="board">
      <header className="board-header">
        <p className="board-kicker">Waterfront community</p>
        <h1>Harbor Night Market</h1>
        <p className="board-intro">
          Ten food trucks that park along the pier after sunset, from street
          tacos to late-night sweets.
        </p>
      </header>
      <main className="card-grid">
        {boardItems.map((item) => (
          <BoardCard key={item.id} {...item} />
        ))}
      </main>
    </div>
  )
}

export default App
