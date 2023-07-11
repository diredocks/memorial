window.onload = function () {
    // 设置纪念日的日期（年、月、日）
    var anniversaryDate = new Date('2024-06-07');

    // 每秒更新倒计时
    setInterval(function () {
        var currentDate = new Date();
        var timeRemaining = anniversaryDate - currentDate;

        // 计算剩余的天、小时、分钟和秒
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        var letters = '0123456789ABCDEF';
        var color = '#';
        var bg_color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            bg_color += letters[Math.floor(Math.random() * 16)];
        }

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var imageWidth = document.getElementById('friendPhoto').offsetWidth;
        var imageHeight = document.getElementById('friendPhoto').offsetHeight;
  
        var randomX = Math.floor(Math.random() * (windowWidth - imageWidth)) - 500;
        var randomY = Math.floor(Math.random() * (windowHeight - imageHeight)) - 500;

        var elements = document.getElementsByTagName('body');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = color;
            document.body.style.backgroundColor = bg_color  
            var image = document.getElementById('friendPhoto');
            var transformString = 'translate(' + randomX + 'px, ' + randomY + 'px)';
            image.style.transform = transformString;
        }

        // 更新倒计时显示
        document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 "
            + minutes + "分钟 " + seconds + "秒";
    }, 1000);
};
