import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings, withColors, ContrastChecker } from '@wordpress/editor'

class Edit extends Component {
    state = {

    }
    // onChangeBackgroundColor = (bgColor) => {
    //     this.props.setAttributes({bgColor})
    // }
    // onChangeTextColor = (textColor) => {
    //     this.props.setAttributes({textColor})
    // }

    render() {
        const { className, attributes, setTextColor, setBgColor, bgColor, textColor } = this.props;
        const { content, alignment } = attributes;
        return (
            <>
                <InspectorControls>
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
                <BlockControls>
                    <AlignmentToolbar 
                        value={alignment}
                        onChange={(value) => this.props.setAttributes({alignment: value})}
                    />
                </BlockControls>
                <RichText 
                tagName="p"
                className={className}
                style={{textAlign: alignment, backgroundColor: bgColor.color, color: textColor.color}}
                onChange={ (value) => this.props.setAttributes({content: value}) }
                value={content}
                />
            </>
        )
    }
}

export default withColors('bgColor', {'textColor': 'color'})(Edit);