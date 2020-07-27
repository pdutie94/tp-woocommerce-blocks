import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings, withColors, ContrastChecker } from '@wordpress/editor'
import classnames from 'classnames'
import { RangeControl, PanelBody } from '@wordpress/components'

class Edit extends Component {
    state = {

    }
    toggleShadow = () => {
        this.props.setAttributes({shadow: !this.props.attributes.shadow})
    }
    onChangeShadowOpacity = (shadowOpacity) => {
        this.props.setAttributes({shadowOpacity})
    }

    render() {
        const { className, attributes, setTextColor, setBgColor, bgColor, textColor } = this.props;
        const { content, textAlignment, shadow, shadowOpacity } = attributes;
        const classes = classnames( className, {
            'has-shadow': shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        })
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Settings', 'tpwb')}
                    >
                        {shadow &&
                            <RangeControl 
                                label={__('Shadown Opacity', 'tpwb')}
                                value={shadowOpacity}
                                onChange={ this.onChangeShadowOpacity }
                                min={0.1}
                                max={0.4}
                                step={0.1}
                            />
                        }
                    </PanelBody>
                    <PanelColorSettings
                    title={__('Panel', 'tpwb')}
                    colorSettings={[
                        {
                            value: bgColor.color,
                            onChange: setBgColor,
                            label: __('Background Color', 'tpwb')
                        },
                        {
                            value: textColor.color,
                            onChange: setTextColor,
                            label: __('Text Color', 'tpwb')
                        }
                    ]}
                    >
                        <ContrastChecker 
                            textColor={textColor.color}
                            backgroundColor={bgColor.color}
                        />
                </PanelColorSettings>
                </InspectorControls>
                <BlockControls
                    controls={[
                        {
                            icon: 'wordpress',
                            title: __('Shadow', 'tpwb'),
                            onClick: this.toggleShadow,
                            isActive: shadow
                        }
                    ]}
                >
                    <AlignmentToolbar 
                        value={textAlignment}
                        onChange={(value) => this.props.setAttributes({textAlignment: value})}
                    />
                </BlockControls>
                <RichText 
                    tagName="h4"
                    className={classes}
                    style={{textAlign: textAlignment, backgroundColor: bgColor.color, color: textColor.color}}
                    onChange={ (value) => this.props.setAttributes({content: value}) }
                    value={content}
                />
            </>
        )
    }
}

export default withColors('bgColor', {'textColor': 'color'})(Edit);