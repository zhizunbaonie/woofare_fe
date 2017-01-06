/// <reference path="../../public/jquery-1.11.0-vsdoc.js" />
var citysFlight = [];
var cityModel = '';
var DestCityStatus_Inter = 0;
var AirPortModelList;

var hotcity = { "国内热门": [{ display: "上海", data: "Shanghai|上海(SHA)|2|480" }, { display: "北京", data: "Beijing|北京(BJS)|1|480" }, { display: "香港", data: "Hong Kong|香港(HKG)|58|480" }, { display: "广州", data: "Guangzhou|广州(CAN)|32|480" }, { display: "杭州", data: "Hangzhou|杭州(HGH)|17|480" }, { display: "厦门", data: "Xiamen|厦门(XMN)|25|480" }, { display: "南京", data: "Nanjing|南京(NKG)|12|480" }, { display: "澳门", data: "MACAU|澳门(MFM)|59|480" }, { display: "成都", data: "Chengdu|成都(CTU)|28|480" }, { display: "青岛", data: "Qingdao|青岛(TAO)|7|480" }, { display: "台北", data: "Taipei|台北(TPE)|617|480" }, { display: "福州", data: "Fuzhou|福州(FOC)|258|480" }, { display: "天津", data: "Tianjin|天津(TSN)|3|480" }, { display: "深圳", data: "Shenzhen|深圳(SZX)|30|480" }, { display: "大连", data: "Dalian|大连(DLC)|6|480" }, { display: "沈阳", data: "Shenyang|沈阳(SHE)|451|480" }, { display: "昆明", data: "Kunming|昆明(KMG)|34|480" }, { display: "武汉", data: "Wuhan|武汉(WUH)|477|480" }, { display: "宁波", data: "Ningbo|宁波(NGB)|375|480" }, { display: "无锡", data: "Wuxi|无锡(WUX)|13|480" }, { display: "晋江", data: "Jinjiang|晋江(JJN)|1803|480" }, { display: "重庆", data: "Chongqing|重庆(CKG)|4|480" }, { display: "三亚", data: "Sanya|三亚(SYX)|43|480" }, { display: "西安", data: "Xian|西安(SIA)|10|480" }], "国际热门": [{ display: "香港", data: "Hong Kong|香港(HKG)|58|480" }, { display: "首尔", data: "Seoul|首尔(SEL)|274|540" }, { display: "台北", data: "Taipei|台北(TPE)|617|480" }, { display: "东京", data: "Tokyo|东京(TYO)|228|540" }, { display: "新加坡", data: "Singapore|新加坡(SIN)|73|480" }, { display: "澳门", data: "MACAU|澳门(MFM)|59|480" }, { display: "曼谷", data: "Bangkok|曼谷(BKK)|359|420" }, { display: "大阪", data: "Osaka|大阪(OSA)|219|540" }, { display: "胡志明市", data: "Ho Chi Minh City|胡志明市(SGN)|301|420" }, { display: "马尼拉", data: "Manila|马尼拉(MNL)|364|480" }, { display: "名古屋", data: "Nagoya|名古屋(NGO)|360|540" }, { display: "伦敦(英国)", data: "London|伦敦(英国)(LON)|338|0" }, { display: "吉隆坡", data: "Kuala Lumpur|吉隆坡(KUL)|315|480" }, { display: "釜山", data: "Pusan|釜山(PUS)|253|540" }, { display: "悉尼(澳大利亚)", data: "Sydney|悉尼(澳大利亚)(SYD)|501|660" }, { display: "法兰克福", data: "Frankfurt|法兰克福(FRA)|250|60" }, { display: "温哥华", data: "Vancouver|温哥华(YVR)|476|-480" }, { display: "巴黎", data: "Paris|巴黎(PAR)|192|60" }, { display: "纽约", data: "New York|纽约(NYC)|633|-300" }, { display: "洛杉矶", data: "Los Angeles|洛杉矶(LAX)|347|-480" }, { display: "夏威夷", data: "Honolulu|夏威夷(HNL)|757|-600" }], "亚洲": [{ display: "香港", data: "Hong Kong|香港(HKG)|58|480" }, { display: "东京", data: "Tokyo|东京(TYO)|228|540" }, { display: "台北", data: "Taipei|台北(TPE)|617|480" }, { display: "首尔", data: "Seoul|首尔(SEL)|274|540" }, { display: "新加坡", data: "Singapore|新加坡(SIN)|73|480" }, { display: "曼谷", data: "Bangkok|曼谷(BKK)|359|420" }, { display: "吉隆坡", data: "Kuala Lumpur|吉隆坡(KUL)|315|480" }, { display: "大阪", data: "Osaka|大阪(OSA)|219|540" }, { display: "澳门", data: "MACAU|澳门(MFM)|59|480" }, { display: "雅加达", data: "Jakarta|雅加达(JKT)|524|420" }, { display: "胡志明市", data: "Ho Chi Minh City|胡志明市(SGN)|301|420" }, { display: "马尼拉", data: "Manila|马尼拉(MNL)|364|480" }, { display: "巴厘岛", data: "Bali|巴厘岛(DPS)|723|480" }, { display: "名古屋", data: "Nagoya|名古屋(NGO)|360|540" }, { display: "普吉岛", data: "Phuket|普吉岛(HKT)|725|420" }, { display: "河内", data: "Hanoi|河内(HAN)|286|420" }, { display: "马累", data: "MALDIVES|马累(MLE)|1207|300" }, { display: "迪拜", data: "DUBAI|迪拜(DXB)|220|240" }, { display: "釜山", data: "Pusan|釜山(PUS)|253|540" }, { display: "加德满都", data: "Kathmandu|加德满都(KTM)|304|345" }, { display: "高雄", data: "Kaohsiung|高雄(KHH)|720|480" }, { display: "福冈", data: "Fukuoka|福冈(FUK)|248|540" }, { display: "金边", data: "PHNOM PENH|金边(PNH)|303|420" }, { display: "德里", data: "Delhi|德里(DEL)|230|330" }, { display: "济州岛", data: "JEJU|济州岛(CJU)|737|540" }, { display: "札幌", data: "Hokkaido|札幌(SPK)|641|540" }, { display: "伊斯坦布尔", data: "Istanbul|伊斯坦布尔(IST)|532|120" }, { display: "乌兰巴托", data: "ULAANBAATAR|乌兰巴托(ULN)|483|480" }, { display: "孟买", data: "Mumbai|孟买(BOM)|724|330" }, { display: "茨城", data: "IBARAKI|茨城(IBR)|20748|540" }], "欧洲": [{ display: "伦敦(英国)", data: "London|伦敦(英国)(LON)|338|0" }, { display: "巴黎", data: "Paris|巴黎(PAR)|192|60" }, { display: "法兰克福", data: "Frankfurt|法兰克福(FRA)|250|60" }, { display: "莫斯科", data: "Moscow|莫斯科(MOW)|366|180" }, { display: "罗马", data: "Rome|罗马(ROM)|343|60" }, { display: "阿姆斯特丹", data: "Amsterdam|阿姆斯特丹(AMS)|176|60" }, { display: "米兰", data: "Milan|米兰(MIL)|361|60" }, { display: "慕尼黑", data: "Munich|慕尼黑(MUC)|363|60" }, { display: "斯德哥尔摩", data: "Stockholm|斯德哥尔摩(STO)|420|60" }, { display: "柏林", data: "Berlin|柏林(BER)|193|60" }, { display: "曼彻斯特(英国)", data: "Manchester|曼彻斯特(英国)(MAN)|722|0" }, { display: "马德里", data: "Madrid|马德里(MAD)|357|60" }, { display: "苏黎世", data: "Zurich|苏黎世(ZRH)|434|60" }, { display: "布鲁塞尔", data: "Brussels|布鲁塞尔(BRU)|196|60" }, { display: "哥本哈根", data: "Copenhagen|哥本哈根(CPH)|260|60" }, { display: "赫尔辛基", data: "Helsinki|赫尔辛基(HEL)|277|120" }, { display: "维也纳", data: "Vienna|维也纳(VIE)|651|60" }, { display: "巴塞罗那", data: "Barcelona|巴塞罗那(BCN)|707|60" }, { display: "雅典", data: "Athens|雅典(ATH)|710|120" }, { display: "爱丁堡", data: "Edinburgh|爱丁堡(EDI)|706|0" }, { display: "伯明翰(英国)", data: "Birmingham|伯明翰(英国)(BHX)|1270|0" }, { display: "纽卡斯尔(英国)", data: "Newcastle|纽卡斯尔(英国)(NCL)|1289|0" }, { display: "日内瓦", data: "Geneva|日内瓦(GVA)|666|60" }, { display: "圣彼得堡", data: "SAINT PETERSBURG|圣彼得堡(LED)|798|180" }, { display: "格拉斯哥", data: "Glasgow|格拉斯哥(GLA)|780|0" }, { display: "基辅", data: "Kiev|基辅(IEV)|306|120" }, { display: "布达佩斯", data: "Budapest|布达佩斯(BUD)|637|60" }, { display: "汉堡", data: "Hamburg|汉堡(HAM)|763|60" }, { display: "布拉格", data: "Prague|布拉格(PRG)|1288|60" }, { display: "杜塞尔多夫", data: "Dusseldorf|杜塞尔多夫(DUS)|762|60" }], "美洲": [{ display: "纽约", data: "New York|纽约(NYC)|633|-300" }, { display: "洛杉矶", data: "Los Angeles|洛杉矶(LAX)|347|-480" }, { display: "旧金山", data: "San Francisco|旧金山(SFO)|313|-480" }, { display: "温哥华", data: "Vancouver|温哥华(YVR)|476|-480" }, { display: "芝加哥", data: "Chicago|芝加哥(CHI)|549|-360" }, { display: "多伦多", data: "Toronto|多伦多(YTO)|461|-300" }, { display: "西雅图", data: "Seattle|西雅图(SEA)|511|-480" }, { display: "华盛顿", data: "Washington|华盛顿(WAS)|676|-300" }, { display: "波士顿", data: "Boston|波士顿(BOS)|703|-300" }, { display: "底特律", data: "Detroit|底特律(DTT)|233|-300" }, { display: "亚特兰大", data: "Atlanta|亚特兰大(ATL)|704|-300" }, { display: "休斯敦", data: "Houston|休斯敦(HOU)|701|-360" }, { display: "蒙特利尔", data: "Montreal|蒙特利尔(YMQ)|759|-300" }, { display: "夏威夷", data: "Honolulu|夏威夷(HNL)|757|-600" }, { display: "塞班", data: "Saipan|塞班(SPN)|1237|600" }, { display: "达拉斯", data: "Dallas|达拉斯(DFW)|705|-360" }, { display: "明尼阿波利斯", data: "Minneapolis|明尼阿波利斯(MSP)|1238|-360" }, { display: "费城", data: "Philadelphia|费城(PHL)|1189|-300" }, { display: "圣保罗(巴西)", data: "Sao Paulo|圣保罗(巴西)(SAO)|415|-120" }, { display: "渥太华", data: "Ottawa|渥太华(YOW)|760|-300" }, { display: "墨西哥城", data: "Mexico City|墨西哥城(MEX)|691|-360" }, { display: "拉斯维加斯", data: "Las Vegas|拉斯维加斯(LAS)|675|-480" }, { display: "卡尔加里", data: "Calgary|卡尔加里(YYC)|761|-420" }, { display: "迈阿密", data: "Miami|迈阿密(MIA)|702|-300" }, { display: "丹佛", data: "Denver|丹佛(DEN)|699|-420" }, { display: "奥兰多", data: "Orlando|奥兰多(ORL)|1187|-300" }, { display: "波特兰(美国)", data: "Portland|波特兰(美国)(PDX)|694|-480" }, { display: "曼彻斯特(美国)", data: "Manchester|曼彻斯特(美国)(MHT)|1877|-300" }, { display: "埃德蒙顿", data: "Edmonton|埃德蒙顿(YEA)|1245|-420" }, { display: "布宜诺斯艾利斯", data: "Buenosaires|布宜诺斯艾利斯(BUE)|807|-180" }], "非洲": [{ display: "开罗", data: "Cairo|开罗(CAI)|332|120" }, { display: "约翰内斯堡", data: "Johannesburg|约翰内斯堡(JNB)|684|120" }, { display: "开普敦", data: "Cape Town|开普敦(CPT)|683|120" }, { display: "内罗毕", data: "Nairobi|内罗毕(NBO)|825|180" }, { display: "拉各斯", data: "Lagos|拉各斯(LOS)|783|60" }, { display: "罗安达", data: "Luanda|罗安达(LAD)|842|60" }, { display: "毛里求斯", data: "Mauritius|毛里求斯(MRU)|785|240" }, { display: "达累斯萨拉姆", data: "Dar es salaam|达累斯萨拉姆(DAR)|814|180" }, { display: "亚的斯亚贝巴", data: "Addis ababa|亚的斯亚贝巴(ADD)|635|180" }, { display: "喀土穆", data: "Khartoum|喀土穆(KRT)|1279|180" }, { display: "阿克拉", data: "Accra|阿克拉(ACC)|1274|0" }, { display: "阿尔及尔", data: "Algiers|阿尔及尔(ALG)|1271|60" }, { display: "卡萨布兰卡", data: "Casablanca|卡萨布兰卡(CAS)|809|0" }, { display: "德班", data: "durban|德班(DUR)|1278|120" }, { display: "突尼斯", data: "Tunis|突尼斯(TUN)|1280|60" }, { display: "卢萨卡", data: "Lusaka|卢萨卡(LUN)|816|120" }, { display: "哈拉雷", data: "Harare|哈拉雷(HRE)|849|120" }, { display: "雅温得", data: "Yaounde|雅温得(YAO)|4206|60" }, { display: "哈博罗内", data: "Gaborone|哈博罗内(GBE)|857|120" }, { display: "金沙萨", data: "Kinshasa|金沙萨(FIH)|845|60" }, { display: "马普托", data: "Maputo|马普托(MPM)|863|120" }, { display: "杜阿拉", data: "Douala|杜阿拉(DLA)|1272|60" }, { display: "费里敦", data: "Freetown|费里敦(FNA)|4210|0" }, { display: "阿比让", data: "Abidjan|阿比让(ABJ)|3265|0" }, { display: "卢克索", data: "Luxor|卢克索(LXR)|730|120" }], "大洋洲": [{ display: "悉尼(澳大利亚)", data: "Sydney|悉尼(澳大利亚)(SYD)|501|660" }, { display: "墨尔本(澳大利亚)", data: "Melbourne|墨尔本(澳大利亚)(MEL)|358|660" }, { display: "奥克兰(新西兰)", data: "Auckland|奥克兰(新西兰)(AKL)|678|780" }, { display: "布里斯班", data: "Brisbane|布里斯班(BNE)|680|600" }, { display: "阿德莱德", data: "Adelaide|阿德莱德(ADL)|1243|630" }, { display: "珀斯", data: "Perth|珀斯(PER)|681|480" }, { display: "惠灵顿", data: "Wellington|惠灵顿(WLG)|843|780" }, { display: "堪培拉", data: "Canberra|堪培拉(CBR)|679|660" }, { display: "凯恩斯", data: "Cairns|凯恩斯(CNS)|728|600" }, { display: "楠迪", data: "Nadi|楠迪(NAN)|791|780" }, { display: "黄金海岸", data: "Gold coast|黄金海岸(OOL)|1210|600" }, { display: "帕皮堤", data: "PAPEETE|帕皮堤(PPT)|5646|-600" }, { display: "霍巴特", data: "Hobart|霍巴特(HBA)|1446|660" }, { display: "达尔文", data: "Darwin|达尔文(DRW)|682|570" }, { display: "达尼丁", data: "DUNEDIN|达尼丁(DUD)|1297|780" }] }

