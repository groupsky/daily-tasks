require("..").directive('dtTasks', /*@ngInject*/function (storage) {
    return {
        restrict: 'AE',
        controller: /*ngInject*/function () {
            var ctrl = this;
            ctrl.add = function (task) {
                storage.tasks.push(task);
            }
        },
        controllerAs: '$ctrl',
    };
});