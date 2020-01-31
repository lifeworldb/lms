const routes = module.exports = require('next-routes')()

routes
    .add('index')
    .add('sign_in', '/sign_in', 'sign_in')
    .add('diploma', '/diploma/:id/presentacion', 'diploma')
    .add('unit', '/diploma/:id/unidad/:idUnit/tema/:idTopic', 'unit')
    .add('activity', '/diploma/:id/unidad/:idUnit/actividad', 'activity')
    .add('qualifications', '/diploma/:id/calificaciones', 'qualifications')
    .add('my_diplomas', '/mis_diplomas', 'my_diplomas')
