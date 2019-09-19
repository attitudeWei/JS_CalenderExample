// JavaScript source code

var NowDate = document.getElementsByClassName("nowDate");
var day_class = document.getElementsByClassName("day");
var getDate = new Date();
var thisYear = getDate.getFullYear();
var thisMonth = getDate.getMonth();
var date_string_list = new Array;
window.onload = function () {
    var now_printDate = document.getElementsByClassName("title");
    var get_date = new Date();
    //alert(get_date.getFullYear());//取得西元年
    //alert(get_date.getMonth());//取得月份 從0開始計算
    var month_list = [12];
    month_list[0] = "1";
    month_list[1] = "2";
    month_list[2] = "3";
    month_list[3] = "4";
    month_list[4] = "5";
    month_list[5] = "6";
    month_list[6] = "7"
    month_list[7] = "8";
    month_list[8] = "9";
    month_list[9] = "10";
    month_list[10] = "11";
    month_list[11] = "12";
    //alert(get_date.getDate());//取的號
    //alert(get_date.getDay());//取得星期
    var week_list = [7];
    week_list[0] = "Sunday";
    week_list[1] = "Monday";
    week_list[2] = "Tuesday";
    week_list[3] = "Wednesday";
    week_list[4] = "Thurday";
    week_list[5] = "Friday";
    week_list[6] = "Saturday";
    now_printDate[0].innerHTML = "Today: " + get_date.getFullYear() + "/" + month_list[get_date.getMonth()] + "/" + get_date.getDate() + " " + week_list[get_date.getDay()]
    NowDate[0].innerHTML = get_date.getFullYear() + "/" + month_list[get_date.getMonth()];
    thisMonthClick()
}





var lastMonthData, totalLastMonthDay;
function thisMonthClick() {
   
    thisYear = getDate.getFullYear();
    thisMonth = getDate.getMonth();
    var startDay = new Date(thisYear, thisMonth, 1).getDay();
    var totalOneMonthDay = new Date(thisYear, thisMonth+1, 0).getDate();
    

    lastMonthData = fc_lastMonth(thisYear, thisMonth);
    totalLastMonthDay = new Date(lastMonthData.changeLastYear, lastMonthData.lastMonth +1, 0).getDate();
    
    
    
    run_get_DayValue(startDay, totalOneMonthDay, totalLastMonthDay);
    NowDate[0].innerHTML = thisYear + "/" + (thisMonth + 1);
}

function run_get_DayValue(start, total, totalLast) {
    var lastDay = 0;
    var nextDay = 1;
    for (var i = 0; i < day_class.length; i++) {
        if (start - i > 0) {
            if (i != 0) {
                totalLast = totalLast - 1;
            }
            lastDay++
            day_class[start - i - 1].innerHTML = totalLast;
        }
        else if (i - lastDay > total - 1) {
            day_class[i].innerHTML = nextDay;
            nextDay++;
        }
        else {
            day_class[i].innerHTML = i + 1 - lastDay;
        }
    }
}

function bt_fc_nextMonth() {
    date_string_list = NowDate[0].innerHTML.split("/")
    
    var nextMonthData = fc_nextMonth(date_string_list[0], date_string_list[1]- 1);
    
    var cookingNextYear = nextMonthData.changeNextYear;
    //alert(cookingNextYear);
    var cookingNextMonth = nextMonthData.nextMonth;
    //alert(cookingNextMonth);
    var nextStartDate = new Date(cookingNextYear, cookingNextMonth, 1).getDay();
    var totalNextOneMonthDay = new Date(cookingNextYear, cookingNextMonth + 1, 0).getDate();
    nextMonthData = bt_fc_lastMonth(cookingNextYear, cookingNextMonth);
    totalLastMonthDay = new Date(lastMonthData.changeLastYear, lastMonthData.lastMonth + 1, 0).getDate();
    run_get_DayValue(nextStartDate, totalNextOneMonthDay, totalLastMonthDay);
    NowDate[0].innerHTML = cookingNextYear + "/" + (cookingNextMonth + 1);
}

function bt_fc_lastMonth() {
    date_string_list = NowDate[0].innerHTML.split("/")
    lastMonthData = fc_lastMonth(date_string_list[0], date_string_list[1]-1);

    var cookingLastYear = lastMonthData.changeLastYear;

    var cookingLastMonth = lastMonthData.lastMonth;
    
    var lastStartDate = new Date(cookingLastYear, cookingLastMonth, 1).getDay();
    var totallastOneMonthDay = new Date(cookingLastYear, cookingLastMonth+1, 0).getDate();
    lastMonthData = fc_lastMonth(cookingLastYear, cookingLastMonth);
    totalLastMonthDay = new Date(lastMonthData.changeLastYear, lastMonthData.lastMonth + 1, 0).getDate();
    run_get_DayValue(lastStartDate, totallastOneMonthDay, totalLastMonthDay);
    NowDate[0].innerHTML = cookingLastYear + "/" + (cookingLastMonth+1);
}

function fc_lastMonth(thisYear, thisMonth) {
    var lastMonth = thisMonth;
    var changeLastYear = thisYear;
    if (thisMonth == 0) {
        changeLastYear--;
        lastMonth = 11;
    } else {
        lastMonth--
    }
    return { changeLastYear, lastMonth};
};

function fc_nextMonth(thisYear, thisMonth) {
    var nextMonth = thisMonth;
    var changeNextYear = thisYear;
   
    if (nextMonth == 11) {
        changeNextYear++;
        nextMonth = 0;
    } else {
        nextMonth++;
    }
    
    return { changeNextYear, nextMonth}
};

