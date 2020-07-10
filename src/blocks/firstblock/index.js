var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType('tpwb/firstblock', {
    title: __('First Block', 'tpwb'),
    description: __('This is my first block', 'tpwb'),
    category: 'layout',
    icon: 'admin-network',
    edit: function() {
        return el('p', null, 'Editor');
    },
    save: function() {
        return el('p', null, 'Saved content');
    }
});