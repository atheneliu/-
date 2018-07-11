import { testActionMaker, testAsyncActionMaker } from '../utils/test-action'
import counter from '../../../src/store/modules/counter'

const { actions, mutations } = counter
const originState = {
  count: 0,
  history: [],
}

const testAction = testActionMaker(mutations)
const testAsyncAction = testAsyncActionMaker(mutations)

let mockState = originState
// 在测试action的同时也测了mutation
describe('app actions', () => {
  beforeEach(() => { // 每次测试之前把state置成originState
    mockState = originState
  })

  it('increment', () => {
    testAction(actions.increment, [], mockState)
    mockState.count.should.equal(1)
  })

  it('incrementAsync', async () => {
    await testAsyncAction(actions.incrementAsync, [], mockState)
    mockState.count.should.equal(1)
  })
})
