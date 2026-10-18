/* 五年级、六年级按课本单元主题出的听力题（机器朗读）。
 * 题目是按单元主题出的，不是课本原文；上册（新版）只有单元名，下册（旧版目录）按常见内容出。
 * 点“考试模式”会每题自动播放两遍、不能重听。 */
U.push(
{id:'u42',cn:'五年级上册听力',en:'Grade 5 Book 1 Listening',sum:'按上册六个单元的主题：朋友、心情、工作和玩、健康习惯、食物、自然',
intro:'这一单元按<b>五年级上册</b>的六个单元主题来出题：不同的朋友、我的感受、工作与玩耍、健康的习惯、我们吃的食物、自然与我们。可以先正常练，再打开<b>考试模式</b>。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['Different friends','tall, short, strong, kind, funny, quiet；He has short hair.；She is very kind.'],
 ['My feelings','happy, sad, angry, worried, excited, tired；How do you feel?；Why? Because …'],
 ['Work and play','do homework, play football, read a book；What do you do after school?'],
 ['Healthy habits','get up early, go to bed early, wash hands, do exercise；You should … / shouldn’t …'],
 ['Food we eat','vegetables, fruit, meat, rice, milk；healthy, unhealthy；Do you like …?'],
 ['Nature and us','trees, animals, water；plant trees, save water, protect animals']])+
rule('听的时候先看问题和选项，抓<b>人物、心情、食物、做什么</b>这些关键词，第二遍再核对。'),
qs:[
 L('My friend Tom is tall and strong. He is very kind.','听一听，汤姆是什么样的？',['又高又壮，很友善','又矮又瘦','很安静','很淘气'],0,'tall and strong 是又高又壮；kind 是友善。'),
 L('She has long hair. She is funny.','听一听，她是什么样的？',['长头发，很有趣','短头发，很安静','长头发，很害羞','短头发，很有趣'],0,'long hair 是长头发；funny 是有趣的。'),
 L('Who is quiet? Amy is quiet.','听一听，谁很安静？',['艾米','汤姆','迈克','莉莉'],0,'Amy is quiet. 艾米很安静。'),
 L('How do you feel? I feel sad.','听一听，他感觉怎么样？',['难过','开心','生气','兴奋'],0,'sad 是难过的。'),
 L('Why are you angry? Because my brother broke my toy.','听一听，他为什么生气？',['弟弟弄坏了玩具','丢了书','没吃饭','考试没考好'],0,'broke my toy 是弄坏了我的玩具。'),
 L('I’m worried. I have a test tomorrow.','听一听，他为什么担心？',['明天有考试','明天要旅行','今天生病了','没有朋友'],0,'a test 是考试；tomorrow 是明天。'),
 L('I’m so excited! We are going to have a party.','听一听，他为什么兴奋？',['要开派对','要考试','要上课','要打扫'],0,'have a party 是开派对。'),
 L('What do you do after school? I do my homework and play football.','听一听，他放学后做什么？',['做作业、踢足球','看电视、睡觉','买东西','打扫教室'],0,'do homework 是做作业；play football 是踢足球。'),
 L('You should go to bed early.','听一听，他应该怎么做？',['早点睡觉','晚点睡觉','早点起床','多看电视'],0,'go to bed early 是早点睡觉。'),
 L('You shouldn’t eat too much candy.','听一听，不应该做什么？',['吃太多糖','喝水','吃蔬菜','刷牙'],0,'shouldn’t 是不应该；candy 是糖。'),
 L('I do exercise every day. I run in the morning.','听一听，他早上做什么？',['跑步','游泳','打球','骑车'],0,'run 是跑步。'),
 L('Do you like vegetables? Yes, I do. I like carrots and tomatoes.','听一听，他喜欢什么蔬菜？',['胡萝卜和西红柿','土豆和豆子','黄瓜和青菜','洋葱和蘑菇'],0,'carrots 是胡萝卜，tomatoes 是西红柿。'),
 L('Fruit and vegetables are healthy. Candy is not healthy.','听一听，哪个不健康？',['糖果','水果','蔬菜','牛奶'],0,'not healthy 是不健康。'),
 L('We should plant more trees. Trees are good for us.','听一听，我们应该怎么做？',['多种树','多砍树','多用水','多买玩具'],0,'plant trees 是种树。'),
 L('Don’t waste water. Turn off the tap.','听一听，要怎么做？',['关水龙头','开灯','关门','洗手'],0,'turn off the tap 是关水龙头。'),
 L('Is he kind?','听问句，选出合适的回答。',['Yes, he is.','Yes, he does.','He is Tom.','No, I’m not.'],0,'Is he …? 用 Yes, he is. 或 No, he isn’t. 回答。'),
 L('How do you feel today?','听问句，选出合适的回答。',['I feel happy.','I’m ten.','It’s sunny.','I like it.'],0,'问感受，回答 I feel …。'),
 W('worried','worried','worried 是担心的。','听写：担心的'),
 W('healthy','healthy','healthy 是健康的。','听写：健康的'),
 W('vegetable','vegetable','vegetable 是蔬菜。','听写：蔬菜')
]},
{id:'u43',cn:'五年级下册听力',en:'Grade 5 Book 2 Listening',sum:'按下册六个单元的主题：我的一天、季节、日历、谁的、安静做事',
intro:'这一单元按<b>五年级下册</b>的单元主题来出题：我的一天、我最喜欢的季节、学校日历、谁的狗、安静地工作。重点是<b>时间、月份日期、谁的</b>。可以打开<b>考试模式</b>。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['My day','get up, have breakfast, go to school, have class, go home；When do you …? — At six thirty.'],
 ['My favourite season','spring, summer, autumn, winter；Which season do you like best?；Because I can …'],
 ['My school calendar','January … December；first, second, third … twelfth；When is …? — It’s on …'],
 ['Whose dog is it?','mine, yours, his, hers, theirs, ours；Whose … is it?；The dog is eating.'],
 ['Work quietly!','quietly, loudly, slowly；Keep to the right.；Don’t run.']])+
