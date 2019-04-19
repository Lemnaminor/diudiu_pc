<template>
  <div id="list_box">
    <!-- <a-list :grid="{ gutter: 16, column: 4}" :dataSource="data"> -->
    <a-list :grid="{ gutter: 16, column: 4}" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-row>
          <a-col :span="12">
            <a-avatar icon="user" size="large" class="list_header" :src="item.header" />
            <div class="list_cont1">
              <span>{{item.name}}</span>
              <p>{{item.time}}</p>
            </div>
            <p></p>
          </a-col>
          <a-col :span="12" class="textRight">
            <!-- <a-button size="small">联系Ta</a-button> -->
            <a-layout-content class="tag_cont1">
              <a-tag color="#f00" v-if="item.major">加急</a-tag>
              <a-tag color="#f50" v-if="item.money">赏金:{{item.money}}</a-tag>
            </a-layout-content>
          </a-col>
        </a-row>
        <a-layout-content class="list_cont4">
          <a-tag :color="tag.color" v-for="tag in item.tags" :key="tag.id">{{tag.name}}</a-tag>
        </a-layout-content>
        <a-layout-content class="list_cont2">
          <router-link to="path">
            <p class="list_content">{{item.content}}</p>
            <a-card style="width:100%;">
              <img alt="example" :src="item.imgUrl" slot="cover" />
            </a-card>
            <p class="line-overflow">
              <i class="iconfont icon-dingwei"></i>
              <span>{{item.address}}</span>
            </p>
          </router-link>
        </a-layout-content>
        <a-layout-content class="list_cont3">
          <a-row>
            <a-col :span="8">
              <!-- <i class="iconfont icon-fenxiang"></i>
              <span>888</span> -->
              <!-- <div class="bdsharebuttonbox">
                  <a href="#" class="bds_more" data-cmd="more"></a>
                  <a class="bds_count" data-cmd="count"></a>
              </div> -->
              
            </a-col>
            <a-col :span="8">
              <router-link to="path">
                <i class="iconfont icon-xiaoxi"></i>
                <span>888</span>
              </router-link>
            </a-col>
            <a-col :span="8">
              <i class="iconfont icon-dianzan"></i>
              <span>888</span>
            </a-col>
          </a-row>
        </a-layout-content>
      </a-list-item>
    </a-list>
  </div>
</template>


<script>
  const data = [{
    header: 'http://www.diudiuo.com/images/head1.jpg',
    name: '老王',
    time: '2019-01-01',
    major: true,
    money: 5000,
    tags: [
      { type: 1, name: '寻物', color: 'blue' },
      { type: 1, name: '数码', color: 'blue' },
      { type: 1, name: '赏金', color: 'blue' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/lose1.jpeg',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head2.jpg',
    name: '老王',
    time: '2019-01-01',
    major: false,
    money: 200,
    tags: [
      { type: 2, name: '寻宠', color: 'orange' },
      { type: 2, name: '狗', color: 'orange' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/lose2.jpeg',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head3.jpg',
    name: '老王',
    time: '2019-01-01',
    major: false,
    money: false,
    tags: [
      { type: 3, name: '寻人', color: 'purple' },
      { type: 3, name: '青少年', color: 'purple' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/lose3.jpeg',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head4.jpg',
    name: '老王',
    time: '2019-01-01',
    major: true,
    money: false,
    tags: [
      { type: 3, name: '寻人', color: 'purple' },
      { type: 3, name: '老人', color: 'purple' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/chong1.png',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head5.jpg',
    name: '老王',
    time: '2019-01-01',
    major: false,
    money: false,
    tags: [
      { type: 1, name: '寻物', color: 'blue' },
      { type: 1, name: '金银首饰', color: 'blue' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/chong2.png',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head6.jpg',
    name: '老王',
    time: '2019-01-01',
    major: false,
    money: false,
    tags: [
      { type: 1, name: '寻物', color: 'blue' },
      { type: 1, name: '卡包', color: 'blue' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/chong3.jpeg',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head7.jpg',
    name: '老王',
    time: '2019-01-01',
    major: true,
    money: false,
    tags: [
      { type: 1, name: '寻物', color: 'blue' },
      { type: 1, name: '数码', color: 'blue' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/chong4.jpeg',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  {
    header: 'http://www.diudiuo.com/images/head8.jpg',
    name: '老王',
    time: '2019-01-01',
    major: false,
    money: false,
    tags: [
      { type: 2, name: '寻宠', color: 'orange' },
      { type: 2, name: '猫', color: 'orange' },
    ],
    content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
    imgUrl: 'http://www.diudiuo.com/images/chong5.png',
    address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
  },
  ]

  export default {
    data() {
      return {
        data,

      }
    },
    methods: {
      
      setShare() {
        //分享相关代码
        window._bd_share_config = {
          "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "24"
          },
          "share": {},
        };
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
        document.body.appendChild(s);

      },
    },
    created() {
            const that = this;
            setTimeout(() => {
                that.setShare()
            }, 0)
        },
        
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_list';
</style>