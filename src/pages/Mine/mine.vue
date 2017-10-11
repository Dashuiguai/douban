<template>
	<div>
		<Mheader>
		<span>我的</span>
		
		
			
				
				<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img src='../../assets/images/ic_settings.png' slot='rightImg' class='r'/></a>
			
		

		
		</Mheader>

		<div class='lg'>
			<img src='../../assets/images/ic_user_male.png' class='tou'/>

			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001">


				<button class='btn' >
					<font color='white'>登陆/注册</font>
				</button>
			</a>

			

		</div>


		<div class='ti'>
			<img src='../../assets/images/ic_mine_notification.png' class='xing'/>

			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001">
				
					<p class='tx'>提醒</p>
				
			</a>

			<font class='dy' color='#ccc'>></font>	

			

		</div>

		<div class='zan'>
			<font class='zw' color='#ccc'>暂无新提醒</font>

		</div>

		<div class='mk1'>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='m1' src='../../assets/images/ic_photo_liked.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='m2' src='../../assets/images/ic_my_note.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='m3' src='../../assets/images/ic_my_album.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='m4' src='../../assets/images/ic_my_status.png'/></a>

			<font class='dy1' color='#ccc'>喜欢</font>
			<font class='dy2' color='#ccc'>日记</font>
			<font class='dy3' color='#ccc'>相册</font>
			<font class='dy4' color='#ccc'>我的广播</font>
		</div>

		<div class='nk1'>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='n1' src='../../assets/images/ic_my_movies_tvs.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='n2' src='../../assets/images/ic_my_books.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='n3' src='../../assets/images/ic_my_music.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='n4' src='../../assets/images/ic_my_events.png'/></a>

			<font class='ny1' color='#ccc'>电影电视</font>
			<font class='ny2' color='#ccc'>读书</font>
			<font class='ny3' color='#ccc'>音乐</font>
			<font class='ny4' color='#ccc'>同城活动</font>
		</div>

		<div class='vk1'>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='v1' src='../../assets/images/ic_group_check_anonymous.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='v2' src='../../assets/images/ic_my_doulist.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='v3' src='../../assets/images/ic_my_orders.png'/></a>
			<a href="https://accounts.douban.com/login?alias=&redir=https%3A%2F%2Fwww.douban.com%2F&source=index_nav&error=1001"><img class='v4' src='../../assets/images/ic_my_wallet.png'/></a>

			<font class='vy1' color='#ccc'>豆瓣时间</font>
			<font class='vy2' color='#ccc'>豆列</font>
			<font class='vy3' color='#ccc'>订单</font>
			<font class='vy4' color='#ccc'>钱包</font>
		</div>




	</div>

	

</template>


<script>
	import Mheader from '../../components/header'

	export default {
		components:{
			Mheader
		}
		}
</script>

<style>
	.lg{width:100%;height:140px;background:rgb(66,198,86);border-bottom:15px solid #eee;}
	.tou{width:80px;height:80px;position:absolute;top:75px;left:30px;}
	.btn{width:180px;height:40px;position:absolute;top:95px;left:150px;font-size:16px;background:rgb(66,198,86);border:2px solid #eee;}

	.ti{width:100%;height:60px;border-bottom:2px solid #eee;}
	.xing{width:30px;height:30px;position:absolute;top:220px;left:30px;}
	.tx{position:absolute;top:225px;left:70px;font-size:16px;}
	.dy{position:absolute;top:220px;right:20px;font-size:30px;}

	.zan{width:100%;height:35px;border-bottom:15px solid #eee;}
	.zw{position:absolute;top:272px;left:150px;font-size:16px;}

	.mk1{width:100%;height:90px;border-bottom:1px solid #eee;}
	.mk1 img{width:35px;height:35px;position:absolute;top:333px;}
	.m1{left:30px;}
	.m2{left:120px;}
	.m3{left:210px;}
	.m4{left:300px;}
	.mk1 font{position:absolute;top:375px;font-size:16px;} 
	.dy1{left:30px;}
	.dy2{left:120px;}
	.dy3{left:210px;}
	.dy4{left:288px;}

	.nk1{width:100%;height:90px;border-bottom:1px solid #eee;}
	.nk1 img{width:35px;height:35px;position:absolute;top:422px;}
	.n1{left:30px;}
	.n2{left:120px;}
	.n3{left:210px;}
	.n4{left:300px;}
	.nk1 font{position:absolute;top:470px;font-size:16px;} 
	.ny1{left:17px;}
	.ny2{left:120px;}
	.ny3{left:210px;}
	.ny4{left:288px;}

	.vk1{width:100%;height:90px;border-bottom:1px solid #eee;}
	.vk1 img{width:35px;height:35px;position:absolute;top:512px;}
	.v1{left:30px;}
	.v2{left:120px;}
	.v3{left:210px;}
	.v4{left:300px;}
	.vk1 font{position:absolute;top:560px;font-size:16px;} 
	.vy1{left:17px;}
	.vy2{left:120px;}
	.vy3{left:210px;}
	.vy4{left:300px;}
	



</style>