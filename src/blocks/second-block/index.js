import './style.editor.scss';
import React from 'react';
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import { RichText, getColorClassName } from '@wordpress/editor'
import classnames from 'classnames'
import Edit from './edit';

const attributes = {
    content: {
        type: 'string',
        source: 'html',
        selector: 'p'
    },
    alignment: {
        type: 'string'
    },
    bgColor: {
        type: 'string'
    },
    textColor: {
        type: 'string'
    },
    customBgColor: {
        type: 'string'
    },
    customTextColor: {
        type: 'string'
    }
}

const styles = [
    {
        name: 'rounded',
        label: __('Rounded', 'tpwb'),
        isDefault: true
    },
    {
        name: 'outline',
        label: __('Outline', 'tpwb'),
    },
    {
        name: 'squared',
        label: __('Squared', 'tpwb'),
    }
]

registerBlockType('tpwb/second-block', {
    title: __('Second Block', 'tpwb'),
    description: __('This is my second block', 'tpwb'),
    category: 'tp-woo-blocks',
    icon: 'admin-network',
    attributes: attributes,
    styles: styles,
    edit: Edit,
    save: function({attributes}) {
        const { content, alignment, bgColor, textColor, customBgColor, customTextColor } = attributes;
        const backgroundClass = getColorClassName('background-color', bgColor);
        const textClass = getColorClassName('color', textColor);

        const classes = classnames({
            [backgroundClass]: backgroundClass, 
            [textClass]: textClass, 
        })
        return <RichText.Content
        className={ classes }
        tagName="p"
        value={content}
        style={{
            textAlign: alignment, 
            backgroundColor: backgroundClass ? undefined : customBgColor, 
            color: textClass ? undefined : customTextColor
        }}
        />;
    }
});