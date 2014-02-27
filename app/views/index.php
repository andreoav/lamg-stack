<!doctype html>
<html data-ng-app="lamg-stack" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- bower:css -->
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
        <!-- endbower -->
        <title>{{ appName }}</title>    
    </head>
    <body>

        <!-- Angular View -->
        <section data-ng-view />
        <!-- endAngular View -->

        <!-- build:js(public/app) scripts/vendor.js -->
        <!-- bower:js -->
        <script src="bower_components/jquery/dist/jquery.js"></script>
        <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/angular-resource/angular-resource.js"></script>
        <script src="bower_components/angular-cookies/angular-cookies.js"></script>
        <script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
        <script src="bower_components/angular-route/angular-route.js"></script>
        <script src="bower_components/json3/lib/json3.min.js"></script>
        <!-- endbower -->
        <!-- endbuild -->

        <!-- build:js({.tmp,public/app}) scripts/scripts.js -->
        <script src="scripts/app.js"></script>
        <script src="scripts/controllers/main.js"></script>
        <!-- endbuild -->
    </body>
</html>