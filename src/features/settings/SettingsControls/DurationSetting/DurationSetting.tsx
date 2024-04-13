import { type FunctionComponent } from 'react'
import '../settings.css'
import { useGA } from '../useGA'

interface IDurationSettingProps {
  duration: number
  setDuration: (newDuration: number) => void
  warmpupDuration: number
  setWarmupDuration: (newDuration: number) => void
}

function parseDuration(paceString: string): number {
  try {
    return parseFloat(paceString)
  } catch (e) {
    return 0
  }
}

export const DurationSetting: FunctionComponent<IDurationSettingProps> = (props) => {
  useGA('Duration', props, ['duration'])

  return (
    <fieldset className="settings-group">
      <legend>Duration</legend>
      <div className="settings-row">
        <em>Warmup period allows you to view porn, without the game starting.</em>
        <label>
          <span>Warmup Duration</span>
          <input
            type="range"
            min="600"
            max="6000"
            step="600"
            value={props.warmpupDuration}
            onChange={(e) => {
              props.setWarmupDuration(parseDuration(e.target.value))
            }}
          />
        </label>
        <span>
          <strong>{Math.ceil(props.warmpupDuration / 10 / 60)}min</strong>
        </span>
      </div>
      <div className="settings-row">
        <label>
          <span>Session Duration</span>
          <input
            type="range"
            min="1800"
            max="18000"
            step="600"
            value={props.duration}
            onChange={(e) => {
              props.setDuration(parseDuration(e.target.value))
            }}
          />
        </label>
        <span>
          <strong>{Math.ceil(props.duration / 10 / 60)}min</strong>
        </span>
      </div>
    </fieldset>
  )
}
