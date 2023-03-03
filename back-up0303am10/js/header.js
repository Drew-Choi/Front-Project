  $(".search__icon").click(() => {
    if($(".search").hasClass("on") !== true) {
      $(".search").addClass("on");
      $(".search__icon").addClass("on");
      $(".search").attr("placeholder", "노래제목,  가수,  장르");
    }
  })

  $(window).mousedown(function(e) {
    let eTargetId = e.target.id
    if(eTargetId !== "no-hidden") {
      $(".search").removeClass("on");
      $(".search__icon").removeClass("on");
      $(".search").removeAttr("placeholder", "노래제목,  가수,  장르");
    }
  })

for (let i = 1; i <= 4; i += 1) {
  let profileIcons = document.querySelector(`.icon${i}`);
  profileIcons.setAttribute("style", `background-image: url("../img/netflix_logo/nav_logo/netflixMusic_default-login${i}.png")`);
}

// 헤더 스크롤이벤트
//스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
// window.addEventListener('scroll', () => { 
//   console.log(window.scrollX, window.scrollY);
// });
//본코드

window.addEventListener('scroll', () => {
  const innerEl = document.querySelector("header > .inner");
  if(window.scrollY > 50) {
    innerEl.setAttribute("style", "background-color: black;");
  } else {
    innerEl.removeAttribute("style");
  }
})