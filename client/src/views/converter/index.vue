<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div style="backgroundColor:black; height:600px; margin-right:12px; z-index: 0; ">
          <el-row>
            <el-col :span="4">
              <div style="backgroundColor:black; width:100%; height:100px"></div>
            </el-col>
            <el-col :span="16">
              <div style="fontSize:50px; color:white; text-align:center; margin:24px">
                Upload File
              </div>
            </el-col>
            <el-col :span="4">
              <div style="backgroundColor:black; width:100%; height:100px"></div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div style="backgroundColor:black; height:600px; z-index: 0; ">
          <el-input
            type="text"
            placeholder=""
            v-model="text"
            maxlength="10"qw
            show-word-limit
          >
          </el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            placeholder=""
            v-model="textarea"
            maxlength="100"
            show-word-limit
          >
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Converter",
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
};
</script>
<style lang="stylus" scoped>
.keyboard {
  width : 100%
  height: 200px
  margin-top: -3px
  z-index: -1
}</style>