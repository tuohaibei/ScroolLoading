/**
 * Created by wwtliu on 14/9/5.
 */
$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
        var dataImg = { "data": [{ "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }, { "src": "11.jpg" }, { "src": "12.jpg" },
		{ "src": "13.jpg" }, { "src": "14.jpg" }, { "src": "15.jpg" }, { "src": "16.jpg" }, { "src": "17.jpg" }, { "src": "18.jpg" }, { "src": "19.jpg" }, { "src": "20.jpg" }, { "src": "21.jpg" }, { "src": "22.jpg" }, { "src": "23.jpg" }, { "src": "24.jpg" },
		{ "src": "25.jpg" }, { "src": "26.jpg" }, { "src": "27.jpg" }, { "src": "28.jpg" }, { "src": "29.jpg" }, { "src": "30.jpg" }, { "src": "31.jpg" }, { "src": "32.jpg" }, { "src": "33.jpg" }, { "src": "34.jpg" }, { "src": "35.jpg" }, { "src": "36.jpg" },
				{ "src": "37.jpg" }, { "src": "38.jpg" }, { "src": "39.jpg" }] };
        window.onscroll = function () {
            if (scrollside()) {
                $.each(dataImg.data, function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    //                    console.log("./img/"+$(value).attr("src"));
                    $("<img>").attr("src", "./image/" + $(value).attr("src")).appendTo(content);
                    var captionText = document.getElementById("caption");
                    bindclick();
                });
                imgLocation();
            }
        };

  
    });
   
    bindclick();
});

function bindclick()
{
    var modal = document.getElementById('myModal');

    // 获取图片模态框，alt 属性作为图片弹出中文本描述
    var modalImg = document.getElementById("imgBig");
    var captionText = document.getElementById("caption");
    $(".box").on("click", function () {
        modal.style.display = "block";
        modalImg.src = $(this).find("img").attr("src");
        modalImg.alt = $(this).find("img").attr("src");
        $(modalImg).css({
            //"max-width": "50%",
            //"height": "50%"


        })
        //captionText.innerHTML = this.alt;
    })

    // 获取 <span> 元素，设置关闭模态框按钮
    var span = document.getElementsByClassName("close")[0];

    // 点击 <span> 元素上的 (x), 关闭模态框
    $(".close").on("click", function () {
        modal.style.display = "none";
    })
}


function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($("#container").width() / boxWidth);
    var boxArr = [];
    box.each(function (index, value) {
        //        console.log(index+"--"+value);
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}