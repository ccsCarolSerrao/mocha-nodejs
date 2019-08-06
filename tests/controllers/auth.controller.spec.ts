import { expect, should } from 'chai'
import { describe, it, before } from 'mocha'
import { AuthController } from '../../controllers/auth.controller';

import chai = require('chai');
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
chai.should()

describe('AuthController', () => {
    beforeEach(() => {
        AuthController.setRoles(['user'])
    })
    describe('isAuthorize', () => {
        it('Should return false if not authorize', () => {
            const isAuth: boolean = AuthController.isAuthorize('admin')
            expect(isAuth).to.be.false
        })

        it('Should return true if authorize', () => {
            AuthController.setRoles(['user', 'admin'])
            const isAuth: boolean = AuthController.isAuthorize('admin')
            expect(isAuth).to.be.true
        })

        it('Should not allow a get if not authorize')
        it('Should allow a get if authorize')
    })
    describe('isAuthorizeAsync', function () {
        it('Should return false if not authorize', function (done) {
            this.timeout(2500) // does not work with arrow functions
            AuthController.isAuthorizeAsync('admin',
                (isAuth: boolean) => {
                    isAuth.should.be.false
                    done();
                })
        })

        it('Should return true if authorize', function (done) {
            this.timeout(2500) // does not work with arrow functions
            AuthController.setRoles(['user', 'admin'])
            AuthController.isAuthorizeAsync('admin',
                (isAuth: boolean) => {
                    expect(isAuth).to.be.true
                    done();
                })
        })
    })
    describe('isAuthorizePromise', () => {
        it('Should return false if not authorize', () => {
            return AuthController.isAuthorizePromise('admin').should.eventually.be.false
        })
        
        it('Should return true if authorize', () => {
            AuthController.setRoles(['user', 'admin'])
            return AuthController.isAuthorizePromise('admin').should.eventually.be.true
        })
    })
})
