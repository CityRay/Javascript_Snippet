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
        //emailRule = /^[^@]+@(yahoo)\.(com.tw|com)$/i;
        
        emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

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
})(window.jQuery);

//
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
