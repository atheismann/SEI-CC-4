let titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center';
var pE1 = document.querySelector('p.cool');
pE1.innerHTML = "Comments for <strong>Today</strong>";
pE1.style.color = 'purple';
let aEl = document.querySelector('a');
aEl.setAttribute('href', "https://www.google.com");
let commentEls = document.querySelectorAll('.comment');
for (let el of commentEls) {
    el.style.fontSize = '30px';
};
console.log(commentEls);