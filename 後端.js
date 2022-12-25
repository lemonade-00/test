$(function () {
    $('.arrow').click(function (e) {
        $.get("/find", function (res) {
            let content = "";
            for (let chatObj of res) {
                content += `<span class='user'>${chatObj.user}</span><span class='verb'>說</span> ${chatObj.say} (<span class='time'>${chatObj.time}</span>)<br>`;
            }
            $("#ya").html(content);
        });
    })
});

