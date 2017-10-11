<template>
	<div class='itemWrap' v-on:click='chosse()'>
		<span v-show='!bol'><slot name='normalImg'></slot><br/></span>
		<span v-show='bol'><slot name='activeImg'></slot><br/></span>
		<span>{{txt}}</span>
	</div>
</template>
	
<script>
export default{
	props:['txt','mark','sel'],
	computed:{
		bol:function(){
			if(this.mark == this.sel){
				return true;
			}
			return false;
		}
	},
	methods:{
		chosse:function(){
			this.$emit('change',this.mark);

			this.$router.push('/'+this.mark);
		}
	}	
}
</script>
	
<style>
	.itemWrap{width:20%; background:#eee; float:left; text-align:center;}
	.itemWrap img{width:38px; }
	.itemWrap span{/*margin-top:-7px;margin-bottom:10px;display:block;*/
	font-size:12px; color:#999;}
</style>
