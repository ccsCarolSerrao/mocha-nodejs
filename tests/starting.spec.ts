import assert from 'assert'
import { should } from 'chai';

describe('Basic Mocha Tests', () => {
    beforeEach(() => {
        should()
    })
    it('should deal with objects', () => {
        const person = { name: 'Carol', gender: 'female' }
        const person2 = { name: 'Carol', gender: 'female' }
        person.should.have.property('name').equal('Carol')
        person.should.deep.equal(person2)
    })
    it('should allow testing nulls', () => {
        const iAmNull: any = null
        //iAmNull.should.not.exists
        should().not.exist(iAmNull)
    })
}) 