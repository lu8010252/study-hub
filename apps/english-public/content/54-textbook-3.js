/* 课本对照：三年级（人教PEP新版，三年级起点）。
 * 目录和每个单元的 Part A / B 标题来自你发的截图（上册 2024 新版，下册新版带 Grammar）。
 * 孩子还没有课本，所以重点句型都没有核对课本原文（ok:false），是按 Part 标题和单元主题推测的，大意对即可。
 * 下册第 1 单元的单元名在截图里被截掉了，只有 Part 标题，所以单元名写成“Unit 1”，中文名按 Part 标题概括。
 * 拿到课本后，把句型发给我，我来改。 */
Object.assign(GRADES,{u47:'3',u48:'3',u49:'3'});
ORDER.push('u47','u48','u49');
TEXTBOOK.unshift(
{vol:'三年级上册',note:'三年级上册是新版课本。Part A / B / C 标题来自你发的目录截图；重点句型没有核对课本原文，是按标题推测的。目录后面还有 Revision Being a good guest，以及附录：Songs、Chants in “Letters and sounds”、Words in each unit 等。',units:[
 {n:1,en:'Making friends',cn:'交朋友',ok:false,parts:[
  'Part A：How do we greet friends?（我们怎样和朋友打招呼？）',
  'Part B：How can we be a good friend?（我们怎样做个好朋友？）',
  'Part C Project：Make a mind map of making friends（做一张交朋友的思维导图）'],focus:[
  '（推测）打招呼：Hello! / Hi! / Good morning! I’m … Nice to meet you.',
  '（推测）问名字：What’s your name? — My name is …',
  '（推测）做好朋友：Let’s play. / Can I help you? / Thank you. — You’re welcome.'],link:['u1','u4','u50','u47','u48']},
 {n:2,en:'Different families',cn:'不同的家庭',ok:false,parts:[
  'Part A：Who lives with you?（谁和你住在一起？）',
  'Part B：How are families different?（家庭有什么不同？）',
  'Part C Project：Make a family tree（做一棵家谱树）'],focus:[
  '（推测）家人：father, mother, brother, sister, grandpa, grandma',
  '（推测）介绍家人：This is my … / Who’s that? — He’s / She’s my …',
  '（推测）I live with my … / I have a big / small family.'],link:['u4','u5','u50','u47','u48']},
 {n:3,en:'Amazing animals',cn:'神奇的动物',ok:false,parts:[
  'Part A：What pets do you know?（你知道哪些宠物？）',
  'Part B：What wild animals do you know?（你知道哪些野生动物？）',
  'Part C Project：Make an animal picture book（做一本动物图画书）'],focus:[
  '（推测）宠物和动物：cat, dog, rabbit, bird, fish；tiger, elephant, monkey, panda',
  '（推测）What’s this? — It’s a … / I like … / It can run / jump / swim.',
  '（推测）What animal is it? — It’s a …'],link:['u2','u3','u7','u50','u47','u48']},
 {n:4,en:'Plants around us',cn:'我们身边的植物',ok:false,parts:[
  'Part A：What do we get from plants?（我们从植物那里得到什么？）',
  'Part B：How can we help plants?（我们怎样帮助植物？）',
  'Part C Project：Make a paper garden（做一个纸花园）'],focus:[
  '（推测）植物：tree, flower, grass, leaf, fruit',
  '（推测）We get fruit / vegetables / paper from plants.',
  '（推测）帮助植物：water the flowers, plant trees；Don’t pick the flowers.'],link:['u2','u15','u50','u47','u48']},
 {n:5,en:'The colourful world',cn:'多彩的世界',ok:false,parts:[
  'Part A：What colours do you see?（你看到了什么颜色？）',
  'Part B：How do colours help us?（颜色怎样帮助我们？）',
  'Part C Project：Make a colour flip book（做一本颜色翻翻书）'],focus:[
  '（推测）颜色：red, yellow, blue, green, orange, purple, pink, black, white',
  '（推测）What colour is it? — It’s red. / What colours do you see? — I see red and green.',
  '（推测）红绿灯：Red light, stop. Green light, go.'],link:['u2','u4','u50','u47','u48']},
 {n:6,en:'Useful numbers',cn:'有用的数字',ok:false,parts:[
  'Part A：When do we use numbers?（我们什么时候用数字？）',
  'Part B：How useful are numbers?（数字有多有用？）',
  'Part C Project：Make a birthday card（做一张生日卡片）'],focus:[
  '（推测）数字 1–20：one, two, three … ten … twenty',
  '（推测）How old are you? — I’m eight. / How many …? — Five.',
  '（推测）生日：Happy birthday! / Today is my birthday.'],link:['u17','u50','u47','u48']},
 {n:7,en:'Revision: Being a good guest',cn:'复习：做个好客人',ok:false,focus:[
  '（推测）复习前六个单元：打招呼、介绍家人、说动物和颜色、说数字，做个有礼貌的客人。'],link:['u1','u4','u50','u47','u48']}
]},
{vol:'三年级下册',note:'三年级下册是新版课本，每个单元有 Part A、Part B、Part C (optional)（选学）和 Grammar（语法小结）。第 1 单元的单元名在你发的截图里被截掉了。Part 标题来自截图，重点句型没有核对课本原文，是按标题推测的。',units:[
 {n:1,en:'Unit 1',cn:'问候与礼貌（单元名没拍到，按 Part 标题概括）',ok:false,parts:[
  'Part A：How do we greet new people?（我们怎样和新认识的人打招呼？）',
  'Part B：How can we be polite?（我们怎样做个有礼貌的人？）',
  'Part C (optional)（选学）',
  'Grammar（语法小结）'],focus:[
  '（推测）见新朋友：Nice to meet you. — Nice to meet you, too.',
  '（推测）礼貌用语：Please. / Thank you. / You’re welcome. / Excuse me. / Sorry. — That’s OK.'],link:['u1','u4','u24','u50','u47','u49']},
 {n:2,en:'Expressing yourself',cn:'表达自己',ok:false,parts:[
  'Part A：How do we describe things?（我们怎样描述事物？）',
  'Part B：How do we express our feelings?（我们怎样表达感受？）',
  'Part C (optional)（选学）',
  'Grammar（语法小结）'],focus:[
  '（推测）描述东西：It’s big / small / long / short / new / old.',
  '（推测）说感受：I’m happy / sad / angry / tired. — How do you feel?',
  '（推测）是什么样：What’s it like? — It’s …'],link:['u5','u8','u50','u47','u49']},
 {n:3,en:'Learning better',cn:'更好地学习',ok:false,parts:[
  'Part A：What tools help us learn?（哪些工具帮助我们学习？）',
  'Part B：How do our senses help us learn?（我们的感官怎样帮助我们学习？）',
  'Part C (optional)（选学）',
  'Grammar（语法小结）'],focus:[
  '（推测）学习工具：pencil, ruler, book, computer, dictionary',
  '（推测）感官：eyes, ears, nose, mouth, hands；I see with my eyes. I hear with my ears.',
  '（推测）I can use a … to …'],link:['u7','u10','u50','u47','u49']},
 {n:4,en:'Healthy food',cn:'健康食物',ok:false,parts:[
  'Part A：What do we eat?（我们吃什么？）',
  'Part B：What shall we eat?（我们该吃什么？）',
  'Part C (optional)（选学）',
  'Grammar（语法小结）'],focus:[
  '（推测）食物：rice, noodles, bread, meat, fish, eggs, vegetables, fruit, milk',
  '（推测）What do you eat? — I eat … / What shall we eat? — Let’s eat …',
  '（推测）健康：Vegetables and fruit are healthy.'],link:['u2','u18','u50','u47','u49']},
 {n:5,en:'Old toys',cn:'旧玩具',ok:false,parts:[
  'Part A：What kinds of old things do you have?（你有哪些旧东西？）',
  'Part B：How can old things be reused?（旧东西怎样再利用？）',
  'Part C (optional)（选学）',
  'Grammar（语法小结）'],focus:[
  '（推测）旧玩具：doll, ball, kite, car, robot, bear；old, new',
  '（推测）I have an old … / It’s my … / Let’s make a … with a box.',
  '（推测）再利用：give it to a friend, make a new toy'],link:['u3','u4','u50','u47','u49']},
 {n:6,en:'Numbers in life',cn:'生活中的数字',ok:false,parts:[
  'Part A：How do numbers help us count and sort?（数字怎样帮助我们数数和分类？）',
  'Part B：How do numbers help us make decisions?（数字怎样帮助我们做决定？）',
  'Part C (optional)（选学）'],focus:[
  '（推测）数数：How many …? — There are … / 数字到 100：thirty, forty, fifty …',
  '（推测）比较大小和价钱：How much is it? — It’s … yuan.；more, less',
  '（推测）分类：Let’s sort them: red / blue, big / small.'],link:['u17','u14','u50','u47','u49']}
]}
);
