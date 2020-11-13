$(function(){

    $("#intro p").hide().fadeIn(1000)
    //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
    $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行
  
    function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
      $("#intro").fadeOut(1000,contentAnime);
    }
  
    function contentAnime(){
      setTimeout(utyuuAnime,300);//0.3秒後backAnime実行
      setTimeout(utyuunekoAnime,2000);//2秒後personAnime実行
      setTimeout(utyuuneko02Anime,2000);//2秒後carAnime実行
      setTimeout(utyuuneko03Anime,3000);//3秒後foodAnime実行
    }
    
    //以下のアニメはCSSでやってみる
    //ここではanimeクラスつけるだけ
    function utyuuAnime(){
      $("#utyuu").addClass("anime")
    }
  
    function utyuunekoAnime(){
      $("#utyuuneko").addClass("anime")
    }
  
    function utyuuneko02Anime(){
      $("#utyuuneko02").addClass("anime")
    }
  
    function utyuuneko03Anime(){
      $("#utyuuneko03").addClass("anime")
    }
  
  })