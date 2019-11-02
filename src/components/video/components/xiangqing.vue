<template>
  <div class="shipin">
    <meishitou></meishitou>
    <h2 class="new-title">
      {{brr[0].tit}}
      <div class="article">
        07-18 17:26&nbsp;
        美食视频
      </div>
    </h2>
    <article>
      <div class="hc_quan">
        <p>{{brr[0].p1}}&nbsp;</p>
        <p>{{brr[0].p2}}</p>
        <p>{{brr[0].p3}}</p>
        <div class="youku-v" style="text-indent:0;">
          <iframe height="100%" width="95%" :src="brr[0].vadd" frameborder="0"></iframe>
        </div>
      </div>
    </article>
    <div class="cac">
      <div class="cac-item" style="margin: auto;float: none">
        <div class="cac-pic">
          <img src="../images/01.png" alt />
        </div>
        <p class="cac-name">赞</p>
        <p class="cac-value">1615</p>
      </div>
    </div>
    <div class="hot">
      <h3>
        <img src="https://m.haochu.com/images/zhuantiyingyang/tig_bg.jpg" />热点推荐
      </h3>
      <ul class="txt-list">
        <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
        <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">奶奶做的这个自制飞饼皮香蕉卷，美味停不了口！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="https://cdn.haochu.com//uploads/newimg/20180907/15362917859676.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="https://cdn.haochu.com//uploads/newimg/20180907/15362918087677.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="https://cdn.haochu.com//uploads/newimg/20180907/15362918389825.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
         <div class="index-wifi-list">
          <a href>
            <div class="index-wifi-item">
              <div class="title-item">
                <div class="title">这款饺子皮版鸡蛋灌饼的做法，香味诱人，下班轻松做！</div>
              </div>
              <div class="img_list">
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362938756273.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/15362941338072.png?p=small?p=small"
                  />
                </div>
                <div class="img_item">
                  <img
                    src="http://cdn.haochu.com//uploads/newimg/20180907/1536294180343.png?p=small?p=small"
                  />
                </div>
              </div>
              <div class="tags">
                <span class="tag">鸡蛋灌饼</span>
              </div>
            </div>
          </a>
        </div>
        
      </ul>
    </div>
  </div>
