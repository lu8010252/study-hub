/* 四年级（人教PEP新版）按课本单元主题出的听力题：上册 6 个单元、下册 6 个单元。
 * 题型：听问句选答语、听对话选答案、听数字/价格/时间、听写。
 * 说明：题目是按单元主题和重点句型出的，不是课本原文。
 * 上册的单元主题参考了课本目录里的 Part A / B / C 标题（见 52-textbook.js）。下册只有单元名，没有 Part 标题。
 * 课本对照里标了“没能核对”的单元（上 2、3、4、6，下 2、5、6），题目只用了很基础的主题词。
 * 后来补的题放在文件最后的 MORE 里，这样原来的题目编号不变，错题本不会错位。
 * 对话里一问一答会自动换成两个声音；点“考试模式”会每题自动播放两遍、不能重听。 */
U.push(
{id:'u38',cn:'四年级上册听力',en:'Grade 4 Book 1 Listening',sum:'按上册六个单元的主题，听对话、听问答、听数字',
intro:'这一单元按<b>四年级上册</b>的六个单元来出题：在家帮忙、我的朋友、我们居住的地方、在社区帮忙、天气、季节。可以先正常练，再打开<b>考试模式</b>（每题自动播放两遍）。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['Helping at home','How are families different?；How can we help our family?；job, doctor, driver, nurse；can help；sweep the floor, cook dinner, do the chores；tired, busy'],
 ['My friends','Who are your friends?；How do we choose our friends?；Who is he / she?；What’s her name?；tall, short；kind, helpful'],
 ['Places we live in','What can we see in a community?；What do people do in a community?；There is a …；park, library, hospital, supermarket；in, near, next to'],
 ['Helping in the community','What jobs are important in a community?；How can young people help their community?；doctor, teacher, police officer；clean, plant trees, help old people'],
 ['The weather and us','What’s the weather like?；sunny, rainy, windy, cloudy, snowy；take an umbrella, wear a coat, fly a kite'],
 ['Changing for the seasons','What do we wear in different seasons?；What do we do in different seasons?；spring, summer, autumn, winter；warm, hot, cool, cold；put on, shorts, sunglasses']])+
