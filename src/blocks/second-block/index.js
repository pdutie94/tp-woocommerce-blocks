import './style.editor.scss';
import React from 'react';
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import { RichText, getColorClassName } from '@wordpress/editor'
import classnames from 'classnames'
import { omit } from 'lodash'
import Edit from './edit';

const attributes = {
    content: {
        type: 'string',
        source: 'html',
        selector: 'h4'
    },
    textAlignment: {
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
    },
    shadow: {
        type: 'boolean',
        default: false
    },
    shadowOpacity: {
        type: 'number',
        default: 0.3
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
        const { content, textAlignment, bgColor, textColor, customBgColor, customTextColor, shadow, shadowOpacity } = attributes;
        const backgroundClass = getColorClassName('background-color', bgColor);
        const textClass = getColorClassName('color', textColor);

        const classes = classnames({
            [backgroundClass]: backgroundClass, 
            [textClass]: textClass, 
            'has-shadow': shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        })

        return <RichText.Content
        className={ classes }
        tagName="h4"
        value={content}
        style={{
            textAlign: textAlignment, 
            backgroundColor: backgroundClass ? undefined : customBgColor, 
            color: textClass ? undefined : customTextColor
        }}
        />;
    },
    deprecated: [
        {
            attributes: omit({
                ...attributes,
                alignment: {
                    type: 'string'
                }
            }, ['textAlignment']),
            migrate: (attributes) => {
                return omit({
                    ...attributes,
                    textAlignment: attributes.alignment
                }, ['alignment'])
            },
            save: function({attributes}) {
                const { content, alignment, bgColor, textColor, customBgColor, customTextColor, shadow, shadowOpacity } = attributes;
                const backgroundClass = getColorClassName('background-color', bgColor);
                const textClass = getColorClassName('color', textColor);
        
                const classes = classnames({
                    [backgroundClass]: backgroundClass, 
                    [textClass]: textClass, 
                    'has-shadow': shadow,
                    [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
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
        },
        {
            attributes: {
                ...attributes,
                content: {
                    type: 'string',
                    source: 'html',
                    selector: 'p'
                }
            },
            save: function({attributes}) {
                const { content, alignment, bgColor, textColor, customBgColor, customTextColor, shadow, shadowOpacity } = attributes;
                const backgroundClass = getColorClassName('background-color', bgColor);
                const textClass = getColorClassName('color', textColor);
        
                const classes = classnames({
                    [backgroundClass]: backgroundClass, 
                    [textClass]: textClass, 
                    'has-shadow': shadow,
                    [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
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
        }
    ]
});