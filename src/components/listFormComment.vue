<template>
  <div id="listFormComment_box">
    <a-row>
      <a-col :span="24">
        <p class="listFormComment_p1">网友留言：</p>
        <div>
          <!-- :header="`${comments.length} ${comments.length > 1 ? '条回复' : 'reply'}`" -->
          <a-comment>

            <a-avatar slot="avatar" src="http://www.diudiuo.com/images/head4.jpg" alt="丢丢妹" />
            <div slot="content">
              <a-form-item>
                <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
              </a-form-item>
              <a-form-item>
                <a-button htmlType="submit" :loading="submitting" @click="handleSubmit" type="primary">
                  发布留言
                </a-button>
              </a-form-item>
            </div>
          </a-comment>
          <a-list v-if="comments.length" :dataSource="comments" itemLayout="horizontal">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-comment :author="item.author" :avatar="item.avatar" :content="item.content" :datetime="item.datetime">
                <span>
                  <a-tooltip title="Like">
                    <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{likes}}
                  </span>
                </span>
                <span>
                  <a-tooltip title="Dislike">
                    <a-icon type="dislike" :theme="action === 'disliked' ? 'filled' : 'outlined'" @click="dislike" />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{dislikes}}
                  </span>
                </span>
              </a-comment>
            </a-list-item>
          </a-list>

        </div>
      </a-col>
    </a-row>
  </div>
</template>


<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        comments: [],
        submitting: false,
        value: '',
        moment,
        
        likes: 0,
        dislikes: 0,
        action: null,
      }
    },
    methods: {
      handleSubmit() {
        if (!this.value) {
          return;
        }

        this.submitting = true

        setTimeout(() => {
          this.submitting = false
          this.comments = [{
              author: '丢丢妹',
              avatar: 'http://www.diudiuo.com/images/head4.jpg',
              content: this.value,
              datetime: moment().fromNow(),
            },
            ...this.comments,
          ]
          this.value = ''
        }, 1000)
      },
      handleChange(e) {
        this.value = e.target.value
      },
      like() {
        this.likes = 1
        this.dislikes = 0
        this.action = 'liked'
      },
      dislike() {
        this.likes = 0
        this.dislikes = 1
        this.action = 'disliked'
      }
    },
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_listFormComment';

</style>
