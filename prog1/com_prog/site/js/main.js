$(document).ready(function(e) {
	var zp = $("#zp");	//заработная плата
	var sm = $("#sm");	//сетевой маркетинг
	var db = $("#db");	//доход от бизнеса
	var pv = $("#pv");	//прибыль по вкладам
	var dd = $("#dd");	//Дополнительный доход
	var dd1 = $("#dd1");	//Дополнительный доход2
	var dd2 = $("#dd2");	//Дополнительный доход3
	var itog1 = $("#itog1");	//итог	
	var pritok = $("#pritok");	//месячный денежный приток
	var pritok2 = $("#pritok2");	//годовой денежный приток
	var rp = $("#rp");	//Расход на продукты питания
	var rk = $("#rk");	//расходы на комунальные услуги
	var rak = $("#rak");	//Расход на аренду квартиры
	var zt = $("#zt");	//Расходы на транспорт
	var pr = $("#pr");	//прочие расходы
	var pr1 = $("#pr1");	//прочие расходы1
	var pr2 = $("#pr2");	//прочие расходы2
	var rn = $("#rn");	//расходы на непредвиденные нужды
	var ek = $("#ek");	//ежемесечная плата за кредит
	var rs = $("#rs");	//расходы на сотовую связь
	var itog2 = $("#itog2");	//итог
	var ns = $("#ns");	//необходимая сумма
	var knd = $("#knd");	//количество накопленных денег
	var time = $("#time");	//время, за которое наберется эта сумма
	
	function Calculate(){
		var sum1 = 0;
		var sum2 = 0;
		var sum3 = 0;
		var sum4 = 0;		
		var sum5 = 0;
			 
		var s1i1 = !isNaN(parseFloat(zp.val())) ? parseFloat(zp.val()) : 0;
		var s1i2 = !isNaN(parseFloat(sm.val())) ? parseFloat(sm.val()) : 0;
		var s1i3 = !isNaN(parseFloat(db.val())) ? parseFloat(db.val()) : 0;
		var s1i4 = !isNaN(parseFloat(pv.val())) ? parseFloat(pv.val()) : 0;
		var s1i5 = !isNaN(parseFloat(dd.val())) ? parseFloat(dd.val()) : 0;	
		var s1i6 = !isNaN(parseFloat(dd1.val())) ? parseFloat(dd1.val()) : 0;	
		var s1i7 = !isNaN(parseFloat(dd2.val())) ? parseFloat(dd2.val()) : 0;
		sum1 = s1i1+s1i2+s1i3+s1i4+s1i5+s1i6+s1i7;		
					 
		var s2i1 = !isNaN(parseFloat(rp.val())) ? parseFloat(rp.val()) : 0;
		var s2i2 = !isNaN(parseFloat(rk.val())) ? parseFloat(rk.val()) : 0;
		var s2i3 = !isNaN(parseFloat(rak.val())) ? parseFloat(rak.val()) : 0;
		var s2i4 = !isNaN(parseFloat(zt.val())) ? parseFloat(zt.val()) : 0;
		var s2i5 = !isNaN(parseFloat(pr.val())) ? parseFloat(pr.val()) : 0;
		var s2i6 = !isNaN(parseFloat(rn.val())) ? parseFloat(rn.val()) : 0;        
		var s2i7 = !isNaN(parseFloat(ek.val())) ? parseFloat(ek.val()) : 0;
		var s2i8 = !isNaN(parseFloat(rs.val())) ? parseFloat(rs.val()) : 0;	
		var s2i9 = !isNaN(parseFloat(pr1.val())) ? parseFloat(pr1.val()) : 0;
		var s2i10 = !isNaN(parseFloat(pr2.val())) ? parseFloat(pr2.val()) : 0;	
		sum2 = s2i1+s2i2+s2i3+s2i4+s2i5+s2i6+s2i7+s2i8+s2i9+s2i10;		
		
		var s3i1 = !isNaN(parseFloat(ns.val())) ? parseFloat(ns.val()) : 0;
		var s3i2 = !isNaN(parseFloat(knd.val())) ? parseFloat(knd.val()) : 0;
		sum3 =  (s3i1 - s3i2)/(!isNaN(parseFloat(sum1)) ? parseFloat(sum1) :0 - !isNaN(parseFloat(sum2)) ?parseFloat(sum2) :0);
		sum4 = !isNaN(parseFloat(sum1)) ?parseFloat(sum1) :0 - !isNaN(parseFloat(sum2)) ?parseFloat(sum2) :0;
		sum5 = !isNaN(parseFloat(sum4)) ?parseFloat(sum4) * 12 :0 ;
		itog1.text(sum1.toFixed(2));
		itog2.text(sum2.toFixed(2));
		time.text(!isNaN(parseFloat(sum3)) ? sum3.toFixed(2) :0 );
		pritok.text(sum4.toFixed(2));	
		pritok2.text(sum5.toFixed(2));	
	};

function ClearAll() {
        $('#form1').find('input:text, input:password, input:file, textarea').val('');
        Calculate();
    };
function ClearAll2() {
        $('#form2').find('input:text, input:password, input:file, textarea').val('');
        Calculate();
    };

    $(".clear").click(function () {
        var id = $(this).attr("id").substring(1);        
        document.getElementById(id).value = '';
        Calculate();
        return false;
    });

    $("#reset1").click(function () { ClearAll(); });
		 $("#reset2").click(function () { ClearAll2(); });
	zp.keyup(function(){Calculate();});	
	sm.keyup(function(){Calculate();});
	db.keyup(function(){Calculate();});	
	pv.keyup(function(){Calculate();});
	dd.keyup(function(){Calculate();});	
	dd1.keyup(function(){Calculate();});	
	dd2.keyup(function(){Calculate();});			
	rp.keyup(function(){Calculate();});	
	rk.keyup(function(){Calculate();});
	rak.keyup(function(){Calculate();});	
	zt.keyup(function(){Calculate();});
	pr.keyup(function(){Calculate();});
	pr1.keyup(function(){Calculate();});	
	pr2.keyup(function(){Calculate();});		
	rn.keyup(function(){Calculate();});	
	ek.keyup(function(){Calculate();});
	rs.keyup(function(){Calculate();});		
	ns.keyup(function(){Calculate();});
	knd.keyup(function(){Calculate();});
		
});