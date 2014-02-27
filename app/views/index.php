<!doctype html>
<html ng-app="lamg-stack" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>L.A.M.G Stack Bootstrap Site</title>    
        <!-- build:css(public/app) styles/vendor.css -->
        <!-- bower:css -->
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
        <!-- endbower -->
        <!-- endbuild -->
        <!-- build:css({.tmp,public/app}) styles/applications.css-->
        <link rel="stylesheet" href="styles/main.css">
        <link rel="stylesheet" href="styles/bootstrap.override.css">
        <!-- endbuild -->
    </head>
    <body>               
        <!-- Angular View -->
        <div class="container" ng-view ></div>
        <!-- endAngular View -->

        <!--[if lt IE 9]>
        <script src="bower_components/es5-shim/es5-shim.js"></script>
        <script src="bower_components/json3/lib/json3.min.js"></script>
        <![endif]-->

        <!-- build:js(public/app) scripts/vendor.js -->
        <!-- bower:js -->
        <script src="bower_components/jquery/dist/jquery.js"></script>
        <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/angular-resource/angular-resource.js"></script>
        <script src="bower_components/angular-cookies/angular-cookies.js"></script>
        <script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
        <script src="bower_components/angular-route/angular-route.js"></script>
        <!-- endbower -->
        <!-- endbuild -->

        <!-- build:js({.tmp,public/app}) scripts/scripts.js -->
        <script src="scripts/app.js"></script>
        <script src="scripts/controllers/main.js"></script>
        <script src="scripts/controllers/login.js"></script>
        <script src="scripts/services/auth.js"></script>
        <script src="scripts/services/session.js"></script>
        <script src="scripts/services/user.js"></script>
        <!-- endbuild -->
    </body>
</html>