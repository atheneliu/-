<template>
  <div class="question-bank">
    <p-c-header :userInfo="userInfo" />
    <div class="center">
      <div class="con-dody">
        <div class="table-header">
          <yd-search v-model="value1" :on-submit="submitHandler" placeholder="请输入查询的试卷名称"></yd-search>
          <el-button type="primary" round>搜索</el-button>
        </div>
        <div class="white-bg">
          <div class="table">
            <el-table
            :data="tableData"
            stripe
            cell-class-name="cell-class"
            row-class-name="row-class"
            :highlight-current-row="false"
            header-cell-class-name="cell-header-class"
            style="width: 100%">
              <el-table-column
                prop="number"
                label="编号"
                width="55">
              </el-table-column>
              <el-table-column
                prop="paperName"
                label="试卷名称"
                width="271">
              </el-table-column>
              <el-table-column
                prop="ctime"
                label="创建时间"
                 width="191">
              </el-table-column>
              <el-table-column
                prop="questionCount"
                label="题量"
                width="62">
              </el-table-column>
              <el-table-column
                prop="score"
                label="试卷总分"
                width="85">
              </el-table-column>
              <el-table-column
                prop="passScore"
                label="通过分数"
                width="85">
              </el-table-column>
              <el-table-column
                label="操作"
                width="150">
                 <template slot-scope="scope">
                   <button class="view"
                   @click="handleView(scope.$index, scope.row)">
                    <img src="../components/img/icon_see.png" alt="view" class="view-icon">
                    <span class="font">预览</span>
                   </button>
                   <button class="view bg-green"
                   @click="handleAdd(scope.$index, scope.row)">
                    <img src="../components/img/icon_add.png" alt="add" class="view-icon">
                    <span class="font">添加</span>
                   </button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="page">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              background
              layout="pager, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <p-c-footer />
  </div>
</template>

<script>
  import PCHeader from '@/zhubanwang/components/PCHeader'
  import PCFooter from '@/zhubanwang/components/PCFooter'

  export default{
    name: 'QuestionBank',
    data() {
      return {
        tableList: [],
        currentPage3: 1,
        userInfo: {
          userName: '杨家路',
          userGrade: '2014',
          userClass: '5',
          userPic: 'https://www.xingshulin.com/img/vip_team.png',
        },
        tableData: [{
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }, {
          number: 1,
          paperName: '8下《单元过关卷》期中过关卷（二）',
          ctime: '2018-08-09 11:41:07',
          questionCount: 0,
          score: 100,
          passScore: 60,
        }],
      }
    },
    components: {
      PCHeader,
      PCFooter,
    },
    methods: {
      handleSizeChange() {
        console.log('handleSizeChange-->')
      },
      handleCurrentChange() {
        console.log('handleCurrentChange-->')
      },
      handleView(index, row) {
        console.log('handleView-->', index, row)
      },
      handleAdd(index, row) {
        console.log('handleAdd-->', index, row)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .white-bg {
    background: #fff;
  }

  .con-dody {
    width: rem(800);
    margin-bottom: rem(33);

    .table-header {
      width: 100%;
      background: pink;
      margin: rem(17) 0rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .page {
      padding: rem(30) 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .view {
    width: rem(50);
    height: rem(20);
    border-radius: rem(3);
    font-size: 12px;
    color: #fff;
    background: rgb(253,166,28);

    .view-icon {
      width: rem(10);
      height: rem(7);
      display: inline-block;
      margin-right: rem(1);
    }
  }

  .bg-green {
    background: rgb(0,199,197) !important;
  }

</style>

<style lang="scss">
  .cell-class {
    // background: rgb(237,246,252) !important;
    text-align: center !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .row-class:nth-child(odd) {
    background: rgb(237,246,252) !important;
  }

  .cell-header-class {
    background: rgb(223,234,242) !important;
    text-align: center !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    color: rgb(51,51,51) !important;
    font-size: 16px!important;
    font-weight: bold !important;
  }
</style>
