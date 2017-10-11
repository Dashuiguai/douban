<template>
	<div class='heWrap' >
		<slot  name='bigImg'></slot>
		<span v-show='bol' v-on:click='choose()'><slot  name='smallImg'></slot></span>
		<span v-show='!bol' v-on:click='choose()'><slot  name='small01Img'></slot></span>
		<slot name='bigFont'></slot>
		<slot name='smallFont'></slot>
		<slot name='people'></slot>
		
	</div>
</template>
<script>
export default {
	data: function(){
		return {
			bol:true
		}
	},
	methods:{
		choose:function(){
			//console.log(1);
			this.bol=!this.bol;

	}
}
}
	</script>
<style>
	.heWrap
	{
		width:100%;
		height:80px;
		background:white;
		//border-bottom:1px solid #ccc;
		line-height:48px;
	}
	.heWrap .aImg
	{
		position:absolute;
		width:60px;
		height:60px;
		left:10px;
		padding:10px;
    	-moz-border-radius: 15px;      
    	-webkit-border-radius: 15px;   
    	border-radius:15px;  
	}
	.heWrap .bImg
	{
		position:absolute;
		margin:25px  0 auto;
		width:30px;
		vertical-align:middle;
		right:20px;
	}
	.heWrap .aFont
	{
		position:absolute;
		font-size:21px;
		left:90px;
		
	}
	.heWrap .bFont
	{	
		position:absolute;
		font-size:10px;
		left:90px;
		margin:40px 0 auto;
		color:#bbb;
		line-height:1.2;
		text-align:left;
	}
	.heWrap .cFont
	{
		position:absolute;
		font-size:9px;
		right:65px;
		margin:14px 0 auto;
		color:#ccc;

	}
	.heWrap .wei
	{
		position:absolute;
		margin-bottom:200px;

	}
	
</style>