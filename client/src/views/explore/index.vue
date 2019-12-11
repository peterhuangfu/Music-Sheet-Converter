<template>
  <el-container class="wrapper">
    <el-row class="explore-action-bar" :gutter="4">
      <el-col :span="1" class="explore-select-time">All</el-col>
      <el-col :span="4" :offset="1">
        <el-select v-model="time_range_value" placeholder="Select Time Range" @change="getAllWorks">
          <el-option
            v-for="each in time_range_options"
            :key="each.value"
            :label="each.label"
            :value="each.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" :offset="5">
        <el-input placeholder="Filter by Title" v-model="title_filter"></el-input>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-input placeholder="Filter by Uploader" v-model="uploader_filter"></el-input>
      </el-col>
    </el-row>
  <!-- </el-container>
  <el-container> -->
    <el-row>
      <el-col class="explore-piano-portfolio-prefix"></el-col>
      <el-col :span="4" :offset="1" class="explore-piano-portfolio"><b>PIANO PORTFOLIO SHEET</b></el-col>
    </el-row>
    <el-row class="explore-piano-portfolio-table">
      <el-table
        :data="works"
        stripe
        style="width: 100%">
        <el-table-column prop="file_id" label="No." width="180"></el-table-column>
        <el-table-column prop="title" label="Title" width="220"></el-table-column>
        <el-table-column prop="uploader" label="Uploader" width="180"></el-table-column>
        <el-table-column prop="desription" label="Description" width="400"></el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <el-button @click.native="openPortfolio(scope.$index, scope.row)" type="primary" size="mini" circle>
              <sheet-icon icon="eye" size="sm" style="position: relative; left: 1px; top: 1px"></sheet-icon>
            </el-button>
            <el-button @click.native="downloadPortfolio(scope.$index, scope.row)" type="success" size="mini" circle>
              <sheet-icon icon="download" size="sm" style="position: relative; left: 1px; top: 1px"></sheet-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <el-col class="explore-separate-piano-prefix"></el-col>
      <el-col :span="4" :offset="1" class="explore-separate-piano"><b>SEPARATED PIANO MUSIC</b></el-col>
    </el-row>
    <el-row class="explore-separate-piano-table">
      <el-table
        :data="works"
        stripe
        style="width: 100%">
        <el-table-column prop="file_id" label="No." width="180"></el-table-column>
        <el-table-column prop="title" label="Title" width="220"></el-table-column>
        <el-table-column prop="uploader" label="Uploader" width="180"></el-table-column>
        <el-table-column prop="desription" label="Description" width="400"></el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <el-button @click.native="downloadSepPiano(scope.$index, scope.row)" type="success" size="mini" circle>
              <sheet-icon icon="download" size="sm" style="position: relative; left: 1px; top: 1px"></sheet-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <el-col class="explore-separate-human-prefix"></el-col>
      <el-col :span="4" :offset="1" class="explore-separate-human"><b>separate HUMAN SOUND</b></el-col>
    </el-row>
    <el-row class="explore-separate-human-table">
      <el-table
        :data="works"
        stripe
        style="width: 100%">
        <el-table-column prop="file_id" label="No." width="180"></el-table-column>
        <el-table-column prop="title" label="Title" width="220"></el-table-column>
        <el-table-column prop="uploader" label="Uploader" width="180"></el-table-column>
        <el-table-column prop="desription" label="Description" width="400"></el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <el-button @click.native="downloadSepHuman(scope.$index, scope.row)" type="success" size="mini" circle>
              <sheet-icon icon="download" size="sm" style="position: relative; left: 1px; top: 1px"></sheet-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-container>
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
      if (this.isAuthenticated)
        this.getAllWorks(this.time_range_value);
      else
        this.$router.push('/');
    }
  },
  data() {
    return {
      time_range_options: [
        { label: 'Last 1 Day', value: '1' },
        { label: 'Last 7 Day', value: '7' },
        { label: 'Last 30 Day', value: '30' },
        { label: 'Unlimited', value: '0' }
      ],
      time_range_value: '7',
      title_filter: '',
      uploader_filter: ''
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
    getAllWorks(range) {
      this.time_range_value = range;
      this.$store.dispatch('explore/getAllWorks', { time_range: range });
    },
    openPortfolio(index, data) {
      this.$store.dispatch('explore/openPortfolio', { _id: data._id, path: data.pdf_file_path });
    },
    downloadPortfolio(index, data) {
      this.$store.dispatch('explore/downloadPortfolio', { _id: data._id, path: data.pdf_file_path });
    },
    downloadSepPiano(index, data) {
      this.$store.dispatch('explore/downloadSepPiano', { _id: data._id, path: data.sep_piano_path });
    },
    downloadSepHuman(index, data) {
      this.$store.dispatch('explore/downloadSepHuman', { _id: data._id, path: data.sep_human_path });
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
      if (!this.isLoginCheck) {
        this.$store.dispatch('auth/CheckLoginStatus');
      } else {
        if (this.isAuthenticated)
          this.getAllWorks(this.time_range_value);
        else
          this.$router.push('/');
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.wrapper
  min-width 100vw
  width 100vw

.explore-action-bar
  display block
  will-change padding-left
  transition padding-left 0.5s ease
  margin-top 10px
  min-width 100vw
  max-width 100vw
  
.explore-select-time
  border-radius 5px
  background-color #1995DC
  color #ffffff
  text-align center
  line-height 39px
  min-height 39px

.explore-piano-portfolio-prefix, .explore-separate-piano-prefix, .explore-separate-human-prefix
  width 10px
  background-color #1995DC
  min-height 34px

.explore-piano-portfolio, .explore-separate-piano, .explore-separate-human
  line-height 34px
  font-size 20px
</style>
