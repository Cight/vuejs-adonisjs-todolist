// invalid access exception
class AuthorizationService {
    verifyPermission(resource, user) {
        if (resource.user_id !== user.id) {
            throw new Error()
        }
    }
}