$(document).ready(function () {
    //循环热门城市
    var labelFromcity = new Array();
    var labelFromcitydd = new Array();
    var rm = [];
    var rmNumber = 0;
    var hotList = [];

    $.each(citysFlight, function (key, value) {
        if (value[4] == "0") {
            rm.push(key);
        }
        //添加默认
        if (value[0] != "" && "PEK,SHA,CAN,SZX,CTU,DLC,KMG,SYX,HKG,BKK,FRA,SYD,FAR,HNL,NYC".indexOf(value[0]) > -1) {
            hotList.push(key);
        }

    })

    //    labelFromcity['热门城市'] = rm;
    //    labelFromcity['ABCDEF'] = GetCity("1");
    //    labelFromcity['GHIJ'] = GetCity("2");
    //    labelFromcity['KLMN'] = GetCity("3");
    //    labelFromcity['PQRSTUVW'] = GetCity("4");
    //    labelFromcity['XYZ'] = GetCity("5");
    labelFromcity['国内热门'] = GetCity("2", '国内热门');
    labelFromcity['国际热门'] = GetCity("1", '国际热门');
    labelFromcity['亚洲'] = GetCity("3", '亚洲');
    labelFromcity['欧洲'] = GetCity("4", '欧洲');
    labelFromcity['美洲'] = GetCity("5", '美洲');
    labelFromcity['非洲'] = GetCity("6", '非洲');
    labelFromcity['大洋洲'] = GetCity("7", '大洋洲');




    $('#txtDepartCity').querycity({ 'data': citysFlight, 'tabs': labelFromcity, 'hotList': hotList, 'nextIndex': $('#txtDestCity') });
    labelFromcitydd['国际热门'] = labelFromcity['国际热门'];
    labelFromcitydd['国内热门'] = labelFromcity['国内热门'];
    labelFromcitydd['亚洲'] = labelFromcity['亚洲'];
    labelFromcitydd['欧洲'] = labelFromcity['欧洲'];
    labelFromcitydd['美洲'] = labelFromcity['美洲'];
    labelFromcitydd['非洲'] = labelFromcity['非洲'];
    labelFromcitydd['大洋洲'] = labelFromcity['大洋洲'];
    $('#txtDestCity').querycity({ 'data': citysFlight, 'tabs': labelFromcitydd, 'hotList': hotList, 'nextIndex': $('#txtDeptureDate') });

})
function GetCity(filter, zname) {
    var zm = [];
    var zhouitem = hotcity[zname];

    $.each(zhouitem, function (key, value) {
        var cityinfo = value.data;
        var pattern = new RegExp("\\((.| )+?\\)", "igm");

        var citycode = cityinfo.match(pattern);

        var citycodes = citycode[0].replace("(", "").replace(")", "");

        var FdetailG = $.Enumerable.From(citysFlight).Where(function (x) { return x[0] == citycodes && x[7] == 1; }).ToArray();
        if (FdetailG != null && FdetailG != undefined && FdetailG.length > 0)
            zm.push(FdetailG[0][8]);
    });

    //$.each(citysFlight, function(key, value) {
    //    if (value[6] != "" && value[6] != null) {

    //        var FdetailG = $.Enumerable.From(zhouitem).Where(function (x) { return x.data == 1; }).OrderBy(function (x) { return x.FltNo; }).ToArray();

    //        var py = value[6].toUpperCase();

    //        if (filter == "1") {
    //            if (py.indexOf("GJ") > -1) {
    //                zm.push(key);
    //            }
    //        } else if (filter == "2") {
    //            if (py.indexOf("GN") > -1) {
    //                zm.push(key);
    //            }
    //        } else if (filter == "3") {
    //            if (py.indexOf("YZ") > -1) {
    //                zm.push(key);
    //            }
    //        } else if (filter == "4") {
    //            if (py.indexOf("OZ") > -1) {
    //                zm.push(key);
    //            }
    //        } else if (filter == "5") {
    //            if (py.indexOf("MZ") > -1) {
    //                zm.push(key);
    //            }
    //        } else if (filter == "6") {
    //            if (py.indexOf("FZ") > -1) {
    //                zm.push(key);
    //            }
    //        } else if (filter == "7") {
    //            if (py.indexOf("DY") > -1) {
    //                zm.push(key);
    //            }
    //        }

    //    }
    //})
    return zm;
}

