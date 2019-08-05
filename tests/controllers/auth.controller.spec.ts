import { expect, should } from 'chai'
import { describe, it, before } from 'mocha'
import { AuthController } from '../../controllers/auth.controller';

describe('AuthController', () => {
    beforeEach(() => {
        AuthController.setRoles(['user'])
        should()
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

        it('Should return false if not authorize', function (done) {
            this.timeout(2500) // does not work with arrow functions
            AuthController.setRoles(['user', 'admin'])
            AuthController.isAuthorizeAsync('admin',
                (isAuth: boolean) => {
                    expect(isAuth).to.be.true
                    done();
                })
        })
    })
})
