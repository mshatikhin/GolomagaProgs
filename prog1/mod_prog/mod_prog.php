<?php
// get the document object
$doc =& JFactory::getDocument();

// add your stylesheet
$doc->addStyleSheet( 'components/com_prog/tmpl/style.css' );
$doc->addStyleSheet( 'components/com_prog/tmpl/main.css' );
$doc->addStyleSheet( 'components/com_prog/tmpl/normalize.css' );
?>
<script type="text/javascript" src="<?php echo $mosConfig_live_site; ?>/components/com_prog/js/vendor/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="<?php echo $mosConfig_live_site; ?>/components/com_prog/js/plugins.js"></script>
<script type="text/javascript" src="<?php echo $mosConfig_live_site; ?>/components/com_prog/js/main.js"></script>
<div class="main-div">
 <form id="form1">
<table class="main-table">
	<tr>
		<td class="bold">Доход</td>
		<td>&nbsp;<input type="button" value="Очистить все поля" id="reset1"/></td>		
	</tr>
	<tr>
		<td>Наименование пункта доходной статьи</td>
		<td>Количество в денежном эквиваленте</td>
	</tr>
	<tr>
		<td>Заработная плата</td>
		<td><input type="text" id="zp"/><a href="#" class="clear" id="-zp">X</a></td>
	</tr>
	<tr>
		<td>Сетевой маркетинг</td>
		<td><input type="text" id="sm"/><a href="#" class="clear" id="-sm">X</a></td>
	</tr>
	<tr>
		<td>Доход от бизнеса</td>
		<td><input type="text" id="db"/><a href="#" class="clear" id="-db">X</a></td>
	</tr>
	<tr>
		<td>Прибыль по вкладам</td>
		<td><input type="text" id="pv"/><a href="#" class="clear" id="-pv">X</a></td>
	</tr>
	<tr>
		<td>&nbsp;Дополнительный доход1</td>
		<td><input type="text" id="dd"/><a href="#" class="clear" id="-dd">X</a></td>
	</tr>
    <tr>
    	<td>&nbsp;Дополнительный доход2</td>        
    	<td><input type="text" id="dd1"/><a href="#" class="clear" id="-dd1">X</a>
        </td>
    </tr>	
    <tr>
    	<td>&nbsp;Дополнительный доход3</td>        
    	<td><input type="text" id="dd2"/><a href="#" class="clear" id="-dd2">X</a></td>
    </tr>	
	<tr>
		<td class="bold">Итог:</td>
		<td>&nbsp;<span id="itog1" style="font-weight:bold"></span></td>
	</tr>
	<tr>
		<td><span style="color:red;">Месячный денежный приток:</span></td>
		<td>&nbsp;<span id="pritok"></span></td>
	</tr>
    <tr>
		<td><span style="color:#930;">Годовой денежный приток:</span></td>
		<td>&nbsp;<span id="pritok2"></span></td>
	</tr>
	<tr>
		<td style="font-weight:bold">Количество накопленных денег:</td>
		<td><input type="text" id="knd"/><a href="#" class="clear" id="-knd">X</a></td>
	</tr>
    <tr>
		<td style="font-weight:bold;color:#009">Необходимая сумма для намеченной цели:</td>
		<td><input type="text" id="ns"/><a href="#" class="clear" id="-ns">X</a></td>
	</tr>
	<tr>
		<td style="font-weight:bold">Время, за которое наберется эта сумма:</td>
		<td>&nbsp;<span id="time"></span></td>
	</tr>
</table>
</form>
 <form id="form2">
<table class="main-table">
	<tr>
		<td class="bold">Расход</td>
		<td>&nbsp;<input type="button" value="Очистить все поля" id="reset2"/></td>		
	</tr>
	<tr>
		<td>Наименование пункта расходной статьи</td>
		<td>Количество в денежном эквиваленте</td>
	</tr>
	<tr>
		<td>Расход на продукты питания</td>
		<td><input type="text" id="rp"/><a href="#" class="clear" id="-rp">X</a></td>
	</tr>
	<tr>
		<td>Расходы на комунальные услуги</td>
		<td><input type="text" id="rk"/><a href="#" class="clear" id="-rk">X</a></td>
	</tr>
	<tr>
		<td>Расход на аренду квартиры</td>
		<td><input type="text" id="rak"/><a href="#" class="clear" id="-rak">X</a></td>
	</tr>
	<tr>
		<td>Расходы на транспорт</td>
		<td><input type="text" id="zt"/><a href="#" class="clear" id="-zt">X</a></td>
	</tr>
	<tr>
		<td>Прочие расходы</td>
		<td><input type="text" id="pr"/><a href="#" class="clear" id="-pr">X</a></td>
	</tr>
    <tr>
		<td>Прочие расходы1</td>
		<td><input type="text" id="pr1"/><a href="#" class="clear" id="-pr1">X</a></td>
	</tr>
    <tr>
		<td>Прочие расходы2</td>
		<td><input type="text" id="pr2"/><a href="#" class="clear" id="-pr2">X</a></td>
	</tr>
	<tr>
		<td>Расходы на непредвиденные нужды</td>
		<td><input type="text" id="rn"/><a href="#" class="clear" id="-rn">X</a></td>
	</tr>
	<tr>
		<td>Ежемесечная плата за кредит</td>
		<td><input type="text" id="ek"/><a href="#" class="clear" id="-ek">X</a></td>
	</tr>
	<tr>
		<td>Расходы на сотовую связь</td>
		<td><input type="text" id="rs"/><a href="#" class="clear" id="-rs">X</a></td>
	</tr>		
	<tr>
		<td class="bold">Итог:</td>
		<td>&nbsp;<span id="itog2" style="font-weight:bold"></span></td>
	</tr>
</table>
</form>
</div>

</html>