(function ($) {
    if (citysFlight.length == 0) {
        //初始化各个城市
        citysFlight.length = 0;
        if (cityModel != null && cityModel != "") {
            var arrCity = cityModel.split(',');
            $.each(arrCity, function (i, items) {

                if (items != "" && items != null) {
                    var arrCityCol = items.split('|');
                    citysFlight[i] = (new Array(arrCityCol[0], arrCityCol[1], arrCityCol[2], arrCityCol[3], arrCityCol[4], arrCityCol[5], arrCityCol[6], arrCityCol[7], arrCityCol[8]));
                }
            })
        } else {
            $.ajax({
                type: "post",
                url: "http://www.woofare.com/FlightManage/AJAX_FlightManage.aspx",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                //data: { Type: "FlightJsonCityNew" },
                data: { Type: "GetSPJsonAirCity" },
                async: false,
                success: function (cityData) {
                    if (cityData != null && cityData != "" && cityData.length > 0) {
                        try {
                            AirPortModelList = cityData;
                        } catch (e) { }
                        var iIndex = 0;
                        $.each(cityData, function (i, items) {

                            var temp_CityCode = $.trim(items.CityCode);
                            var temp_AirPortCode = $.trim(items.AirportCode);
                            var temp_CityNameCN = items.CityCode == items.AirportCode ? $.trim(items.Name) : $.trim(items.AirportName);
                            var temp_CityNameEN = items.Qureys;//items.CityCode == items.AirportCode ? $.trim(items.EName) : $.trim(items.AirportEName);
                            var temp_Country = "";
                            var temp_HotTag = $.trim("0");
                            var temp_PinYin = "";//$.trim(items.Spell);
                            var temp_PinYinS = ""//$.trim(items.ShortSpell);
                            var temp_CityPoint = $.trim("");
                            var temp_POPType = $.trim("");
                            var temp_CityType = items.CityCode == items.AirportCode ? 1 : 2;
                            //if ($.trim(temp_Country.toUpperCase()) == 'EN') {
                            //jiu|九江|jiujiang|jj|1
                            citysFlight[iIndex] = (new Array(temp_AirPortCode, temp_CityNameCN, temp_PinYin, temp_PinYinS, temp_HotTag, temp_CityCode, temp_POPType, temp_CityType, iIndex));
                            iIndex++;
                            // }
                            //var airportlist=cityData.Datas;
                            //if(airportlist!=null && airportlist!=undefined)
                            //{
                            //    $.each(airportlist, function (i, aitems) {
                            //        var atemp_CityCode = $.trim(aitems.CityCode);
                            //        var atemp_AirPortCode = $.trim(aitems.Code);
                            //        var atemp_CityNameCN = $.trim(aitems.Name);
                            //        var atemp_CityNameEN = $.trim(aitems.EName);
                            //        var atemp_Country = $.trim(aitems.Country);
                            //        var atemp_HotTag = $.trim("0");
                            //        var atemp_PinYin = $.trim(aitems.EName);
                            //        var atemp_PinYinS = $.trim(aitems.EName);
                            //        var atemp_POPType = $.trim("");
                            //        //if ($.trim(temp_Country.toUpperCase()) == 'EN') {
                            //        //jiu|九江|jiujiang|jj|1
                            //        citysFlight[iIndex] = (new Array(atemp_AirPortCode, temp_CityNameCN, temp_PinYin, temp_PinYinS, temp_HotTag, temp_CityCode, temp_POPType, 2, iIndex));
                            //        iIndex++;
                            //    });
                            //}
                        })
                    }
                },
                error: function (err) {
                }
            })
        }

    }
    $.querycity = function (input, options) {
        var input = $(input);
        input.attr('autocomplete', 'off');

        //yxb添加 start
        //设置不显示pop层 当为1时不显示
        var tmp_noshowpop = input.attr('no_showpop');
        //yxb添加 end

        if ($.trim(input.val()) == '' || $.trim(input.val()) == options.defaultText) {
            input.val(options.defaultText).css('color', '#000');
        }
        var t_pop_focus = false;
        var t_suggest_focus = false;
        var t_suggest_page_click = false;
        $('body').append("<div id='pop_city_" + input.attr('id') + "' class='pop_city' style='display:none'><p class='pop_head'></p><ul class='list_label'></ul><div class='pop_city_container'></div></div>");
        $('body').append("<div id='suggest_city_" + input.attr('id') + "' class='list_city' style='display:none'><div class='list_city_head'></div><div class='list_city_container'></div><div class='page_break'></div></div>");
        var popMain = $("#pop_city_" + input.attr('id'))
        var popContainer = popMain.find('.pop_city_container');
        var labelMain = popMain.find('.list_label');
        var suggestMain = $("#suggest_city_" + input.attr('id'));
        popMain.bgIframe();
        suggestMain.bgIframe();
        popInit();

        resetPosition();

        $(window).resize(function () {

            resetPosition();
        });

        input.focus(function () {

            resetPosition(); // 表示用于重新定位
            if (t_suggest_page_click) {
                t_suggest_page_click = false;
                return true;
            }

            if ($.trim($(this).val()) == options.defaultText) {
                $(this).val('').css('color', '#000');
            }

            //yxb修改
            if (tmp_noshowpop == "1") {
                loadCity();
                suggestMain.show();
                popMain.hide();
            }
            else {
                suggestMain.hide();
                popMain.show();
            }

            //return false;
        }).click(function () {
            if (t_suggest_page_click) {
                t_suggest_page_click = false;
                return;
            }
            //选中文本
            input.select();

            //yxb修改
            if (tmp_noshowpop == "1") {
                loadCity();
                suggestMain.show();
                popMain.hide();
            }
            else {
                suggestMain.hide();
                popMain.show();
            }

            /*
            if ($.trim($(this).val()) == options.defaultText) {
            $(this).val('').css('color', '#000');
            suggestMain.hide();
            popMain.show();
            }
            else {
            queryCity();
            }
            */
            return false;
        }).blur(function () {
            if (t_pop_focus == false) {
                popMain.hide();
                if ($.trim(input.val()) == '' || $.trim(input.val()) == options.defaultText) {
                    input.val(options.defaultText).css('color', '#aaa');
                }
            }
            return false;
        });
        labelMain.find('a').live('click', function () {
            input.focus(); //使焦点在输入框，避免blur事件无法触发
            t_pop_focus = true;
            var labelId = $(this).attr('id');
            labelMain.find('li a').removeClass('current');
            $(this).addClass('current');
            popContainer.find('ul').hide();
            $("#" + labelId + '_container').show();
        });
        popContainer.find('a').live('click', function () {
            //已修改
            var cityname = $(this).text();
            var airCityCode = $(this).attr('aircitycode');
            var airPortCode = $(this).attr('airportcode');

            var cityitem = eachCity(cityname, airCityCode, airPortCode);
            var cityCode = cityitem[0].toUpperCase();
            input.val($(this).html() + '(' + cityCode + ')');
            $('#' + input[0].id).attr('citycode', cityCode).attr('cityname', $(this).html()).attr("pcitycode", cityitem[5].toUpperCase()); // lijunli update 2013/12/7

            popMain.hide();

            if (options.nextIndex != null && options.nextIndex != "undefined") {
                if (options.nextIndex.attr("id") == "txtDestCity") {
                    DestCityStatus_Inter = 2;
                }
                options.nextIndex.focus();
            }

        });
        popMain.mouseover(function () {
            t_pop_focus = true;
        }).mouseout(function () {
            t_pop_focus = false;
        });

        input.blur(function () {
            if (t_suggest_focus == false) {
                if ($(this).val() == '') {
                    //已修改  获取城市编码以及机场编码
                    var cityInitName = suggestMain.find('.list_city_container a.selected').children('b');
                    if (cityInitName.length > 0) {
                        var cityname = cityInitName.text();
                        var airCityCode = cityInitName.attr('aircitycode');
                        var airPortCode = cityInitName.attr('airportcode');

                        var cityitem = eachCity(cityname, airCityCode, airPortCode);
                        var cityCode = cityitem[0].toUpperCase();

                        $(this).val(cityname + '(' + cityCode + ')');
                        $('#' + $(this).id).attr('citycode', cityCode).attr('cityname', cityname).attr("pcitycode", cityitem[5].toUpperCase());
                    }
                }
                suggestMain.hide();
            }
        }).keydown(function (event) {

            popMain.hide();
            event = window.event || event;
            var keyCode = event.keyCode || event.which || event.charCode;
            if (keyCode == 37) {//左
                prevPage();
            } else if (keyCode == 39) {//右
                nextPage();
            } else if (keyCode == 38) {//上
                prevResult();
            } else if (keyCode == 40) {//下
                nextResult();
            }
            if (9 == keyCode) {
                var $nameSelected = suggestMain.find('.list_city_container a.selected');
                if ($nameSelected.length > 0) {
                    //已修改  获取城市编码以及机场编码
                    var cityInitName = suggestMain.find('.list_city_container a.selected').children('b');
                    var cityname = cityInitName.text();
                    var airCityCode = cityInitName.attr('aircitycode');
                    var airPortCode = cityInitName.attr('airportcode');

                    var cityitem = eachCity(cityname, airCityCode, airPortCode);
                    var cityCode = cityitem[0].toUpperCase();
                    input.val(cityname + '(' + cityCode + ')');
                    //$("#hid" + input[0].id).val(cityCode);
                    $('#' + input[0].id).attr('citycode', cityCode).attr('cityname', cityname).attr("pcitycode", cityitem[5].toUpperCase());
                    suggestMain.hide();
                    //yangxubo修改
                    if (options.nextIndex != null && options.nextIndex != "undefined") {
                        if (options.nextIndex.attr("id") == "txtDestCity") {
                            DestCityStatus_Inter = 2;
                        }
                        options.nextIndex.focus();
                        return false;
                    }
                }
            }
        }).keypress(function (event) {
            event = window.event || event;
            var keyCode = event.keyCode || event.which || event.charCode;

            if (13 == keyCode) {
                var $nameSelected = suggestMain.find('.list_city_container a.selected');
                if ($nameSelected.length > 0) {
                    //已修改
                    var $cityInitName = $nameSelected.children('b');
                    var cityname = $cityInitName.text();
                    var airCityCode = $cityInitName.attr('aircitycode');
                    var airPortCode = $cityInitName.attr('airportcode');
                    var cityitem = eachCity(cityname, airCityCode, airPortCode);

                    var cityCode = cityitem[0].toUpperCase();
                    input.val(cityname + '(' + cityCode + ')');
                    // $("#hid" + input[0].id).val(cityCode);
                    $('#' + input[0].id).attr('citycode', cityCode).attr('cityname', cityname).attr('pcitycode', cityitem[5].toUpperCase());


                    suggestMain.hide();

                    if (options.nextIndex != null && options.nextIndex != "undefined") {
                        if (options.nextIndex.attr("id") == "txtDestCity") {
                            DestCityStatus_Inter = 2;
                        }
                        options.nextIndex.focus();
                    }
                }
                // 防止回车时刷新
                return false;
            }

        }).keyup(function (event) {
            event = window.event || event;
            var keyCode = event.keyCode || event.which || event.charCode;
            if (keyCode != 13 && keyCode != 37 && keyCode != 39 && keyCode != 9 && keyCode != 38 && keyCode != 40) {
                //keyCode == 9是tab切换键
                queryCity();
            }
        });
        $(document).click(function (event) {
            var sdaf = event.target.name;
            if (event.target.id != "pop_city_txtDepartCity" && event.target.id != "suggest_city_txtDestCity" && event.target.id != "txtDepartCity" && event.target.id != "txtDestCity" && event.target.name != "TAB" && event.target.role != "pageIndex") {
                $("#pop_city_txtDepartCity").hide();
                $("#suggest_city_txtDestCity").hide();

                if (DestCityStatus_Inter == 0 && $('#pop_city_txtDestCity').is(':hidden') == false) {
                    $("#pop_city_txtDestCity").hide();
                    $("#suggest_city_txtDestCity").hide();
                }

                DestCityStatus_Inter = (DestCityStatus_Inter == 2 ? 1 : 0);
            }
        });
        suggestMain.find('.list_city_container a').live('click', function () {

            //alert('dsds');
            //已修改
            var $cityInitName = $(this).children('b');
            var cityname = $cityInitName.text();
            var airCityCode = $cityInitName.attr('aircitycode');
            var airPortCode = $cityInitName.attr('airportcode');
            var cityitem = eachCity(cityname, airCityCode, airPortCode);
            var cityCode = cityitem[0].toUpperCase();

            $('#' + input[0].id).attr('citycode', cityCode).attr('cityname', cityname).attr('pcitycode', cityitem[5].toUpperCase());

            input.val($(this).children('b').text() + '(' + cityCode + ')');
            suggestMain.hide();

            if (options.nextIndex != null && options.nextIndex != "undefined") {
                if (options.nextIndex.attr("id") == "txtDestCity") {
                    DestCityStatus_Inter = 2;
                }
                options.nextIndex.focus();

            }



        }).live('mouseover', function () {
            t_suggest_focus = true;
        }).live('mouseout', function () {
            t_suggest_focus = false;
        });
        suggestMain.find('.page_break a').live('mouseover', function () {
            t_suggest_focus = true;
        }).live('mouseout', function () {
            t_suggest_focus = false;
        });
        suggestMain.find('.page_break a').live('click', function (event) {
            t_suggest_page_click = true;
            input.click();
            if ($(this).attr('inum') != null) {
                setAddPage($(this).attr('inum'));
            }
            return false; // 避免冒泡事件
        });

        function eachCity(cityName, airCityCode, airPortCode) {

            var reusltMsg = "";
            var _IsOK = false;
            $.each(citysFlight, function (y, Cval) {
                if (Cval[1] == cityName) {
                    if (airCityCode != undefined && airPortCode != undefined) {
                        if (Cval[0].toUpperCase() == airPortCode.toUpperCase() && Cval[5].toUpperCase() == airCityCode.toUpperCase()) {
                            reusltMsg = Cval;
                            _IsOK = true;
                            return false;
                        }
                    }
                    // 如果第一个名称匹配上了，那么先赋值，如果编码未匹配上，那么使用名字匹配上的，否则使用编码匹配上的
                    if (!_IsOK) {
                        reusltMsg = Cval;
                    }
                }
            })
            return reusltMsg;
        }


        function nextPage() {
            var add_cur = suggestMain.find(".page_break a.current").next();
            if (add_cur != null) {
                if ($(add_cur).attr("inum") != null) {
                    setAddPage($(add_cur).attr("inum"));
                }
            }
        }
        function prevPage() {
            var add_cur = suggestMain.find(".page_break a.current").prev();
            if (add_cur != null) {
                if ($(add_cur).attr("inum") != null) {
                    setAddPage($(add_cur).attr("inum"));
                }
            }
        }
        function nextResult() {
            var t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a.selected')[0]);
            suggestMain.find('.list_city_container').children().removeClass('selected');
            t_index += 1;
            var t_end = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').filter(':last')[0]);
            if (t_index > t_end) {
                t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').eq(0));
            }
            suggestMain.find('.list_city_container a').eq(t_index).addClass('selected');
        }
        function prevResult() {

            var t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a.selected')[0]);
            suggestMain.find('.list_city_container').children().removeClass('selected');
            t_index -= 1;
            var t_start = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').filter(':first')[0]);
            if (t_index < t_start) {
                t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').filter(':last')[0]);
            }
            suggestMain.find('.list_city_container a').eq(t_index).addClass('selected');
        }
        function loadCity() {
            var cityList = suggestMain.find('.list_city_container');
            cityList.empty();
            if (options.hotList) {
                var hotList = options.hotList;
            } else {
                var hotList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            }
            $.each(hotList, function (n, Xitem) {
                if (n > options.suggestLength) {
                    return;
                }
                var _data = options.data[Xitem];
                cityList.append("<a href='javascript:void(0)' ><span>" + _data[0] + "</span><b  airportcode=" + _data[0] + "  aircitycode=" + _data[5] + ">" + _data[1] + "</b></a>");
            });

            suggestMain.find('.list_city_head').html(options.suggestTitleText);
            setAddPage(1);
            suggestMain.show();
            setTopSelect();
        }
        function queryCity() {
            popMain.hide();
            var value = input.val().toUpperCase(); //.toLowerCase();
            if (value.length == 0) {
                loadCity();
                return;
            }
            var city_container = suggestMain.find('.list_city_container');
            var isHave = false;
            var _tmp = new Array();
            $.each(options.data, function (n, Yitem) {//Array(temp_CityCode, temp_CityNameCN, temp_PinYin, temp_PinYinS, temp_HotTag)
                var _data = Yitem;
                if (typeof (_data) != 'undefined') {
                    if (_data[3].indexOf(value) >= 0 || _data[0].indexOf(value) >= 0 || _data[2].toUpperCase().indexOf(value) >= 0 || _data[1].indexOf(value) >= 0 || _data[5].indexOf(value) >= 0) {
                        isHave = true;
                        _tmp.push(_data);
                    }
                }
            });
            /*
            $.each(options.data, function(n, Yitem) {
            var _data = Yitem;
            if (typeof (_data) != 'undefined') {
            if (_data[2].indexOf(value) >= 0 || _data[1].indexOf(value) >= 0) {
            isHave = true;
            _tmp.push(_data);
            }
            }
            });
            */
            //city_container.empty(); // 有没有数据都清除 by jlli  2015/03/23
            if (isHave) {
                city_container.empty();
                $.each(_tmp, function (n, Bitem) {
                    var _data = Bitem;
                    if (_data[0] == 'MEL' || _data[5] == 'MEL') {
                        var pdp = _data;
                    }
                    //_data[2]  拼音
                    city_container.append("<a href='javascript:void(0)' role='pageIndex' style='display:none'><span>" +_data[0]+"</span><b airportcode=" + _data[0] + "  aircitycode=" + _data[5] + ">" + _data[1] + "</b></a>");
                });
                suggestMain.find('.list_city_head').html(value + ",按拼音排序");
                setAddPage(1);
                setTopSelect()
            } else {
                suggestMain.find('.list_city_head').html("<span class='msg'>对不起,找不到" + value + "</span>");
            }
            suggestMain.show();
        }
        function setAddPage(pageIndex) {

            suggestMain.find('.list_city_container a').removeClass('selected');
            suggestMain.find('.list_city_container').children().each(function (i) {
                var k = i + 1;
                if (k > options.suggestLength * (pageIndex - 1) && k <= options.suggestLength * pageIndex) {
                    $(this).css('display', 'block');
                } else {
                    $(this).hide();
                }
            });
            setTopSelect();
            setAddPageHtml(pageIndex);
        }
        function setAddPageHtml(pageIndex) {
            var cityPageBreak = suggestMain.find('.page_break');
            cityPageBreak.empty();
            if (suggestMain.find('.list_city_container').children().length > options.suggestLength) {
                var pageBreakSize = Math.ceil(suggestMain.find('.list_city_container').children().length / options.suggestLength);
                if (pageBreakSize <= 1) {
                    return;
                }
                var start = end = pageIndex;
                for (var index = 0, num = 1; index < options.pageLength && num < options.pageLength; index++) {
                    if (start > 1) {
                        start--; num++;
                    }
                    if (end < pageBreakSize) {
                        end++; num++;
                    }
                }
                //                if (pageIndex > 1) {
                //                    cityPageBreak.append("<a href='javascript:void(0)' role='pageIndex' inum='" + (pageIndex - 1) + "'>&lt;-</a>");
                //                }
                for (var i = start; i <= end; i++) {
                    if (i == pageIndex) {
                        cityPageBreak.append("<a href='javascript:void(0)' role='pageIndex' class='current' inum='" + (i) + "'>" + (i) + "</a");
                    } else {
                        cityPageBreak.append("<a href='javascript:void(0)' role='pageIndex' inum='" + (i) + "'>" + (i) + "</a");
                    }
                }
                //                if (pageIndex < pageBreakSize) {
                //                    cityPageBreak.append("<a href='javascript:void(0);' role='pageIndex' inum='" + (i) + "'>-&gt;</a>");
                //                }
                cityPageBreak.show();
                //suggestMain.show();
            } else {
                cityPageBreak.hide();
            }
            return false;
        }
        function setTopSelect() {
            if (suggestMain.find('.list_city_container').children().length > 0) {
                suggestMain.find('.list_city_container').children(':visible').eq(0).addClass('selected');
            }
        }
        function onSelect() {
            if (typeof options.onSelect == 'function') {
                alert(1);
            }
        }
        function popInit() {
            var index = 0;
            popMain.find('.pop_head').html(options.popTitleText);
            if (!options.tabs) {
                popContainer.append("<ul id='label_" + input.attr('id') + "_container' name='TAB' class='current'></ul>");
                labelMain.remove();
                for (var Zitem in options.data) {
                    if (Zitem != "remove"
                    && Zitem != "getCitySet"
                    && Zitem != "getTimeField"
                    && Zitem != "getDeliverSet"
                    && Zitem != "getFlightSet"
                    && Zitem != "IsEnable"
                    && Zitem != "ReDisplay"
                    && Zitem != "sortBy"
                    && Zitem != "filter"
                    && Zitem != "equalFilter"
                    && Zitem != "equalRepulsionFilter"
                    && Zitem != "unZipModel"
                    ) {
                        $("#label_" + input.attr('id') + "_container").append("<li><a href='javascript:void(0)' airportcode=" + options.data[Zitem][0] + "  aircitycode=" + options.data[Zitem][5] + ">" + options.data[Zitem][1] + "</a></li>");
                    }
                }
                return;
            }
            for (var itemLabel in options.tabs) {
                if (itemLabel != "remove"
                    && itemLabel != "getCitySet"
                    && itemLabel != "getTimeField"
                    && itemLabel != "getDeliverSet"
                    && itemLabel != "getFlightSet"
                    && itemLabel != "IsEnable"
                    && itemLabel != "ReDisplay"
                    && itemLabel != "sortBy"
                    && itemLabel != "filter"
                    && itemLabel != "equalFilter"
                    && itemLabel != "equalRepulsionFilter"
                    && itemLabel != "unZipModel"
                    ) {
                    index++;
                    if (index == 1) {

                        popContainer.append("<ul id='label_" + input.attr('id') + index + "_container' name='TAB' class='current' data-type='" + itemLabel + "'></ul>");
                        labelMain.append("<li><a id='label_" + input.attr('id') + index + "'  name='TAB' class='current' href='javascript:void(0)'>" + itemLabel + "</a></li>");
                    } else {
                        popContainer.append("<ul style='display:none' id='label_" + input.attr('id') + index + "_container' data-type='" + itemLabel + "'></ul>");
                        labelMain.append("<li><a id='label_" + input.attr('id') + index + "'  name='TAB'  href='javascript:void(0)'>" + itemLabel + "</a></li>");
                    }
                    for (var Aitem in options.tabs[itemLabel]) {

                        if (Aitem != "remove"
                    && Aitem != "getCitySet"
                    && Aitem != "getTimeField"
                    && Aitem != "getDeliverSet"
                    && Aitem != "getFlightSet"
                    && Aitem != "IsEnable"
                    && Aitem != "ReDisplay"
                    && Aitem != "sortBy"
                    && Aitem != "filter"
                    && Aitem != "equalFilter"
                    && Aitem != "equalRepulsionFilter"
                    && Aitem != "unZipModel"
                    ) {
                            var cityCode = options.tabs[itemLabel][Aitem];

                            if (!options.data[cityCode]) {
                                break;
                            }

                            $("#label_" + input.attr('id') + index + "_container").append("<li><a href='javascript:void(0)' airportcode=" + options.data[cityCode][0] + "  aircitycode=" + options.data[cityCode][5] + ">" + options.data[cityCode][1] + "</a></li>");
                        }
                    }
                }
            }
        }
        function resetPosition() {
            popMain.css({ 'top': input.offset().top + input.outerHeight(), 'left': input.offset().left });
            suggestMain.css({ 'top': input.offset().top + input.outerHeight(), 'left': input.offset().left });
        }
    }
    $.fn.querycity = function (options) {
        var defaults = {
            'data': {},
            'tabs': '',
            'hotList': '',
            'defaultText': '中文/拼音',
            'popTitleText': '请选择城市或输入城市名称或拼音',
            'suggestTitleText': '输入中文/拼音或↑↓选择',
            'suggestLength': 10,
            'pageLength': 5,
            'onSelect': '',
            'nextIndex': null
        };
        var options = $.extend(defaults, options);
        this.each(function () {
            new $.querycity(this, options);
        });
        return this;
    };
})(jQuery);



