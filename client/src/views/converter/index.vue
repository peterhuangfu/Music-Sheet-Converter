<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="12">
          <div
            style="backgroundColor:#444444; height:600px; margin-right:12px; z-index: 0; "
          >
            <el-row>
              <el-col :span="4">
                <div
                  style="backgroundColor:#444444; width:100%; height:100px"
                ></div>
              </el-col>
              <el-col :span="16">
                <div
                  style="fontSize:50px; color:white; text-align:center; margin:24px"
                >
                  Upload File
                </div>
                <el-upload
                class="upload-demo"
                drag
                accept=".wav, .mp3"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="fileChange"
                style="margin-left: 8%; margin-top: 50px"
                :auto-upload="false"
                name="file"
                >
                <i class="el-icon-upload"></i>
                <div style="fontSize: 20px; color: gray; text-align:center">click or drag to upload</div>
                <div style="fontSize: 15px; color: white; margin-top:12px" slot="tip">.wav and .mp3 only</div>
              </el-upload>
                <div style="text-align:center">
                  <el-button circle id="fileCircle" v-bind:style="{backgroundColor: greenOrRed}">
                  </el-button>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="backgroundColor:#444444; width:100%; height:100px"
                ></div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="backgroundColor:#444444; height:600px; z-index: 0; ">
            <el-col :span="4"
              ><div
                style="backgroundColor:#444444; width:100%; height:100px"
              ></div
            ></el-col>
            <el-col :span="16" style="margin-top:40px">
              <div style="margin: 20px 0; color: white; fontSize: 30px">
                File Name :
              </div>
              <el-input
                type="text"
                placeholder=""
                v-model="form.fileName"
                maxlength="30"
                show-word-limit
              >
              </el-input>
              <div style="margin: 20px 0; color: white; fontSize: 30px">
                File Description :
              </div>
              <el-input
                type="textarea"
                placeholder=""
                v-model="form.fileDescrip"
                maxlength="100"
                show-word-limit
                rows="5"
              >
              </el-input>
              <el-row style="margin-top: 20px;">
                <el-col :span="4">
                  <el-switch
                    v-model="form.isSeparate"
                    active-color="#13ce66"
                    inactive-color="#888888"
                    style="margin-top:9px;"
                  >
                  </el-switch>
                </el-col>
                <el-col :span="8">
                  <div style="color: white; fontSize: 25px;">Separate</div>
                </el-col>
                <el-col :span="12">
                  <!-- <el-button
                    icon="el-icon-search"
                    circle
                    size="mini"
                    style="background-color:gray; color:white; margin-top:6px"
                    disabled
                  >
                  </el-button> -->
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-switch
                    v-model="form.isPublic"
                    active-color="#13ce66"
                    inactive-color="#888888"
                    style="margin-top:9px;"
                  >
                  </el-switch>
                </el-col>
                <el-col :span="8">
                  <div style="color: white; fontSize: 25px;">Public</div>
                </el-col>
                <el-col :span="12">
                  <!-- <el-button
                    icon="el-icon-search"
                    circle
                    size="mini"
                    style="background-color:gray; color:white; margin-top:6px"
                  >
                  </el-button> -->
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-switch
                    v-model="form.wantToTransform"
                    active-color="#13ce66"
                    inactive-color="#888888"
                    style="margin-top:9px;"
                  >
                  </el-switch>
                </el-col>
                <el-col :span="8">
                  <div style="color: white; fontSize: 25px;">Transform</div>
                </el-col>
                <el-col :span="12">
                  <!-- <el-button
                    icon="el-icon-search"
                    circle
                    size="mini"
                    style="background-color:gray; color:white; margin-top:6px"
                  >
                  </el-button> -->
                </el-col>
              </el-row>
              <el-button class="homepage_button_1" @click="onSubmit"
                ><div style="margin-top:-9px">Submit</div></el-button
              >
              <el-button class="homepage_button_1" @click="clear"
                ><div style="margin-top:-9px">Clear</div></el-button
              >
            </el-col>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Converter',
  data() {
    return {
      form: {
        fileName: '',
        fileDescrip: '',
        isSeparate: false,
        isPublic: false,
        wantToTransform: false,
        formData:new FormData(),
      },
      existFile : "red",
      FileList: [],
    };
  },
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
        if (this.$router.history.current.path !== '/converter')
          this.$router.push('/converter');
      }
    }
  },
  computed: {
    ...mapState({
      works: state => state.converter.works,
      isAuthenticated: state => state.auth.isAuthenticated,
      isLoginCheck: state => state.auth.isLoginCheck,
      switch_judge: state => state.auth.switch_judge,
    }),
    greenOrRed: function () {
        return this.existFile;
    }
  },
  watch: {
    works: function(works) {
      console.log('Get Works !');
    },
    switch_judge: function(switch_judge) {
      if (this.isAuthenticated) {
        if (this.$router.history.current.path !== '/converter')
          this.$router.push('/converter');
      } else this.$router.push('/');
    },
  },
  // computed: {
  //    greenOrRed: function () {
  //     return this.existFile;
  //   }
  // },
  methods: {
    onSubmit () {
      this.$store.dispatch('converter/save_music_information', { path: "test", 
      file_title: this.form.fileName, file_description: this.form.fileDescrip, file_ispublic: this.form.isPublic });
    },
    clear () {
      this.form.fileName = '';
      this.form.fileDescrip = '';
      this.existFile = "red";
    },
    fileChange(e) {
      this.existFile = "green";
    }
  }
};
</script>
<style lang="stylus" scoped>
.keyboard {
  width : 100%
  height: 75px
}
.homepage_button_1 {
  background-color: gray
  color: white
  font-size : 30px
  width:150px
  height:40px
  margin-top: 20px
}
#fileCircle {
  margin-top:20px
  margin-right:0%
}
</style>
