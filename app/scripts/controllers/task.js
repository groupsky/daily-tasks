require('..').controller('Task', /*@ngInject*/function() {
    var ctrl = this;

    ctrl.new = function() {
        ctrl.task = {
            label: '',
            completed: false,
        }
    };

    ctrl.new();
});