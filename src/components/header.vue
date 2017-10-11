<template>
	<div class='headerWrap'>
	<slot></slot>
	<slot name='leftImg'></slot>
	<slot name='inImg'></slot>
	<slot name='rightImg'></slot>
	<slot name='saomiaoImg'></slot>
	</div>
</template>

<style>
	.headerWrap{width:100%; height:48px; background:white; border-bottom:1px solid #ccc; line-height:48px; position:relative;}
	.headerWrap .one{background:green;}
	.headerWrap img{width:30px; position:absolute;}

	.headerWrap .r{top:10px; right:20px;}
	.headerWrap .l{top:10px; right:60px;}

	.headerWrap .search{top:10px; left:20px;}
	.headerWrap .scan{top:10px; right:70px;}
	input{width: 80%;height: 35px;border-radius: 5px;border: none;color: #ccc;font-size: 14px;text-indent: 2.5em;background: #EEEEEE;}
	.sou{position: absolute; top: 7px;left: 10px;}


	.content .tupian{position:absolute; width:130px;height:100px;left:50px;padding-top:40px;}
	.content .num1{position:relative;left:62px;top:65px;font-size:20px;}
	.content .num2{position:relative;left:90px;top:75px;font-size:15px;color:lightgray;}

	

	.headerWrap .b
	{
		top:10px;
		right:20px;
	}
	.headerWrap .a
	{
		top:10px;
		right:80px;
	}

</style>

