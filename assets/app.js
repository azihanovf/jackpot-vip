
const progress=document.querySelector('.progress');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}
updateProgress();addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);
const reveals=document.querySelectorAll('.reveal');
if(matchMedia('(prefers-reduced-motion: reduce)').matches){reveals.forEach(x=>x.classList.add('visible'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});reveals.forEach(x=>io.observe(x))}

document.querySelectorAll('.faq-toggle').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const isOpen=item.classList.contains('active');document.querySelectorAll('.faq-item').forEach(el=>{el.classList.remove('active');const b=el.querySelector('.faq-toggle');if(b)b.setAttribute('aria-expanded','false')});if(!isOpen){item.classList.add('active');btn.setAttribute('aria-expanded','true')}}));

const backdrop=document.getElementById('modalBackdrop');let activeModal=null;
function openModal(id){const m=document.getElementById(id);if(!m)return;activeModal=m;m.hidden=false;backdrop.hidden=false;document.body.style.overflow='hidden'}
function closeModal(){if(activeModal)activeModal.hidden=true;activeModal=null;backdrop.hidden=true;document.body.style.overflow=''}
document.addEventListener('click',e=>{const t=e.target.closest('[data-modal-target]');if(t){e.preventDefault();openModal(t.dataset.modalTarget)}});
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModal));backdrop.addEventListener('click',closeModal);addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const banner=document.getElementById('cookieBanner');const status=localStorage.getItem('jcc_cookie_pref');if(!status)banner.hidden=false;
document.getElementById('cookiesAccept').addEventListener('click',()=>{localStorage.setItem('jcc_cookie_pref','all');banner.hidden=true});
document.getElementById('cookiesEssential').addEventListener('click',()=>{localStorage.setItem('jcc_cookie_pref','essential');banner.hidden=true});
