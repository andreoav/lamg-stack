<!-- Fixed navbar -->
<header class="navbar navbar-default navbar-fixed-top" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{{ appName }}</a>
    </div>
    <nav class="navbar-collapse collapse" role="navigation">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" ng-show="!currentUser">
        <li><a href="login">Hello guest! Click here to login</a> </li>
      </ul>
    </nav><!--/.nav-collapse -->
  </div>
</header>