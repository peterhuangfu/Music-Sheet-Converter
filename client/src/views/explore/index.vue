<template>
  <el-table
    :data="works"
    stripe
    style="width: 100%">
    <el-table-column
      prop="file_id"
      label="No."
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="Title"
      width="220">
    </el-table-column>
    <el-table-column
      prop="uploader"
      label="Uploader">
    </el-table-column>
    <el-table-column
      prop="desription"
      label="Description"
      width="400">
    </el-table-column>
    <el-table-column
      label="Actions">
      <template slot-scope="scope">
        <el-button @click.native="openWork(scope.$index, scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
        <el-button @click.native="downloadWork(scope.$index, scope.row)" type="success" icon="el-icon-star-off" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Explore',
  created() {
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  beforeMount() {
    if (!this.isLoginCheck) {
      this.$store.dispatch('auth/CheckLoginStatus');
    } else {
      if (this.isAuthenticated) {
        if (this.$router.history.current.path !== '/explore')
          this.$router.push('/explore');
        this.getAllWorks();
      }
    }
  },
  computed: {
    ...mapState({
      works: state => state.explore.works,
      open_work: state => state.explore.openWork,
      isAuthenticated: state => state.auth.isAuthenticated,
      isLoginCheck: state => state.auth.isLoginCheck,
      switch_judge: state => state.auth.switch_judge,
    }),
  },
  methods: {
    getAllWorks() {
      this.$store.dispatch('explore/getAllWorks', { time_range: '7' });
    },
    openWork(index, data) {
      this.$store.dispatch('explore/openWork', { _id: data._id, path: data.file_path });
    },
    downloadWork(index, data) {
      this.$store.dispatch('explore/downloadWork', { _id: data._id, path: data.file_path });
    },
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    works: function(works) {
      console.log('Get Works !');
    },
    switch_judge: function(switch_judge) {
      if (this.isAuthenticated) {
        if (this.$router.history.current.path !== '/explore')
          this.$router.push('/explore');
      } else this.$router.push('/');
    },
  },
};
</script>
<style lang="stylus" scoped></style>