</template>
<script>
import meishitou from "./meishitou";
// import store from "../js/store";
export default {
  data() {
    return {
      brr: [
        {
          tit: "可乐鸡翅",
          p1:
            "可乐鸡翅之所以风靡，绝对是因为其不败的口感，外加实在是没有任何难度的做法，而导致常年被人关注，长盛不衰的地位，当然了这算是那些零厨艺人最容易得瑟的一道成品，若是聚会，多做些，摆盘摆的漂亮些，那是相当的养眼诱人啊！",
          p2: "今儿这道可乐鸡翅，就是零厨艺，百分百成功的典范！",
          p3:
            "以鸡翅和可乐为主料制作而成，味道鲜美、色泽艳丽、鸡翅嫩滑、咸甜适中，并且保留了可乐的香气，深受大众喜欢，尤其是孩子们的忠爱。",
          vadd: "https://player.youku.com/embed/XMjQ4MzQ0OTI0MA=="
        },
        {
          tit: "红烧鱼",
          p1:
            "红烧鱼可以说是最家常的一道菜，鲤鱼价格便宜，营养丰富，孩子们应该适当多吃一些。",
          p2:
            "一道常见的红烧口味家常菜，鱼类本身就富有大量的蛋白质，属于优质蛋白，容易被人体吸收，还富含丰富的各种微量元素以及维生素D，是健康饮食的不二之选。",
          p3:
            "鱼肉文化，年夜饭总少不了“鱼”的身影 取年年有余 如鱼得水 富贵有余之意 民间家宴一条完整的鱼 象征着一个“全”字 鱼头朝向也有说法，主妇会放在最尊敬的客人面前，客人不得不自喝三杯，大家才可以动筷子开食，这是勤劳淳朴的劳动人民，延续至今的敬重礼节。<",
          vadd: "https://player.youku.com/embed/XMjYzNDA1OTIwNA=="
        },
        {
          tit: "鱼香肉丝",
          p1:
            "家常菜中，鱼香型的菜系似乎格外的受欢迎，无论男女老少都赞不绝口。鱼香型菜系中最著名的应该就是鱼香肉丝了。肉丝的软滑，笋丝木耳丝的清脆，搭配在一起品尝也是一种享受。",
          p2:
            "相传鱼香肉丝源自于川菜，鱼香型菜系由此发扬。并且所用木耳富含DHA和卵磷脂、卵黄素，对神经系统和身体发育有利，同时也有损伤修复的作用；这么一道富含多种人体所需元素的菜，是不是改学习学习了呢！",
          p3:
            "第一次听到鱼香肉的名字的时候，我想着应该是有鱼肉的，但是吃到嘴里的时候就很惊讶~虽说是鱼香味,但并不以鱼烹调,而是以各种调味品烹调而成。",
          vadd: "https://player.youku.com/embed/XMjQ5ODg5MjIxNg=="
        },
        {
          tit: "西红柿炖牛腩",
          p1:
            "冬季了，暖暖的炖菜成了桌上的主流，西红柿炖牛腩是一道非常找人喜欢的菜，开胃、下饭、营养，西红柿和牛肉在炖煮的过程中慢慢融合，味道非常鲜美。",
          p2:
            "牛腩中含有不少胶原蛋白，但是这种胶原蛋白在维生素C的帮助才会转化为人体的胶原蛋白，而番茄中恰恰富含维生素C；其次，牛肉中含有丰富的血红素铁，其在番茄中维生素C的帮助下会更有利于人体吸收。",
          p3:
            "最后，番茄中的番茄红素能对其中的维生素C起到保护作用，更有利于促进牛肉中铁的吸收和胶原蛋白的转化，所以这么美味而且健康的一道菜您还不赶紧学来试试嘛！",
          vadd: "https://player.youku.com/embed/XMjY1MTE4MzA4MA=="
        },
        {
          tit: "糖醋里脊",
          p1:
            "糖醋里脊 色泽红亮，酸甜味美，外酥里嫩的口感深受广大女性朋友的喜欢。也是许多外国友人到中餐馆必点的一道菜 ，韩剧中就常常会出现这样的情节。",
          p2: "今儿这道可乐鸡翅，就是零厨艺，百分百成功的典范！",
          p3:
            "以鸡翅和可乐为主料制作而成，味道鲜美、色泽艳丽、鸡翅嫩滑、咸甜适中，并且保留了可乐的香气，深受大众喜欢，尤其是孩子们的忠爱。",
          vadd: "https://player.youku.com/embed/XMjQ4MzQ0OTI0MA=="
        },
        {
          tit: "羊肉这样做, 肉香汁浓味道好",
          p1:
            "红烧羊肉，我也是想了挺久才决定做，因为很多人不吃羊肉嘛，可能是比较抵触“羊肉”，但是羊肉有很高的营养价值。羊肉分两种，山羊肉和绵羊肉。 山羊肉的营养并不低于绵羊肉，但相比之下，绵羊肉比山羊肉脂肪含量更高，这就是为什么绵羊肉吃起来更加细腻可口的原因。山羊肉的一个重要特点就是胆固醇含量比绵羊肉低，因此，可以起到防止血管硬化以及心脏病的作用，特别适合高血脂患者和老人食用。",
          vadd: "https://player.youku.com/embed/XMzQ0MzM5NDU2OA=="
        },
        {
          tit: "年味飘香, 煎转黄花鱼",
          p1:
            "煎转黄花鱼是一道山东的特色传统名菜。黄花鱼是一种大家经常吃的鱼类，所以我们的大厨今天用黄花鱼为主料做了这道特色名鲁菜。被煎制的黄花鱼，外焦里嫩，鱼肉在烹饪中裹上了蛋液以及在锅中吸收了辅料和高汤的营养和味道。让每一口鱼肉都是焦嫩可口，味道飘香。快过年了，怎么不吃这道鱼肴呢。",
          vadd: "https://player.youku.com/embed/XMzQwMDgzNDg4MA=="
        },
        {
          tit: "鲁菜经典, 九转大肠",
          p1:
            "九转大肠原名为红烧大肠，是山东省济南市传统名菜。清朝光绪初年，由济南九华林酒楼店主首创。将猪大肠经水焯后油炸，再灌入十多种作料，用微火爆制而成。 相传，九转大肠是清朝光绪初年，济南九华楼酒店创制的菜品。开始名为红烧大肠，后经过多次改进，红烧大肠味道进一步提高。 许多名人在该店设宴时均备“红烧大肠”一菜。一些文人雅士食后，感到此菜确实与众不同，别有滋味，为取悦店家喜“九”之癖，并称赞厨师制作此菜像道家“九炼金丹”一样精工细作，便将其更名为“九转大肠”。",
          vadd: "https://player.youku.com/embed/XMzQwMDgzOTQ0OA=="
        },
        {
          tit: "爆炒乌鱼花, 不一样的年夜饭",
          p1:
            "爆炒乌鱼花是一道在北方拥有盛名的传统特色鲁菜。把细嫩的乌鱼肉，改刀成形状类似鱿鱼卷，但是更为美观。嫩白色的乌鱼肉，再配上彩椒，冬笋，木耳的点缀，让这道菜看着就食欲大增。一口吃进嘴里，味道鲜美可口。真可谓是一道不得了的极品菜谱。非常适合在家学习烹饪。",
          vadd: "https://player.youku.com/embed/XMzQwMDgyMzcyNA=="
        },
        {
          tit: "炸烹大虾, 原来要这么做!",
          p1:
            "炸烹大虾是一道家喻户晓的山东特色传统名菜。海捕对虾是在中国十分稀少的物种，把对虾的肉拨出来，炸成金黄的虾肉，在嘴中咀嚼的每一下都是酥脆可口。在配上辅料的味道的辅佐，让原本就已经非常可口的虾肉，又添上几分喷香的气息。临近过年，这样的一道菜真的是在年夜饭上必备的无上佳肴。",
          vadd: "https://player.youku.com/embed/XMzQwMDg0ODY0MA=="
        }
      ],
      goodsId: ""
    };
  },
  created() {
 
    this.getGoodsInfo();
  },
  components: {
    meishitou
  },

  extends: {
    getGoodsInfo() {
       this.id =this.$route.params && this.$route.params.id;
    }
  }
};
</script>
<style scoped>
.new-title {
  display: block;
  width: 100%;
  height: 77px;
  margin-top: 55px;
  margin-left: 10px;
  color: black;
  font-size: 22px;
  text-align: left;
}
.new-title .article {
  color: gray;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
}
.hc_quan p {
  display: block;
  font-size: 16px;
  text-indent: 2em;
  line-height: 1.5;
  margin: 20px 0 10px 10px;
}

