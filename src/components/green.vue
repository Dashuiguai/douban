<template>
	<div class='headerWrap'>
	<slot></slot>
	
	</div>
</template>

<style>
	.headerWrap{width:100%; height:48px; background:rgb(66,192,85); border-bottom:1px solid #ccc; line-height:48px; position:relative;}
	.headerWrap .one{background:green;}
	.headerWrap img{width:18px; position:absolute;}

	.headerWrap .r{top:10px; right:20px;}
	.headerWrap .l{top:10px; right:60px;}

	.headerWrap .search{top:10px; left:20px;}
	.headerWrap .scan{top:10px; right:70px;}
	input{width: 80%;height: 35px;border-radius: 5px;border: none;color: #ccc;font-size: 14px;text-indent: 2.5em;background: #EEEEEE;}
	.sou{position: absolute; top: 7px;left: 10px;}


	

	
	
</style>