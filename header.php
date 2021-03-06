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
<header>
  <md-toolbar class="md-primary md-hue-1">
    <div class="md-toolbar-tools" layout="row" layout-align="space-between center" >
      <div>
        <md-button class="md-icon-button large" href="#home">
          <i class="material-icons" id="addButton">navigate_before</i>
        </md-button>
      </div>
      <div>
        <h1>Log My Run</h1>
      </div>
      <div>
        <md-menu>
          <md-button aria-label="menu" class="md-icon-button large" ng-click="$mdMenu.open($event)">
            <i class="material-icons" id="addButton">menu</i>
          </md-button>
          <md-menu-content width="2" ng-click="$mdMenu.close()">
            <?php if( is_user_logged_in() && current_user_can( 'edit_posts' ) ) : ?>
              <md-menu-item>
                <md-button><span md-menu-align-target><?php wp_loginout( $_SERVER['REQUEST_URI']); ?></span></md-button>
              </md-menu-item>
            <?php else : ?>
              <md-menu-item>
                <md-button><span md-menu-align-target>Logout</span></md-button>
              </md-menu-item>
            <?php endif ?>
          </md-menu>
        </div>

      </div>
    </md-toolbar>
  </header>
