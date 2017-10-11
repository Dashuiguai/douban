<template>
	<div class="tabbarWrap">
	<Item txt='首页' mark='home' :sel='selected'  v-on:change='getVal'>
	<img slot='normalImg' src='../assets/images/ic_tab_home_normal.png'/>
	<img slot='activeImg' src='../assets/images/ic_tab_home_active.png'/>
	</Item>
	<Item txt='书影音' mark='audio' :sel='selected' v-on:change='getVal'>
	<img slot='normalImg' src='../assets/images/ic_tab_subject_normal.png'/>
	<img slot='activeImg' src='../assets/images/ic_tab_subject_active.png'/>
	</Item>
	<Item txt='广播' mark='broadcast' :sel='selected'  v-on:change='getVal'>
	<img slot='normalImg' src='../assets/images/ic_tab_status_normal.png'/>
	<img slot='activeImg' src='../assets/images/ic_tab_status_active.png'/>
	</Item>
	<Item txt='小组' mark='group' :sel='selected'  v-on:change='getVal'>
	<img slot='normalImg' src='../assets/images/ic_tab_group_normal.png'/>
	<img slot='activeImg' src='../assets/images/ic_tab_group_active.png'/>
	</Item>
	<Item txt='个人中心' mark='mine' :sel='selected' v-on:change='getVal'>
	<img slot='normalImg' src='../assets/images/ic_tab_profile_normal.png'/>
	<img slot='activeImg' src='../assets/images/ic_tab_profile_active.png'/>
	</Item>
	</div>
</template>

<script>
import Item from './item'

export default {
	components: {
		Item
	},
	data: function(){
		return {
			selected: 'home'
		}
	},
	methods:{
		getVal:function(val){
			this.selected = val;
		}
	}
}
</script>

<style>
	.tabbarWrap{width:100%; height:64px; background:white; border-top:1px solid #ccc; position:fixed; bottom:0; left:0;}
</style>