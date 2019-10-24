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
          <div class="main-header">
            <span
              id="page_title"
              style="line-height:18px;font-size:18px; padding-left:8px; color: #255985"
            >{{title}}</span>
          </div>
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
import NavHeader from "./NavHeader.vue";
export default {
  name: "Page",
  components: {
    NavHeader
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    title() {
      switch (this.$route.name) {
        case "homepage":
          return "Homepage";
        case "profile":
          return "Profile";
        case "explore":
          return "Explore";
        case "converter":
          return "Converter";
        default:
          return "";
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.owl-nav-header {
  background-color: rgba(0, 0, 0, 0.8);
  border: 0px;
  z-index: 2001;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}

.side-bar {
  position: fixed;
  top: 60px;
  bottom: 0;
  z-index: 7;
}

.main-header {
  background-color: rgba(0, 0, 0, 0);
  height: 51px;
  padding-top: 16px;
  z-index: 2;
  position: relative;
}

.main-header svg, span {
  color: #36445D;
}

.main-content {
  will-change: padding-left;
  transition: padding-left 0.5s ease;
  margin-top: 60px;
  width: 100vw;
}
</style>
