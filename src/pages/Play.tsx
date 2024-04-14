import { type FunctionComponent } from 'react'
import { GameBoard } from '../features/gameboard'
import { SettingsDialog } from '../features/settings/SettingsDialog/SettingsDialog'
import { SettingsEntryPoint } from '../features/settings/SettingsEntryPoint/SettingsEntryPoint'
import { FullScreenEntryPoint } from '../features/gameboard/FullScreenEntryPoint/FullScreenEntryPoint'

export const PlayPage: FunctionComponent = () => {
  return (
    <>
      <SettingsDialog />
      <SettingsEntryPoint />
      <FullScreenEntryPoint />
      <GameBoard />
    </>
  )
}
