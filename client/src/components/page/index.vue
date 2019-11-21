<template>
  <el-container>
    <el-header>
      <nav-header />
    </el-header>
    <el-container>
      <el-row class="main-content">
        <el-col :span="1">
          <div class="main-header"></div>
        </el-col>
        <el-col :span="22">
          <router-view style="margin-top:auto" />
        </el-col>
        <el-col :span="1">
          <div class="main-header"></div>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
import NavHeader from './NavHeader.vue';
export default {
  name: 'Page',
  components: {
    NavHeader,
  },
  created() {
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    title() {
      switch (this.$route.name) {
        case 'homepage':
          return '';
        case 'profile':
          return 'Profile';
        case 'explore':
          return 'Explore';
        case 'converter':
          return 'Converter';
        case 'login':
          return 'Login';
        default:
          return '';
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.side-bar {
  position: fixed;
  top: 60px;
  bottom: 0;
  z-index: 7;
}

.main-header {
  background-color: rgba(0, 0, 0, 0);
  height: 51px;
  padding-top: 1px;
  z-index: 2;
  position: relative;
}

.main-header svg, span {
  color: #36445D;
}

.main-content {
  will-change: padding-left;
  transition: padding-left 0.5s ease;
  margin-top: 1px;
  width: 100vw;
}
</style>
