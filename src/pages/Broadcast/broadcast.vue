<template>
	<div>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, users-scalable=0">
		<Mheader>
			<span>广播</span>
			<img src='../../assets/images/ic_status_search_user.png' slot='rightImg' class='l'/>
			<img src='../../assets/images/ic_chat_green.png' slot='rightImg' class='r'/>
		</Mheader>
		<div class="content">
			<img src='../../assets/images/ic_status_anonymous_header.png' class='tupian'/>
			<label class='num1'><b>发现有趣的人</b></label><br/>
			<label class='num2'>关注他们，发现更大的世界</label>
		</div>
		<div>
		<Aheader class='da'>
		<div class='jieshao'>
			<img src='../../assets/images/touxiang1.png' class='tou1'/>
			<p class='num3'><b>陈苍苍</b></p>
			<p class='num4'>53228人关注</p>
			<img v-show='bol1' v-on:click="change(1)" src='../../assets/images/guanzhu1.png' class='guanzhu1'/>
			<img v-show='!bol1' v-on:click="change(1)" src='../../assets/images/ic_voucher_checked.png' class='dui1'/>
			<p class='num5'>我们没小孩的也很不容易啊！在家被别人的小孩吵，三天两头多出去不就是为了图个清静吗!出门在外接着被各种熊孩子打扰，坐个飞机小孩喊一路坐个高铁小孩也嚎一路，很不容易！help！哭哭，我化妆我健身我努力维持体面，为什么这么多小孩不肯放过我</p>
		</div>
		</Aheader>
		<Aheader class='da1'>
		<div class='jieshao'>
			<img src='../../assets/images/touxiang2.png' class='tou1'/>
			<p class='num3'><b>一个匿名的人</b></p>
			<p class='num4'>5322人关注</p>
			<img v-show='bol2' v-on:click="change(2)" src='../../assets/images/guanzhu1.png' class='guanzhu1'/>
			<img v-show='!bol2' v-on:click="change(2)" src='../../assets/images/ic_voucher_checked.png' class='dui1'/>
			<p class='num5'>这部电影有台湾片一贯的慢节奏，但故事情节还是比较有吸引力，三个主角，奶奶，妈妈和儿子都很像我们身边的人，甚至是自己，所以还是很能唤起共鸣的。“或許就因為，你已習慣什麽都不說，默默承受，所以我甚至看不到你的難過。</p>
		</div>
		</Aheader>
		<Aheader class='da2'>
		<div class='jieshao'>
			<img src='../../assets/images/touxiang3.png' class='tou1'/>
			<p class='num3'><b>kirito</b></p>
			<p class='num4'>228人关注</p>
			<img v-show='bol3' v-on:click="change(3)"  src='../../assets/images/guanzhu1.png' class='guanzhu1'/>
			<img v-show='!bol3' v-on:click="change(3)" src='../../assets/images/ic_voucher_checked.png' class='dui1'/>
			<p class='num5'>一场梦境，一段魂灵，一次幻灭。眼泪的存在，只为太多的深爱，也证明所有的一切不是幻觉。生命本就来自偶然，我们本该从容淡定，给过去人原谅，也给自己一个远方。</p>
		</div>
		</Aheader>
		</div>
	</div>
</template>


<script>
import Mheader from '../../components/header'
import Aheader from '../../components/broadcast1'

export default {
	components: {
		Mheader,
		Aheader
	},
	data: function(){
		return {
			bol1:true,
			bol2:true,
			bol3:true,
		}
	},
	methods: {
		getVal: function(val){
			this.selected = val;
		},
		change:function(code){
			if(code===1){
				this.bol1=!this.bol1;
			}else if(code===2){
				this.bol2=!this.bol2;
			}else if(code===3){
				this.bol3=!this.bol3;
			}
		
		
		}
	},

	
}
</script>
