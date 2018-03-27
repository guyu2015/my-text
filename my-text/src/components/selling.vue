<template>
  <div id="selling">
    <div class="bannerWrapper">
     <ul class="banner">
       <li class="bannerItem" v-for="(item ,id) in images"  v-show="index === mark" :key="id"><img :src="item.url"/></li>
     </ul>

  </div>
  </div>
</template>

<script>
  export default {
  name: 'Selling',
  data () {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      images: [
        {url:"https://j-image.missfresh.cn/img_20180326113522321.jpg?iopcmd=thumbnail&type=4&width=640",id:"0"},
        {url:"https://j-image.missfresh.cn/img_20180326003602022.jpg?iopcmd=thumbnail&type=4&width=640",id:"1"},
        {url: "https://j-image.missfresh.cn/img_20180326113557584.jpg?iopcmd=thumbnail&type=4&width=640",id:"2"},
        {url:"https://j-image.missfresh.cn/img_20180326115942659.jpg?iopcmd=thumbnail&type=4&width=640",id:"3"},
        {url:"https://j-image.missfresh.cn/img_20180322011614289.jpg?iopcmd=thumbnail&type=4&width=640",id:"4"}
      ],

    }
  },
  methods:{
    autoPlay () {
      this.mark++;
      console.log(this.mark);
      if (this.mark === 4) { //当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 1500)
    },
    change (i) {
      this.mark = i
    }
  },
  created () {
      this.play()
  }

}
</script>

<style scoped>
.bannerWrapper{
  overflow: hidden;
  width: 100%;
  height: 167px;
  position: relative;
}
  .banner{
    position: absolute;
    width: 500%;
    height: 167px;
    background: pink;
  }

  .bannerItem{
    list-style: none;
    float: left;
    width: 20%;
    height: 167px;
  }
  .bannerItem img{
    width: 100%;
    height: 100%;
  }
</style>
