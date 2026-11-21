/* Feedback room and revised About text. English, Simplified, and Traditional Chinese. */
(function(){
const language=()=>window.museumLangPublic?.()||'en';
const cv=s=>language()==='zh-Hant'&&window.OpenCC?.Converter?window.OpenCC.Converter({from:'cn',to:'hk'})(s):s;
const tx=(en,zh)=>language()==='en'?en:cv(zh);
const h=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const copy=[
 ['The museum and its purpose','本馆的目的','The Unsent Museum asks why people leave words unspoken, why some voices were never preserved, and what it means to listen without inventing what we cannot know. It is a literary and historical exploration, not a census of anyone’s private thoughts.','未寄之言博物馆想探究：人为什么把某些话留在心里？为什么有些人的声音没有被历史保存？当我们无法知道一个人真正想过什么，又该怎样认真倾听？这是文学与历史的探索，而不是对任何人内心想法的统计。'],
 ['How to explore','参观方式','Visitors can enter contemporary decision galleries, read documented individual and collective histories, follow historical sources, or encounter voluntarily published anonymous stories. A visual sky represents recorded visitor choices; it must not be treated as representative survey evidence.','访客可以进入当代抉择展厅，阅读有史料依据的个人与群体档案，追溯历史文献，也可以阅读其他人主动公开的匿名故事。星空呈现的是访客提交的选择，不代表具有统计代表性的调查结论。'],
 ['Where the evidence ends','史料的边界','Historical narration and curatorial interpretation are deliberately distinguished. A missing letter, petition or public protest cannot establish consent, and no museum has the right to assign private thoughts to people whose testimony has not survived. Historical photographs are contextual evidence, not proof of an individual’s emotions.','本馆尽力区分可以核查的历史叙述与策展人的解释。没有留下书信、申诉或公开反抗记录，并不能证明一个人同意了自己的处境；当当事人的证词未被保存，我们也没有权利替他们编造内心想法。历史图片是理解时代背景的资料，而不是证明个人情绪的证据。'],
 ['What visitors contribute','访客留下的内容','Choices become visual stars only through actual submissions. A private draft does not become a public story automatically. Published stories are shared only following an explicit publishing action. Please avoid identifying another person without permission.','只有真实提交的选择才会成为星星。私人草稿不会自动变成公开故事，访客必须主动选择发布，文字才会出现在公共档案中。请不要未经许可透露其他人的身份。'],
 ['A developing archive','一座仍在完善的博物馆','This is a living student-led literary project. Its historical accounts, translations, citations and accessibility are revised as errors are found. The feedback room invites corrections, suggestions and reports of broken pages. Readers should consult linked sources and remain alert to evidence limits.','这是一项仍在持续完善的学生文学创作项目。我们会根据发现的问题，修订历史叙述、翻译、引用和网站的无障碍体验。欢迎在反馈区指出史实错误、提出改进建议或报告无法正常使用的页面。阅读历史展品时，也请查阅所附史料，留意证据能够支持到什么程度。']
];
window.museumAboutPage=function(){
return '<main class="container"><section class="page-hero"><div class="eyebrow">'+h(tx('ABOUT THE MUSEUM','关于本馆'))+'</div><h1>'+h(tx('Behind the silence.','沉默背后。'))+'</h1><p>'+h(tx('An archive of things said, unsaid and no longer recoverable.','一座收藏说出口、未曾说出口，以及再也无法被寻回的话语的博物馆。'))+'</p></section><section class="section-compact narrow about-copy">'+copy.map(p=>'<h3>'+h(tx(p[0],p[1]))+'</h3><p>'+h(tx(p[2],p[3]))+'</p>').join('')+'<div class="actions"><a class="btn" href="#/history">'+h(tx('Explore historical archives ↗','参观历史档案 ↗'))+'</a><a class="btn btn-outline" href="#/feedback">'+h(tx('Leave feedback ↗','留下反馈 ↗'))+'</a><a class="btn btn-outline" href="#/privacy">'+h(tx('Read privacy information ↗','阅读隐私说明 ↗'))+'</a></div></section></main>';
};
window.museumFeedbackPage=()=>'<main class="container"><section class="page-hero"><div class="eyebrow">'+h(tx('THE VISITOR BOOK','访客留言簿'))+'</div><h1>'+h(tx('Help this museum grow.','让这座博物馆继续生长。'))+'</h1><p>'+h(tx('Found an error, a translation problem, or something worth improving? Tell the curator.','发现史实错误、翻译问题，或有更好的建议？欢迎告诉策展人。'))+'</p></section><section class="section-compact narrow"><form id="museum-feedback-form" class="museum-feedback-form"><label for="feedback-kind">'+h(tx('What is your feedback about?','反馈类型'))+'</label><select id="feedback-kind" required><option value="history">'+h(tx('Historical accuracy or sources','史实与文献'))+'</option><option value="language">'+h(tx('Translation or language','语言与翻译'))+'</option><option value="technical">'+h(tx('Website or accessibility','网站功能与无障碍'))+'</option><option value="idea">'+h(tx('An idea for the museum','展馆改进建议'))+'</option><option value="other">'+h(tx('Something else','其他'))+'</option></select><label for="feedback-page">'+h(tx('Which page? (optional)','相关页面（选填）'))+'</label><input id="feedback-page" maxlength="240" placeholder="'+h(tx('e.g. a particular historical exhibit','例如：某份历史档案'))+'"><label for="feedback-message">'+h(tx('Your message','反馈内容'))+'</label><textarea id="feedback-message" rows="7" required minlength="10" maxlength="3000" placeholder="'+h(tx('Describe what you found or how we could improve.','请描述你发现的问题，或者希望我们如何改进。'))+'"></textarea><div class="feedback-trap" aria-hidden="true"><label for="feedback-website">Website</label><input id="feedback-website" tabindex="-1" autocomplete="off"></div><p class="muted small">'+h(tx('Please do not include passwords, private contact information, or other people’s identifying details. Your message is sent to the museum database for the curator to review; it is not publicly displayed.','请不要填写密码、私人联系方式或他人的身份信息。反馈会发送到博物馆数据库供策展人查看，不会公开展示。'))+'</p><button class="btn" id="feedback-submit" type="submit">'+h(tx('Send feedback ↗','提交反馈 ↗'))+'</button><p id="feedback-status" role="status" aria-live="polite"></p></form><p class="muted small">'+h(tx('If the feedback service is unavailable, you can also send a report through GitHub (a GitHub account is required).','如果反馈服务尚未开通，也可以通过 GitHub 提交问题（需要 GitHub 账户）。'))+' <a target="_blank" rel="noopener noreferrer" href="https://github.com/zouyushan99-a11y/the-unsent-museum/issues/new">'+h(tx('Open GitHub issue ↗','通过 GitHub 反馈 ↗'))+'</a></p></section></main>';
window.museumBindFeedback=function(){
 const app=document.getElementById('app');
 if(!app?.querySelector('#museum-feedback-form'))return;
 app.querySelector('#museum-feedback-form').addEventListener('submit',async e=>{
  e.preventDefault();
  const form=e.currentTarget,status=form.querySelector('#feedback-status'),btn=form.querySelector('#feedback-submit');
  if(form.querySelector('#feedback-website').value)return;
  const message=form.querySelector('#feedback-message').value.trim();
  if(message.length<10)return;
  if(typeof authClient==='undefined'||!authClient){status.textContent=tx('Feedback service is unavailable. Please use the GitHub link below.','反馈服务暂时不可用，请使用下方 GitHub 链接。');return}
  btn.disabled=true;status.textContent=tx('Sending…','正在发送……');
  try{
   const payload={category:form.querySelector('#feedback-kind').value,page_reference:form.querySelector('#feedback-page').value.trim().slice(0,240)||null,message:message.slice(0,3000)};
   const response=await authClient.from('museum_feedback').insert(payload);
   if(response.error)throw response.error;
   form.reset();status.textContent=tx('Thank you! Your feedback has been recorded for the curator.','谢谢！你的反馈已成功保存，策展人可以在后台查看。');
  }catch(error){console.warn('Feedback submission failed',error);status.textContent=tx('The feedback could not be delivered. Please use the GitHub option below.','反馈未能成功送达，请使用下方 GitHub 反馈方式。')}
  finally{btn.disabled=false}
 });
};
document.addEventListener('click',e=>{const link=e.target.closest?.('[data-collective-jump]');if(!link)return;e.preventDefault();document.getElementById('collective-'+link.dataset.collectiveJump)?.scrollIntoView({behavior:'smooth',block:'start'})});
})();
