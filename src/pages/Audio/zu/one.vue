<template>
  <div class='mover'>
   <h3 class='h'>热播影音</h3>
   <li><a href="https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0">更多></a></li>
    <div class='f'>
      <div class='c'>
        <div class='cc'>
           <img src ='../../../assets/images/5.jpg' />
           <p>猜火车2</p>
           <img class="x" src ='../../../assets/images/xin.png'/>
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/6.jpg' />
           <p>贝尔科试验</p>
           <img class="x" src ='../../../assets/images/xin2.png'/>
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/7.jpg' />
           <p>急速特攻</p>
           <img class="x" src ='../../../assets/images/xin3.png'/>
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/8.jpg' />
           <p>金刚狼3</p>
           <img class="x" src ='../../../assets/images/xin2.png'/>

        </div>
         <div class='cc'>
           <img src ='../../../assets/images/9.jpg' />
           <p>美女与野兽</p>
           <p class='pl'>暂无评论</p>
        </div>

      </div>
    </div>

    <div class='s'>
    <img src ='../../../assets/images/banner/01.jpg' />
    <h3>对话戏剧大师：列夫.朵金</h3>
    </div>

    <div class='mover'>
   <h3 class='h3'>院线即将上映</h3>
   <li class='l'><a href="https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0">更多></a></li>
    <div class='f'>
      <div class='c'>
        <div class='cc'>
           <img src ='../../../assets/images/8.jpg' />
           <p>金刚狼3</p>
           <img class="x" src ='../../../assets/images/xin.png'/>
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/9.jpg' />
           <p>美女与野兽</p>
           <p class='pl'>暂无评论</p>
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/6.jpg' />
           <p>贝尔科试验</p>
           <img class="x" src ='../../../assets/images/xin3.png'/>
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/7.jpg' />
           <p>急速特攻</p>
           <img class="x" src ='../../../assets/images/xin2.png'/>

        </div>
         <div class='cc'>
           <img src ='../../../assets/images/5.jpg' />
           <p>猜火车2</p>
           <img class="x" src ='../../../assets/images/xin.png'/>
        </div>

      </div>
    </div>

    <div class='s'>
    <img src ='../../../assets/images/banner/02.jpg' />
    <h3>在诗词里，与灵魂面对面</h3><br>

    </div>

  </div>
   <div class='mover'>
   <h3 class='h3'>精选榜单</h3>
    <div class='f'>
      <div class='c'>
        <div class='cc'>
           <img src ='../../../assets/images/j1.jpg' />

        </div>
        <div class='cc'>
           <img src ='../../../assets/images/j2.jpg' />

        </div>
        <div class='cc'>
           <img src ='../../../assets/images/j3.jpg' />
           
        </div>
        <div class='cc'>
           <img src ='../../../assets/images/j4.jpg' />
        

        </div>
    
      </div>
    </div>

    <div class='hy'>

      <div class='rd'>
        <p>热点</p>
      </div>

    <div class='yp'>
      <div class='yp_1'>
        <div class='yp_1_nr'>
          <a href="#">
          <h3>《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗</h3>
          </br>
          <p>此影评送给那些不离不弃的老粉和船长杰克~斯派罗。</p>
          <p>——</p>
          <p>作者:女神的秋裤</p>
          </a>
        </div>

        <div class='yp_1_img'>
          <a href="#"><img src="../../../assets/images/jieke.png" ></a>
        </div>
      </div>
      <div class='yp_2'>
        <div class='yp_2_nr'>
          <a href="#">
          <h3>豆瓣热门影视|二十年后，这帮苏格兰老炮儿还是这么嗨</h3>
          </br>
          <p>三个榜单的冠军与上周一样，冠军们大概孤独求败...</p>
          <p>——</p>
          <p>作者:豆瓣</p>
          </a>
        </div>

        <div class='yp_2_img'>
          <a href="#"><img src="../../../assets/images/sugelan.png" ></a>
        </div>
      </div>
    </div>
    </div>
  

  </div>

  </div>
</template>

<style>
  *{margin:0;padding:0;}
  li{list-style-type:none;}
  .mover {position:relative; top:45px; background:#FFF }
  .mover .h{
    position: absolute;
    height:35px;
    top:20px;
    left:20px;
  }

  .mover .h3{position:absolute; top:-20px; left:20px;}
  .mover li a{position:absolute;  left:300px; top:20px;}
  .mover .l a{position:absolute;  left:280px; top:-20px;}
  .f{width:100%; overflow: hidden; overflow-x: scroll; background:}
  .c{width:1000px; margin-top: 20px;}
  .cc{width:150px;height:220px; padding:0px; float:left; margin:10px; display: inline-block;}
  .cc p{text-align:left; margin-left:12px; font-weight:bolder; font-size:18px;}
  .cc img{width:130px; height:160px;}
  .cc .x{width:130px; height:20px;}
  .cc .pl{text-align:left; margin-left:12px;  font-size:15px;}
  .s{margin:50px 0;backgroud:#FFF;}
  .s img{width:100%; height:150px;}
  .s h3{text-align:center;left:-10px;}
  .cc #fen{color:orange}



.yp_1{
  height:300px;
  border-bottom:2px solid #eee;
}
.yp_1 h3{font-size:18px;text-align:left; color:rgb(67,67,67)}
.yp_1 p{
  color:rgb(184,184,184);
  font-size:13px;
  text-align:left;
}
.yp_1 a{text-decoration:none;}
.yp_1_nr{
  width:60%;
  margin:18px;
}
.yp_1_nr a{width:100%;}
.yp_1_img{
  width:100px;
  height:100px;
  background:red;
  position:absolute;
  top:330px;
  right:20px;
}
.yp_1 a img{
  width:100px;
  height:100px;

}

.yp_2{
  height:300px;
  border-bottom:2px solid #eee;
}

.yp_2 h3{
  font-size:17px;
  
  color:rgb(67,67,67);
}
.yp_2 p{
  color:rgb(184,184,184);
  text-align:left;
  font-size:13px;
}
.yp_2 a{
  text-decoration:none;
}
.yp_2_nr{
  width:60%;
  margin:18px;
}
.yp_2_nr a{
  width:100%;
}
.yp_2_img{
  width:100px;
  height:100px;
  background:red;
  position:absolute;
  top:650px;
  right:20px;
}
.yp_2 a img{
  width:100px;
  height:100px;

}

</style>

<script>
import MyHeader from '../../../components/header'

export default {
  components:{
    MyHeader
  }
}
</script>
