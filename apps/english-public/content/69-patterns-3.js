/* 课本句型（三年级）：按课本目录里的单元主题整理的最基础的句型，每句都可点读。
 * 三年级新版课本只有目录和 Part 标题，句型是推测的，没有核对课本原文。 */
U.push(
{id:'u47',cn:'课本句型（三年级）',en:'Textbook Patterns 3',sum:'打招呼、家人、动物、植物、颜色、数字、礼貌、感受、食物：三年级基础句型的听力和练习',
intro:'这个单元按<b>三年级</b>课本的单元主题整理，都是最基础、最常用的句子。四年级的孩子也可以拿来复习打基础。每一句都可以点 🔊 听，也可以点 🐢 慢速听。句子是按目录推测的，和课本原句可能略有出入。',
lesson:
h('先认识三个最重要的词类')+
p('英语里的词分成不同的“家族”，这叫<b>词性</b>。三年级先认识三个最重要的家族：')+
tbl(['词性','它是干什么的','好记的办法','例子'],[
 ['名词（noun）','人、动物、东西的名字','能说“一个……”','cat, mother, tree, apple'],
 ['动词（verb）','做什么（动作）','能想象出动作','run, eat, jump, see'],
 ['形容词（adjective）','什么样（样子、颜色、感觉）','能说“很……的”','big, red, happy, new']])+
xs([[`The ${pos('big','adj')} ${pos('cat','n')} ${pos('runs','v')}.`,'那只大猫在跑。（big 说猫什么样，cat 是谁，runs 是做什么）']])+
tip('下面每个单元的句子后面，都有一个<b>语法小讲堂</b>，用颜色标出了词性。看不懂的词，点 🔊 听一听，再对着中文想一想。')+
h('上册 Unit 1 Making friends（交朋友）')+
xs([["Hello! I’m Amy.","你好！我是艾米。"],["What’s your name?","你叫什么名字？"],["My name is Tom.","我叫汤姆。"],["Nice to meet you.","很高兴认识你。"],["Nice to meet you, too.","我也很高兴认识你。"]])+
tip('打招呼：早上 <b>Good morning</b>，下午 <b>Good afternoon</b>，晚上 <b>Good evening</b>。')+
gramBox(`<p><b>I’m</b> = I am（我是）。${pos('I','pron')}（代词）代替“我”；<b>am</b> 是 ${pos('am','v')}（be 动词，意思是“是”）。</p>
<p>${pos('Amy','n')}、${pos('Tom','n')} 是人名，也是名词，<b>第一个字母要大写</b>。</p>
<p><b>What’s</b> = What is；<b>my</b> 是“我的”，放在名词前：my name（我的名字）。</p>`)+
h('上册 Unit 2 Different families（不同的家庭）')+
xs([["Who’s that?","那是谁？"],["He’s my father. She’s my mother.","他是我爸爸。她是我妈妈。"],["This is my family.","这是我的家人。"],["I live with my grandparents.","我和爷爷奶奶住在一起。"]])+
gramBox(`<p>${pos('He','pron')} / ${pos('She','pron')} 是代词，代替人名：<b>he</b> 指男生，<b>she</b> 指女生。</p>
<p>${pos('father','n')}、${pos('mother','n')} 是名词（人的名字）。<b>He’s</b> = He is，<b>She’s</b> = She is。</p>
<p><b>Who’s that?</b> 问“那是谁”，回答用 He’s / She’s …</p>`)+
h('上册 Unit 3 Amazing animals（神奇的动物）')+
xs([["What’s this?","这是什么？"],["It’s a cat.","这是一只猫。"],["I like dogs.","我喜欢狗。"],["It can run and jump.","它会跑，会跳。"]])+
warn('a 和 an：cat 前面用 <b>a</b>，元音开头的 animal、elephant 前面用 <b>an</b>：an elephant。')+
gramBox(`<p><b>a cat</b>：${pos('a','art')}（冠词）+ ${pos('cat','n')}（名词）。<b>an elephant</b>：elephant 以元音 e 开头，用 an。</p>
<p><b>It can run.</b> 里的 <b>can</b> 是“会”，是动词的小帮手（情态动词），后面的动词 ${pos('run','v')} <b>不加 s</b>：It can run.（不是 It can runs.）</p>
<p><b>I like dogs.</b> 喜欢很多只狗，名词要用复数 <b>dogs</b>（加 s）。</p>`)+
h('上册 Unit 4 Plants around us（我们身边的植物）')+
xs([["I see a tree and some flowers.","我看见一棵树和一些花。"],["We get fruit from plants.","我们从植物那里得到水果。"],["Let’s water the flowers.","我们给花浇水吧。"],["Don’t pick the flowers.","不要摘花。"]])+
gramBox(`<p>${pos('tree','n')}、${pos('flower','n')} 是名词；${pos('see','v')}（看见）、${pos('pick','v')}（摘）是动词。</p>
<p><b>Let’s</b> = Let us（让我们……吧），后面跟<b>动词原形</b>：Let’s water the flowers.</p>
<p><b>Don’t</b> + 动词原形 = 不要……：Don’t pick the flowers.</p>`)+
h('上册 Unit 5 The colourful world（多彩的世界）')+
xs([["What colour is it?","它是什么颜色？"],["It’s red.","它是红色的。"],["What colours do you see?","你看到了什么颜色？"],["I see red and green.","我看到红色和绿色。"]])+
gramBox(`<p><b>colour</b>（颜色）是${pos('colour','n')}；<b>red</b>（红色的）是${pos('red','adj')}，说东西什么样。</p>
<p>形容词可以放在 <b>is 后面</b>：It’s red.（它是红色的）；也可以放在<b>名词前面</b>：a red apple（一个红苹果）。</p>
<p><b>What colour is it?</b> 问颜色，回答 It’s + 颜色。</p>`)+
h('上册 Unit 6 Useful numbers（有用的数字）')+
xs([["How old are you?","你几岁了？"],["I’m eight.","我八岁。"],["How many apples?","有多少个苹果？"],["Five apples.","五个苹果。"],["Happy birthday!","生日快乐！"]])+
gramBox(`<p>${pos('eight','num')}、${pos('five','num')} 是数词，表示多少。<b>I’m eight.</b> = I am eight（我八岁）。</p>
<p><b>How old</b> 问年龄；<b>How many</b> + 名词复数，问有多少个。</p>
<p>名词变复数一般加 <b>s</b>：one apple（一个苹果），five apple<b>s</b>（五个苹果）。</p>`)+
h('下册 Unit 1（问候与礼貌）')+
xs([["Excuse me.","打扰一下。"],["Thank you. — You’re welcome.","谢谢。——不客气。"],["Sorry. — That’s OK.","对不起。——没关系。"],["Please sit down.","请坐。"]])+
rule('求别人做事，加 <b>please</b>；别人帮了你，说 <b>Thank you</b>；做错了，说 <b>Sorry</b>。')+
gramBox(`<p>礼貌用语可以<b>整句记</b>：<b>Please sit down.</b>（请坐。）加了 please 更有礼貌。</p>
<p>句子以<b>动词原形</b>开头（Sit down. Open the door.）是在<b>请别人做事</b>，叫祈使句。</p>
<p><b>Thank you.</b> 的回答是 <b>You’re welcome.</b>；<b>Sorry.</b> 的回答是 <b>That’s OK.</b></p>`)+
h('下册 Unit 2 Expressing yourself（表达自己）')+
xs([["How do you feel?","你感觉怎么样？"],["I’m happy.","我很开心。"],["I’m tired.","我累了。"],["It’s big. It’s new.","它很大，它是新的。"]])+
gramBox(`<p><b>I’m happy.</b> 里的 <b>happy</b> 是${pos('happy','adj')}，放在 am / is / are 后面，说“我什么样”。</p>
<p><b>How do you feel?</b> 里 ${pos('feel','v')} 是“感觉”；回答：I’m happy / sad / tired。</p>
<p><b>It’s big. It’s new.</b> big、new 都是形容词，说东西什么样。</p>`)+
h('下册 Unit 4 Healthy food（健康食物）')+
xs([["What do you eat?","你吃什么？"],["I eat rice and vegetables.","我吃米饭和蔬菜。"],["What shall we eat?","我们吃什么好呢？"],["Let’s eat noodles.","我们吃面条吧。"]])+
gramBox(`<p><b>What do you eat?</b>：<b>do</b> 是帮忙造问句的小帮手，<b>eat</b> 是${pos('eat','v')}，用原形。</p>
<p><b>rice</b>（米饭）、<b>noodles</b>（面条）、<b>vegetables</b>（蔬菜）都是名词。rice 没有复数，noodles、vegetables 是复数。</p>
<p><b>What shall we eat?</b> 里的 <b>shall</b> 是商量的小帮手，意思是“我们……好呢？”，后面跟动词原形：What shall we eat?（我们吃什么好呢？）回答：Let’s eat …（我们吃……吧）。</p>`)+
h('拆开看：每个词是什么词性')+
tbl(['句子','拆开看（词 → 词性）'],[
 ['What’s your name?','What（疑问词，问“什么”）　'+pos('is','v')+'（’s = is，是）　'+pos('your','pron')+'（你的）　'+pos('name','n')+'（名字）'],
 ['I like dogs.',''+pos('I','pron')+'（我）　'+pos('like','v')+'（喜欢）　'+pos('dogs','n')+'（狗，复数）'],
 ['It can run and jump.',''+pos('It','pron')+'（它）　'+pos('can','v')+'（能，帮助动词）　'+pos('run','v')+'（跑）　'+pos('and','conj')+'（和）　'+pos('jump','v')+'（跳）'],
 ['It’s red.',''+pos('It','pron')+'（它）　'+pos('is','v')+'（’s = is）　'+pos('red','adj')+'（红色的）'],
 ['How old are you?','How（疑问词）　'+pos('old','adj')+'（老的，这里问年龄）　'+pos('are','v')+'　'+pos('you','pron')+'（你）'],
 ['Thank you.',''+pos('Thank','v')+'（感谢）　'+pos('you','pron')+'（你）']])+
tip('<b>’s</b> 有两种：<b>What’s = What is</b>（缩写）；<b>Tom’s bag</b> 里的 ’s 是“……的”。想把 am / is / are、a / an、单复数学得更扎实，去看“三年级语法：词性和基础语法”那个单元。'),
qs:[
 L('Hello! I’m Amy.','听一听，你听到的是哪一句？',['Hello! I’m Amy.','Hello! I’m Andy.','Hi! I’m Emma.','Hello! I’m Alice.'],0,'I’m Amy. 我是艾米。'),
 L('What’s your name?','听一听，你听到的是哪一句？',['What’s your name?','What’s this?','How old are you?','Who’s that?'],0,'问名字：What’s your name?'),
 L('Nice to meet you.','听一听，这句话的意思是？',['很高兴认识你','再见','谢谢','对不起'],0,'meet 是见面，认识。'),
 L('He’s my father. She’s my mother.','听一听，他们是谁？',['爸爸和妈妈','爷爷和奶奶','哥哥和姐姐','叔叔和阿姨'],0,'father 是爸爸，mother 是妈妈。'),
 L('I live with my grandparents.','听一听，他和谁住在一起？',['爷爷奶奶','爸爸妈妈','哥哥','朋友'],0,'grandparents 是爷爷奶奶。'),
 L('It’s a cat. It can jump.','听一听，这是什么动物？它会做什么？',['猫，会跳','狗，会跑','鸟，会飞','鱼，会游'],0,'cat 是猫；jump 是跳。'),
 L('I like dogs.','听一听，他喜欢什么？',['狗','猫','兔子','鸟'],0,'dogs 是狗。'),
 L('Let’s water the flowers.','听一听，他们要做什么？',['给花浇水','摘花','种树','画花'],0,'water 在这里是“浇水”。'),
 L('What colour is it? It’s red.','听一听，它是什么颜色？',['红色','黄色','蓝色','绿色'],0,'red 是红色。'),
 L('I see red and green.','听一听，他看到了什么颜色？',['红色和绿色','红色和蓝色','黄色和绿色','黑色和白色'],0,'red 红，green 绿。'),
 L('How old are you? I’m eight.','听一听，他几岁？',['8 岁','18 岁','80 岁','7 岁'],0,'eight 是 8。'),
 L('How many apples? Five apples.','听一听，有几个苹果？',['5 个','15 个','50 个','4 个'],0,'five 是 5，注意和 fifteen、fifty 区分。'),
 L('Happy birthday!','听一听，这句话是在什么时候说的？',['过生日','过新年','吃饭','上学'],0,'Happy birthday! 是生日快乐。'),
 L('Thank you. You’re welcome.','听一听，第二个人在说什么？',['不客气','谢谢','对不起','再见'],0,'You’re welcome. 是不客气。'),
 L('Sorry. That’s OK.','听一听，第二个人在说什么？',['没关系','谢谢','再见','请坐'],0,'That’s OK. 是没关系。'),
 L('I’m tired.','听一听，他感觉怎么样？',['累了','开心','生气','饿了'],0,'tired 是累的。'),
 L('I eat rice and vegetables.','听一听，他吃什么？',['米饭和蔬菜','面条和鸡蛋','面包和牛奶','鱼和肉'],0,'rice 是米饭；vegetables 是蔬菜。'),
 L('Let’s eat noodles.','听一听，他们要吃什么？',['面条','米饭','面包','饺子'],0,'noodles 是面条。'),
 C('— What’s your name? — ___ name is Tom.',['My','I','Me','Your'],0,'“我的名字”用 My name。'),
 C('— How old are you? — I ___ eight.',['am','is','are','be'],0,'主语是 I，be 动词用 am。'),
 C('This is ___ elephant.',['an','a','the','am'],0,'elephant 以元音开头，前面用 an。'),
 C('— What colour is it? — ___ red.',['It’s','I’m','He’s','They’re'],0,'问东西用 It’s。'),
 C('— Thank you. — ___.',['You’re welcome','Nice to meet you','Good morning','I’m sorry'],0,'别人说 Thank you，回答 You’re welcome.'),
 C('— Sorry. — ___.',['That’s OK','Thank you','Hello','Goodbye'],0,'别人说 Sorry，可以回答 That’s OK.'),
 C('She ___ my mother.',['is','am','are','be'],0,'She 用 is。'),
 C('Good ___!（早上好）',['morning','afternoon','evening','night'],0,'morning 是早上。'),
 F('— How ___ are you? — I’m nine.','old','问年龄用 How old。'),
 F('This is my ___.（妈妈）','mother','mother 是妈妈。'),
 J('an 用在以元音开头的词前面，如 an apple。',true,'apple 以元音 a 开头，用 an。'),
 J('— Thank you. — Sorry. 这是一组对的问答。',false,'Thank you 的回答是 You’re welcome.'),
 O('很高兴认识你。','Nice to meet you.','Nice + to + meet + you.'),
 O('这是我的家人。','This is my family.','This is + my family.')
]}
);
