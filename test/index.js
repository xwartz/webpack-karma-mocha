import { expect } from 'chai'
import add from 'src/index'

describe('#add()', () => {
  it('1 + 1 应该等于 2', () => {
    expect(add(1, 1)).to.be.equal(2)
  })
})
