<template>
  <div>
    <el-row>
      <el-col :span="9" style="background-color: white;">
        <div style="color:#BFC4CC; float: right; padding: 20px">{{userId}}</div>
        <div
          style="display: flex; flex-direction: column; justify-content:space-around; align-items: center; margin-top: 100px; height: 500px"
        >
          <div
            style="width: 200px; height: 200px;border-radius: 50%; background-color: #6CC0AF;display: flex;justify-content:center; align-items: center;"
          >
            <div style="color: white; font-weight: bold; font-size: 40px">U</div>
          </div>
          <div style="font-size: 20px">{{userName}}</div>
          <div style="color: #A1ACBB">{{userGroup}}</div>
          <div style="color: #69B8F0">{{userPosition}}</div>
          <div
            style="color: #8692A4; font-size: 10px; width: 100px; word-break: break-all"
          >{{userDesc}}</div>
          <div
            style="width: 35px; height: 35px;border-radius: 50%; background-color: #F0F2F4;display: flex;justify-content:center; align-items: center;"
          >
            <sheet-icon icon="mail" size="sm"></sheet-icon>
          </div>
        </div>
      </el-col>
      <el-col :span="15" style="background-color: black;">
        <el-row style="padding: 20px;">
          <el-col :span="13" style="height: 20px "></el-col>
          <el-col
            :span="3"
            style="color: #8A919F; font-size: 10px; height: 20px; border-right: 1px solid #222D3C; "
          >{{sheetCount}} sheet(s) music</el-col>
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
        <!-- <div>

        </div>-->
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      userId: "@user12345",
      userName: "User1",
      userGroup: "A Cappella",
      userPosition: "Taipei",
      userDesc: "Hi, i’m a sdjicnidscsdcindscndcnjdcnjcdcmkdcdkcndcdccd",
      sheetCount: 0
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.el-col {
  height: 100vh;
}
</style>