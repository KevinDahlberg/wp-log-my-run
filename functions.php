<?php
/**
* Enqueue scripts and styles
*/

function scripts() {

	// load bootstrap css
	wp_enqueue_style( 'angular-material', THEME_DIR_URI . 'node_modules/angular-material/angular-material.css' );


	// load Font Awesome css
	wp_enqueue_style( 'font-awesome', THEME_DIR_URI . '/includes/css/font-awesome.min.css', false, '4.1.0' );

	// load _tk styles
	wp_enqueue_style( 'style', get_stylesheet_uri() );

  //load angular
  wp_enqueue_script('angularjs', get_template_directory_uri() .'/node_modules/angular/angular.min.js');
  wp_enqueue_script('angularjs-route', get_template_directory_uri() .'/node_modules/angular-route/angular-route.min.js');
  wp_enqueue_script('angular-animate', get_template_directory_uri() .'/node_modules/angular-animate/angular-animate.min.js');
  wp_enqueue_script('angular-aria', get_template_directory_uri() .'/node_modules/angular-aria/angular-aria.min.js');
  wp_enqueue_script('angular-messages', get_template_directory_uri() .'/node_modules/angular-messages/angular-messages.min.js');
  wp_enqueue_script('angular-materialjs', get_template_directory_uri() .'/node_modules/angular-material/angular-material.min.js');
  wp_enqueue_script('angular-material-datepicker', get_template_directory_uri() .'/node_modules/angular-material/modules/js/datepicker/datepicker.min.js');
  wp_enqueue_script('moment', get_template_directory_uri() .'/node_modules/moment/moment.js');
  wp_enqueue_script('angular-moment', get_template_directory_uri() .'/node_modules/angular-moment/angular-moment.js');
  wp_enqueue_script('angular-sanitize', get_template_directory_uri() .'/node_modules/angular-sanitize/angular-sanitize.min.js');
  wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/scripts/config.js', array( 'angularjs', 'angularjs-route', 'angular-animate',
    'angular-aria', 'angular-messages', 'angular-materialjs', 'angular-material-datepicker', 'moment', 'angular-moment', 'angular-sanitize'));

  // With get_stylesheet_directory_uri()
  wp_localize_script('scripts', 'localized',
  array('partials' => get_stylesheet_directory_uri() . '/views/'));
}

add_action( 'wp_enqueue_scripts', 'scripts');

?>
