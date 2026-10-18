/* 三年级按课本单元主题出的听力题（机器朗读）。
 * 题目是按单元主题和 Part 标题出的，不是课本原文，用词都很基础。
 * 点“考试模式”会每题自动播放两遍、不能重听。 */
U.push(
{id:'u48',cn:'三年级上册听力',en:'Grade 3 Book 1 Listening',sum:'按上册六个单元的主题：交朋友、家人、动物、植物、颜色、数字',
intro:'这一单元按<b>三年级上册</b>的六个单元主题来出题：交朋友、不同的家庭、神奇的动物、我们身边的植物、多彩的世界、有用的数字。词和句子都很简单，先正常练，再打开<b>考试模式</b>。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['Making friends','Hello. / Hi. / Good morning.；What’s your name?；Nice to meet you.；Let’s play.'],
 ['Different families','father, mother, brother, sister, grandpa, grandma；Who’s that?；This is my …'],
 ['Amazing animals','cat, dog, rabbit, bird, fish, tiger, elephant, monkey, panda；It can run / jump / swim.'],
 ['Plants around us','tree, flower, grass, leaf, fruit；water the flowers；Don’t pick the flowers.'],
 ['The colourful world','red, yellow, blue, green, orange, purple, pink, black, white；What colour is it?'],
 ['Useful numbers','one … twenty；How old are you?；How many …?；Happy birthday!']])+
rule('数字容易混：<b>13</b> thirteen / <b>30</b> thirty，<b>14</b> fourteen / <b>40</b> forty，<b>15</b> fifteen / <b>50</b> fifty。听到 -teen 是后面的音重，-ty 是前面的音重。'),
qs:[
 L('Good morning! I’m Tom.','听一听，现在是什么时候？',['早上','下午','晚上','中午'],0,'morning 是早上。'),
 L('What’s your name? My name is Lily.','听一听，她叫什么名字？',['莉莉','艾米','露西','莉娜'],0,'My name is Lily. 我叫莉莉。'),
 L('Nice to meet you. Nice to meet you, too.','听一听，他们在做什么？',['第一次见面，互相问好','告别','道谢','道歉'],0,'Nice to meet you. 是初次见面的问候。'),
 L('Let’s play! OK!','听一听，他们要做什么？',['一起玩','一起吃饭','一起睡觉','一起上课'],0,'play 是玩。'),
 L('This is my brother. He is nine.','听一听，他是谁？几岁？',['哥哥或弟弟，9 岁','姐姐，9 岁','爸爸，9 岁','哥哥，19 岁'],0,'brother 是兄弟；nine 是 9。'),
 L('Who’s that? She’s my grandma.','听一听，她是谁？',['奶奶（外婆）','妈妈','姐姐','老师'],0,'grandma 是奶奶或外婆。'),
 L('I live with my father, my mother and my sister.','听一听，他和谁住在一起？',['爸爸、妈妈和姐姐','爷爷奶奶','哥哥','叔叔'],0,'father 爸爸，mother 妈妈，sister 姐姐。'),
 L('I have a cat. It can jump.','听一听，他有什么宠物？',['猫','狗','兔子','鱼'],0,'cat 是猫。'),
 L('What’s this? It’s a tiger.','听一听，这是什么动物？',['老虎','大象','猴子','熊猫'],0,'tiger 是老虎。'),
 L('I like pandas. They can eat bamboo.','听一听，熊猫吃什么？',['竹子','肉','鱼','草'],0,'bamboo 是竹子。'),
 L('Look! A monkey. It can climb the tree.','听一听，猴子会做什么？',['爬树','游泳','飞','跑得很快'],0,'climb 是爬；tree 是树。'),
 L('We get fruit from trees.','听一听，我们从树上得到什么？',['水果','鱼','肉','面包'],0,'fruit 是水果。'),
 L('Let’s water the flowers. Don’t pick them.','听一听，不要做什么？',['摘花','浇花','看花','种花'],0,'pick 是摘；Don’t 是不要。'),
 L('What colour is it? It’s yellow.','听一听，是什么颜色？',['黄色','红色','蓝色','绿色'],0,'yellow 是黄色。'),
 L('I see blue, green and purple.','听一听，他没有看到哪个颜色？',['红色','蓝色','绿色','紫色'],0,'他看到了 blue、green、purple，没有 red。'),
 L('Red light, stop. Green light, go.','听一听，绿灯要怎么做？',['走','停','等','跑'],0,'green light, go 是绿灯行。'),
 L('How old are you? I’m seven.','听一听，他几岁？',['7 岁','17 岁','70 岁','6 岁'],0,'seven 是 7。'),
 L('How many pencils? Fourteen pencils.','听一听，有几支铅笔？',['14 支','40 支','4 支','41 支'],0,'fourteen 是 14，不是 forty（40）。'),
 L('Happy birthday! Thank you!','听一听，他们在做什么？',['庆祝生日','上课','吃饭','告别'],0,'Happy birthday! 是生日快乐。'),
 L('What’s your name?','听问句，选出合适的回答。',['My name is Amy.','I’m nine.','It’s red.','Yes, I am.'],0,'问名字，回答 My name is …'),
 L('What colour is it?','听问句，选出合适的回答。',['It’s green.','It’s a cat.','I’m fine.','Five.'],0,'问颜色，回答 It’s + 颜色。'),
 W('rabbit','rabbit','rabbit 是兔子。','听写：兔子'),
 W('green','green','green 是绿色。','听写：绿色'),
 W('eight','eight','eight 是 8。','听写：数字 8')
]},
{id:'u49',cn:'三年级下册听力',en:'Grade 3 Book 2 Listening',sum:'按下册六个单元的主题：礼貌、表达感受、学习工具和感官、食物、旧玩具、数字',
intro:'这一单元按<b>三年级下册</b>的单元主题来出题：问候与礼貌、表达自己、更好地学习、健康食物、旧玩具、生活中的数字。词和句子都很简单，可以打开<b>考试模式</b>。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['礼貌用语','Excuse me.；Please.；Thank you. — You’re welcome.；Sorry. — That’s OK.'],
 ['Expressing yourself','happy, sad, angry, tired；big, small, long, short, new, old；How do you feel?'],
 ['Learning better','pencil, ruler, book, computer；eyes, ears, nose, mouth, hands；I see with my eyes.'],
 ['Healthy food','rice, noodles, bread, meat, fish, eggs, vegetables, fruit, milk；What do you eat?'],
 ['Old toys','doll, ball, kite, car, robot, bear；old, new；give it to a friend'],
 ['Numbers in life','How many …?；How much is it? — … yuan.；thirty, forty, fifty …']]),
