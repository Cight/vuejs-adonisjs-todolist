const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

// invalid access exception
class AuthorizationService {
    verifyPermission(resource, user) {
        if (!resource) {
            throw new ResourceNotExistException()
        }

        if (resource.user_id !== user.id) {
            throw new InvalidAccessException()
        }
    }
}

module.exports = new AuthorizationService()