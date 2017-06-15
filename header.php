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
        <md-menu-item>
          <md-button ng-click="showRun.logout()"> <span md-menu-align-target>Logout</span></md-button>
        </md-menu-item>
    </md-menu>
  </div>
  </div>
  </md-toolbar>
</header>
