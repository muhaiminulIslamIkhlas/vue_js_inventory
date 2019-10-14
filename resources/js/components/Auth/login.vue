<template>
	<div>
		


		<div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="login">
                    <div class="form-group">
                      <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" v-model="form.email" placeholder="Enter Email Address...">
                      <small class="text-danger" v-if="errors.mail">{{errors.email[0]}}</small>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user" v-model="form.password" id="exampleInputPassword" placeholder="Password">
                      <small class="text-danger" v-if="errors.password">{{errors.password[1]}}</small>
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-user btn-block" type="submit">Login</button>
                    <hr>
                    <a href="index.html" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <router-link class="small" to="/forget">Forgot Password?</router-link>
                  </div>
                  <div class="text-center">
                    
                    <router-link class="small" to="/register">Create an Account!</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>



	</div>
</template>
<script type="text/javascript">
export default {
 created(){
  if(User.loggedIn()){
    this.$router.push({name : 'home'})
  }
 },

  data(){
    return {
      form:{
        email:null,
        password:null
      },
      errors:{},
    }
  },

  methods:{
    login(){
       axios.post('/api/auth/login',this.form)
      .then(res =>{
        User.responseAfterLogin(res)
        Toast.fire({
         type: 'success',
         title: 'Signed in successfully'
          })
        this.$router.push({name : 'home'})
      } )
      .catch(error=>this.errors=error.response.data.errors)
      .catch(
         Toast.fire({
         type: 'warning',
         title: 'Invalied email or password'
      })
        )
    }
  }
  }
	
</script>
<style type="text/css"></style>