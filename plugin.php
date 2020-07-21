<?php
/**
 * Plugin Name: TP Woocommerce Blocks
 * Plugin URI: https://tienpham.xyz/tp-woocommerce-blocks/
 * Description: Gutenberg blocks for Woocommerce
 * Author: Tiến Phạm
 * Author URI: https://tienpham.xyz/
 * Version: 1.0.0 
 */

if (!defined('ABSPATH')) {
    exit;
}
define('TPWB_VERSION', '1.0.0');

add_filter('block_categories', 'tpwb_blocks_categories', 10, 2);
function tpwb_blocks_categories($category, $post) {
    return array_merge(
        $category,
        array(
            array(
                'slug' => 'tp-woo-blocks',
                'title' => __('TP Woocommerce Blocks', 'tpwv'),
                'icon'  => 'wordpress'
            )
        )
    );
}

function tpwb_blocks_register_block_type($block, $options = array()) {
    register_block_type(
        'tpwb/' . $block,
        array_merge(
            array(
                'editor_script' => 'tpwb-blocks-editor',
                'editor_style'  => 'tpwb-blocks-editor',
                'script'        => 'tpwb-blocks',
                'style'         => 'tpwb-blocks',
            ),
            $options
        )
    );
}

function tpwb_blocks_register() {
    wp_register_script(
        'tpwb-blocks-editor',
        plugins_url('dist/editor.js', __FILE__), 
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components')
    );
    wp_register_script(
        'tpwb-blocks',
        plugins_url('dist/script.js', __FILE__), 
        array('jquery')
    );
    wp_register_style(
        'tpwb-blocks-editor', 
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );
    wp_register_style(
        'tpwb-blocks', 
        plugins_url('dist/style.css', __FILE__)
    );

    tpwb_blocks_register_block_type('firstblock');
    tpwb_blocks_register_block_type('second-block');
}
add_action('init', 'tpwb_blocks_register');