warn('听日期时注意序数词：<b>fifth</b>（5）、<b>twelfth</b>（12）、<b>twentieth</b>（20）容易和基数词混。'),
qs:[
 L('When do you get up? I get up at six o’clock.','听一听，他几点起床？',['6:00','6:30','7:00','5:00'],0,'six o’clock 是 6:00。'),
 L('I have breakfast at seven. I go to school at seven thirty.','听一听，他几点去学校？',['7:30','7:00','8:30','7:13'],0,'seven thirty 是 7:30。'),
 L('What do you do in the evening? I do my homework and read a book.','听一听，他晚上做什么？',['做作业、看书','看电视','踢足球','打扫房间'],0,'do homework 是做作业；read a book 是看书。'),
 L('I do morning exercises at school.','听一听，他在学校做什么？',['早操','考试','午睡','吃早饭'],0,'morning exercises 是早操。'),
 L('Which season do you like best? I like autumn best.','听一听，他最喜欢哪个季节？',['秋天','春天','夏天','冬天'],0,'autumn 是秋天。'),
 L('Why do you like winter? Because I can make a snowman.','听一听，他为什么喜欢冬天？',['可以堆雪人','可以游泳','可以放风筝','可以摘苹果'],0,'make a snowman 是堆雪人。'),
 L('I like spring. I can fly kites and go on a picnic.','听一听，春天可以做什么？',['放风筝、野餐','游泳、吃冰激凌','摘苹果','滑雪'],0,'fly kites 是放风筝；go on a picnic 是去野餐。'),
 L('When is your birthday? It’s on May fifth.','听一听，他的生日是什么时候？',['5 月 5 日','5 月 15 日','5 月 3 日','6 月 5 日'],0,'fifth 是第五，不是 fifteenth（第十五）。'),
 L('When is Teachers’ Day? It’s on September tenth.','听一听，教师节是什么时候？',['9 月 10 日','9 月 1 日','10 月 9 日','7 月 10 日'],0,'September 是九月，tenth 是第十。'),
 L('The school trip is on October twentieth.','听一听，学校旅行是哪天？',['10 月 20 日','10 月 12 日','2 月 10 日','10 月 2 日'],0,'twentieth 是第二十。'),
 L('Whose hat is it? It’s mine.','听一听，帽子是谁的？',['说话人的','对方的','他的','她的'],0,'mine 是我的。'),
 L('Are these your gloves? No, they’re hers.','听一听，手套是谁的？',['她的','他的','我的','你的'],0,'hers 是她的。'),
 L('Whose dog is it? It’s theirs.','听一听，狗是谁的？',['他们的','我们的','你们的','她的'],0,'theirs 是他们的。'),
 L('Look! The dog is eating its bone.','听一听，狗在做什么？',['啃骨头','睡觉','玩球','跑步'],0,'is eating its bone 是正在啃它的骨头。'),
 L('Work quietly! The baby is sleeping.','听一听，为什么要安静？',['宝宝在睡觉','大家在上课','有人在考试','要吃饭了'],0,'The baby is sleeping. 宝宝在睡觉。'),
 L('Keep to the right. Don’t run in the hallway.','听一听，不要做什么？',['在走廊里跑','靠右走','说话','吃东西'],0,'don’t run 是不要跑；hallway 是走廊。'),
 L('When is your birthday?','听问句，选出合适的回答。',['It’s on June sixth.','It’s six o’clock.','It’s sunny.','I’m ten.'],0,'问日期，回答 It’s on + 日期。'),
 L('Whose bag is it?','听问句，选出合适的回答。',['It’s Mike’s.','It’s a bag.','Yes, it is.','It’s red.'],0,'问“谁的”，回答 It’s + 某人’s。'),
 W('season','season','season 是季节。','听写：季节'),
 W('birthday','birthday','birthday 是生日。','听写：生日'),
 W('quietly','quietly','quietly 是安静地。','听写：安静地')
]},
{id:'u45',cn:'六年级上册听力',en:'Grade 6 Book 1 Listening',sum:'按上册六个单元的主题：神奇的地方、相聚、健康、钱财、太空、能源',
intro:'这一单元按<b>六年级上册</b>的六个单元主题来出题：神奇的地方、相聚、健康的生活、合理管理钱财、探索太空、能源与自然。上册是新版，只有单元名，题目是按主题出的。可以打开<b>考试模式</b>。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['Amazing places','famous, old, beautiful, big；It’s in …；Where is it?'],
 ['Getting together','What are you going to do?；I’m going to …；Would you like to …?'],
 ['Healthy life','should, must, never, often；drink water, brush teeth, do sports'],
 ['Managing money well','How much …?；yuan；save, spend, cheap, expensive'],
 ['Exploring space','sun, moon, Earth, star, planet, astronaut, spaceship'],
 ['Energy, nature and us','save water, save energy, turn off the lights, waste']]),
