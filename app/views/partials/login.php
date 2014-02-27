<div class="row">
  <div class="col-sm-12">
    <h1>Login</h1>
    <p>Accounts are reset on server restart from <code>dummydata.js</code>. Default account is <code>test@test.com</code> / <code>test</code></p>
  </div>
  <div class="col-sm-12">
    <form class="form" name="form" ng-submit="login(form)" novalidate>

      <div class="form-group">
        <label>Email</label>

        <input type="text" name="email" class="form-control" ng-model="user.email">
      </div>

      <div class="form-group">
        <label>Password</label>
        
        <input type="password" name="password" class="form-control" ng-model="user.password">
      </div>

      <div class="form-group has-error">
        <p class="help-block" ng-show="form.email.$error.required && form.password.$error.required && submitted">
           Please enter your email and password.
        </p>              
        <p class="help-block">{{ errors.other }}</p>
      </div>

      <button type="submit" class="btn btn-lg btn-primary"> Sign in </button>
    </form>
  </div>
</div>

<div class="row">
  <div class="col-sm-12">
    <hr>
    Not registered? <a href="/signup" class="text-center new-account">Create an account.</a>
  </div>
</div>