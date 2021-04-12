(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "14ba":
/***/ (function(module, exports, __webpack_require__) {


      if (false) {}
      module.exports = {
    'displayName': 'DialogWrapper',
    'exportName': 'default',
    'description': '',
    'tags': {},
    'props': [
        {
            'name': 'showCloseButton',
            'description': 'Display a generic `\u2717` close button on the top-right.',
            'type': { 'name': 'boolean' },
            'defaultValue': {
                'func': false,
                'value': 'false'
            }
        },
        {
            'name': 'dialogEvents',
            'description': 'The events that will be bound to the dialog component (with `v-on="dialogEvents"`)',
            'type': { 'name': 'object' },
            'defaultValue': {
                'func': false,
                'value': '{}'
            }
        },
        {
            'name': 'dialogProps',
            'description': 'The props that will be bound to the dialog component (with `v-bind="dialogProps"`)',
            'type': { 'name': 'object' },
            'defaultValue': {
                'func': false,
                'value': '{}'
            }
        },
        {
            'name': 'slotComponent',
            'description': 'The component to show in the dialog. Can be a direct Vue component instance or a string with the component name (if registered).',
            'tags': {
                'type': [{
                        'title': 'type',
                        'type': { 'name': 'mixed' }
                    }]
            },
            'type': { 'name': 'mixed' }
        },
        {
            'name': 'slotProps',
            'description': 'The props that will be bound to the slot component (with `v-bind="slotProps"`). When passed a function it will receive the DialogWrapper context `(this)` as param and must return an object (with `this` you can use the context to do `hide()` etc.)',
            'type': { 'name': 'object|func' },
            'defaultValue': {
                'func': true,
                'value': '() => ({})'
            }
        },
        {
            'name': 'slotEvents',
            'description': 'The events that will be listened to, on the slot component (with `v-on="slotEvents"`). When passed a function it will receive the DialogWrapper context `(this)` as param and must return an object (with `this` you can use the context to do `hide()` etc.)',
            'type': { 'name': 'object|func' },
            'defaultValue': {
                'func': true,
                'value': '() => ({})'
            }
        }
    ],
    'events': [
        {
            'name': 'hide',
            'type': void 0
        },
        {
            'name': 'ok',
            'type': { 'names': ['undefined'] }
        }
    ],
    'methods': void 0,
    'slots': void 0
}
  

/***/ })

}]);
//# sourceMappingURL=19.cda79dda.js.map