export namespace AuthController {
    let roles: string[]
    export function setRoles(role: string[]) {
        roles = role
    }

    export function isAuthorize(needRole: string) {
        return roles.indexOf(needRole) >= 0
    }

    export function isAuthorizeAsync(needRole: string, callback: any) {
        setTimeout(() => {
            callback(roles.indexOf(needRole) >= 0)
        }, 2100)
        return 
    }
}