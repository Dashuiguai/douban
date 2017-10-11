<template>
	<div class='routerWrap'>
	<slot></slot>
	<slot name='OneImg'></slot>
	<slot name='TwoImg'></slot>
	<slot name='ThreeImg'></slot>
	</div>
</template>


<style>
.routerWrap{width:100%; height:900px; background:white; border-bottom:1px solid #ccc; position:relative;}
.routerWrap .o{top:10px; left:10px;}
.routerWrap .t{top:10px; left:200px;}
.routerWrap .th{top:10px; left:390px;}
</style>
