/* 课本对照：五年级、六年级（人教PEP）。
 * 目录来自你发的截图：五上、六上是新版（2024 版封面），五下、六下是旧版（2013 版封面，新版出来后可以替换）。
 * 孩子还没有学到这个年级、没有课本，所以重点句型都没有核对课本原文（ok:false），是按单元主题和旧版课本的常见内容整理的，
 * 新版上册只能凭单元名推测，大意对即可。拿到课本后，把句型发给我，我来改。
 * 同时把五、六年级新增的单元放进年级表里（u41–u46）。 */
Object.assign(GRADES,{u41:'5',u42:'5',u43:'5',u44:'6',u45:'6',u46:'6'});
ORDER.push('u41','u42','u43','u44','u45','u46');
TEXTBOOK.push(
{vol:'五年级上册',note:'五年级上册是新版课本，我只有单元名，重点句型是按单元主题推测的，没有核对课本原文。目录后面还有 Revision New Year’s party，以及附录：Songs、Words in each unit、Vocabulary、Useful expressions。',units:[
 {n:1,en:'Different friends',cn:'不同的朋友',ok:false,focus:[
  '（推测）描述朋友的样子和性格：He / She is tall / strong / kind / funny / quiet.',
  '（推测）He / She has short hair. / He likes … He doesn’t like …',
  '（推测）What is he / she like? — He / She is …'],link:['u4','u5','u6','u41','u42']},
 {n:2,en:'My feelings',cn:'我的感受',ok:false,focus:[
  '（推测）说心情：I’m happy / sad / angry / worried / excited / tired.',
  '（推测）How do you feel? — I feel … / Why? — Because …',
  '（推测）What’s wrong? — I’m … 以及安慰别人：Don’t worry. / Cheer up!'],link:['u5','u14','u41','u42']},
 {n:3,en:'Work and play',cn:'工作与玩耍',ok:false,focus:[
  '（推测）安排学习和玩的时间：What do you do after school? — I do my homework / play football.',
  '（推测）I like doing … / I want to do …；work hard, play happily',
  '（推测）一般现在时：He / She works / plays …'],link:['u6','u11','u20','u41','u42']},
 {n:4,en:'Healthy habits',cn:'健康的习惯',ok:false,focus:[
  '（推测）好习惯：get up early, go to bed early, wash my hands, brush my teeth, do exercise.',
  '（推测）You should … / You shouldn’t …；Don’t stay up late.',
  '（推测）How often do you …? — Every day. / Sometimes.'],link:['u6','u30','u15','u41','u42']},
 {n:5,en:'Food we eat',cn:'我们吃的食物',ok:false,focus:[
  '（推测）食物和健康：vegetables, fruit, meat, rice, milk, snacks；healthy, unhealthy',
  '（推测）I like … / I don’t like … / Do you like …? — Yes, I do. / No, I don’t.',
  '（推测）We should eat more … and less …'],link:['u2','u18','u6','u41','u42']},
 {n:6,en:'Nature and us',cn:'自然与我们',ok:false,focus:[
  '（推测）动植物和环境：There are many trees / animals …；plant trees, save water, protect animals',
  '（推测）We should / shouldn’t … ；Let’s … ；Don’t …'],link:['u9','u30','u15','u41','u42']},
 {n:7,en:'Revision: New Year’s party',cn:'复习：新年晚会',ok:false,focus:[
  '（推测）复习前六个单元：描述人、说心情、说习惯、说食物，用来准备新年晚会。'],link:['u6','u22','u41','u42']}
]},
{vol:'五年级下册',note:'五年级下册这张目录是旧版课本（2013 版封面），新版出来后目录可能不一样。重点句型是按旧版课本常见内容整理的，没有核对课本原文。目录里还有 Recycle 1、Recycle 2（复习）以及附录：Songs、Words、Vocabulary、Useful expressions、Proverbs。',units:[
 {n:1,en:'My day',cn:'我的一天',ok:false,focus:[
  'When do you get up / have breakfast / go to school? — I … at six thirty.（问时间、说作息）',
  'What do you do in the morning / afternoon / evening? — I eat breakfast / have English class / do homework.',
  'My day：eat breakfast, have class, play sports, do morning exercises, clean my room',
  '时间：It’s … o’clock. / half past …'],link:['u6','u17','u41','u43']},
 {n:2,en:'My favourite season',cn:'我最喜欢的季节',ok:false,focus:[
  'Which season do you like best? — I like summer best.',
  'Why? — Because I can swim / go on a picnic / pick apples / make a snowman.',
  '季节：spring, summer, autumn, winter；What’s the weather like?'],link:['u6','u14','u41','u43']},
 {n:3,en:'My school calendar',cn:'我的学校日历',ok:false,focus:[
  '十二个月：January … December',
  'When is your birthday? — It’s on March 10th.',
  '序数词：first, second, third, fourth, fifth … twelfth',
  'When is Children’s Day? — It’s on June 1st.'],link:['u17','u14','u41','u43']},
 {n:4,en:'When is the art show?',cn:'美术展是什么时候？',ok:false,focus:[
  '（推测）问活动日期：When is the art show? — It’s on April fourth.',
  '（推测）月份、日期、序数词继续练：first … thirty-first',
  '（推测）学校活动：sports meet, school trip, English party, Mother’s Day, Father’s Day'],link:['u17','u14','u41','u43']},
 {n:5,en:'Whose dog is it?',cn:'这是谁的狗？',ok:false,focus:[
  'Whose dog is it? — It’s Zoom’s. / Whose … are these? — They’re …',
  '名词性物主代词：mine, yours, his, hers, theirs, ours；Is it yours? — Yes, it’s mine.',
  '现在进行时：The dog is eating its bone. / Are they playing? — Yes, they are.'],link:['u4','u16','u11','u41','u43']},
 {n:6,en:'Work quietly!',cn:'安静地工作！',ok:false,focus:[
  '提醒别人：Work quietly! / Don’t talk loudly. / Keep to the right. / Be quiet!',
  '副词（动词 + quietly / loudly / slowly）：Eat quietly. Speak softly.',
  '现在进行时：What are you doing? — I’m reading.（公共场所的规则）'],link:['u15','u19','u11','u41','u43']}
]},
{vol:'六年级上册',note:'六年级上册是新版课本，我只有单元名，重点句型是按单元主题推测的，没有核对课本原文。目录后面还有 Revision Learning in museums，以及附录：Songs、Words in each unit、Vocabulary、Useful expressions、Irregular verbs（不规则动词表）。',units:[
 {n:1,en:'Amazing places',cn:'神奇的地方',ok:false,focus:[
  '（推测）介绍名胜和城市：There is a … in …；It’s famous for …；It’s big / old / beautiful.',
  '（推测）比较：… is bigger / taller / older than …',
  '（推测）Where is it? — It’s in / near / next to …'],link:['u9','u10','u8','u44','u45']},
 {n:2,en:'Getting together',cn:'相聚',ok:false,focus:[
  '（推测）计划聚会：What are you going to do? — I’m going to …',
  '（推测）邀请别人：Would you like to …? — Sure. / Sorry, I can’t.',
  '（推测）Let’s … ；Can you come to … ?'],link:['u13','u15','u44','u45']},
 {n:3,en:'Healthy life',cn:'健康的生活',ok:false,focus:[
  '（推测）健康建议：You should / shouldn’t … ；You must …',
  '（推测）How often do you …? — I … every day. / sometimes. / never.',
  '（推测）eat well, sleep enough, do sports, keep clean'],link:['u30','u6','u44','u45']},
 {n:4,en:'Managing money well',cn:'合理管理钱财',ok:false,focus:[
  '（推测）How much is / are …? — It’s / They’re … yuan.',
  '（推测）I’d like to buy … / I want to save money.',
  '（推测）spend, save, enough, cheap, expensive；How many … do you need?'],link:['u18','u14','u44','u45']},
 {n:5,en:'Exploring space',cn:'探索太空',ok:false,focus:[
  '（推测）太空：the sun, the moon, Earth, planets, stars, spaceship, astronaut',
  '（推测）The sun is bigger than the Earth. / The moon goes around the Earth.',
  '（推测）People will / may live in space in the future.'],link:['u8','u9','u13','u44','u45']},
 {n:6,en:'Energy, nature and us',cn:'能源、自然与我们',ok:false,focus:[
  '（推测）节约能源：turn off the lights, save water, save energy, use less plastic',
  '（推测）We should / must … ；We shouldn’t waste …',
  '（推测）In the future, we will use more solar / wind energy.'],link:['u30','u13','u44','u45']},
 {n:7,en:'Revision: Learning in museums',cn:'复习：在博物馆学习',ok:false,focus:[
  '（推测）复习前六个单元，在博物馆里看、问、比较和计划。'],link:['u8','u12','u13','u44','u45']}
]},
{vol:'六年级下册',note:'六年级下册这张目录是旧版课本（2013 版封面），新版出来后目录可能不一样。重点句型是按旧版课本常见内容整理的，没有核对课本原文。目录后面还有 Recycle Mike’s happy days，以及附录：Songs、Words、Vocabulary、Useful expressions、Proverbs、Short plays（短剧）、Irregular verbs（不规则动词表）、English pronunciation patterns（英语发音规律）。',units:[
 {n:1,en:'How tall are you?',cn:'你有多高？',ok:false,focus:[
  'How tall are you? — I’m 165 cm tall. / How heavy are you? — I’m 48 kg.',
  '比较级：taller, shorter, older, younger, longer, bigger, heavier, thinner',
  'You’re taller than me. / My feet are bigger than yours. / 比较：than'],link:['u8','u44','u46']},
 {n:2,en:'Last weekend',cn:'上个周末',ok:false,focus:[
  'What did you do last weekend? — I washed my clothes / watched TV / read a book / cleaned my room / stayed at home.',
  '过去式：was / were、watched、played、visited、saw、went、had',
  'Did you …? — Yes, I did. / No, I didn’t.'],link:['u12','u44','u46']},
 {n:3,en:'Where did you go?',cn:'你去了哪里？',ok:false,focus:[
  'Where did you go on your holiday? — I went to Hainan.',
  'How did you go there? — I went by plane / train / bus / bike.',
  'What did you do there? — I went hiking / fishing / swimming；bought, ate, took pictures, hurt my foot'],link:['u12','u14','u44','u46']},
 {n:4,en:'Then and now',cn:'过去和现在',ok:false,focus:[
  '（推测）过去和现在的对比：I was … then. I’m … now. / There was no … There is a … now.',
  '（推测）They had no … ；Did you … in the past? — Yes, I did.',
  '（推测）was / were 和一般过去时，以及 now / then / in the past'],link:['u12','u8','u44','u46']}
]}
);
