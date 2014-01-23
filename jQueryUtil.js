//jQuery实现的内链接平滑滚动
$('a[href^="#"]').bind('click.smoothscroll', function () {
	e.preventDefault();
	
	var anchor = this.hash,
	$target = $(target);
	
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
		window.location.hash = anchor;
	});
});

//使用jQuery获取所有节点
var $element = $('#gbtags');
var $nodes = $element.contents();
$nodes.each(function() {
	if(this.nodeType === 3 && $.trim($(this).text())) {
		$(this).wrap('');
	}
});

//限制选择框选择个数
$('#categories option').click(function(e) {
	if ($(this).parent().val().length < 2) {
		$(this).removeAttr('selected');
	}
});

//jQuery使用通配符来删除class
var _c = 'your-icon-class';

$('.currency').removeClass(function (index, css) {
	return (css.match(/\bicon-\S+/g) || []).join(' ');
}).addClass('icon-' + _c);

//切换启用和禁用
/* HTML
|
|
<input type="text" value="www.google.com.hk" /><input type="button" value="disabled Button">
|
|
*/
(function ($) {
	$.fn.toggleDisabled = function () {
		return this.each(function () {
			var $this = $(this);
			if ($this.attr('disabled')) {
				$this.removeAttr('disabled');
			} else {
				$this.attr('disabled', 'disabled');
			}
		});
	};
})(jQuery);

$(function () {
	$('input:button').click(function () {
		$('input:text').toggleDisabled();
	});
});

//平滑滚动返回顶端
/*
<h1 id="anchor">test</h1>
<a class="topLink" href="#anchor">go to top</a>
*/

$(document).ready(function () {
	$("a.topLink").click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offfset().top + 'px'
		}, {
			duration: 500,
			easing: 'swing'
		});
		return false;
	});
});

//使用jQuery和Google Analytics来跟踪表单
var array1 = [];
$(document).ready(function () {
	$('input').change(function () {
		var formbox = $(this).attr('id');
		array1.push(formbox);
		console.log('you filled out box ' + array1);
	});
	$('#submit').click(function () {
		console.log('tracked ' + array1);
		_gaq.push(['_trackEvent', 'Form', 'completed', '"' + array1 + '"']);
	});
});

//超简单的密码强度提示
$('#pass').keyup(function (e) {
	var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
	var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
	var enoughRegex = new RegExp("(?=.{6,}).*", "g");
	if (false == enoughRegex.test($(this).val())) {
		
	}
});
