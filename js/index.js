$(function(){
	// 选项卡
	$('.nav').on('tap','li',function(i){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		//$('.cont_gg').eq(index).css('display','block').siblings().css('display','none');
	})
	// 入户调查
	$('input[name="sfpkc"]').on('click',function(){
		//var flag=eval(this.value);
		if(this.value == '是'){
			$('.tianbiao').css('display','block');
		}else{
			$('.tianbiao').css('display','none');
		}
	})
})