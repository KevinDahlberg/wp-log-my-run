/**
* Enqueue scripts and styles
*/

function _tk_scripts() {

	// Import the necessary TK Bootstrap WP CSS additions
	wp_enqueue_style( '_tk-bootstrap-wp', THEME_DIR_URI . '/includes/css/bootstrap-wp.css' );

	// load bootstrap css
	wp_enqueue_style( '_tk-bootstrap', THEME_DIR_URI . '/includes/resources/bootstrap/css/bootstrap.min.css' );

	// load Font Awesome css
	wp_enqueue_style( '_tk-font-awesome', THEME_DIR_URI . '/includes/css/font-awesome.min.css', false, '4.1.0' );

	// load _tk styles
	wp_enqueue_style( '_tk-style', get_stylesheet_uri() );

	// load bootstrap js
	wp_enqueue_script('_tk-bootstrapjs', THEME_DIR_URI . '/includes/resources/bootstrap/js/bootstrap.min.js', array('jquery') );

	// load bootstrap wp js
	wp_enqueue_script( '_tk-bootstrapwp', THEME_DIR_URI . '/includes/js/bootstrap-wp.js', array('jquery') );

	wp_enqueue_script( '_tk-skip-link-focus-fix', THEME_DIR_URI . '/includes/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_singular() && wp_attachment_is_image() ) {
		wp_enqueue_script( '_tk-keyboard-image-navigation', THEME_DIR_URI . '/includes/js/keyboard-image-navigation.js', array( 'jquery' ), '20120202' );
	}

  //load angular
  wp_enqueue_script('angularjs', get_template_directory_uri() .'/node_modules/angular/angular.min.js');
  wp_enqueue_script('angularjs-route', get_template_directory_uri() .'/node_modules/angular-route/angular-route.min.js');
  wp_enqueue_script('angular-sanitize', get_template_directory_uri() .'/node_modules/angular-sanitize/angular-sanitize.min.js');
  wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/includes/js/scripts.js', array( 'angularjs', 'angularjs-route', 'angular-sanitize'));

  // With get_stylesheet_directory_uri()
  wp_localize_script('scripts', 'localized',
  array('partials' => get_stylesheet_directory_uri() . '/partials/'));
}

add_action( 'wp_enqueue_scripts', '_tk_scripts' );
