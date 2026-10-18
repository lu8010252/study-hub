/* 课本句型（五年级、六年级）：按课本目录里的单元主题整理的常用句型，每句都可点读。
 * 五上、六上是新版课本，只有单元名，句型是推测的；五下、六下按旧版课本常见内容整理。都没有核对课本原文。 */
U.push(
{id:'u41',cn:'课本句型（五年级）',en:'Textbook Patterns 5',sum:'心情、好习惯、食物、一天、季节、日历、谁的、安静做事：五年级课本句型的听力和练习',
intro:'这个单元按<b>五年级</b>课本的单元主题整理。上册是新版，下册这张目录是旧版，句子都是常用、常考的句型，和课本原句可能略有出入。每一句都可以点 🔊 听，也可以点 🐢 慢速听。',
lesson:
h('上册 Unit 2 My feelings（我的感受）')+
xs([["How do you feel?","你感觉怎么样？"],["I feel happy.","我很开心。"],["Why are you sad?","你为什么难过？"],["Because I lost my pen.","因为我的笔丢了。"],["Don’t worry. Cheer up!","别担心，开心点！"]])+
tip('问原因用 <b>Why</b>，回答用 <b>Because</b>：Why are you tired? — Because I played football.')+
gramBox(`<p><b>I feel happy.</b> 里 ${pos('feel','v')} 是“感觉”，后面接${pos('happy','adj')}（形容词）说心情。<b>不能</b>用副词：I feel happily. ✘</p>
<p><b>Why</b> 问原因，<b>Because</b> 回答原因（Because 是连词，连接“原因”）。</p>
<p><b>Don’t worry.</b> = Don’t + 动词原形，意思是“别……”。</p>`)+
h('上册 Unit 4 Healthy habits（健康的习惯）')+
xs([["I get up early every day.","我每天早起。"],["You should wash your hands before meals.","饭前你应该洗手。"],["You shouldn’t stay up late.","你不应该熬夜。"],["How often do you do exercise?","你多久锻炼一次？"],["I do exercise every day.","我每天锻炼。"]])+
rule('<b>should</b> 后面用动词原形：You should <b>sleep</b> early. 否定是 <b>shouldn’t</b>。')+
gramBox(`<p><b>should</b> 是“应该”，是动词的小帮手（情态动词），后面用<b>动词原形</b>：You should sleep early.（不是 sleeps）。<b>shouldn’t</b> = should not（不应该）。</p>
<p><b>get up early</b>：${pos('early','adv')}（副词）说“起得多早”，修饰动词 get up。</p>
<p><b>How often</b> 问“多久一次”，回答 every day / sometimes / never 等频率词。</p>`)+
h('上册 Unit 5 Food we eat（我们吃的食物）')+
xs([["Do you like vegetables?","你喜欢蔬菜吗？"],["Yes, I do. / No, I don’t.","喜欢。/ 不喜欢。"],["Fruit is good for you.","水果对你有好处。"],["We should eat more vegetables.","我们应该多吃蔬菜。"]])+
gramBox(`<p><b>Do you like vegetables?</b> ：<b>do</b> 是造问句的小帮手，<b>like</b> 用原形；${pos('vegetables','n')} 是复数名词，喜欢一类东西常用复数。</p>
<p><b>good for you</b>：${pos('good','adj')}（形容词）= 好的，be good for = 对……有好处。</p>
<p><b>more vegetables</b>：<b>more</b> 是“更多的”，放在名词前（many 的比较级）。</p>`)+
h('下册 Unit 1 My day（我的一天）')+
xs([["When do you get up?","你什么时候起床？"],["I get up at six thirty.","我六点半起床。"],["What do you do in the afternoon?","你下午做什么？"],["I have English class and play sports.","我上英语课，还做运动。"]])+
tip('问“什么时候”用 <b>When</b>，回答要说时间：<b>at</b> + 几点。')+
gramBox(`<p><b>When</b> 问时间，回答用 <b>at</b> + 几点：${pos('at','prep')}（介词）six thirty。</p>
<p>“在早上 / 下午 / 晚上”用 <b>in</b>：in the morning / in the afternoon / in the evening。</p>
<p><b>get up</b>、<b>have breakfast</b> 是动词短语，一起记。主语是 I 时动词用原形。</p>`)+
h('下册 Unit 2 My favourite season（我最喜欢的季节）')+
xs([["Which season do you like best?","你最喜欢哪个季节？"],["I like summer best.","我最喜欢夏天。"],["Why?","为什么？"],["Because I can swim.","因为我可以游泳。"]])+
gramBox(`<p><b>Which season</b>：Which 问“哪一个”（在几个里面选）。</p>
<p><b>like … best</b>：${pos('best','adv')} 是最高级，意思是“最”。like summer best = 最喜欢夏天。</p>
<p><b>Because I can swim.</b>：<b>can</b> + 动词原形 swim（不加 s），Because 引出原因。</p>`)+
h('下册 Unit 3 My school calendar（我的学校日历）')+
xs([["When is your birthday?","你的生日是什么时候？"],["It’s on March tenth.","是三月十日。"],["When is Children’s Day?","儿童节是什么时候？"],["It’s on June first.","是六月一日。"]])+
warn('日期写成 March 10th，读的时候要读<b>序数词</b>：March <b>tenth</b>。1st first、2nd second、3rd third、4th fourth……')+
gramBox(`<p>月份名字<b>第一个字母要大写</b>：March、June。</p>
<p>日期用<b>序数词</b>（表示第几）：first、second、third、fourth、fifth……tenth。写 March 10th，读 March tenth。</p>
<p>说“在某一天”用 <b>on</b>：on June first；${pos('on','prep')} 是介词。</p>`)+
h('下册 Unit 5 Whose dog is it?（这是谁的狗？）')+
xs([["Whose dog is it?","这是谁的狗？"],["It’s Zoom’s.","是 Zoom 的。"],["Is it yours? — Yes, it’s mine.","是你的吗？是的，是我的。"],["The dog is eating its bone.","狗正在啃它的骨头。"]])+
tbl(['形容词性（后面要有名词）','名词性（后面不跟名词）'],[['my book','mine'],['your book','yours'],['his / her book','his / hers'],['our / their book','ours / theirs']])+
gramBox(`<p><b>Whose</b> 问“谁的”。<b>Zoom’s</b> 里的 ’s 表示“……的”，是名词所有格。</p>
<p><b>mine / yours / his / hers</b> 是“……的东西”，<b>后面不跟名词</b>：It’s mine.（它是我的。）；<b>my / your / his / her</b> 后面要跟名词：my book。</p>
<p><b>The dog is eating.</b>：<b>is eating</b> 是现在进行时，意思是“正在吃”，结构 be + 动词-ing。</p>`)+
h('下册 Unit 6 Work quietly!（安静地工作！）')+
xs([["Work quietly!","安静地工作！"],["Don’t talk loudly.","不要大声说话。"],["Keep to the right.","靠右走。"],["What are you doing? — I’m reading.","你在做什么？我在看书。"]])+
rule('<b>动词 + 副词</b>：work <b>quietly</b>、speak <b>softly</b>、walk <b>slowly</b>。形容词 quiet 变副词加 ly。')+
gramBox(`<p>${pos('quiet','adj')}（安静的，形容词）+ <b>ly</b> → ${pos('quietly','adv')}（安静地，副词）。<b>quiet</b> 说人或东西“很安静”，<b>quietly</b> 说动作“怎样做”。</p>
<p><b>Work quietly!</b>：动词原形开头，是在提醒别人做事。<b>Don’t talk loudly.</b>：Don’t + 动词原形 = 不要……</p>
<p><b>Keep to the right.</b>：${pos('to','prep')} 在这里是介词，后面是 the right（右边）。</p>`)+
h('拆开看：每个词是什么词性')+
tbl(['句子','拆开看（词 → 词性）'],[
 ['Why are you sad? Because I lost my pen.','Why（疑问词，问原因）　'+pos('are','v')+'　'+pos('you','pron')+'　'+pos('sad','adj')+'（难过的）　；　'+pos('Because','conj')+'（因为）　'+pos('I','pron')+'　'+pos('lost','v')+'（丢了，lose 的过去式）　'+pos('my','pron')+'（我的）　'+pos('pen','n')+''],
 ['You should wash your hands.',''+pos('You','pron')+'　'+pos('should','v')+'（应该，情态动词）　'+pos('wash','v')+'（洗，动词原形）　'+pos('your','pron')+'　'+pos('hands','n')+'（手，复数）'],
 ['She works quietly.',''+pos('She','pron')+'　'+pos('works','v')+'（工作，三单加 s）　'+pos('quietly','adv')+'（安静地，说明怎么工作）'],
 ['Which season do you like best?','Which（疑问词，哪一个）　'+pos('season','n')+'（季节）　'+pos('do','v')+'（助动词，帮着提问）　'+pos('you','pron')+'　'+pos('like','v')+'　'+pos('best','adv')+'（最）'],
 ['The dog is eating its bone.',''+pos('The','art')+'　'+pos('dog','n')+'　'+pos('is','v')+'（be 动词）　'+pos('eating','v')+'（-ing 形式，正在吃）　'+pos('its','pron')+'（它的）　'+pos('bone','n')+'（骨头）'],
 ['— Whose bag is it? — It’s mine.','Whose（疑问词，谁的）　'+pos('bag','n')+'　'+pos('is','v')+'　'+pos('it','pron')+'　／　'+pos('mine','pron')+'（我的，后面不跟名词）']])+
rule('<b>should + 动词原形</b>（应该做）；<b>be + 动词-ing</b>（正在做）；<b>动词 + 副词</b>（怎么做）。看到这几个“搭档”，句子的意思就清楚了。')+
tip('<b>do / does</b> 在 Which season do you like best? 里是<b>助动词</b>，只帮着提问，自己没有意思；真正的动词是 <b>like</b>。'),
qs:[
 L('How do you feel? I feel happy.','听一听，他感觉怎么样？',['开心','难过','生气','累'],0,'happy 是开心的。'),
 L('Why are you sad? Because I lost my pen.','听一听，他为什么难过？',['丢了笔','考试没考好','没带伞','生病了'],0,'lost my pen 是丢了我的笔。'),
 L('You shouldn’t stay up late.','听一听，这句话的意思是？',['你不应该熬夜','你应该早睡','你应该早起','你不应该吃糖'],0,'shouldn’t 是不应该；stay up late 是熬夜。'),
 L('You should wash your hands before meals.','听一听，什么时候应该洗手？',['饭前','饭后','睡前','上课前'],0,'before meals 是饭前。'),
 L('How often do you do exercise?','听一听，你听到的是哪一句？',['How often do you do exercise?','How old are you?','How much is it?','How do you go to school?'],0,'How often 问“多久一次”。'),
 L('We should eat more vegetables.','听一听，我们应该多吃什么？',['蔬菜','肉','糖果','饼干'],0,'vegetables 是蔬菜。'),
 L('When do you get up? I get up at six thirty.','听一听，他几点起床？',['6:30','6:13','7:30','5:30'],0,'six thirty 是 6:30。'),
 L('What do you do in the afternoon? I have English class.','听一听，他下午做什么？',['上英语课','做作业','睡午觉','踢足球'],0,'have English class 是上英语课。'),
 L('Which season do you like best? I like summer best.','听一听，他最喜欢哪个季节？',['夏天','春天','秋天','冬天'],0,'summer 是夏天。'),
 L('Why? Because I can swim.','听一听，他为什么喜欢这个季节？',['可以游泳','可以滑雪','可以放风筝','可以摘苹果'],0,'swim 是游泳。'),
 L('When is your birthday? It’s on March tenth.','听一听，他的生日是什么时候？',['3 月 10 日','3 月 1 日','10 月 3 日','3 月 12 日'],0,'March 是三月，tenth 是第十。'),
 L('When is Children’s Day? It’s on June first.','听一听，儿童节是什么时候？',['6 月 1 日','6 月 11 日','1 月 6 日','5 月 1 日'],0,'June first 是 6 月 1 日。'),
 L('Whose dog is it? It’s Zoom’s.','听一听，这是谁的狗？',['Zoom 的','Zip 的','我的','你的'],0,'Zoom’s 是 Zoom 的。'),
 L('Is it yours? Yes, it’s mine.','听一听，它是谁的？',['说话人自己的','对方的','他的','她的'],0,'mine 是“我的”。'),
 L('Work quietly!','听一听，这句话的意思是？',['安静地工作','大声说话','快点跑','靠右走'],0,'quietly 是安静地。'),
 L('Keep to the right.','听一听，这句话的意思是？',['靠右走','靠左走','不要跑','排好队'],0,'keep to the right 是靠右走。'),
 C('— Why are you happy? — ___ I got a gift.',['Because','So','But','And'],0,'回答 Why 用 Because。'),
 C('You ___ stay up late.（不应该）',['shouldn’t','don’t should','not should','shouldn’t to'],0,'should 的否定是 shouldn’t，后面加动词原形。'),
 C('— ___ do you get up? — At six thirty.',['When','Where','Who','Why'],0,'回答是时间，问句用 When。'),
 C('— Which season do you like ___? — Summer.',['best','good','well','most good'],0,'like … best 是最喜欢。'),
 C('March 3rd 读作？',['March third','March three','March threeth','March the three'],0,'日期要读序数词：third。'),
 C('— Whose bag is it? — It’s ___.（我的）',['mine','my','me','I'],0,'后面不跟名词时用名词性物主代词 mine。'),
 C('This is not my pen. ___ is on the desk.（你的）',['Yours','Your','You','Yourself'],0,'没有名词时用 yours。'),
 C('Please speak ___.（轻声地）',['softly','soft','softy','softer'],0,'修饰动词 speak 用副词 softly。'),
 F('— How ___ you feel? — I feel tired.','do','一般现在时的特殊疑问句，主语是 you，用 do。'),
 F('She works ___ (quiet).','quietly','修饰动词 works，用副词 quietly。'),
 F('— Whose shoes are these? — They are ___ (she).','hers','“她的”后面不跟名词，用 hers。'),
 J('Why 的回答要用 Because。',true,'Why? — Because …'),
 J('He is play football now. 这句话是对的。',false,'现在进行时：He is playing football now.'),
 O('你最喜欢哪个季节？','Which season do you like best?','Which season + do you like + best?'),
 O('我们应该多吃蔬菜。','We should eat more vegetables.','should 后面用动词原形 eat。')
]},
{id:'u44',cn:'课本句型（六年级）',en:'Textbook Patterns 6',sum:'名胜、聚会、健康、花钱、太空、能源、比较、上周末、去哪儿、过去和现在：六年级课本句型的听力和练习',
intro:'这个单元按<b>六年级</b>课本的单元主题整理。上册是新版，只有单元名，句型是按主题推测的；下册这张目录是旧版。句子都是常用的重点句型，和课本原句可能略有出入。每一句都可以点 🔊 听，也可以点 🐢 慢速听。',
lesson:
h('上册 Unit 1 Amazing places（神奇的地方）')+
xs([["Where is the Great Wall?","长城在哪里？"],["It’s in Beijing.","在北京。"],["It’s very long and old.","它又长又古老。"],["It’s famous for its beautiful mountains.","它以美丽的山而出名。"]])+
gramBox(`<p><b>Where</b> 问地点。<b>in Beijing</b>：${pos('in','prep')}（介词）+ 城市名，城市名要大写。</p>
<p><b>long</b>、<b>old</b>、<b>beautiful</b> 是${pos('famous','adj')}这样的形容词，放在 It’s 后面说“它什么样”。</p>
<p><b>famous for</b> = 因……而出名，for 后面接名词。</p>`)+
h('上册 Unit 2 Getting together（相聚）')+
xs([["What are you going to do this weekend?","这个周末你打算做什么？"],["I’m going to have a party.","我打算开个派对。"],["Would you like to come?","你想来吗？"],["Sure. / Sorry, I can’t.","好的。/ 对不起，我不能。"]])+
rule('<b>be going to</b> + 动词原形：I’m going to <b>visit</b> my grandma. 表示打算做什么。')+
gramBox(`<p><b>I’m going to have a party.</b>：<b>am / is / are + going to + 动词原形</b>，表示“打算做”。主语是 I 用 am，he / she 用 is，we / they 用 are。</p>
<p><b>Would you like to come?</b>：like to 后面跟<b>动词原形</b>，是礼貌的邀请。回答：Sure. / Sorry, I can’t.</p>`)+
h('上册 Unit 3 Healthy life（健康的生活）')+
xs([["You should drink more water.","你应该多喝水。"],["You must brush your teeth every day.","你必须每天刷牙。"],["He never eats breakfast.","他从不吃早饭。"],["How often do you play sports?","你多久做一次运动？"]])+
tip('频率词：<b>always</b>（总是）> <b>usually</b>（通常）> <b>often</b>（经常）> <b>sometimes</b>（有时）> <b>never</b>（从不）。')+
gramBox(`<p><b>should</b>（应该）、<b>must</b>（必须）后面跟<b>动词原形</b>：You should drink more water.</p>
<p><b>never</b>、<b>always</b>、<b>often</b> 是${pos('never','adv')}（频率副词）：放在<b>实义动词前</b>，be 动词后：He never eats breakfast. / He is never late.</p>
<p>主语是 he / she，动词要加 s：eat → eats。</p>`)+
h('上册 Unit 4 Managing money well（合理管理钱财）')+
xs([["How much is it?","它多少钱？"],["It’s twenty yuan.","二十元。"],["I want to save money.","我想存钱。"],["It’s too expensive.","太贵了。"]])+
gramBox(`<p><b>How much</b> + is / are ……?，问价钱。<b>twenty yuan</b>：yuan（元）是单位，<b>没有 s</b>。</p>
<p><b>too expensive</b>：<b>too</b> 是“太”，${pos('too','adv')}（副词）说“太”；<b>expensive</b> 是形容词（贵的），too 放在形容词前面。</p>
<p><b>save money</b>：save 是动词，“存、节约”。</p>`)+
h('上册 Unit 5 Exploring space（探索太空）')+
xs([["The sun is bigger than the Earth.","太阳比地球大。"],["The moon goes around the Earth.","月亮围着地球转。"],["Astronauts live in a spaceship.","宇航员住在宇宙飞船里。"]])+
gramBox(`<p><b>bigger than</b>：两个东西比，形容词后加 er 再加 <b>than</b>：The sun is bigger than the Earth.</p>
<p><b>The moon goes around the Earth.</b>：the moon 是单数，动词 go 要变成 <b>goes</b>。${pos('around','prep')} 是介词，“围着”。</p>
<p><b>Astronauts</b> 是复数名词（宇航员），所以用 live，不加 s。</p>`)+
h('上册 Unit 6 Energy, nature and us（能源、自然与我们）')+
xs([["We should save water and energy.","我们应该节约水和能源。"],["Turn off the lights when you leave.","离开时请关灯。"],["We shouldn’t waste food.","我们不应该浪费食物。"]])+
gramBox(`<p><b>save water</b>、<b>turn off the lights</b>（关灯）都是“动词 + 名词”。</p>
<p><b>shouldn’t</b> = should not，后面也跟<b>动词原形</b>：We shouldn’t waste food.</p>
<p><b>waste</b> 是动词“浪费”；说不要浪费，就是 Don’t waste water.</p>`)+
h('下册 Unit 1 How tall are you?（你有多高？）')+
xs([["How tall are you?","你有多高？"],["I’m one hundred and sixty centimetres tall.","我身高一百六十厘米。"],["I’m taller than you.","我比你高。"],["Your feet are bigger than mine.","你的脚比我的大。"]])+
tbl(['原级','比较级'],[['tall','taller'],['short','shorter'],['big','bigger'],['heavy','heavier'],['thin','thinner']])+
gramBox(`<p><b>How tall</b> 问身高。<b>I’m 160 centimetres tall.</b>：${pos('tall','adj')}（形容词）放在 am 后面，说“我多高”。</p>
<p><b>taller than</b>：比较级 + than。<b>mine</b> 是“我的”，后面不跟名词：Your feet are bigger than mine.（= than my feet）</p>`)+
h('下册 Unit 2 Last weekend（上个周末）')+
xs([["What did you do last weekend?","你上个周末做了什么？"],["I watched TV and washed my clothes.","我看了电视，还洗了衣服。"],["Did you go to the park?","你去公园了吗？"],["Yes, I did. / No, I didn’t.","是的。/ 没有。"]])+
warn('过去式：watch → <b>watched</b>、wash → <b>washed</b>；不规则：go → <b>went</b>、see → <b>saw</b>、have → <b>had</b>。')+
gramBox(`<p>说<b>过去</b>的事，动词要变<b>过去式</b>：规则的加 <b>ed</b>（watched, cleaned），不规则的要记（go→went，see→saw，have→had）。</p>
<p><b>Did you go to the park?</b>：有了 <b>did</b>，后面的动词用<b>原形</b>（go），不用 went。回答：Yes, I did. / No, I didn’t.</p>
<p><b>What did you do?</b>：did 帮忙造问句，do 用原形；回答用过去式 I watched TV.</p>`)+
h('下册 Unit 3 Where did you go?（你去了哪里？）')+
xs([["Where did you go on your holiday?","你假期去了哪里？"],["I went to Hainan.","我去了海南。"],["How did you go there?","你怎么去的？"],["I went by plane.","我坐飞机去的。"],["What did you do there?","你在那里做了什么？"],["I went swimming and took pictures.","我去游泳，还拍了照片。"]])+
gramBox(`<p><b>Where did you go?</b>：Where 问地点，回答 I went to Hainan.（went 是 go 的过去式）</p>
<p><b>by plane</b>：${pos('by','prep')}（介词）+ 交通工具，<b>中间不加 a / the</b>：by plane、by train、by bus。</p>
<p><b>went swimming</b>：go + 动词-ing，表示“去做某项活动”；过去说 went swimming。</p>`)+
h('下册 Unit 4 Then and now（过去和现在）')+
xs([["I was short then. I’m tall now.","那时我很矮，现在我很高。"],["There was no computer in the past.","过去没有电脑。"],["Now there are computers everywhere.","现在到处都有电脑。"]])+
gramBox(`<p><b>was / were</b> 是 am / is / are 的过去式：I <b>was</b> short then.（那时我很矮）；They <b>were</b> small.</p>
<p><b>then</b>（那时）和 <b>now</b>（现在）是时间副词，用来对比过去和现在。</p>
<p><b>There was no computer.</b>：There was / were + 名词，表示“过去有……”；<b>no</b> + 名词 = 没有……</p>`)+
h('拆开看：每个词是什么词性')+
tbl(['句子','拆开看（词 → 词性）'],[
 ['The sun is bigger than the Earth.',''+pos('The','art')+'　'+pos('sun','n')+'（太阳）　'+pos('is','v')+'　'+pos('bigger','adj')+'（更大的，big 的比较级）　than（比）　'+pos('the','art')+'　'+pos('Earth','n')+'（地球）'],
 ['I’m going to visit my grandma.',''+pos('I','pron')+'　'+pos('am','v')+'（’m = am）　'+pos('going','v')+'　to（后面接动词原形）　'+pos('visit','v')+'（看望）　'+pos('my','pron')+'　'+pos('grandma','n')+''],
 ['He never eats breakfast.',''+pos('He','pron')+'　'+pos('never','adv')+'（从不，说明频率）　'+pos('eats','v')+'（三单加 s）　'+pos('breakfast','n')+'（早饭）'],
 ['What did you do last weekend?','What（疑问词）　'+pos('did','v')+'（助动词，表示过去，帮着提问）　'+pos('you','pron')+'　'+pos('do','v')+'（做，动词原形）　last weekend（上个周末，表示时间）'],
 ['I went to Hainan by plane.',''+pos('I','pron')+'　'+pos('went','v')+'（go 的过去式）　'+pos('to','prep')+'（到）　'+pos('Hainan','n')+'　'+pos('by','prep')+'（乘）　'+pos('plane','n')+'（飞机）'],
 ['You must brush your teeth.',''+pos('You','pron')+'　'+pos('must','v')+'（必须，情态动词）　'+pos('brush','v')+'（刷，动词原形）　'+pos('your','pron')+'　'+pos('teeth','n')+'（牙，tooth 的复数）']])+
rule('<b>be going to / must / should + 动词原形</b>；<b>did + 动词原形</b>（过去的问句）；<b>比较级 + than</b>（比……更……）。动词变没变形，看前面有没有这些“搭档”。')+
tip('过去时有两步：问句里有 <b>did</b>，动词用<b>原形</b>（What did you <b>do</b>?）；回答里没有 did，动词变<b>过去式</b>（I <b>went</b> …）。'),
qs:[
 L('Where is the Great Wall? It’s in Beijing.','听一听，长城在哪里？',['北京','上海','西安','南京'],0,'Beijing 是北京。'),
 L('The sun is bigger than the Earth.','听一听，谁更大？',['太阳','地球','月亮','一样大'],0,'bigger than 是比……大；太阳比地球大。'),
 L('What are you going to do this weekend? I’m going to have a party.','听一听，他周末打算做什么？',['开派对','去爬山','看电影','做作业'],0,'have a party 是开派对。'),
 L('You must brush your teeth every day.','听一听，他应该每天做什么？',['刷牙','洗澡','跑步','喝牛奶'],0,'brush your teeth 是刷牙。'),
 L('How much is it? It’s twenty yuan.','听一听，多少钱？',['20 元','12 元','200 元','2 元'],0,'twenty 是 20，不是 twelve（12）。'),
 L('We should save water and energy.','听一听，我们应该怎么做？',['节约水和能源','多用电','多洗澡','多买东西'],0,'save 是节约。'),
 L('How tall are you? I’m one hundred and sixty centimetres tall.','听一听，他有多高？',['160 厘米','116 厘米','106 厘米','60 厘米'],0,'one hundred and sixty 是 160。'),
 L('I’m taller than you.','听一听，谁更高？',['说话的人','对方','一样高','不知道'],0,'taller than you 是比你高。'),
 L('What did you do last weekend? I watched TV.','听一听，他上周末做了什么？',['看电视','打篮球','去公园','做饭'],0,'watched TV 是看了电视。'),
 L('Did you go to the park? No, I didn’t. I stayed at home.','听一听，他去公园了吗？',['没去，待在家里','去了','去了超市','去了学校'],0,'No, I didn’t. 是没有；stayed at home 是待在家里。'),
 L('Where did you go on your holiday? I went to Hainan.','听一听，他假期去了哪里？',['海南','北京','杭州','广州'],0,'Hainan 是海南。'),
 L('How did you go there? I went by plane.','听一听，他怎么去的？',['坐飞机','坐火车','坐船','骑自行车'],0,'by plane 是坐飞机。'),
 L('I was short then. I’m tall now.','听一听，他现在怎么样？',['很高','很矮','很瘦','很小'],0,'now 是现在；I’m tall now. 现在很高。'),
 L('There was no computer in the past.','听一听，过去怎么样？',['没有电脑','有很多电脑','有手机','有电视'],0,'There was no … 是没有……'),
 C('I’m going ___ visit my grandma.',['to','for','at','in'],0,'be going to 表示打算。'),
 C('She ___ eats breakfast.（从不）',['never','always','usually','often'],0,'never 是从不。'),
 C('The sun is ___ than the Earth.',['bigger','big','biggest','more big'],0,'两者比较，big 的比较级是 bigger。'),
 C('My bag is ___ than yours.（重）',['heavier','heavyer','more heavy','heaviest'],0,'heavy 变 y 为 i 加 er：heavier。'),
 C('Yesterday I ___ to the zoo.',['went','go','goes','going'],0,'go 的过去式是 went。'),
 C('— Did you watch TV? — Yes, I ___.',['did','do','am','was'],0,'一般过去时的问句用 did 回答。'),
 C('— ___ did you go on your holiday? — I went to Sanya.',['Where','When','Who','Why'],0,'回答是地点，用 Where。'),
 C('They went there ___ train.',['by','on','at','in'],0,'乘坐某种交通工具用 by + 名词（不加 a / the）。'),
 F('He ___ (watch) TV last night.','watched','last night 是过去，watch 加 ed。'),
 F('We ___ (go) to the park last weekend.','went','go 的过去式是 went。'),
 F('I ___ (have) a good time yesterday.','had','have 的过去式是 had。'),
 F('This tree is ___ (tall) than that one.','taller','两者比较，用比较级 taller。'),
 J('Did you went to Beijing? 这句话是对的。',false,'有 Did，动词用原形：Did you go to Beijing?'),
 J('How much is it? 是在问价钱。',true,'How much 问价钱，也问不可数名词的量。'),
 O('你上个周末做了什么？','What did you do last weekend?','What + did + you + do + last weekend?'),
 O('我坐飞机去的。','I went there by plane.','by plane 是坐飞机。')
]}
);
