<template>
	<div class='hrsWrap'>
		<slot name='hr01'></slot>
		<slot name='hr02'></slot>
		<slot name='groupname'></slot>
	</div>
</template>
<style>
	.hrsWrap
	{
		width:100%;
		height:50px;
		background:white;
		//border-bottom:1px solid #ccc;
		line-height:48px;
	}
	.hrsWrap .one
	{
		position:absolute;
		width:120px;
		left:10px;
		margin:20px 0 auto;
		
	}
	.hrsWrap .two
	{
		position:absolute;
		width:120px;
		right:10px;
		margin:20px 0 auto;
		
	}
	.hrsWrap .abc
	{
		
		
		text-line:center;
	}
</style>