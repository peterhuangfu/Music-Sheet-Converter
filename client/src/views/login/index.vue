<template>
  <div>
    <button @click="signin" id="signinButton">Sign in with Google</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Login',
  beforeMount() {
    if (!this.isLoginCheck) {
      this.$store.dispatch('auth/CheckLoginStatus');
    } else {
      if (this.isAuthenticated) {
        if (this.$router.history.current.path !== '/') this.$router.push('/');
      }
    }
  },
  computed: {
    ...mapState({
      isAuthenticated: state => state.auth.isAuthenticated,
      isLoginCheck: state => state.auth.isLoginCheck,
      switch_judge: state => state.auth.switch_judge,
    }),
  },
  methods: {
    signin() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          this.isSignIn = this.$gAuth.isAuthorized;
          this.$store.dispatch('auth/UserLogin', { user: GoogleUser });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  watch: {
    switch_judge: function(switch_judge) {
      if (this.isAuthenticated) this.$router.push('/page');
      else {
        if (this.$router.history.current.path !== '/')
          this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
