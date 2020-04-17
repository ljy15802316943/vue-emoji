<template>
  <section>
		<div class="textareaBox">
				<textarea name="content" id="content" placeholder="请输入评论内容" @input="sendMsg" v-model="content"></textarea>
		</div>
		<div class="submit">
			<button @click="handleSubmit">提交</button>
		</div>
		<div v-for="(item, index) in listContent" :key="index" v-html="item"></div>
		<div class="emojiBox">
			<!-- 轮播图 -->
			<swiper :options="swiperOption" v-if="true" ref="mySwiper" class="mySwiper">
					<swiper-slide class="swiper-slide">
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index < 10" class="li-font-0">
											<img :src="'static/tt/' + item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 9 && index < 20">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 19 && index < 30">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 29 && index < 39">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
									<li @click="delEmoji">
											<img src="../../static/img/delEmoji.png" class="delEmojiBtn" alt="删除">
									</li>
							</ul>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 38 && index < 49" class="li-font-0">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 48 && index < 59">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 58 && index < 69">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 68 && index < 78">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
									<li @click="delEmoji">
											<img src="../../static/img/delEmoji.png" class="delEmojiBtn" alt="删除">
									</li>
							</ul>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 77 && index < 88" class="li-font-0">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 87 && index < 98">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 97 && index < 108">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
							</ul>
							<ul class="ul-flex">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 107 && index < 117">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
									<li @click="delEmoji">
											<img src="../../static/img/delEmoji.png" class="delEmojiBtn" alt="删除">
									</li>
							</ul>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
							<ul class="ul-flex last-child">
									<li v-for="(item,index) in emoji.emoticons" :key="index" @click="select(index)" v-if="index > 116" class="mr-20 inline-block">
											<img :src="'static/tt/'+item.png" :title="item.chs" />
									</li>
									<li @click="delEmoji" class="inline-block">
											<img src="../../static/img/delEmoji.png" class="delEmojiBtn" alt="删除">
									</li>
							</ul>
					</swiper-slide>
					<div class="swiper-pagination z-index-100" slot="pagination"></div>
			</swiper>
		</div>
  </section>
</template>

<script>
  import emoji from '../../static/emoji.json';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
  data() {
    return {
      swiperOption: {
          autoplay: false,
          loop:true, //循环切换
          grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          pagination: {
              el: '.swiper-pagination',
              // type : 'progressbar', //分页器形状
              clickable :true, //点击分页器的指示点分页器会控制Swiper切换
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
      },
			emoji: [],
			content: '',
			listContent: []
    };
  },
  created() {
    this.emoji = emoji
  },
  mounted() {

  },
  methods: {
		// 输入框内容
		sendMsg (e) {
			console.log(e, 1);
		},
    // 选择表情包
    select(index) {
			this.content = this.content + this.emoji.emoticons[index].chs;			
    },
    // 删除按钮
    delEmoji() {
			this.content =  this.content.substr(0, this.content.length - 1)
		},
		// 提交按钮
		handleSubmit () {
			this.listContent.push(this.content);
			this.listContent = this.listContent.map( (res) => {
				res = this.emojiFormat(res)
				return res
			});
			this.content = '';
		},
		// 过滤表情
		emojiFormat (str) {//表情过滤
			// var emojiList = localStorage.getItem('hqzy_emojiList') ? JSON.parse(localStorage.getItem('hqzy_emojiList')) : [];
			// 返回处理后的值
			if (!str) return;
			emoji.emoticons.forEach(r => {
				str = str.replace(new RegExp('\\'+r.chs, "gm"), "<img src='" + "static/tt/" + r.png + "' class='emojiImg' />");
			})
			return str;
		}
  },
}
</script>

<style lang='less' scoped>
// 内容输入框
.textareaBox {
	padding: 1rem;
	box-sizing: border-box;
	textarea {
		resize: none;
		width: 100%;
		height: 12rem;
		// border: none;
		font-size: 0.373333rem;
	}
}
// 提交按钮
.submit {
	width: 100%;
	padding: 0rem 0.5rem;
	box-sizing: border-box;
	text-align: right;
}

.emojiBox {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  .mySwiper {
		height: 10rem;
    .swiper-slide {
      .ul-flex {
        display: flex;
        justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 1rem;
				overflow: hidden;
				padding: 15px 11px;
    		box-sizing: border-box;
        .li-font-0 {
          font-size: 0;
				}
				.li {
					img {
						width: 100px;
						object-fit: contain;
					}
				}
				.delEmojiBtn {
					width: 1.6rem;
					object-fit: contain;
				}
			}
			.last-child {
				justify-content: start !important;
				.li {
					img {
						margin: 0 5px;
					}
				}
			}
    }
  }
}

</style>