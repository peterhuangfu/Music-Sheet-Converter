<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      @select="onMenuSelected"
      mode="horizontal"
      text-color="black"
      active-text-color="black"
    >
      <span>dckdmi</span>
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Converter</el-menu-item>
      <el-menu-item index="3">Explore</el-menu-item>
      <el-menu-item index="4">Profile</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      windowWidth: window.innerWidth,
      defaultActive: "1"
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal) {
        switch (newVal.path) {
          case "/explore":
            this.defaultActive = "3";
            break;
          case "/profile":
            this.defaultActive = "4";
            break;
          case "/converter":
            this.defaultActive = "2";
            break;
          case "/homepage":
          default:
            this.defaultActive = "1";
            break;
        }
      }
    },
    windowWidth(newVal) {
      this.isCollapse = newVal < 1100;
    }
  },
  methods: {
    onMenuSelected(index) {
      switch (index) {
        case "1":
          this.$router.push("/homepage");
          break;
        case "2":
          this.$router.push("/converter");
          break;
        case "3":
          this.$router.push("/explore");
          break;
        case "4":
          this.$router.push("/profile");
          break;
        default:
          this.$router.push("/");
          break;
      }
    },
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped lang="stylus"></style>
