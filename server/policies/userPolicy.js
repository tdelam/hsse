const acl = require('acl');

acl = new acl(new acl.memoryBackend());

exports.invokeRolesPolicies = () => {
    acl.allow([{
        roles: ['uploader', 'detailer', 'linker', 'appraiser', 'juniorfilter', 'seniorfilter', 'prioritizer', 'administrator'], 
        allows: [{
            resources: '/api/hsearticles', 
            permissions: ['get', 'post']
        }]
    }])
}