h('听的时候怎么做')+
rule('<ol><li>先看<b>问题和选项</b>，想一想要听什么：是地点、数字、动作，还是天气？</li><li>第一遍抓关键词，第二遍核对。</li><li>数字要<b>马上在心里记下来</b>：four / fourteen / forty 很容易混。</li></ol>')+
xs([["What’s the weather like today? It’s rainy.","今天天气怎么样？下雨。"],["Can you help me? Yes, I can.","你能帮我吗？能。"]])+
tip('一问一答的对话，会用两个不同的声音。问的人一个声音，答的人换另一个声音。'),
qs:[
 /* 1 Helping at home */
 L('What’s your father’s job? He is a doctor.','爸爸做什么工作？',['医生','老师','司机','工人'],0,'He is a doctor. 是“他是医生”。'),
 L('Can you help me? Yes, I can. I can sweep the floor.','他能帮忙做什么？',['扫地','做饭','洗碗','擦窗户'],0,'sweep the floor 是扫地。'),
 L('What can we do for them? We can cook dinner.','他们能做什么？',['做晚饭','洗衣服','倒垃圾','浇花'],0,'cook dinner 是做晚饭。'),
 L('My mother is tired. I can help her do the chores.','说话的人想怎么做？',['帮妈妈做家务','出去玩','看电视','去睡觉'],0,'help her do the chores 是帮她做家务；tired 是累的。'),
 L('Can he help?','听问句，选出合适的回答。',['Yes, he can.','Yes, I am.','No, it isn’t.','He is a nurse.'],0,'Can he …? 用 Yes, he can. 或 No, he can’t. 回答。'),
 /* 2 My friends */
 L('Who is he? He is my friend, Tom.','他是谁？',['他的朋友汤姆','他的哥哥','他的老师','他的爸爸'],0,'my friend, Tom 是我的朋友汤姆。'),
 L('Is she tall? No, she isn’t. She is short.','她高吗？',['不高，她很矮','很高','很瘦','很胖'],0,'No, she isn’t. 是不高；short 是矮的。'),
 L('What’s her name?','听问句，选出合适的回答。',['Her name is Amy.','His name is Amy.','She is nine.','Yes, she is.'],0,'问“她叫什么名字”，回答 Her name is …。'),
 /* 3 Places we live in */
 L('Where do you live? I live in a big city.','他住在哪里？',['大城市','小村庄','农场','海边'],0,'a big city 是大城市。'),
 L('There is a park near my home.','他家附近有什么？',['公园','学校','医院','商店'],0,'a park near my home 是我家附近有公园。'),
 L('How many rooms are there in your home? There are four rooms.','他家有几个房间？',['4 个','14 个','40 个','5 个'],0,'four 是 4；注意和 fourteen、forty 区分。'),
 /* 4 Helping in the community */
 L('What can we do for the community? We can clean the park.','他们能为社区做什么？',['打扫公园','种树','捡垃圾','帮助老人'],0,'clean the park 是打扫公园。'),
 L('Let’s help the old people. Good idea!','他们要帮助谁？',['老人','小孩','动物','邻居'],0,'old people 是老人。'),
 L('Can you help me, please?','听问句，选出合适的回答。',['Sure. What can I do?','Yes, I am.','It’s sunny.','Thank you, I’m fine.'],0,'别人请你帮忙，可以回答 Sure. What can I do?'),
 /* 5 The weather and us */
 L('What’s the weather like today? It’s rainy.','今天天气怎么样？',['下雨','晴天','刮风','下雪'],0,'rainy 是下雨的。'),
 L('It’s cold and snowy. Wear your coat.','要穿什么？',['外套','雨衣','短裤','裙子'],0,'wear your coat 是穿上你的外套。'),
 L('It’s windy today. Let’s fly a kite!','他们打算做什么？',['放风筝','堆雪人','游泳','打伞'],0,'fly a kite 是放风筝；windy 是有风的。'),
 L('How’s the weather?','听问句，选出合适的回答。',['It’s cloudy.','It’s ten o’clock.','Yes, it is.','I’m fine.'],0,'问天气，回答 It’s + 天气词。'),
 L('Take an umbrella. It’s rainy.','为什么要带伞？',['下雨了','太晒了','太冷了','有风'],0,'umbrella 是伞；rainy 是下雨。'),
 /* 6 Changing for the seasons */
 L('Spring is warm. Summer is hot. Autumn is cool. Winter is cold.','哪个季节很热？',['夏天','春天','秋天','冬天'],0,'Summer is hot. 夏天很热。'),
 L('I like winter. I can make a snowman.','他喜欢冬天，因为可以做什么？',['堆雪人','游泳','放风筝','摘苹果'],0,'make a snowman 是堆雪人。'),
 L('It’s summer. Put on your shorts and sunglasses.','夏天要穿什么？',['短裤和太阳镜','外套和围巾','雨靴','厚棉衣'],0,'shorts 是短裤，sunglasses 是太阳镜。'),
 /* 听写 */
 W('weather','weather','weather 是天气。','和天气有关的词'),
 W('umbrella','umbrella','umbrella 是伞。','下雨天用的东西'),
 W('It is sunny today.','It is sunny today.','sunny 是晴朗的。','4 个词，说今天的天气'),
 W('I can help my mother.','I can help my mother.','can 后面用动词原形 help。','5 个词，说我能帮妈妈')
]},
{id:'u39',cn:'四年级下册听力',en:'Grade 4 Book 2 Listening',sum:'按下册六个单元的主题，听规则、时间、价格和农场',
intro:'这一单元按<b>四年级下册</b>的六个单元来出题：班级规则、家庭规则、上学的时间、购物、农场。价格和时间里有很多容易混的数字，要听仔细。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['Class rules','Don’t be late for class.；Please keep the classroom clean.；Turn off the lights.；You can’t …'],
 ['Family rules','Don’t watch TV before dinner.；Wash your hands.；Finish your homework first.'],
 ['Time for school','What time is it?；It’s seven o’clock.；It’s time for English class.；It’s time to go to school.'],
 ['Going shopping','How much is / are …?；It’s / They’re … yuan.；cheap, expensive, beautiful；trousers, jacket, skirt, shoes, hat'],
 ['Farms and us / On the farm','farmer, grow；cow, sheep, horse, hen；There are … on the farm.；next to']])+
h('容易混的数字')+
tbl(['听到','是多少'],[
 ['sixteen / sixty','16 / 60：sixteen 的 -teen 读得重；sixty 的重音在前面'],
 ['nineteen / ninety','19 / 90'],
 ['eight forty','8:40（先说小时，再说分钟）']])+
