$(document).ready(function (e) {
    var ed = $("#ed-5");	//ежемесяный доход
    var no = $("#no-5");	//налоговые отчисления
    var ap = $("#ap-5");	//арендная плата
    var svt = $("#svt-5");	//стоимость ввезенных товаров
    var zp = $("#zp-5");	//заработная плата работников
    var rt = $("#rt-5");	//расходы на транспортные услуги
    var pr = $("#pr-5");	//прочие расходы
    var pk = $("#pk-5");	//плата за комунальные услуги
    var pz = $("#pz-5");	//плата за кредит
    var itog1 = $("#itog1-5");	//чистая прибыль
    var nsm = $("#nsm-5");	//необходимая сумма на первый месяц
    var sums = $("#sums-5");	//общая сумма расходов
    var credit = $("#credit-5");	//кредит
    var ssn = $("#ssn-5");	//сумма средств в наличии
    var so = $("#so-5");	//стоимость оборудования
    var sr = $("#sr-5");	//стоимость рекламы
    var timeo = $("#timeo-5");	//срок окупаемости проекта, мес
    var srm = $("#srm-5");	//стоимость расходного материала
    var srm2 = $("#srm2-5");	//стоимость расходных материалов
    var kpp = $("#kpp-5");	//количество производимой продукции
    var dsp = $("#dsp-5");	//расходы связанные с производством
    var sebest = $("#sebest-5");	//себестоимость продукта
    var dobav = $("#dobav-5");	//добавленная стоимость
    var dohod = $("#dohod-5");	//доход с произведенной продукции


    function Calculate() {
        var sum = 0; var sum1 = 0; var sum3 = 0; var sum4 = 0; var sum5 = 0; var sum6 = 0; var sum7 = 0; var sum8 = 0;
        var s1i1 = !isNaN(parseFloat(ed.val())) ? parseFloat(ed.val()) : 0;
        var s1i2 = !isNaN(parseFloat(ssn.val())) ? parseFloat(ssn.val()) : 0;
        var s1i3 = !isNaN(parseFloat(no.val())) ? parseFloat(no.val()) : 0;
        var s1i4 = !isNaN(parseFloat(ap.val())) ? parseFloat(ap.val()) : 0;
        var s1i5 = !isNaN(parseFloat(svt.val())) ? parseFloat(svt.val()) : 0;
        var s1i6 = !isNaN(parseFloat(zp.val())) ? parseFloat(zp.val()) : 0;
        var s1i7 = !isNaN(parseFloat(rt.val())) ? parseFloat(rt.val()) : 0;
        var s1i8 = !isNaN(parseFloat(pr.val())) ? parseFloat(pr.val()) : 0;
        var s1i9 = !isNaN(parseFloat(pk.val())) ? parseFloat(pk.val()) : 0;
        var s1i10 = !isNaN(parseFloat(pz.val())) ? parseFloat(pz.val()) : 0;
        var s1i11 = !isNaN(parseFloat(so.val())) ? parseFloat(so.val()) : 0;
        var s1i12 = !isNaN(parseFloat(sr.val())) ? parseFloat(sr.val()) : 0;
        var s1i13 = !isNaN(parseFloat(srm.val())) ? parseFloat(srm.val()) : 0;
        var s1i14 = !isNaN(parseFloat(kpp.val())) ? parseFloat(kpp.val()) : 0;
        var s1i15 = !isNaN(parseFloat(srm2.val())) ? parseFloat(srm2.val()) : 0;
        var s1i16 = !isNaN(parseFloat(dobav.val())) ? parseFloat(dobav.val()) : 0;

        sum = s1i3 + s1i4 + s1i5 + s1i6 + s1i7 + s1i8 + s1i9 + s1i10 + s1i13;
        sum1 = (!isNaN(parseFloat(sum)) ? parseFloat(sum):0) - s1i1;
        sum3 = (!isNaN(parseFloat(sum))? parseFloat(sum) :0) + s1i11 + s1i12;
        sum4 = (!isNaN(parseFloat(sum3)) ?parseFloat(sum3):0) - s1i2;
        sum5 = !isNaN(parseFloat(sum3)) ?parseFloat(sum3):0 / !isNaN(parseFloat(sum1)) ?parseFloat(sum1):0;
        sum6 = s1i4 + s1i6 + s1i9;
        sum7 = (!isNaN(parseFloat(sum6)) ?parseFloat(sum6):0 + s1i15) / s1i14;
        sum8 = (!isNaN(parseFloat(sum7)) ?parseFloat(sum7):0 + s1i16) * s1i14;

        nsm.text(sum.toFixed(2));
        itog1.text(sum1.toFixed(2));
        sums.text(sum3.toFixed(2));
        credit.text(sum4.toFixed(2));
        timeo.text(sum5.toFixed(2));
        dsp.text(sum6.toFixed(2));
        sebest.text(sum7.toFixed(2));
        dohod.text(sum8.toFixed(2));
    };


    function ClearAll() {
        $('#form5').find('input:text, input:password, input:file, textarea').val('');
        Calculate();
    };

    $(".clear").click(function () {
        var id = $(this).attr("id").substring(1);        
        document.getElementById(id).value = '';
        Calculate();
        return false;
    });

    $("#reset-5").click(function () { ClearAll(); });
    ed.keyup(function () { Calculate(); });
    no.keyup(function () { Calculate(); });
    ap.keyup(function () { Calculate(); });
    svt.keyup(function () { Calculate(); });
    zp.keyup(function () { Calculate(); });
    rt.keyup(function () { Calculate(); });
    pr.keyup(function () { Calculate(); });
    pk.keyup(function () { Calculate(); });
    pz.keyup(function () { Calculate(); });
    ssn.keyup(function () { Calculate(); });
    so.keyup(function () { Calculate(); });
    sr.keyup(function () { Calculate(); });
    srm.keyup(function () { Calculate(); });
    srm2.keyup(function () { Calculate(); });
    kpp.keyup(function () { Calculate(); });
    dobav.keyup(function () { Calculate(); });
});