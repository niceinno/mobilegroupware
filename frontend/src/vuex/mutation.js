import * as types from './mutation_types'

export default {
  [types.UID] (state, szID) {
    state.szID = szID
  },
  [types.ERROR_STATE] (state, errorState) {
    state.errorState = errorState
  },
  [types.IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  }
}