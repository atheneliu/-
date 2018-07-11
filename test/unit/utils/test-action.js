export const testActionMaker = (mutations) => (action, args, state) => {
  const commit = (type, payload) => {
    const mutation = mutations[type]
    mutation(state, payload)
  }
  action({ commit, state }, ...args)
}

export const testAsyncActionMaker = (mutations) => async (action, args, state) => {
  const commit = (type, payload) => {
    const mutation = mutations[type]
    mutation(state, payload)
  }
  await action({ commit, state }, ...args)
}
