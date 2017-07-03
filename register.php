<?php get_header() ?>

<div ng-controller="RegisterController as register">
<md-content layout="row" layout-align="center center">
  <div class = "column">
  <form ng-submit="register.addUser(newUser)">
    <md-input-container>
        <label for="username">Username:</label>
        <input type="text" ng-model="newUser.name" />
    </md-input-container>
  <br>
  <md-input-container>
      <label for="username">Email:</label>
      <input type="text" ng-model="newUser.email" />
  </md-input-container>
  <br>
    <md-input-container>
        <label for="password">Password:</label>
        <input type="password" ng-model="newUser.password" />
    </md-input-container>
  <br>
  <div layout="row" layout-align="center center">
    <md-button class="md-raised md-primary md-hue-1" type="submit" name="submit" value="Register">Register</md-button>
  </div>
  </form>
</div>
</md-content>
</div>

<?php get_footer() ?>
