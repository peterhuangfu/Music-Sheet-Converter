<template>
  <div>
    <button id="signinButton" @click="signin">Sign in with Google</button>
    <p>{{ user }}</p>
    <p>{{ isAuthenticated }}</p>
    <p>Hello</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Login',
  computed: {
    ...mapState({
      user: state => state.auth.user,
      isAuthenticated: state => state.auth.isAuthenticated,
      isLoginCheck: state => state.auth.isLoginCheck,
    }),
  },
  methods: {
    signin() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          this.isSignIn = this.$gAuth.isAuthorized;
          this.$store.dispatch('auth/UserLogin', {
            token: GoogleUser.Zi.access_token,
            id: GoogleUser.El,
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
