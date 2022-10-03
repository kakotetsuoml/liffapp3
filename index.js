$(function () {
    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var kyojuuku = $('input[name="kyojuuku"]').val();  
        var title = $('input[name="title"]').val();
        var content = $('input[id="message"]').val();
        var msg = `氏名：${name}\n居住区：${kyojuuku}\n件名：${title}\n内容：${content}`;
        sendText(msg);

        return false;
    });
});
