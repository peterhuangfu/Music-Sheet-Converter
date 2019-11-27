<template>
  <div>
    this is Explore
    <button @click="getProfile">get profile</button>
    {{ information }}
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Explore',
  computed: {
    ...mapState({
      information: state => state.explore.information,
    }),
  },
  methods: {
    // getProfile() {
    //   this.$store.dispatch('explore/get_profile');
    // }
    ...mapActions({
      getProfile: 'get_profile',
    }),
  },
  watch: {
    information: function(information) {
      console.log(information);
    },
  },
};
</script>
<style lang="stylus" scoped></style>
