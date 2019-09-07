import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  saveDataPasien: ['data']
})

export const FormTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  pasien: [],
  fetching: null,
  payload: null,
  error: null
})

export const saveDataPasien = (state, { data }) =>
  state.merge({ ...state, pasien: [ ...state.pasien, data ] })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_DATA_PASIEN]: saveDataPasien
})