(function ($) {
    $.fn.bgIframe = $.fn.bgiframe = function (s) {
        if ($.browser.msie && /6.0/.test(navigator.userAgent)) {
            s = $.extend({
                top: 'auto', // auto == .currentStyle.borderTopWidth
                left: 'auto', // auto == .currentStyle.borderLeftWidth
                width: 'auto', // auto == offsetWidth
                height: 'auto', // auto == offsetHeight
                opacity: true,
                src: 'javascript:false;'
            }, s || {});
            var prop = function (n) { return n && n.constructor == Number ? n + 'px' : n; },
		    html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + s.src + '"' +
		               'style="display:block;position:absolute;z-index:-1;' +
			               (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');' : '') +
					       'top:' + (s.top == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')' : prop(s.top)) + ';' +
					       'left:' + (s.left == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')' : prop(s.left)) + ';' +
					       'width:' + (s.width == 'auto' ? 'expression(this.parentNode.offsetWidth+\'px\')' : prop(s.width)) + ';' +
					       'height:' + (s.height == 'auto' ? 'expression(this.parentNode.offsetHeight+\'px\')' : prop(s.height)) + ';' +
					'"/>';
            var syleV = 'style="display:block;position:absolute;z-index:-1;' +
			               (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');' : '') +
					       'top:' + (s.top == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')' : prop(s.top)) + ';' +
					       'left:' + (s.left == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')' : prop(s.left)) + ';' +
					       'width:' + (s.width == 'auto' ? 'expression(this.parentNode.offsetWidth+\'px\')' : prop(s.width)) + ';' +
					       'height:' + (s.height == 'auto' ? 'expression(this.parentNode.offsetHeight+\'px\')' : prop(s.height)) + ';' +
					'"/>';




            return this.each(function () {
                if ($('> iframe.bgiframe', this).length == 0) {
                    var iframe = document.createElement("iframe");
                    iframe.setAttribute("class", "bgiframe");
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("tabindex", "-1");
                    iframe.setAttribute("src", s.src);
                    iframe.setAttribute("style", syleV);
                    // this.insertBefore(iframe, this.firstChild);
                    // this.insertBefore(document.createElement(html), this.firstChild);
                }
            });
        }
        return this;
    };
})(jQuery);

