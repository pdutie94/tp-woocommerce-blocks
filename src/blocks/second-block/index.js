import './style.editor.scss';
import React from 'react';
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

registerBlockType('tpwb/second-block', {
    title: __('Second Block', 'tpwb'),
    description: __('This is my second block', 'tpwb'),
    category: 'layout',
    icon: 'admin-network',
    edit: function(props) {
        const {className} = props;
        return <p className={className}>Second Block</p>;
    },
    save: function() {
        return <p>saved content</p>;
    }
});