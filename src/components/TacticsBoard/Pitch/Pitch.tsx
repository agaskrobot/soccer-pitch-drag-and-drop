import Background from './Background/Background'
import classes from './Pitch.module.css'
import PlayerCard from '../PlayerCard/PlayerCard'
import Draggable from '../Draggable/Deaggable'
import { Team } from '../../../../types'

const Pitch: React.FC<{
  team: Team
  formationValue: string
  onDragStart: Function
  onDragOver: any
  onDragEnd: Function
  onDrop: Function
}> = ({ team, formationValue, onDragStart, onDragOver, onDragEnd, onDrop }) => {
  return (
    <div className={classes.container}>
      <Background />
      <div className={classes.grid}>
        {team.firstEleven.map((player, index) => (
          <Draggable
            key={player.id}
            index={index}
            formationValue={formationValue}
            onDragStart={(event) =>
              onDragStart(event, player, 'firstEleven')
            }
            onDragEnd={(event) => onDragEnd(event)}
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, player, 'firstEleven')}
          >
            <PlayerCard player={player} />
          </Draggable>
        ))}
      </div>
    </div>
  )
}

export default Pitch
