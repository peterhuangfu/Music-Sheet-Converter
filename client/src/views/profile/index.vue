<template>
  <div>
    <el-row>
      <el-col :span="9" style="background-color: white;">
        <div style="color:#BFC4CC; float: right; padding: 20px">{{ userId }}</div>
        <div
          style="display: flex; flex-direction: column; justify-content:space-around; align-items: center; margin-top: 100px; height: 500px"
        >
          <div
            style="width: 200px; height: 200px;border-radius: 50%; background-color: #6CC0AF;display: flex;justify-content:center; align-items: center;"
          >
            <div style="color: white; font-weight: bold; font-size: 40px">U</div>
          </div>
          <div style="font-size: 20px">{{ userName }}</div>
          <div style="color: #A1ACBB">{{ userGroup }}</div>
          <div style="color: #69B8F0">{{ userPosition }}</div>
          <div
            style="color: #8692A4; font-size: 10px; width: 100px; word-break: break-all"
          >{{ userDesc }}</div>
          <el-button
            style="width: 35px; height: 35px;background-color: #F0F2F4;display: flex;justify-content:center; align-items: center;"
            icon="el-icon-edit"
            circle
            @click="editProfileVisible = true"
          ></el-button>
        </div>
      </el-col>
      <el-col :span="15" style="background-color: black;">
        <el-row style="padding: 20px;">
          <el-col :span="13" style="height: 20px "></el-col>
          <el-col
            :span="3"
            style="color: #8A919F; font-size: 10px; height: 20px; border-right: 1px solid #222D3C; "
          >{{ sheetCount }} sheet(s) music</el-col>
          <el-col
            :offset="1"
            :span="3"
            style="border-right: 1px solid #222D3C; height: 20px; display: flex; justify-content: space-around"
          >
            <sheet-icon
              icon="left"
              size="sm"
              style="cursor: pointer; background-color: white; border-radius: 5px"
            ></sheet-icon>
            <sheet-icon
              icon="right"
              size="sm"
              style="cursor: pointer; background-color: white; border-radius: 5px"
            ></sheet-icon>
          </el-col>
          <el-col
            :offset="1"
            :span="3"
            style="height: 20px; display: flex; justify-content: center"
          >
            <sheet-icon
              icon="menu"
              size="sm"
              style="cursor: pointer; background-color: white; border-radius: 5px"
            ></sheet-icon>
          </el-col>
        </el-row>
        <hr style="border: 1px solid #222D3C; width: 90%" />
        <div style="display: flex; justify-content: center">
          <div style="width: 80%;">
            <div
              :key="work.file_id"
              style=" margin: 3% 7%; display: inline-block; background-color: #EEF2F4; border-radius:8px; width: 36%; height: 100px;"
              v-for="work in uploadWorks"
            >
              <div style="padding-left: 30px; padding-top:30px; color: #595E67">
                <div>Title:{{work.title}}</div>
                <div>Desc:{{work.description}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <edit-profile :visible.sync="editProfileVisible"></edit-profile>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import EditProfile from './EditProfile.vue';
export default {
  name: 'Profile',
  components: {
    EditProfile,
  },
  data() {
    return {
      userId: '',
      userName: '',
      userGroup: '',
      userPosition: '',
      userDesc: '',
      sheetCount: 0,
      editProfileVisible: false,
      uploadWorks: [],
    };
  },
  computed: {
    ...mapState({
      isAuthenticated: state => state.auth.isAuthenticated,
      isLoginCheck: state => state.auth.isLoginCheck,
      switch_judge: state => state.auth.switch_judge,
      profiles: state => state.profile.profiles,
    }),
  },
  watch: {
    editProfileVisible(newVal) {
      if (!newVal) window.location.reload();
    },
    profiles(newVal) {
      // console.log(newVal);
      this.userId = `@${newVal.google_id}`;
      this.userName = newVal.username;
      this.userDesc = newVal.self_tags;
      this.userPosition = newVal.address;
      this.userGroup = newVal.self_tags;
      this.sheetCount = newVal.upload_works.length;
      this.uploadWorks = newVal.upload_works;
      // console.log(this.uploadWorks);
    },
    switch_judge: function(switch_judge) {
      if (!this.isLoginCheck) {
        this.$store.dispatch('auth/CheckLoginStatus');
      } else {
        if (this.isAuthenticated) this.getProfile();
        else this.$router.push('/');
      }
    },
  },
  methods: {
    getProfile() {
      this.$store.dispatch('profile/getAllProfiles');
      // console.log('start');
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>
<style lang="stylus" scoped>
.el-col {
  height: 100vh;
}
</style>
