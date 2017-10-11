<template>
	<div class='headWrap'>
		<slot></slot>
	</div>
</template>

<style>
	.headWrap{border:3px solid rgb(234,235,236);position:relative;margin-top:150px;width:80%;height:270px; left:40px;box-shadow: 2px 3px 4px gray;}
	.headWrap .jieshao .tou1{position:absolute;width:50px;left:20px;top:10px;}
	.headWrap .num3 {position:absolute; left: 80px;top:15px;}
	.headWrap .num4 {position:absolute;left: 80px;top:42px;font-size:10px;color:gray;}
	.headWrap .guanzhu1 {position:absolute;width:65px;top:17px;right:25px;}
	.headWrap .num5{position:absolute;top:60px;left:80px;text-align:left;padding-right:20px; font-size:16px;}
	.headWrap .dui1{position:absolute;width:30px;top:15px;right:40px;}
	.da{position:absolute;;top:80px;}
	.da1{position:absolute;;top:380px;}
	.da2{position:absolute;;top:680px;}
</style>