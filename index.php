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

  <ng-include src="'<?php echo get_stylesheet_directory_uri() ?>/views/partials/header.html'"></ng-include>

  <div class="container">
    <div layout="column" layout-align="start center">
      <main ng-view></main>
    </div>
  </div>



</body>
</html>
