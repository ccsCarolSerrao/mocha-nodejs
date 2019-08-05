import assert from 'assert'
import { AuthController } from '../../controllers/auth.controller';

describe('AuthController', () => {
    beforeEach(() => {
        AuthController.setRoles(['user'])
    })
    describe('isAuthorize', () => {
        it('Should return false if not authorize', () => {
            assert.equal(false, AuthController.isAuthorize('admin'))
        })

        it('Should return true if authorize', () => {
            AuthController.setRoles(['user', 'admin'])
            assert.equal(true, AuthController.isAuthorize('admin'))
        })

        it('Should not allow a get if not authorize')
        it('Should allow a get if authorize')
    })
    describe('isAuthorizeAsync', function () {
        it('Should return false if not authorize', function (done) {
            this.timeout(2500) // does not work with arrow functions
            AuthController.isAuthorizeAsync('admin',
                (isAuth: boolean) => {
                    assert.equal(false, isAuth)
                    done();
                })
        })

        it('Should return false if not authorize', function (done) {
            this.timeout(2500) // does not work with arrow functions
            AuthController.setRoles(['user', 'admin'])
            AuthController.isAuthorizeAsync('admin',
                (isAuth: boolean) => {
                    assert.equal(true, isAuth)
                    done();
                })
        })
    })
})
