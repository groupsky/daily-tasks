require('..').controller('Tasks', /*@ngInject*/function (storage) {
    var ctrl = this;

    ctrl.tasks = storage.tasks;
    ctrl.add = function (task) {
        ctrl.tasks.push(task);
    };
});