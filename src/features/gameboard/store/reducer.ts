import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { applyMessage, type Message } from '../MessageArea/MessageTypes'
import { EGrip, EStroke } from '../types'

export interface IGameBoardState {
  pace: number
  grip: EGrip
  intensity: number
  messages: Message[]
  timers: NodeJS.Timeout[]
  stroke: EStroke
  eventsPaused: boolean
  gamePaused: boolean
  vibration: number
  cumming: boolean
  hasEdged: boolean
  currentImage: number
  inWarmup: boolean
}

export const gameBoardSlice = createSlice({
  name: 'gameboard',
  initialState: {
    pace: 1,
    grip: EGrip.right,
    intensity: 0,
    messages: [],
    timers: [],
    stroke: EStroke.down,
    gamePaused: true,
    eventsPaused: false,
    cumming: false,
    vibration: 0,
    hasEdged: false,
    currentImage: 0,
    inWarmup: false
  } as IGameBoardState,
  reducers: {
    SetPace: (state, action: PayloadAction<number>) => {
      state.pace = action.payload
    },
    IncIntensity: (state, action: PayloadAction<number>) => {
      state.intensity = Math.min(state.intensity + action.payload, 100)
    },
    DecIntensity: (state, action: PayloadAction<number>) => {
      state.intensity = Math.max(state.intensity - action.payload, 0)
    },
    SetGrip: (state, action: PayloadAction<EGrip>) => {
      state.grip = action.payload
    },
    ShowMessage: (state, action: PayloadAction<Message>) => {
      state.messages = applyMessage(state.messages, action.payload)
    },
    Pulse: (state) => {
      state.stroke = state.stroke === EStroke.down ? EStroke.up : EStroke.down
    },
    StopEvents: (state) => {
      state.eventsPaused = true
    },
    StartEvents: (state) => {
      state.eventsPaused = false
    },
    StopGame: (state) => {
      state.gamePaused = true
    },
    StartGame: (state) => {
      state.gamePaused = false
      state.inWarmup = false
    },
    StartWarmup: (state) => {
      state.inWarmup = true
    },
    AddTimer: (state, action: PayloadAction<NodeJS.Timeout>) => {
      state.timers = state.timers.concat([action.payload])
    },
    RemoveTimer: (state, action: PayloadAction<NodeJS.Timeout>) => {
      clearTimeout(action.payload)
      state.timers = state.timers.filter((e) => e !== action.payload)
    },
    ClearTimers: (state) => {
      state.timers.forEach((timer) => clearTimeout(timer))
      state.timers = []
    },
    SetVibration: (state, action: PayloadAction<number>) => {
      state.vibration = action.payload
    },
    SetImage: (state, action: PayloadAction<number>) => {
      state.currentImage = action.payload
    },
    Edge: (state) => {
      state.hasEdged = true
    },
    Cum: (state) => {
      state.cumming = true
    },
  },
})
