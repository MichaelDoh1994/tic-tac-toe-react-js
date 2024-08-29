import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleInputChange(e) {
    setPlayerName(e.target.value);
  }

  function handleEditChange() {
    setEdit((editing) => !editing);
    if (edit) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {edit ? (
          <input type="text" value={playerName} onChange={handleInputChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditChange}>{edit ? "Save" : "Edit"}</button>
    </li>
  );
}