.youku-v {
  margin-top: 60px;
  margin-left: 5%;
}
.cac {
  width: 100%;
  height: 160px;
  /* background: yellow; */
  margin-top: 30px;
  margin-bottom: 0px;
}
.cac-pic img {
  width: 20%;
  height: 20%;
  margin: 0 auto;
}
.cac-item p {
  font-size: 12px;
  text-align: center;
}
/* 热点推荐 */
.hot {
  margin-bottom: 60px;
}
.hot h3 {
  display: block;
  font-size: 1.2rem;
  height: 34px;
  line-height: 34px;
  color: black;
  font-weight: 400;
  border-top: 1px solid #e7e7e7;
  background-color: #f7f4f4;
  padding-left: 3vw;
  margin-bottom: 3vw;
}
.hot h3 img {
  width: 3px;
  height: 16px;
  float: left;
  margin: 10px;
  vertical-align: middle;
}
/* ------------------------------- */
.index-wifi-item {
  padding-left: 20px;
  padding-bottom: 5px;
  overflow: hidden;
  margin-bottom: 5vw;
  border-bottom: #eeeeee 1px solid;
  position: relative;
}
.index-wifi-list {
  padding: 0 3vw;
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: black;
  line-height: 23px;
}
.title-item {
  padding-bottom: 5px;
}
.index-wifi-item .tags {
  display: block;
  /* margin-bottom: 10px; */
  padding: 10px 0;
}
/* =--=------------------- */

/* ----------------- */
.tags .tag {
  display: inline;
  text-align: center;
  border: #eee 1px solid;
  padding: 5px;
  font-size: 12px;
  line-height: 1.5;
  color: #cccc;
}
.img_list {
  margin-bottom: 3px;
  overflow: hidden;
}
.img_list .img_item {
  width: 31%;
  float: left;
  padding-right: 5px;
}
.img_list .img_item:nth-child(2) {
  text-align: center;
}
.img_list .img_item:nth-child(3) {
  text-align: right;
}
</style>