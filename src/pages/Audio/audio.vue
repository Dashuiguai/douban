<template>
	<div>
		<Mheader>
			<span>书影音</span>
			<img src='../../assets/images/ic_group_search.png' slot='leftImg' class='l'/>
			<img src='../../assets/images/ic_chat_green.png' slot='rightImg' class='r'/>

		</Mheader>
		<div class='routerWrap'>
			<span v-on:click='fn(0)'>
				<router-link to='/audio/one' :class='{active: currentIndex==0}'>电影</router-link>
			</span>
			<span v-on:click='fn(1)'>
				<router-link to='/audio/two' :class='{active: currentIndex==1}'>读书</router-link>
			</span>
			<span v-on:click='fn(2)'>
				<router-link to='/audio/three' :class='{active: currentIndex==2}'>电视</router-link>
			</span>
			<span v-on:click='fn(3)'>
				<router-link to='/audio/four' :class='{active: currentIndex==3}'>同城</router-link>
			</span>
			<span v-on:click='fn(4)'>
				<router-link to='/audio/five' :class='{active: currentIndex==4}'>音乐</router-link>
			</span>
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
import Mheader from '../../components/header'

export default {
	components: {
		Mheader
	},
	data: function(){
		return {
			currentIndex: 0
		}
	},
	methods: {
		fn: function(i){
			this.currentIndex = i;
		}
	}
}

</script>
<style>
	.routerWrap {height: 35px; line-height: 35px; background:#FFF; }
	.routerWrap a {color: #999; text-decoration: none; font-size: 14px; display: block; float: left; width: 20%;}
	.routerWrap .active {border-bottom: 2px solid green; color: green;}
</style>