qs:[
 L('The Great Wall is very long and old. It’s in China.','听一听，长城怎么样？',['又长又古老','又小又新','很矮','很窄'],0,'long 是长的；old 是古老的。'),
 L('The Palace Museum is in Beijing. It’s famous.','听一听，故宫在哪里？',['北京','上海','杭州','成都'],0,'Beijing 是北京；famous 是著名的。'),
 L('What are you going to do this weekend? I’m going to visit my grandparents.','听一听，他周末打算做什么？',['看望爷爷奶奶','去爬山','看电影','买东西'],0,'visit my grandparents 是看望爷爷奶奶。'),
 L('Would you like to come to my party? Sure. I’d love to.','听一听，对方怎么回答？',['同意去','不去','不知道','没听清'],0,'Sure. I’d love to. 是愿意去。'),
 L('Sorry, I can’t. I have to do my homework.','听一听，他为什么不能去？',['要做作业','要睡觉','要吃饭','要看书'],0,'have to do my homework 是得做作业。'),
 L('You should drink more water. It’s good for you.','听一听，应该多做什么？',['多喝水','多吃糖','多看电视','多睡觉'],0,'drink more water 是多喝水。'),
 L('He never eats breakfast. That’s not good.','听一听，他怎么样？',['从不吃早饭','每天吃早饭','有时吃早饭','经常吃早饭'],0,'never 是从不。'),
 L('How often do you play sports? Three times a week.','听一听，他多久做一次运动？',['每周三次','每天一次','每月三次','每周两次'],0,'three times a week 是一周三次。'),
 L('How much is the book? It’s thirty yuan.','听一听，书多少钱？',['30 元','13 元','300 元','3 元'],0,'thirty 是 30，注意和 thirteen（13）区分。'),
 L('I want to save money. I’m going to buy a bike.','听一听，他为什么要存钱？',['想买自行车','想买书','想买衣服','想买玩具'],0,'buy a bike 是买自行车。'),
 L('This bag is too expensive. I have only fifty yuan.','听一听，他有多少钱？',['50 元','15 元','500 元','5 元'],0,'fifty 是 50，注意和 fifteen（15）区分。'),
 L('The sun is bigger than the Earth.','听一听，谁更大？',['太阳','地球','月亮','一样大'],0,'bigger than 是比……大。'),
 L('The moon goes around the Earth.','听一听，月亮围着什么转？',['地球','太阳','火星','星星'],0,'goes around 是围着转；the Earth 是地球。'),
 L('Astronauts fly in a spaceship.','听一听，宇航员乘坐什么？',['宇宙飞船','飞机','火车','轮船'],0,'spaceship 是宇宙飞船。'),
 L('We should save water and energy. Turn off the lights when you leave.','听一听，离开时要做什么？',['关灯','开灯','关门','开窗'],0,'turn off the lights 是关灯。'),
 L('We shouldn’t waste food.','听一听，不应该做什么？',['浪费食物','吃饭','洗手','睡觉'],0,'waste 是浪费。'),
 L('What are you going to do tomorrow?','听问句，选出合适的回答。',['I’m going to play football.','I played football.','I like football.','Yes, I am.'],0,'问将来的打算，用 be going to 回答。'),
 W('astronaut','astronaut','astronaut 是宇航员。','听写：宇航员'),
 W('energy','energy','energy 是能源、能量。','听写：能源'),
 W('expensive','expensive','expensive 是贵的。','听写：贵的')
]},
{id:'u46',cn:'六年级下册听力',en:'Grade 6 Book 2 Listening',sum:'按下册四个单元的主题：身高体重比较、上个周末、去哪里度假、过去和现在',
intro:'这一单元按<b>六年级下册</b>的四个单元主题来出题：你有多高、上个周末、你去了哪里、过去和现在。重点是<b>比较级、过去式、数字</b>。下册这张目录是旧版，题目按常见内容出。可以打开<b>考试模式</b>。',
lesson:
h('先抓关键词')+
tbl(['单元主题','常听到的词和句子'],[
 ['How tall are you?','tall, short, heavy, thin；taller than, shorter than；centimetres, kilograms'],
 ['Last weekend','washed, watched, cleaned, stayed, went, saw, had；What did you do?；Did you …?'],
 ['Where did you go?','went to …, by plane / train / bus；went hiking, took pictures, ate, bought'],
 ['Then and now','was / were；There was no …；then, now, in the past']])+
tip('听到 <b>-ed</b> 结尾的词，或 went、saw、had 这些不规则词，就是在讲<b>过去</b>的事。'),
qs:[
 L('How tall are you? I’m one hundred and fifty centimetres tall.','听一听，他有多高？',['150 厘米','115 厘米','105 厘米','50 厘米'],0,'one hundred and fifty 是 150。'),
 L('How heavy are you? I’m forty-five kilograms.','听一听，他有多重？',['45 公斤','54 公斤','15 公斤','40 公斤'],0,'forty-five 是 45，不是 fifty-four（54）。'),
 L('Tom is taller than Mike. Mike is shorter than Tom.','听一听，谁更高？',['汤姆','迈克','一样高','不知道'],0,'taller than 是比……高。'),
 L('My feet are bigger than yours.','听一听，谁的脚更大？',['说话人的','对方的','一样大','不知道'],0,'bigger than yours 是比你的大。'),
 L('This rope is longer than that one.','听一听，哪根绳子更长？',['这根','那根','一样长','都很短'],0,'longer than 是比……长；this 是这个。'),
 L('What did you do last weekend? I washed my clothes and cleaned my room.','听一听，他上周末做了什么？',['洗衣服、打扫房间','看电视','去公园','踢足球'],0,'washed my clothes 是洗衣服；cleaned my room 是打扫房间。'),
 L('I watched TV and read a book on Sunday.','听一听，他周日做了什么？',['看电视、看书','去购物','打篮球','游泳'],0,'watched TV 是看电视；read a book 是看书。'),
 L('Did you go to the park? Yes, I did. I saw many flowers.','听一听，他去公园了吗？',['去了，看到很多花','没去','去了，看到很多鸟','去了，没看到花'],0,'Yes, I did. 是去了；saw 是看见了。'),
 L('Where did you go on your holiday? I went to Hainan.','听一听，他去了哪里？',['海南','北京','广州','云南'],0,'Hainan 是海南。'),
 L('How did you go there? I went by train.','听一听，他怎么去的？',['坐火车','坐飞机','坐船','坐公交'],0,'by train 是坐火车。'),
 L('What did you do there? I went swimming and took many pictures.','听一听，他在那里做了什么？',['游泳、拍照','爬山','钓鱼','骑马'],0,'went swimming 是去游泳；took pictures 是拍照。'),
 L('I bought a hat and ate some noodles.','听一听，他买了什么？',['一顶帽子','一双鞋','一条裙子','一本书'],0,'bought 是买了；a hat 是一顶帽子。'),
 L('I hurt my foot yesterday.','听一听，他怎么了？',['脚受伤了','手受伤了','头疼','肚子疼'],0,'hurt my foot 是脚受伤了。'),
 L('I was short then. I’m tall now.','听一听，他现在怎么样？',['很高','很矮','很瘦','很小'],0,'now 是现在。'),
 L('There was no computer in the past. Now there are computers everywhere.','听一听，现在怎么样？',['到处都有电脑','没有电脑','只有电视','只有电话'],0,'Now there are … everywhere 是现在到处都有……'),
 L('What did you do last weekend?','听问句，选出合适的回答。',['I stayed at home.','I stay at home.','I’m staying home.','Yes, I did.'],0,'问过去的事，回答用过去式 stayed。'),
 L('How did you go there?','听问句，选出合适的回答。',['I went by plane.','I went to Beijing.','Yes, I did.','Two days.'],0,'How 问方式，回答 by + 交通工具。'),
 W('heavier','heavier','heavier 是更重的。','听写：更重的'),
 W('yesterday','yesterday','yesterday 是昨天。','听写：昨天'),
 W('holiday','holiday','holiday 是假期。','听写：假期')
]}
);
