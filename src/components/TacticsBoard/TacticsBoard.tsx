import { useState } from 'react'
import { useSwapPlayers } from '../../hooks/useSwapPlayers'
import Pitch from './Pitch/Pitch'
import Substitute from './Substitute/Substitute'
import Draggable from './Draggable/Deaggable'
import classes from './TacticsBoard.module.css'

const TacticsBoard: React.FC = () => {
  const [formationValue, setFormationValue] = useState<string>('4_3_3_WIDE')
  const {
    team,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDrop,
  } = useSwapPlayers()

  const handleFormationValueChange = (event: any) => {
    setFormationValue(event.target.value)
  }

  return (
    <div className={classes.container}>
      <div className={classes.board}>
        <div className={classes.select}>
          <select
            name="formation"
            id="formation"
            value={formationValue}
            onChange={handleFormationValueChange}
          >
            <option value="4_3_3_WIDE">4-3-3 WIDE</option>
            <option value="4_2_3_1_WIDE">4-2-3-1 WIDE</option>
          </select>
        </div>
        <Pitch
          team={team}
          formationValue={formationValue}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDrop={handleDrop}
        />
      </div>
      <div className={classes.subsCol}>
        {team.subs.map((player) => (
          <Draggable
            key={player.id}
            onDragStart={(event) => handleDragStart(event, player, 'subs')}
            onDragEnd={(event) => handleDragEnd(event)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, player, 'subs')}
          >
            <Substitute player={player} />
          </Draggable>
        ))}
      </div>
    </div>
  )
}

export default TacticsBoard