rule('<ol><li>听价格时，注意最后有没有 <b>yuan</b>。</li><li>听“规则”，注意有没有 <b>Don’t</b>：有就是“不要”。</li><li>听时间，先抓小时，再抓分钟。</li></ol>')+
tip('把考试模式打开练一练：每题自动播放两遍，中间会停一下，和考试的节奏差不多。'),
qs:[
 /* 1 Class rules */
 L('Don’t be late for class.','这句话是什么意思？',['上课不要迟到','上课要带书','课间要安静','要打扫教室'],0,'Don’t be late 是“不要迟到”。'),
 L('Please keep the classroom clean.','老师要求什么？',['保持教室干净','关灯','保持安静','排好队'],0,'keep the classroom clean 是保持教室干净。'),
 L('Turn off the lights after school.','放学后要做什么？',['关灯','开灯','关门','擦黑板'],0,'turn off 是关掉。'),
 L('Can I take my toy to school? No, you can’t.','能带玩具去学校吗？',['不能','可以','要问爸爸','要问同学'],0,'No, you can’t. 是“不可以”。'),
 /* 2 Family rules */
 L('Don’t watch TV before dinner.','妈妈要求什么？',['晚饭前不要看电视','晚饭前要看书','晚饭后要洗碗','晚饭后要睡觉'],0,'Don’t … 是“不要……”；before dinner 是晚饭前。'),
 L('Do you wash your hands before meals? Yes, I do.','他饭前洗手吗？',['洗','不洗','有时洗','忘了洗'],0,'Yes, I do. 是“是的，我洗”。'),
 L('Can I play computer games now? No, you can’t. Finish your homework first.','他要先做什么？',['写作业','玩游戏','吃饭','洗澡'],0,'Finish your homework first. 先完成作业。'),
 /* 3 Time for school */
 L('What time is it? It’s seven o’clock.','几点了？',['7:00','7:30','6:00','8:00'],0,'seven o’clock 是 7 点整。'),
 L('It’s time for English class.','现在是什么课？',['英语课','数学课','语文课','体育课'],0,'It’s time for + 名词，该……了。'),
 L('It’s time to go to school. Have a nice day!','现在要做什么？',['去上学','回家','吃饭','睡觉'],0,'It’s time to + 动词，该做……了。'),
 L('It’s eight forty.','听一听，现在几点？',['8:40','8:14','4:08','8:04'],0,'eight forty 是 8:40。'),
 L('What time is it?','听问句，选出合适的回答。',['It’s nine o’clock.','It’s Monday.','It’s sunny.','It’s my book.'],0,'问时间，回答 It’s + 几点。'),
 /* 4 Going shopping */
 L('How much is this skirt? It’s sixty yuan.','裙子多少钱？',['60 元','16 元','6 元','600 元'],0,'sixty 是 60；sixteen 才是 16。'),
 L('How much are these shoes? They’re ninety yuan.','鞋子多少钱？',['90 元','19 元','9 元','99 元'],0,'ninety 是 90；nineteen 才是 19。'),
 L('The jacket is beautiful, but it is expensive.','外套怎么样？',['漂亮，但是很贵','又漂亮又便宜','不好看但是便宜','太大了'],0,'beautiful 是漂亮；but 后面说 expensive（贵）。'),
 L('I like this hat. It’s cheap.','这顶帽子怎么样？',['很便宜','很贵','太小','太大'],0,'cheap 是便宜的。'),
 L('Can I help you? Yes. I want a pair of trousers.','他想买什么？',['一条裤子','一件外套','一双鞋','一顶帽子'],0,'a pair of trousers 是一条裤子。'),
 /* 5 Farms and us */
 L('What do farmers grow? They grow rice and vegetables.','农民种什么？',['大米和蔬菜','苹果和梨','玉米和花生','茶叶和棉花'],0,'rice 是大米，vegetables 是蔬菜。'),
 L('I eat an egg for breakfast. Eggs come from hens.','鸡蛋来自哪里？',['母鸡','奶牛','鸭子','鹅'],0,'hens 是母鸡。'),
 /* 6 On the farm */
 L('How many cows are there on the farm? There are twelve.','农场上有几头牛？',['12 头','2 头','20 头','13 头'],0,'twelve 是 12。'),
 L('Look at the sheep. They are eating grass.','羊在做什么？',['吃草','睡觉','跑步','喝水'],0,'eating grass 是在吃草。'),
 L('The horse is next to the cow.','马在哪里？',['在牛旁边','在牛后面','在牛前面','在牛下面'],0,'next to 是在……旁边。'),
 /* 听写 */
 W('expensive','expensive','expensive 是贵的。','形容词，意思是“贵的”'),
 W('shopping','shopping','shopping 是购物，p 要写两个。','去商店买东西'),
 W('How much is it?','How much is it?','问价格：How much is it?','4 个词，问价格'),
 W('Don’t be late.','Don’t be late.','Don’t + be late，不要迟到。','3 个词，叫别人不要迟到'),
 W('It’s time for class.','It’s time for class.','It’s time for + 名词。','4 个词，说该上课了')
]}
);
/* 追加：按课本目录里的 Part 标题补的题（旧题编号不变） */
MORE.push({u38:[
 /* 1 How are families different? / How can we help our family? */
 L('I have a big family. There are six people in my family.','他家有几口人？',['6 口','16 口','60 口','5 口'],0,'six 是 6；注意和 sixteen、sixty 区分。'),
 L('How can we help our family? We can wash the dishes.','他们能怎么帮助家人？',['洗碗','擦桌子','洗衣服','买东西'],0,'wash the dishes 是洗碗。'),
 /* 2 Who are your friends? / How do we choose our friends? */
 L('Who is your best friend? My best friend is Amy.','他最好的朋友是谁？',['艾米','汤姆','莉莉','迈克'],0,'My best friend is Amy. 他最好的朋友是艾米。'),
 L('Amy is kind. She likes to help people.','艾米是什么样的人？',['友好，爱帮助别人','很害羞','很淘气','很懒'],0,'kind 是友好的；help people 是帮助别人。'),
 L('How do we choose our friends? We choose kind and helpful friends.','他们选什么样的朋友？',['友好、乐于助人的','又高又壮的','爱玩游戏的','会唱歌的'],0,'kind and helpful 是友好、乐于助人。'),
 /* 3 What can we see / what do people do in a community? */
 L('What can we see in the community? We can see a park and a library.','他们在社区里能看到什么？',['公园和图书馆','学校和医院','超市和商店','电影院和饭馆'],0,'a park and a library 是公园和图书馆。'),
 L('What do people do in the community? They shop and play.','社区里的人做什么？',['购物和玩耍','睡觉和做饭','种田和养羊','游泳和爬山'],0,'shop 是购物；play 是玩耍。'),
 L('There is a supermarket next to my school.','超市在哪里？',['在学校旁边','在学校前面','在学校里面','在学校后面'],0,'next to 是在……旁边。'),
 /* 4 What jobs are important? / How can young people help? */
 L('Doctors help sick people. Teachers help us learn.','医生做什么？',['帮助生病的人','教我们学习','做饭','开车'],0,'Doctors help sick people. 医生帮助生病的人。'),
 L('What jobs are important in a community? Doctors, teachers and police officers.','他提到了哪几种工作？',['医生、老师、警察','司机、厨师、工人','农民、护士、演员','画家、歌手、作家'],0,'doctors 医生，teachers 老师，police officers 警察。'),
 L('How can young people help their community? They can clean the street and plant trees.','年轻人能做什么？',['打扫街道、种树','开医院','修马路','当警察'],0,'clean the street 是打扫街道；plant trees 是种树。'),
 /* 5 Part C：Make a bad weather reminder */
 L('Bad weather! Stay at home. Don’t go out.','这是什么提醒？',['坏天气，待在家里，不要出去','好天气，去公园','下雨了，要带伞','很冷，要穿外套'],0,'stay at home 是待在家里；Don’t go out. 是不要出去。'),
 /* 6 What do we wear / do in different seasons? */
 L('What do you wear in winter? I wear a coat and a hat.','他冬天穿什么？',['外套和帽子','短裤和 T 恤','裙子和凉鞋','雨衣'],0,'a coat and a hat 是外套和帽子。'),
 L('What do you do in spring? I fly a kite in the park.','他春天做什么？',['在公园放风筝','在海边游泳','在家堆雪人','在山上滑雪'],0,'fly a kite 是放风筝。'),
 /* 听写 */
 W('community','community','community 是社区，有两个 m。','我们居住的地方；社区'),
 W('We can plant trees.','We can plant trees.','can 后面用动词原形 plant。','4 个词，说我们能种树')
]});
ORDER.push('u38','u39');
Object.assign(GRADES,{u38:'4',u39:'4'});
/* 课本对照里，给每个单元加上对应的听力单元 */
(function(){
  const add=(vol,id)=>{if(TEXTBOOK[vol])TEXTBOOK[vol].units.forEach(u=>{if(u.link.indexOf(id)<0)u.link.push(id)})};
  add(0,'u38');add(1,'u39');
})();
