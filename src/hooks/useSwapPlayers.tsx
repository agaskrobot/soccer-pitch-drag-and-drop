import { useState } from 'react'
import { Player, Team } from '../../types'
import { team1 } from '../data'

export function useSwapPlayers() {
  const [team, setTeam] = useState(team1)
  const [dragContent, setDragContent] = useState<Player>(team1.firstEleven[0])
  const [dragColumn, setDragColumn] = useState<string>('firstEleven')

  const swapPlayers = (
    fromPlayer: Player,
    toPlayer: Player,
    column: string,
  ) => {
    let players = { ...team }
    let fromIndex = -1
    let toIndex = -1

    // Get index first player
    fromIndex = players[dragColumn as keyof Team].findIndex(
      (player: Player) => player.id === fromPlayer.id,
    )
    // Get index first second
    toIndex = players[column as keyof Team].findIndex(
      (player: Player) => player.id === toPlayer.id,
    )

    // swap players, no able to swap 2 players from subs
    if (fromIndex !== -1 && toIndex !== -1) {
      if (dragColumn === 'subs' && column === 'subs') {
        return
      } else {
        const tmp = players[dragColumn as keyof Team][fromIndex]
        players[dragColumn as keyof Team][fromIndex] =
          players[column as keyof Team][toIndex]
        players[column as keyof Team][toIndex] = tmp

        setTeam({ ...players })
      }
    }
  }

  const handleDragStart = (event: any, player: Player, column: any) => {
    event.target.style.opacity = `70%`
    setDragContent(player)
    setDragColumn(column)
  }

  const handleDragOver = (event: any) => {
    event.preventDefault()
    return false
  }

  const handleDragEnd = (event: any) => {
    event.target.style.opacity = '100%'
  }

  const handleDrop = (event: any, player: Player, column: string) => {
    event.preventDefault()

    const fromPlayer = dragContent
    const toPlayer = player

    swapPlayers(fromPlayer, toPlayer, column)
  }
  return { team, handleDragStart, handleDragOver, handleDragEnd, handleDrop }
}
