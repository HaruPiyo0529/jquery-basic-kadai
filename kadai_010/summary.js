// ボタンを押すと文字色変化
$('#change-color').click(function() {
    $('#target').css('color','pink');
});

//ボタンを押すと文字変化 
$('#change-text').click(function() {
    $('#target').text('Hello!');
});

// ボタンを押すとフェードアウト
$('#fade-out').click(function() {
    $('#target').fadeOut();
});

// ボタンを押すとフェードイン
$('#fade-in').click(function() {
    $('#target').fadeIn();
});