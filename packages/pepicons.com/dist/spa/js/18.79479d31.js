(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "0638":
/***/ (function(module, exports, __webpack_require__) {


      if (false) {}
      module.exports = {
    'displayName': 'Stack',
    'exportName': 'default',
    'description': '',
    'tags': {},
    'props': [
        {
            'name': 'tiles',
            'description': 'The component names you pass as \'component\' need to be globally registered with `vue.component(name, comp)`!\nProps are bound with `v-bind="props"`\nClass and style are bound with `:class="class" :style="style"`',
            'tags': {
                'type': [{
                        'title': 'type',
                        'type': { 'name': '{ component: string, props: { [propName: string]: any }, class?: any, style?: any }[]' }
                    }],
                'example': [{
                        'description': '[{ component: \'StatsSummaryCard\', props: { title: \'A\', value: 100 } }, { component: \'StatsSummaryCard\', props: { title: \'B\', value: 250 } }]',
                        'title': 'example'
                    }]
            },
            'type': { 'name': '{ component: string, props: { [propName: string]: any }, class?: any, style?: any }[]' }
        },
        {
            'name': 'gap',
            'description': 'The spacing between the stack tiles.\nThe beauty about this implementation of "gap" that the tiles are stacked with flexbox but the gap is applied similar to css grid, while keeping cross-browser compatibility.',
            'tags': {
                'type': [{
                        'title': 'type',
                        'type': { 'name': '\'md\'' }
                    }]
            },
            'type': { 'name': '\'md\'' },
            'defaultValue': {
                'func': false,
                'value': '\'md\''
            }
        },
        {
            'name': 'classes',
            'description': 'The classes to be applied to the wrapper around your content',
            'tags': {
                'example': [{
                        'description': '\'justify-between\'',
                        'title': 'example'
                    }]
            },
            'type': { 'name': 'string' },
            'defaultValue': {
                'func': false,
                'value': '\'\''
            }
        }
    ],
    'events': void 0,
    'methods': void 0,
    'slots': [{ 'name': 'default' }]
}
  

/***/ })

}]);
//# sourceMappingURL=18.79479d31.js.map