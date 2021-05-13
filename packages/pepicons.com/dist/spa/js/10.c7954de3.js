(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "9159":
/***/ (function(module, exports, __webpack_require__) {


      if (false) {}
      module.exports = {
    'displayName': 'IconButton',
    'exportName': 'default',
    'description': '',
    'tags': {},
    'props': [
        {
            'name': 'backgroundColor',
            'type': { 'name': 'string' },
            'defaultValue': {
                'func': false,
                'value': '\'white\''
            }
        },
        {
            'name': 'iconConfig',
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
        },
        {
            'name': 'isActive',
            'type': { 'name': 'boolean' }
        },
        {
            'name': 'activeColor',
            'description': 'The active color is always shown as 50% opaque.\nThe color applied will be `activeColor` || `iconConfig.color` || `backgroundColor`',
            'type': { 'name': 'string' }
        },
        {
            'name': 'hasColorRing',
            'type': { 'name': 'boolean' },
            'defaultValue': {
                'func': false,
                'value': 'false'
            }
        },
        {
            'name': 'animationClass',
            'description': 'The animation class to be applied on click.',
            'type': { 'name': 'string' }
        },
        {
            'name': 'animationDurationMs',
            'description': 'The duration of the animation on click - needs \'animationClass\' set as well to work.',
            'type': { 'name': 'number' },
            'defaultValue': {
                'func': false,
                'value': '500'
            }
        }
    ],
    'events': void 0,
    'methods': void 0,
    'slots': [{ 'name': 'default' }]
}
  

/***/ })

}]);
//# sourceMappingURL=10.c7954de3.js.map