qs:[
 L('Excuse me. Can I come in? Yes, please.','听一听，他在做什么？',['请求进门','道谢','道歉','告别'],0,'Excuse me. 是打扰一下，常用来请求。'),
 L('Thank you. You’re welcome.','听一听，第二个人在说什么？',['不客气','谢谢','对不起','再见'],0,'You’re welcome. 是不客气。'),
 L('Sorry. That’s OK.','听一听，第二个人的意思是？',['没关系','谢谢','再见','请坐'],0,'That’s OK. 是没关系。'),
 L('How do you feel? I’m sad.','听一听，他感觉怎么样？',['难过','开心','累','饿'],0,'sad 是难过的。'),
 L('I’m happy today. It’s my birthday.','听一听，他为什么开心？',['今天是他的生日','要放假','考试了','要吃糖'],0,'It’s my birthday. 今天是我的生日。'),
 L('My bag is big and new.','听一听，他的书包怎么样？',['又大又新','又小又旧','又大又旧','又小又新'],0,'big 是大的；new 是新的。'),
 L('I use a ruler to draw a line.','听一听，他用什么画线？',['尺子','铅笔','橡皮','书'],0,'ruler 是尺子。'),
 L('I see with my eyes. I hear with my ears.','听一听，他用什么听？',['耳朵','眼睛','鼻子','嘴巴'],0,'ears 是耳朵；hear 是听。'),
 L('I smell flowers with my nose.','听一听，他用什么闻花？',['鼻子','耳朵','眼睛','手'],0,'nose 是鼻子；smell 是闻。'),
 L('I eat rice and fish for lunch.','听一听，他午饭吃什么？',['米饭和鱼','面条和肉','面包和牛奶','鸡蛋和蔬菜'],0,'rice 是米饭；fish 是鱼。'),
 L('What shall we eat? Let’s eat noodles.','听一听，他们决定吃什么？',['面条','米饭','面包','饺子'],0,'noodles 是面条。'),
 L('Vegetables and fruit are healthy.','听一听，什么是健康的？',['蔬菜和水果','糖果和薯片','汽水','蛋糕'],0,'healthy 是健康的。'),
 L('I have an old bear. I like it very much.','听一听，他有什么旧玩具？',['小熊','娃娃','风筝','机器人'],0,'bear 是熊；old 是旧的。'),
 L('This is a robot. It’s my old toy.','听一听，这是什么玩具？',['机器人','汽车','球','风筝'],0,'robot 是机器人。'),
 L('Let’s make a toy car with a box.','听一听，他们要用什么做玩具车？',['盒子','纸','木头','瓶子'],0,'a box 是一个盒子。'),
 L('Let’s give the old toy to a friend.','听一听，他们要怎么处理旧玩具？',['送给朋友','扔掉','卖掉','藏起来'],0,'give … to a friend 是送给朋友。'),
 L('How many books? There are thirty books.','听一听，有多少本书？',['30 本','13 本','3 本','31 本'],0,'thirty 是 30，注意和 thirteen（13）区分。'),
 L('How much is it? It’s forty yuan.','听一听，多少钱？',['40 元','14 元','4 元','400 元'],0,'forty 是 40，注意和 fourteen（14）区分。'),
 L('Please sit down.','听一听，这句话的意思是？',['请坐','请站起来','请开门','请关门'],0,'sit down 是坐下。'),
 L('How do you feel?','听问句，选出合适的回答。',['I’m happy.','It’s red.','I’m nine.','Yes, I do.'],0,'问感受，回答 I’m + 形容词。'),
 L('What shall we eat?','听问句，选出合适的回答。',['Let’s eat noodles.','Yes, I am.','It’s a cat.','I’m fine.'],0,'What shall we eat? 的回答常用 Let’s eat …'),
 W('please','please','please 是请。','听写：请'),
 W('happy','happy','happy 是开心的。','听写：开心的'),
 W('noodles','noodles','noodles 是面条。','听写：面条')
]}
);
