(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "a0b4":
/***/ (function(module, exports, __webpack_require__) {


      if (false) {}
      module.exports = {
    'displayName': 'Picker',
    'exportName': 'default',
    'description': '',
    'tags': {},
    'props': [
        {
            'name': 'kind',
            'tags': {
                'example': [{
                        'description': '\'type\'',
                        'title': 'example'
                    }]
            },
            'values': [
                'type',
                'color',
                'stroke',
                'isDarkMode'
            ],
            'type': { 'name': 'string' },
            'required': true
        },
        {
            'name': 'value',
            'tags': {
                'type': [{
                        'title': 'type',
                        'type': { 'name': '{ name?: string, type: \'pop\' | \'print\', color: string, stroke: string} & { isDarkMode: boolean }' }
                    }]
            },
            'type': { 'name': '{ name?: string, type: \'pop\' | \'print\', color: string, stroke: string} & { isDarkMode: boolean }' },
            'defaultValue': {
                'func': true,
                'value': '() => ({ ...defaultsIconConfig({ isDarkMode: false }) })'
            }
        },
        {
            'name': 'configComputed',
            'tags': {
                'type': [{
                        'title': 'type',
                        'type': { 'name': '{ name?: string, type: \'pop\' | \'print\', color: string, stroke: string }' }
                    }]
            },
            'type': { 'name': '{ name?: string, type: \'pop\' | \'print\', color: string, stroke: string }' },
            'defaultValue': {
                'func': true,
                'value': '() => ({ ...defaultsIconConfig() })'
            }
        }
    ],
    'events': void 0,
    'methods': void 0,
    'slots': void 0
}
  

/***/ })

}]);
//# sourceMappingURL=23.a9da6819.js.map