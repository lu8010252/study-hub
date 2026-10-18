/* 课本句型（三年级）：按课本目录里的单元主题整理的最基础的句型，每句都可点读。
 * 三年级新版课本只有目录和 Part 标题，句型是推测的，没有核对课本原文。 */
U.push(
{id:'u47',cn:'课本句型（三年级）',en:'Textbook Patterns 3',sum:'打招呼、家人、动物、植物、颜色、数字、礼貌、感受、食物：三年级基础句型的听力和练习',
intro:'这个单元按<b>三年级</b>课本的单元主题整理，都是最基础、最常用的句子。四年级的孩子也可以拿来复习打基础。每一句都可以点 🔊 听，也可以点 🐢 慢速听。句子是按目录推测的，和课本原句可能略有出入。',
lesson:
h('上册 Unit 1 Making friends（交朋友）')+
xs([["Hello! I’m Amy.","你好！我是艾米。"],["What’s your name?","你叫什么名字？"],["My name is Tom.","我叫汤姆。"],["Nice to meet you.","很高兴认识你。"],["Nice to meet you, too.","我也很高兴认识你。"]])+
tip('打招呼：早上 <b>Good morning</b>，下午 <b>Good afternoon</b>，晚上 <b>Good evening</b>。')+
h('上册 Unit 2 Different families（不同的家庭）')+
xs([["Who’s that?","那是谁？"],["He’s my father. She’s my mother.","他是我爸爸。她是我妈妈。"],["This is my family.","这是我的家人。"],["I live with my grandparents.","我和爷爷奶奶住在一起。"]])+
h('上册 Unit 3 Amazing animals（神奇的动物）')+
xs([["What’s this?","这是什么？"],["It’s a cat.","这是一只猫。"],["I like dogs.","我喜欢狗。"],["It can run and jump.","它会跑，会跳。"]])+
warn('a 和 an：cat 前面用 <b>a</b>，元音开头的 animal、elephant 前面用 <b>an</b>：an elephant。')+
h('上册 Unit 4 Plants around us（我们身边的植物）')+
xs([["I see a tree and some flowers.","我看见一棵树和一些花。"],["We get fruit from plants.","我们从植物那里得到水果。"],["Let’s water the flowers.","我们给花浇水吧。"],["Don’t pick the flowers.","不要摘花。"]])+
h('上册 Unit 5 The colourful world（多彩的世界）')+
xs([["What colour is it?","它是什么颜色？"],["It’s red.","它是红色的。"],["What colours do you see?","你看到了什么颜色？"],["I see red and green.","我看到红色和绿色。"]])+
h('上册 Unit 6 Useful numbers（有用的数字）')+
xs([["How old are you?","你几岁了？"],["I’m eight.","我八岁。"],["How many apples?","有多少个苹果？"],["Five apples.","五个苹果。"],["Happy birthday!","生日快乐！"]])+
h('下册 Unit 1（问候与礼貌）')+
xs([["Excuse me.","打扰一下。"],["Thank you. — You’re welcome.","谢谢。——不客气。"],["Sorry. — That’s OK.","对不起。——没关系。"],["Please sit down.","请坐。"]])+
rule('求别人做事，加 <b>please</b>；别人帮了你，说 <b>Thank you</b>；做错了，说 <b>Sorry</b>。')+
h('下册 Unit 2 Expressing yourself（表达自己）')+
xs([["How do you feel?","你感觉怎么样？"],["I’m happy.","我很开心。"],["I’m tired.","我累了。"],["It’s big. It’s new.","它很大，它是新的。"]])+
h('下册 Unit 4 Healthy food（健康食物）')+
xs([["What do you eat?","你吃什么？"],["I eat rice and vegetables.","我吃米饭和蔬菜。"],["What shall we eat?","我们吃什么好呢？"],["Let’s eat noodles.","我们吃面条吧。"]]),
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
