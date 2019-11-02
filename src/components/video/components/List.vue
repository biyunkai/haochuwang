<template>
  <ul
    class="common clearfix"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="20"
  >
    <router-link tag="li" to="/xiangqing/:id" v-for="(item,index) in arr" :key="index" @click="tiao()" class="list-item">
      <a href class="a_block">
        <div class="hccli">
          <img :src=arr[index].pic alt />
        </div>
        <div class="play-icon">
          <i class="glyphicon"></i>
        </div>
        <div class="describe">
          <h5>{{arr[index].tit}}</h5>
          <div class="hccli-desc">{{arr[index].arc}}</div>
          <div class="hccli-tit">{{arr[index].zuoz}}</div>
          <div class="hccli-info">
            <span>3万</span>
            播放
            <span>1614</span>
            喜欢
          </div>
        </div>
      </a>
    </router-link>
  </ul>
</template>

<script>
import store from "../js/store"



export default {
  data(){
    return  {arr:[
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20170204/148619965898.jpg",
        tit: "可乐鸡翅",
        arc: "可乐鸡翅之所以风靡，绝对是因为其不败的口感，外加实在是没有任",
        zuoz: "原创视频"
      },
       {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20170323/14902513761013.jpg",
        tit: "红烧鱼",
        arc: "红烧鱼可以说是最家常的一道菜，鲤鱼价格便宜，营养丰富，孩子们",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://www.haochu.com/uploads/fengmian/20170204/14861999681997.jpg",
        tit: "鱼香肉丝",
        arc: "家常菜中，鱼香型的菜系似乎格外的受欢迎，无论男女老少都赞不绝",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20170204/1486200092468.jpg",
        tit: "西红柿炖牛腩",
        arc: "冬季了，暖暖的炖菜成了桌上的主流，西红柿炖牛腩是一道非常找人",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://www.haochu.com/uploads/fengmian/20170204/14861999681997.jpg",
        tit: "糖醋里脊",
        arc: "糖醋里脊 色泽红亮，酸甜味美，外酥里嫩的口感深受广大女性朋友",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20180306/15203261525484.jpg",
        tit: "羊肉这样做, 肉香汁浓味道好 ",
        arc: "红烧羊肉，我也是想了挺久才决定做，因为很多人不吃羊肉嘛，可能",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20180306/15203217901045.jpg",
        tit: "年味飘香, 煎转黄花鱼",
        arc: " 煎转黄花鱼是一道山东的特色传统名菜。黄花鱼是一种大家经常吃的  ",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20180306/15203216515982.jpg",
        tit: "鲁菜经典, 九转大肠",
        arc: " 九转大肠原名为红烧大肠，是山东省济南市传统名菜。清朝光绪初年",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20180306/15203214952377.jpg",
        tit: "爆炒乌鱼花, 不一样的年夜饭 ",
        arc: "爆炒乌鱼花是一道在北方拥有盛名的传统特色鲁菜。把细嫩的乌鱼肉",
        zuoz: "原创视频"
      },
      {
        pic:
          "https://cdn.haochu.com/uploads/fengmian/20180306/15203213091747.jpg",
        tit: "炸烹大虾, 原来要这么做!",
        arc: " 炸烹大虾是一道家喻户晓的山东特色传统名菜。海捕对虾是在中国十",
        zuoz: "原创视频"
      }
    ]
    }
  },
  extends: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 1500);
    },
    tiao(){
     this.$router.push({path:"xiangqing/"+this.index})
    }
  }
};
</script>
<style  scoped>
.common {
  margin-top: 45px;
  margin-bottom:45px ;
}
.list-item {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  position: relative;
  border-bottom: 1px solid rgb(208, 208, 208);
}
.hccli {
  width: 150px;
  height: 93px;
  float: left;
  margin: 10px;
}

.play-icon {
  display: block;
  color: #fff;
  text-align: center;
  width: 10vw;
  height: 10vw;
  line-height: 12vw;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1vw;
  position: absolute;
  top: 3rem;
  left: 4.1rem;
}
.play-icon .glyphicon {
  /* position: relative; */
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
.glyphicon::before {
  content: "\e029";
  box-sizing: border-box;
}
.describe {
  width: 184px;
  height: 93px;
  float: left;
  margin: 10px;
}
.describe h5 {
  color: black;
  font-size: 20px;
  text-align: left;
  font-weight: 400;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.describe .hccli-desc {
  width: 100%;
  margin-top: 10px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hccli-tit {
  margin-top: 10px;
  color: black;
}
.hccli-info {
  margin-top: 10px;
}
</style>