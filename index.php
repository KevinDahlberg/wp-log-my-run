<!DOCTYPE html>
<html ng-App="myApp">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width", initial-scale="1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <title>Log My Run APP</title>

  <!-- Stylesheets -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

  <?php wp_head(); ?>
</head>
<body>
  <?php get_header() ?>
  <!-- <ng-include src="'<?php echo get_stylesheet_directory_uri() ?>/views/partials/header.html'"></ng-include> -->
  <?php if( is_user_logged_in() && current_user_can( 'edit_posts' ) ) : ?>

    <div class="container">
      <div layout="column" layout-align="start center">
        <main ng-view></main>
      </div>
    </div>

  <?php else : ?>

    <form class="login-input" action="" method="post">
      <div layout="row" layout-align="space-around center">
        <md-input-container>
          <label>Username</label>
          <input type="text" name="log" />
        </md-input-container>
      </div>
      <div layout="row" layout-align="space-around center">
        <md-input-container>
          <label>Password</label>
          <input type="password" name="pwd" />
        </md-input-container>
      </div>
      <div layout="row" layout-align="space-around center">
        <md-button class="md-raised md-primary md-hue-1 login-button" id="wp-submit" type="submit" name="wp-submit" value="Login">Log In</md-button>
        <input type="hidden" name="action" value="my_login_action" />
        <!-- register functionality needs to be added at a later date -->
        <!-- <md-button class="md-raised md-primary md-hue-1 login-button" a href="#register">Register</md-button> -->
        <!-- </a> -->
      </div>
    </form>
  <?php endif; ?>
</body>
</html>
