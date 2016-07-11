(function ($) {
    $.fn.extend({
        guguToggleCheck: function (tar) {
            var _this = this;
            if ($(_this).prop("checked")) {
                $(tar).each(function () {
                    $(this).prop("checked", true);
                });
            } else {
                $(tar).each(function () {
                    $(this).prop("checked", false);
                });
            }
        },
    });

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    // Scroll to ele
    $.fn.extend({
        guScrollTo: function (speed, easing) {
            return this.each(function () {
                var targetOffset = $(this).offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, speed, easing);
            });
        }
    });

    // Animation
    $.fn.extend({
        guguAnimateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $.extend({
        hook: function (hookName) {

            var selector;
            if (!hookName || hookName === '*') {
                // select all data-hooks
                selector = '[data-hook]'
            } else {
                // select specific data-hook
                selector = '[data-hook="' + hookName + '"]';
            }
            return $(selector);
        }
    });

    $.guguFilterDate = function (time, format) {
        /// 將時間格式轉換為yyyy/MM/dd HH:mm:ss 字串
        if (time !== null && time !== undefined) {
            var res = time.replace(/t/gi, " ");
            res = res.replace(/\-/gi, "/");
            var _time = res.split('.');

            var d = new Date(_time[0]);


            if (format === "long") {
                return _time[0];
            } else {
                return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
            }
        } else {
            return "";
        }
    };

    $.guguSplitDate = function (time) {
        /// 將時間格式轉換為yyyy-MM-dd 字串
        if (time !== null && time !== undefined) {
            var res = time.split(" ");

            return res[0];

        } else {
            return "";
        }
    };

    $.isCheckEmailVal = function (email) {
        emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

        var es = email.search(emailRule);

        if (es != -1) {
            return true;
        } else {
            return false;
        }
    };

    $.isCheckYahooEmailVal = function (email) {
        // validated yahoo email
        emailRule = /^[^@]+@(yahoo)\.(com.tw|com)$/i;

        //emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

        var es = email.search(emailRule);

        if (es != -1) {
            return true;
        } else {
            return false;
        }
    };

    $.isChkPhoneNumStarVal = function (number) {
        if (number.match(/\*/g) === null) {
            if (!(/^[0-9]{2}\d{8}$/.test(number))) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    };

    // 判斷帳號 至少包含一個英文字
    $.isChkAccVal = function (str) {
        if(str){
            return /^(?!.*[^a-zA-Z0-9])(?=.*[a-zA-Z]).{5,20}$/i.test(str);
        } else {
            return false;
        }
    };

    // 判斷帳號 至少包含一個英文字及一個數字
    $.isChkAcc2Val = function (str) {
        if(str){
            return /^(?!.*[^a-zA-Z0-9])(?=.*\d)(?=.*[a-zA-Z]).{5,20}$/i.test(str);
        } else {
            return false;
        }
    };

    $.isChkAllPhoneStarVal = function (number) {
        if (number.match(/\*/g) === null) {
            if (!(/^\d{9,11}$/.test(number))) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    };

    $.reGetNotifyCount = function () {
        var isLogin = $("#isLogin").data('login');

        if (isLogin) {
            $.ajax({
                cache: false,
                url: '/notification/GetUnread/',
                type: "POST",
                dataType: 'json',
                success: function (data, status) {
                    //console.log(data);
                    var total = 0;
                    for (var i in data.UnreadCountList) {
                        total += parseInt(data.UnreadCountList[i].Count);

                        switch (parseInt(data.UnreadCountList[i].NotifyType)) {
                            case 1:
                                if (data.UnreadCountList[i].Count > 0) {
                                    $("#noti1").html(data.UnreadCountList[i].Count);
                                    $("#mnoti1").html(data.UnreadCountList[i].Count);
                                    $("#noti1").show();
                                    $("#mnoti1").show();
                                } else {
                                    $("#noti1").hide();
                                    $("#mnoti1").hide();
                                }

                                break;
                            case 2:
                                if (data.UnreadCountList[i].Count > 0) {
                                    $("#noti2").html(data.UnreadCountList[i].Count);
                                    $("#mnoti2").html(data.UnreadCountList[i].Count);
                                    $("#noti2").show();
                                    $("#mnoti2").show();
                                } else {
                                    $("#noti2").hide();
                                    $("#mnoti2").hide();
                                }

                                break;
                            case 3:
                                if (data.UnreadCountList[i].Count > 0) {
                                    $("#noti3").html(data.UnreadCountList[i].Count);
                                    $("#mnoti3").html(data.UnreadCountList[i].Count);
                                    $("#noti3").show();
                                    $("#mnoti3").show();
                                } else {
                                    $("#noti3").hide();
                                    $("#mnoti3").hide();
                                }

                                break;
                        }
                    }

                    if (total > 0) {
                        $("#notiTotal").html(total);
                        $("#mnotiTotal").html(total);
                        $("#notiTotal").show();
                        $("#mnotiTotal").show();
                    } else {
                        $("#notiTotal").hide();
                        $("#mnotiTotal").hide();
                    }
                },
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                },
                complete: function (resultat, statut) {
                    //console.log(resultat);
                }
            });
        }
    };

    // 手機號碼加 ***
    $.cellPhoneNumberCode = function (num) {
        if (num.length === 10) {
            var arr = num.split('');
            arr[4] = arr[5] = arr[6] = '*';
            return arr.join('');
        }
        return;
    };

    $.htmlEncode = function (html) {
        return document.createElement('a').appendChild(document.createTextNode(html)).parentNode.innerHTML;
    };

    $.xssProtection = function (data) {
        data = data.replace(/[\r\n|\r|\n]/gm, "");
        data = data.replace(/(onclick=|<script|javascript:)/gi, "");
        data = $.htmlEncode(data);
        return data;
    };

    //===================================================================
    // 查詢週期
    //===================================================================
    $.getToday = function() {
        var currentDate = new Date();
        return currentDate.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    $.getLast7Days = function() {
        var currentDate = new Date(),
            trans = new Date(currentDate.setDate(currentDate.getDate() - 7));

        return trans.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    $.getLast14Days = function () {
        var currentDate = new Date(),
            trans = new Date(currentDate.setDate(currentDate.getDate() - 14));

        return trans.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    $.getLast30Days = function() {
        var currentDate = new Date(),
            trans = new Date(currentDate.setDate(currentDate.getDate() - 31));

        return trans.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    $.getLast90Days = function () {
        var currentDate = new Date(),
            trans = new Date(currentDate.setDate(currentDate.getDate() - 92));

        return trans.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    $.getLast180Days = function () {
        var currentDate = new Date(),
            trans = new Date(currentDate.setDate(currentDate.getDate() - 183));

        return trans.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    $.getLast365Days = function () {
        var currentDate = new Date(),
            trans = new Date(currentDate.setDate(currentDate.getDate() - 365));

        return trans.toISOString().slice(0, 10).replace(/-/g, "/");
    };

    //===================================================================
    // 錢錢格式
    //===================================================================
    $.formatNumber = function (num) {
        //Format Money
        var _num = num;
        var integerDigits = _num.toString().split("");
        var threeDigits = [];

        while (integerDigits.length > 3) {
            threeDigits.unshift(integerDigits.splice(integerDigits.length - 3, 3).join(""));
        }

        threeDigits.unshift(integerDigits.join(""));
        _num = threeDigits.join(",");

        //console.log(_num);
        return _num;
    };

    //===================================================================
    // 去除 '-' 符號
    //===================================================================
    $.cutDashSymbol = function (num) {
        var _str = num.toString();

        if (_str.charAt(0) === '-') {
            return _str.slice(1);
        } else {
            return _str;
        }

    };

})(window.jQuery);

Date.prototype.yyyymmdd = function (format) {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    var dateString;
    switch (format) {
        case "-":
            dateString = yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
            break;
        case "/":
            dateString = yyyy + "/" + (mm[1] ? mm : "0" + mm[0]) + "/" + (dd[1] ? dd : "0" + dd[0]);
            break;
        default:
            dateString = yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]);
            break;
    }

    //return yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]);
    return dateString;
};
