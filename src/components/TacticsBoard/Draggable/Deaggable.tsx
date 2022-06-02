import { DragEventHandler, ReactNode } from 'react'
import classes from './Deaggable.module.css'

const Deaggable: React.FC<{
  children: ReactNode
  index?: number
  formationValue?: string
  onDragStart: DragEventHandler
  onDragOver: DragEventHandler
  onDragEnd: DragEventHandler
  onDrop: DragEventHandler
}> = ({
  children,
  index,
  formationValue,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
}) => {
  return (
    <div
      className={
        formationValue && index !== undefined
          ? classes[
              `player_${
                formationValue === '4_3_3_WIDE' ? '4_3_3_' : '4_2_3_1_'
              }${index + 1}`
            ]
          : 'player'
      }
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  )
}

export default Deaggable
