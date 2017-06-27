<?php
/**
* Enqueue scripts and styles
*/

function scripts() {

	// load angular-material css
	wp_enqueue_style( 'angular-material', get_template_directory_uri() . '/node_modules/angular-material/angular-material.css' );

	// load Font Awesome css
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/includes/css/font-awesome.min.css', false, '4.1.0' );

	// load stylesheet
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

  wp_enqueue_script('constants', get_template_directory_uri() .'/scripts/constants.js');
  wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/scripts/config.js');

	//classes
	wp_enqueue_script('RunClass', get_template_directory_uri() . '/scripts/classes/RunClass.js');
	wp_enqueue_script('DropdownClass', get_template_directory_uri() . '/scripts/classes/DropdownClass.js');
	wp_enqueue_script('RequestClass', get_template_directory_uri() . '/scripts/classes/RequestClass.js');
	wp_enqueue_script('UserClass', get_template_directory_uri() . '/scripts/classes/UserClass.js');

	//load services
	wp_enqueue_script('RunService', get_template_directory_uri() .'/scripts/services/RunService.js');
	wp_enqueue_script('DatabaseService', get_template_directory_uri() .'/scripts/services/DatabaseService.js');

	wp_localize_script( 'RunService', 'login_object', array(
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'redirecturl' => home_url(),
			'loadingmessage' => __('Sending user info, please wait...')
	));

	if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) {
		wp_localize_script('RunService', 'WPsettings', array(
			'root' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'current_ID' => get_the_ID(),
			'session_token' => wp_get_session_token(),
			'user_ID' => get_current_user_id()
		));
	};

  //load controllers
  wp_enqueue_script('HomeController', get_template_directory_uri() .'/scripts/controllers/HomeController.js');
  wp_enqueue_script('EnterRunController', get_template_directory_uri() .'/scripts/controllers/EnterRunController.js');
	wp_enqueue_script('ViewRunController', get_template_directory_uri() .'/scripts/controllers/ViewRunController.js');


  // With get_stylesheet_directory_uri()
  wp_localize_script('scripts', 'localized',
  array('partials' => get_stylesheet_directory_uri() . '/views/'));
}

add_action( 'wp_enqueue_scripts', 'scripts');

add_action('init', function(){

  // not the login request?
  if(!isset($_POST['action']) || $_POST['action'] !== 'my_login_action')
    return;

  // see the codex for wp_signon()
  $result = wp_signon();

  if(is_wp_error($result))
    wp_die('Login failed. Wrong password or user name?');

  // redirect back to the requested page if login was successful
  header('Location: ' . $_SERVER['REQUEST_URI']);
  exit;
});

// The object type. For custom post types, this is 'post';
// for custom comment types, this is 'comment'. For user meta,
// this is 'user'.
$object_type = 'post';
$args1 = array( // Validate and sanitize the meta value.
    // Note: currently (4.7) one of 'string', 'boolean', 'integer',
    // 'number' must be used as 'type'. The default is 'string'.
    'type'         => 'string',
    // Shown in the schema for the meta key.
    'description'  => 'A meta key associated with a string meta value.',
    // Return a single value of the type.
    'single'       => true,
    // Show in the WP REST API response. Default: false.
    'show_in_rest' => true,
);
register_meta( $object_type, 'time', $args1 );
register_meta( $object_type, 'distance', $args1);
register_meta( $object_type, 'date', $args1);
register_meta( $object_type, 'notes', $args1);
?>
