import './style.editor.scss';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('tpwb/second-block', {
    title: __('Second Block', 'tpwb'),
    description: __('This is my second block', 'tpwb'),
    category: 'layout',
    icon: 'admin-network',
    edit: function({className}) {
        return <p className={className}>Second Block</p>;
    },
    save: function() {
        return <p>saved content</p>;
    }
});