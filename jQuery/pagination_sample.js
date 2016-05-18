(function ($) {
    $.fn.extend({
        pagination: function (options) {
            var pageIndex = options.pageIndex;
            var pageCount = options.pageCount;
            var _pageItem = 10;
            var eleA, eleLI;
            var eleUL = $('<ul class="pagination"></ul>');

            // first page
            eleA = $('<a></a>');
            $(eleA).text("第一頁");
            if (pageIndex > 1) {
                $(eleA).bind("click", function () {
                    settings.changePage(1);
                });
            }
            eleLI = $('<li></li>');
            $(eleLI).append(eleA);
            $(eleUL).append(eleLI);

            // prev page
            eleA = $('<a></a>');
            $(eleA).text("«");
            if (pageIndex > 1) {
                $(eleA).bind("click", function () {
                    settings.changePage(parseInt(pageIndex - 1));
                });
            }
            eleLI = $('<li class="arrow"></li>');
            $(eleLI).append(eleA);
            $(eleUL).append(eleLI);

            // page num
            var start_num = 1;
            var end_num = 1;
            if (pageCount <= _pageItem) {
                end_num = pageCount;
            }
            else {
                start_num = (parseInt((pageIndex - 1) / _pageItem) * _pageItem) + 1;
                end_num = (parseInt((pageIndex - 1) / _pageItem) + 1) * _pageItem;
                if (end_num > pageCount) {
                    end_num = pageCount;
                    start_num = end_num - _pageItem + 1;
                }
            }
            //alert(pageIndex + "==" + pageCount + "==" + start_num + "==" + end_num);
            
            for (var i = start_num; i <= end_num; i++) {
                eleA = $('<a></a>');
                $(eleA).text(i);
                $(eleA).bind("click", function () {
                    settings.changePage(parseInt($(this).text()));
                });
                eleLI = $('<li></li>');
                if (i == pageIndex) {
                    $(eleLI).addClass("current");
                }
                $(eleLI).append(eleA);
                $(eleUL).append(eleLI);
            }
               
            // next page
            eleA = $('<a></a>');
            $(eleA).text("»");
            if (pageIndex < pageCount) {
                $(eleA).bind("click", function () {
                    settings.changePage(parseInt(pageIndex + 1));
                });
            }
            eleLI = $('<li class="arrow"></li>');
            $(eleLI).append(eleA);
            $(eleUL).append(eleLI);

            // last page
            eleA = $('<a></a>');
            $(eleA).text("最後一頁");
            if (pageIndex < pageCount) {
                $(eleA).bind("click", function () {
                    settings.changePage(pageCount);
                });
            }
            eleLI = $('<li></li>');
            $(eleLI).append(eleA);
            $(eleUL).append(eleLI);

            // div of page
            var eleDIV = $('<div class="prenext right"></div>');
            var txt = "<p style='border-right:none;'>第 " + pageIndex + " 頁/共 " + pageCount + " 頁</p>";
            $(eleDIV).append(txt);


            $(this).empty();
            $(this).append(eleUL);
            $(this).append(eleDIV);


            var settings = $.extend({
                changePage: function (page) { }
            }, options);

        }
    });
})(jQuery)
