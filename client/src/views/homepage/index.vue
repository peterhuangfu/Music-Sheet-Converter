<template>
  <div>
    <el-row>
        <div class="homepage_blockone_bgcolor">
        <div class="title1">
          Sound Separation And
        </div>
        <div class="title2">
          Sheet Transformation
        </div>
        </div>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="homepage_subtitle">something here</div>
        <div class="homepage_subtitle">something here</div>
        <button type="primary" class="homepage_button_1">Get Started</button>
      </el-col>
      <el-col :span="12">
        <div class="homepage_blocktwo_bgcolor"></div>
        <div style="z-index:0"><img src="../../picture/keyboard.png" class="keyboard"></div>
      </el-col>
    </el-row>
    <hr/>
    <el-row>
      <div style="font-size:50px; text-align:center; margin: 20px">Introdunction</div>
      <div style="height:500px; backgroundColor:gray;"></div>
    </el-row>
    <hr style="margin:25px"/>
    <el-row>
      <div style="height:680px; backgroundColor:black;">
        <div style="font-size:50px; text-align:center; color:white; padding-top:20px">Member</div>
        <el-row style="margin-top:20px">
          <el-col :span="8">
            <div style="width:200px; height:200px; backgroundColor:white; margin-left:27%"></div>
            <div style="font-size:30px; color:white;margin-left:40%;margin-top:20px">蔡涵如</div>
          </el-col>
          <el-col :span="8">
            <div style="width:200px; height:200px; backgroundColor:white; margin-left:27%"></div>
            <div style="font-size:30px; color:white;margin-left:42%;margin-top:20px">鄭  揚</div>
          </el-col>
          <el-col :span="8">
            <div style="width:200px; height:200px; backgroundColor:white; margin-left:27%"></div>
            <div style="font-size:30px; color:white;margin-left:40%;margin-top:20px">林建鋐</div>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px">
          <el-col :span="8">
            <div style="width:200px; height:200px; backgroundColor:white; margin-left:27%"></div>
            <div style="font-size:30px; color:white;margin-left:36%;margin-top:20px">皇甫立翔</div>
          </el-col>
          <el-col :span="8">
            <div style="width:200px; height:200px; backgroundColor:white; margin-left:27%"></div>
            <div style="font-size:30px; color:white;margin-left:40%;margin-top:20px">顏价廷</div>
          </el-col>
          <el-col :span="8">
            <div style="width:200px; height:200px; backgroundColor:white; margin-left:27%"></div>
            <div style="font-size:30px; color:white;margin-left:40%;margin-top:20px">劉韋成</div>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <hr style="margin:25px"/>
    <el-row>
      <div style="font-size:50px; text-align:center;">Professor</div>
      <el-col :span="2">
        <div style="height:400px"></div>
      </el-col>
      <el-col :span="6">
        <div style="height:400px;backgroundColor:gray;"></div>
      </el-col>
      <el-col :span="14">
        <div style="font-size:50px; text-align:center; margin:20px">Hsin-Ming Lu</div>
        <el-col :span="4">
          <div style="height:290px"></div>
        </el-col>
        <el-col :span="16">
          <div style="height:270px;backgroundColor:gray;margin-top:20px"></div>
        </el-col>
        <el-col :span="4">
          <div style="height:290px"></div>
        </el-col>
      </el-col>
      <el-col :span="2">
        <div style="height:400px"></div>
      </el-col>
    </el-row>
    <hr style="margin:25px"/>
    <el-row>
      <div style="height:450px; backgroundColor:black;">
        <div style="font-size:50px; text-align:center; color:white; padding-top:20px">Source</div>
        <el-col :span="2">
          <div style="height:270px;backgroundColor:black;margin-top:20px"></div>
        </el-col>
        <el-col :span="20">
          <div style="height:270px;backgroundColor:gray;margin-top:20px"></div>
        </el-col>
        <el-col :span="2">
          <div style="height:270px;backgroundColor:black;margin-top:20px"></div>
        </el-col>
      </div>
    </el-row>
    <!-- <el-row>
      <hr/>
      endj
    </el-row>
    <el-row>
      <hr/>
      adna
    </el-row>
    <el-row>
      <hr/>
      dhkja
    </el-row>
    <el-row>
      <hr/>
      esdnk
    </el-row> -->
    
    
    
  </div>
</template>
<script>
export default {
  name: "Homepage"
};
</script>
<style lang="stylus" scoped>
.homepage_blockone_bgcolor {
  background-color: rgb(0, 0, 0);
  height:240px

}
.homepage_blocktwo_bgcolor {
  background-color: rgb(0, 0, 0);
  height:110px
  margin-bottom : -40px
}
.title1 {
  color : white
  font-size : 50px
  padding-top : 3%
  padding-left : 3%
}
.title2 {
  color : white
  font-size : 50px
  padding-left : 3%
}
.homepage_button_1 {
  background-color: black
  color: white 
  font-size : 40px
  width:250px
  height:75px
  margin-top : 30px
  margin-left : 28%
  margin-bottom : 60px
}
.homepage_subtitle {
  font-size : 35px
  margin-top : 15px
  width: 350px
  margin-left : 28%
}
.keyboard {
  width : 100%
  height: 130px
  margin-bottom : -150px
}
</style>