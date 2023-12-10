// imported the players list file
import PlayersList from "./Components/PlayersList";
function App() {

  return (
    <>
      <div>
        {/* called the players list component which will render the list of player in the players.jsx file */}
        <PlayersList></PlayersList>
      </div>
    </>
  )
}

export default App
