$(document).ready(function() {
    //j-query
    $(document).on('click','.control nav a', function(event) {
        
        //링크를 클릭하면 url이 바뀌도록 하고, 실제로 페이지로는 가지 않음
        history.pushState(null, null, event.target.href);
        $('article').load(event.target.href+' article>.content');
        //웹페이지의 동작을 막는다
        event.preventDefault();
        // alert('excuted');
    })
    $(window).on('popstate', function(event) {
        $('article').load(location.href+' article>.content');
    })
    // 자바스크립트의 오디오 객체 사용하기
    var audio = new Audio('men.wav');
    audio.play();
    $(documnet).on('click','.control .player .play', function(event) {
        audio.play();
    });
    $(documnet).on('click','.control .player .pause', function(event) {
        audio.pause();
    });
});