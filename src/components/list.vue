<template>
  <a-list :grid="{ gutter: 16, column: 4}" :dataSource="data">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-row>
        <a-col :span="18">
          <a-avatar icon="user" size="large" class="list_header" :src="item.header" />
          <div class="list_cont1">
            <span>{{item.name}}</span>
            <p>{{item.time}}</p>
          </div>
          <p></p>
        </a-col>
        <a-col :span="6" class="textRight">
          <a-button size="small">联系Ta</a-button>
        </a-col>
      </a-row>
      <a-layout-content class="list_cont2">
        <p class="list_content">{{item.content}}</p>
        <a-card style="width:100%;">
          <img alt="example" :src="item.imgUrl" slot="cover" />
        </a-card>
        <p class="line-overflow">
          <i class="iconfont icon-dingwei"></i>
          <span>{{item.address}}</span>
        </p>
      </a-layout-content>
      <a-layout-content class="list_cont3">
        <a-row>
          <a-col :span="8">
            <i class="iconfont icon-fenxiang"></i>
            <span>888</span>
          </a-col>
          <a-col :span="8">
            <i class="iconfont icon-xiaoxi"></i>
            <span>888</span>
          </a-col>
          <a-col :span="8">
            <i class="iconfont icon-dianzan"></i>
            <span>888</span>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-list-item>
  </a-list>
</template>


<script>
  const data = [{
      header: 'http://www.diudiuo.com/images/head1.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/lose1.jpeg',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head2.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/lose2.jpeg',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head3.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/lose3.jpeg',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head4.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/chong1.png',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head5.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/chong2.png',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head6.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/chong3.jpeg',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head7.jpg',
      name: '老王',
      time: '2019-01-01',
      content: '白色谷歌（摩托罗拉）nexus6手机，丢失地点在江东颐高数码广场2号门朝晖路往南那条路上，希望捡到的、见到别人捡到的或者朋友捡到的好心人联系我！！！',
      imgUrl: 'http://www.diudiuo.com/images/chong4.jpeg',
      address: '浙江 宁波市 海曙区 蓝天路108号中信白云',
    },
    {
      header: 'http://www.diudiuo.com/images/head8.jpg',
      name: '老王',
      time: '2019-01-01',
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
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_list';
</style>
