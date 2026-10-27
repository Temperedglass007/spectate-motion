(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const style=document.createElement('style');
style.textContent=`
html{--motion-ease:cubic-bezier(.22,1,.36,1);--motion-fast:180ms;--motion-mid:520ms}
@media (prefers-reduced-motion:no-preference){
  body.motion-ready .masthead,body.motion-ready .menu,body.motion-ready .page>*{animation:sm-enter .7s var(--motion-ease) both}
  body.motion-ready .masthead{animation-delay:40ms}.masthead h1{transition:transform .7s var(--motion-ease),letter-spacing .7s var(--motion-ease)}
  .menu a{position:relative;transition:color var(--motion-fast) ease,transform var(--motion-fast) var(--motion-ease)}
  .menu a:after{content:'';position:absolute;left:0;right:100%;bottom:-5px;height:1px;background:var(--signal);transition:right .35s var(--motion-ease)}
  .menu a:hover{transform:translateY(-1px)}.menu a:hover:after,.menu a.current:after{right:0}
  .story,.feed-item,.driver-card,.probability,.schedule div,.ledger-row,.panel,.notice,.race-hero,.newsletter{transition:transform .45s var(--motion-ease),box-shadow .45s var(--motion-ease),background-color .35s ease}
  .story:hover,.feed-item:hover,.driver-card:hover{transform:translateY(-4px)}
  .driver-card{overflow:hidden}.driver-card img{transition:transform .8s var(--motion-ease),filter .5s ease}.driver-card:hover img{transform:scale(1.035);filter:saturate(1.05)}
  .panel:hover,.race-hero:hover{box-shadow:0 18px 45px rgba(23,24,22,.12)}
  .button,¶»§q«^