<template>

	<div >
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

		<gree>
	<div class='tb'>
		<input class='hinput' type="text" placeholder="影视 图书 唱片 小组等"></input>
			<img src='../../assets/images/ic_group_tab_search.png' slot='leftImg' class='hl'/>
			<img src='../../assets/images/ic_chat_white.png' slot='rightImg' class='hr'/>
			<img src='../../assets/images/ic_scan_gray.png' slot='saomiaoImg' class='hs'/>
	</div>
	</gree>
			<!--<li><a href="#"><img src="../../assets/images/banner/01.jpg" alt=""/></a></li>-->

		<div class="swiper-container">
    		<div class="swiper-wrapper">
       	 		<div class="swiper-slide a"><a href="http://www.baidu.com"><img src="../../assets/images/banner/01.jpg" alt=""></a></div>
        		<div class="swiper-slide b"><a href="#"><img src="../../assets/images/banner/02.jpg" alt=""></a></div>
        		<div class="swiper-slide c"><a href="#"><img src="../../assets/images/banner/03.jpg" alt=""></a></div>
    		</div>
    			<!-- 如果需要分页器 -->
    			<div class="swiper-pagination"></div>
		</div>

		<div class='rd'>
			<p>热点</p>
		</div>

		<div class='rdjs'>
			<div class='rdjs_1'>
				<div class='rdjs_1_nr'>
					<a href="https://www.douban.com/search?q=%E5%8A%A0%E5%8B%92%E6%AF%94%E6%B5%B7%E7%9B%97">
					<h3>《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗</h3>
					</br>
					<p>此影评送给那些不离不弃的老粉和船长杰克~斯派罗。</p>
					<p>——</p>
					<p>作者:女神的秋裤</p>
					</a>
				</div>

				<div class='rdjs_1_img'>
					<a href="#"><img src="../../assets/images/jieke.png" ></a>
				</div>
			</div>
			<div class='rdjs_2'>
				<div class='rdjs_2_nr'>
					<a href="#">
					<h3>豆瓣热门影视|二十年后，这帮苏格兰老炮儿还是这么嗨</h3>
					</br>
					<p>三个榜单的冠军与上周一样，冠军们大概孤独求败...</p>
					<p>——</p>
					<p>作者:豆瓣</p>
					</a>
				</div>

				<div class='rdjs_2_img'>
					<a href="#"><img src="../../assets/images/sugelan.png" ></a>
				</div>
			</div>
			

		</div>

	</div>
</template> 


<!-- 注意路径 -->

<script>
	import gree from '../../components/green'
	import '../../assets/libs/swiper/js/swiper.js'

	export default{
		components:{
			gree
		}
	}


window.onload = function() {
	var mySwiper = new Swiper ('.swiper-container', {
     direction: 'horizontal', /*滑动方向*/
    	loop: true,
    	autoplay:3000, /*轮播时间*/
    	pagination: '.swiper-pagination', 
    	spaceBetween: 30,
    	paginationClickable: true,

  	}) ;   

}
	
</script>


<style type="text/css">

@import '../../assets/libs/swiper/css/swiper.min.css';
	
	 .hr{position: absolute;top:18px; right:10px;}
	 .hl{position: absolute;top:18px; left:13px;}
	 .hs{position: absolute;top:18px; right:40px;}
	 .ht{position: absolute;top:100px; right:45px;}

	 .tb img{
	 	width:10px;
	 }


	 .hinput{position: absolute; top:15px; left: 10px;width: 88%;height: 25px;border-radius: 5px;border: none;color: #ccc;font-size: 14px;text-indent: 2em;}

* {
	margin: 0;
	padding: 0;
}
.swiper-container{
	width: 375px;
	height: 150px;
}
.swiper-slide {

        text-align: center;
        font-size: 18spx;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
}
.swiper-slide img{
	width:100%;
	height:150px;
	
}

.rd{

	height:30px;
	line-height:30px;
	margin:15px 0px;
	
}
.rd p{
	width:18%;
	border-left:8px solid orange;
	font-size: 20px;
	color:orange;
}
.rdjs_1{
	height:165px;
	border-bottom:2px solid #eee;
}
.rdjs_1 h3{font-size:18px;text-align:left; color:rgb(67,67,67)}
.rdjs_1 p{
	color:rgb(184,184,184);
	font-size:13px;
	text-align:left;
}
.rdjs_1 a{text-decoration:none;}
.rdjs_1_nr{
	width:60%;
	margin:18px;
}
.rdjs_1_nr a{width:100%;}
.rdjs_1_img{
	width:100px;
	height:100px;
	background:red;
	position:absolute;
	top:260px;
	right:20px;
}
.rdjs_1 a img{
	width:100px;
	height:100px;

}

.rdjs_2{
	height:165px;
	border-bottom:2px solid #eee;
}

.rdjs_2 h3{
	font-size:17px;
	text-align:left;
	color:rgb(67,67,67);
}
.rdjs_2 p{
	color:rgb(184,184,184);
	text-align:left;
	font-size:13px;
}
.rdjs_2 a{
	text-decoration:none;
}
.rdjs_2_nr{
	width:60%;
	margin:18px;
}
.rdjs_2_nr a{
	width:100%;
}
.rdjs_2_img{
	width:100px;
	height:100px;
	background:red;
	position:absolute;
	top:450px;
	right:20px;
}
.rdjs_2 a img{
	width:100px;
	height:100px;

}


</style>


