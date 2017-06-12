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
    <!-- <link rel="stylesheet" href="vendors/angular-material/modules/js/datepicker/datepicker.css"> -->

    <!-- angular -->

    <!-- configuration files -->
    <!-- <script type="text/javascript" src="scripts/clientConfig.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/config/constants.js"></script> -->

    <!-- classes -->
    <!-- <script type="text/javascript" src="scripts/classes/DropdownClass.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/classes/RunClass.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/classes/UserClass.js"></script> -->

    <!-- factories -->
    <!-- <script type="text/javascript" src="scripts/factories/UserService.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/factories/DatabaseService.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/factories/UserAuthService.js"></script> -->


    <!-- controllers -->
    <!-- <script type="text/javascript" src="scripts/controllers/LoginController.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/controllers/enter_run_controller.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/controllers/show_runs_controller.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/controllers/RunViewController.js"></script> -->
    <!-- <script type="text/javascript" src="scripts/controllers/EditRunController.js"></script> -->
<?php wp_head(); ?>
  </head>
  <body>
    <div ng-controller="ShowRunsController as showRun">

     <ng-include src="'./views/partials/header.html'"></ng-include>

   </div>
   <div class="container">
   <div layout="column" layout-align="start center">
    <main ng-view></main>
  </div>
  </div>



  </body>
</html>
