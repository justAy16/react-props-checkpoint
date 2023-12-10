// imported Player component to be used as template 
import Player from "./Player";
// imported data of players
import { players } from "../Json Objects/players";


function PlayersList() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>
        {/* made use of map to iterate over all the players in the players.jsx file */}
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    );
  };
//   exported the players list
  export default PlayersList;