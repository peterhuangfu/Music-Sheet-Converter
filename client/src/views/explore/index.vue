<template>
  <div>
    this is Explore
    <button @click="getAllWorks">get all works</button>
    {{ works }}
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Explore',
  computed: {
    ...mapState({
      works: state => state.explore.works,
    }),
  },
  methods: {
    getAllWorks() {
      this.$store.dispatch('explore/getAllWorks', { time_range: '7' });
    }
    // ...mapActions({
    //   getAllWorks: 'explore/getAllWorks',
    // }),
  },
  watch: {
    works: function(works) {
      console.log(works);
    },
  },
};
</script>
<style lang="stylus" scoped></style>
