/* 听力题库扩充（围绕课本主题，但不局限于课本）
 * - 给 u38（四上听力）、u39（四下听力）追加题，用 MORE，旧题编号不变
 * - 新单元 u40「听力拓展：日常话题」：数字、日期、颜色、食物、动物、爱好、问路、身体、正在做的事、问答
 * 题目是按小学中年级的常见话题出的，不是课本原文。 */
MORE.push({
u38:[
 /* Helping at home */
 L('My father is a driver. My mother is a nurse.','妈妈做什么工作？',['护士','司机','老师','医生'],0,'My mother is a nurse. 妈妈是护士。'),
 L('I help my mom wash clothes every weekend.','他什么时候帮妈妈洗衣服？',['每个周末','每天','每个月','每天晚上'],0,'every weekend 是每个周末。'),
 /* My friends */
 L('He has short hair and big eyes.','他是什么样子？',['短头发，大眼睛','长头发，小眼睛','短头发，小眼睛','长头发，大眼睛'],0,'short hair 是短头发；big eyes 是大眼睛。'),
 /* Places we live in */
 L('I live in a small village. There is a river near my house.','他家附近有什么？',['河','山','公园','学校'],0,'a river 是一条河。'),
 /* Helping in the community */
 L('Police officers keep us safe.','警察做什么？',['保护我们的安全','给我们看病','教我们读书','给我们做饭'],0,'keep us safe 是让我们平安。'),
 /* The weather and us */
 L('It’s hot and sunny. I need my sunglasses.','他需要什么？',['太阳镜','雨伞','外套','雨靴'],0,'sunglasses 是太阳镜。'),
 L('What’s the weather like in winter? It’s cold and snowy.','冬天天气怎么样？',['冷，下雪','热，晴天','凉爽，有风','暖和，下雨'],0,'cold 是冷，snowy 是下雪的。'),
 /* Changing for the seasons */
 L('My favourite season is autumn. The leaves are yellow.','他最喜欢哪个季节？',['秋天','春天','夏天','冬天'],0,'autumn 是秋天；leaves 是树叶。'),
 L('We go swimming in summer. It’s very hot.','他们夏天去做什么？',['游泳','滑雪','放风筝','堆雪人'],0,'go swimming 是去游泳。'),
 W('season','season','season 是季节。','春夏秋冬叫什么'),
 W('It is cold in winter.','It is cold in winter.','in + 季节。','5 个词，说冬天冷')
],
u39:[
 /* Class rules */
 L('Please be quiet in the library.','在图书馆里要做什么？',['保持安静','大声读书','跑步','吃东西'],0,'be quiet 是保持安静。'),
 L('Don’t talk in class. Listen to the teacher.','上课要怎么做？',['不说话，听老师讲','和同学聊天','看课外书','吃零食'],0,'Don’t talk 是不要说话；listen to 是听。'),
 L('Raise your hand before you speak.','说话前要做什么？',['举手','站起来','敲桌子','拍手'],0,'raise your hand 是举手。'),
 L('Don’t eat in class.','上课不能做什么？',['吃东西','写字','举手','听讲'],0,'Don’t eat 是不要吃东西。'),
 L('Can I use my phone in class?','听问句，选出合适的回答。',['No, you can’t.','Yes, I am.','It’s sunny.','I like it.'],0,'Can I …? 用 Yes, you can. 或 No, you can’t. 回答。'),
 /* Family rules */
 L('Go to bed at nine o’clock.','几点睡觉？',['9 点','7 点','8 点','10 点'],0,'nine o’clock 是 9 点整。'),
 L('Don’t play with the phone at the table. Eat your dinner.','吃饭时不要做什么？',['玩手机','说话','喝汤','看书'],0,'phone 是手机；at the table 是在餐桌旁。'),
 L('You should put your toys away.','应该做什么？',['把玩具收好','把玩具带走','玩玩具','买玩具'],0,'put … away 是收起来。'),
 L('Can I watch TV? Yes, but only for half an hour.','他最多能看多久电视？',['半小时','一小时','两小时','十分钟'],0,'half an hour 是半小时。'),
 /* Time for school */
 L('It’s ten thirty.','听一听，现在几点？',['10:30','10:13','3:10','1:30'],0,'ten thirty 是 10:30。'),
 L('What time do you get up? I get up at six thirty.','他几点起床？',['6:30','6:13','7:30','5:30'],0,'six thirty 是 6:30。'),
 L('What time is breakfast? It’s at seven fifteen.','早饭几点？',['7:15','7:50','5:17','6:15'],0,'seven fifteen 是 7:15；fifteen 和 fifty 要听清。'),
 L('School starts at eight o’clock. It’s seven fifty now.','离上课还有几分钟？',['10 分钟','50 分钟','5 分钟','15 分钟'],0,'seven fifty 是 7:50，8 点上课，还有 10 分钟。'),
 L('It’s time for lunch. Let’s go to the dining hall.','他们要去哪里？',['食堂','教室','操场','图书馆'],0,'dining hall 是食堂。'),
 L('What’s the first class today? It’s Chinese.','第一节课是什么？',['语文','数学','英语','体育'],0,'Chinese 在这里是语文课。'),
 /* Going shopping */
 L('How much are the shorts? They’re forty yuan.','短裤多少钱？',['40 元','14 元','4 元','44 元'],0,'forty 是 40；fourteen 才是 14。'),
 L('I want a red jacket. Here you are. Thank you.','他想买什么？',['红色外套','蓝色外套','红色帽子','红色鞋子'],0,'a red jacket 是红色外套。'),
 L('Is this hat expensive? No, it’s cheap. It’s only twelve yuan.','帽子多少钱？',['12 元','2 元','20 元','13 元'],0,'twelve 是 12。'),
 L('Can I try on these shoes? Sure. What size?','店员在问什么？',['尺码','颜色','价格','牌子'],0,'size 是尺码。'),
 L('These trousers are too big. Do you have a small one?','裤子有什么问题？',['太大了','太小了','太贵了','太旧了'],0,'too big 是太大了。'),
 /* Farms and us / On the farm */
 L('How many hens are there? There are fifteen hens.','有几只母鸡？',['15 只','5 只','50 只','14 只'],0,'fifteen 是 15，注意和 fifty 区分。'),
 L('The farmer gets up early. He feeds the cows.','农民早上做什么？',['喂牛','骑马','卖菜','睡觉'],0,'feed the cows 是喂牛。'),
 L('We can get milk from cows and eggs from hens.','鸡蛋从哪里来？',['母鸡','奶牛','羊','猪'],0,'eggs from hens 是鸡蛋来自母鸡。'),
 L('The pigs are in the field. The horse is under the tree.','马在哪里？',['在树下','在田里','在房子里','在河边'],0,'under the tree 是在树下。'),
 L('What are those animals? They are pigs.','它们是什么动物？',['猪','牛','羊','马'],0,'pigs 是猪。'),
 /* Revision: A great weekend plan */
 L('What’s your weekend plan? I’m going to visit my grandparents.','周末他打算做什么？',['看望爷爷奶奶','去购物','去公园','做作业'],0,'visit my grandparents 是看望爷爷奶奶；be going to 表示打算。'),
 L('Let’s go to the farm on Saturday. Great idea!','他们周六去哪里？',['农场','公园','商店','学校'],0,'on Saturday 是在周六。'),
 /* 听写 */
 W('quiet','quiet','quiet 是安静的。','在图书馆里要做到的'),
 W('classroom','classroom','classroom 由 class 和 room 组成。','上课的地方'),
 W('farmer','farmer','farmer 是农民。','在农场工作的人'),
 W('Please be quiet.','Please be quiet.','Please 放在句首表示“请”。','3 个词，请别人安静'),
 W('It’s seven thirty.','It’s seven thirty.','seven thirty 是 7:30。','3 个词，说时间'),
 W('The shoes are cheap.','The shoes are cheap.','shoes 是复数，用 are。','4 个词，说鞋子便宜'),
 W('Don’t eat in class.','Don’t eat in class.','Don’t + 动词原形。','4 个词，说上课别吃东西')
]});

U.push(
{id:'u40',cn:'听力拓展：日常话题',en:'Listening: Everyday Topics',sum:'数字、日期、颜色、食物、动物、爱好、问路、身体、正在做的事',
intro:'这个单元的题<b>围绕课本，但不局限于课本</b>：多听不同话题，耳朵才会越来越灵。一问一答会用两个声音，也可以打开<b>考试模式</b>（每题听两遍）。',
lesson:
h('这个单元有哪些话题')+
tbl(['话题','常听到的词和句子'],[
 ['数字和日期','twenty-three, forty-five；What’s the date? / What day is it?；March the second；Tuesday, Friday'],
 ['颜色和衣服','red, blue, green, yellow, pink, purple, black, white；What colour is …?'],
 ['食物和饮料','noodles, rice, eggs, milk, juice, tea；Would you like …? Yes, please.'],
 ['动物','panda, monkey, elephant, bird, fish；long nose, climb, fly, swim'],
 ['爱好和运动','I like playing …；Can you play …?；every day / every weekend'],
 ['问路和交通','Where is …?；Go straight. Turn left / right.；by bus, by bike'],
 ['身体和健康','headache, eyes, hair, teeth；see a doctor；Drink more water.'],
 ['正在做的事','What is he doing? — He is …ing.；singing, cooking, drawing, reading']])+
h('怎么听')+
rule('<ol><li>先看选项，找出它们<b>哪里不一样</b>：是数字？颜色？地点？</li><li>数字容易错：<b>thirteen / thirty、fifteen / fifty</b>，重音不同。</li><li>有“但是 but / 不 don’t”的句子，真正的答案常在后面。</li></ol>')+
xs([["Where is the post office? Go straight and turn left.","邮局在哪里？直走，然后左转。"],["What is Dad doing? He is cooking in the kitchen.","爸爸在做什么？他在厨房做饭。"]])+
tip('听问答题，先想想“这个问题会怎么回答”：问 How old … 回答年龄，问 Where … 回答地点。这样听选项时更容易找对。'),
qs:[
 /* 数字 */
 L('I have twenty-three stickers.','他有多少张贴纸？',['23','32','13','30'],0,'twenty-three 是 23。'),
 L('There are forty-five students in my class.','他班里有多少学生？',['45','54','15','40'],0,'forty-five 是 45。'),
 L('Ten plus six is sixteen.','听一听，结果是多少？',['16','60','26','10'],0,'sixteen 是 16；sixty 才是 60。'),
 L('My phone number is one three eight, five five two, seven one four.','电话号码最后三位是？',['714','741','417','147'],0,'最后三位是 seven one four，也就是 714。'),
 L('The bus number is thirty.','公交车是几路？',['30','13','3','33'],0,'thirty 是 30；thirteen 才是 13。'),
 L('How many pencils do you have? I have nine.','他有几支铅笔？',['9','19','90','5'],0,'nine 是 9。'),
 /* 日期 */
 L('Today is Tuesday, October the thirteenth.','今天是几月几日星期几？',['10 月 13 日，星期二','10 月 30 日，星期二','10 月 13 日，星期三','11 月 13 日，星期二'],0,'thirteenth 是 13 日；thirtieth 才是 30 日。'),
 L('My birthday is on March the second.','生日是几月几日？',['3 月 2 日','3 月 12 日','2 月 3 日','3 月 20 日'],0,'March 是三月；the second 是 2 日。'),
 L('What day is it today? It’s Friday. We have PE today.','今天有什么课？',['体育课','音乐课','美术课','科学课'],0,'PE 是体育课。'),
 L('We don’t have school on Saturday and Sunday.','哪几天不上学？',['周六和周日','周五和周六','周一和周二','只有周日'],0,'Saturday and Sunday 是周六和周日。'),
 /* 颜色和衣服 */
 L('I like the blue T-shirt and the white shoes.','他喜欢什么？',['蓝色 T 恤和白色鞋子','白色 T 恤和蓝色鞋子','蓝色裙子和白色帽子','红色 T 恤和黑色鞋子'],0,'blue 是蓝色；white 是白色。'),
 L('What colour is your bag? It’s green and yellow.','书包是什么颜色？',['绿色和黄色','红色和黄色','绿色和蓝色','黑色和白色'],0,'green 是绿色；yellow 是黄色。'),
 L('The sky is blue. The grass is green.','草是什么颜色？',['绿色','蓝色','黄色','白色'],0,'grass 是草；green 是绿色。'),
 L('Her skirt is pink and her socks are purple.','她的袜子是什么颜色？',['紫色','粉色','橙色','灰色'],0,'socks 是袜子；purple 是紫色。'),
 L('He is wearing a black coat and a red hat.','他戴什么颜色的帽子？',['红色','黑色','蓝色','白色'],0,'a red hat 是红色的帽子。'),
 /* 食物和饮料 */
 L('I like noodles and eggs for breakfast.','他早饭吃什么？',['面条和鸡蛋','面包和牛奶','米饭和蔬菜','包子和粥'],0,'noodles 是面条；eggs 是鸡蛋。'),
 L('Would you like some milk? Yes, please.','他想要什么？',['牛奶','果汁','水','茶'],0,'milk 是牛奶；Yes, please. 是“好的，请给我”。'),
 L('I don’t like carrots, but I like potatoes.','他不喜欢什么？',['胡萝卜','土豆','西红柿','洋葱'],0,'don’t like 是不喜欢；carrots 是胡萝卜。'),
 L('What would you like to drink? A glass of orange juice, please.','他想喝什么？',['橙汁','苹果汁','牛奶','水'],0,'orange juice 是橙汁。'),
 L('Can I have two hamburgers and a cup of tea?','他想要什么？',['两个汉堡和一杯茶','一个汉堡和两杯茶','两个面包和一杯牛奶','两个鸡腿和一杯水'],0,'two hamburgers 是两个汉堡；a cup of tea 是一杯茶。'),
 L('Lunch is ready! We have fish, rice and soup.','午饭没有什么？',['面条','鱼','米饭','汤'],0,'有 fish、rice 和 soup，没有面条。'),
 /* 动物 */
 L('A panda is black and white. It likes bamboo.','熊猫喜欢吃什么？',['竹子','鱼','草','肉'],0,'bamboo 是竹子。'),
 L('The monkey is climbing the tree.','猴子在做什么？',['爬树','吃香蕉','睡觉','游泳'],0,'is climbing 是正在爬。'),
 L('Look at the elephant. It has a long nose.','大象有什么特点？',['长鼻子','长脖子','长尾巴','大耳朵'],0,'long nose 是长鼻子。'),
 L('Birds can fly, but fish can’t. Fish can swim.','鱼会做什么？',['游泳','飞','跑','爬树'],0,'Fish can swim. 鱼会游泳。'),
 /* 爱好和运动 */
 L('What do you like to do? I like playing basketball.','他喜欢做什么？',['打篮球','踢足球','打乒乓球','游泳'],0,'playing basketball 是打篮球。'),
 L('Can you play the piano? Yes, I can. I play it every day.','他多久弹一次钢琴？',['每天','每周','每月','从不'],0,'every day 是每天。'),
 L('I like reading books. My favourite book is about animals.','他最喜欢的书是关于什么的？',['动物','太空','恐龙','汽车'],0,'about animals 是关于动物。'),
 L('We are going to have a school sports meeting on Friday.','学校周五有什么活动？',['运动会','音乐会','考试','春游'],0,'sports meeting 是运动会。'),
 L('Do you like swimming? Yes, I do. I go swimming every weekend.','他什么时候去游泳？',['每个周末','每个星期一','每天','每个月'],0,'every weekend 是每个周末。'),
 /* 问路和交通 */
 L('Excuse me, where is the post office? Go straight and turn left.','怎么走到邮局？',['直走，然后左转','直走，然后右转','右转，然后直走','左转，然后右转'],0,'go straight 是直走；turn left 是左转。'),
 L('The bookstore is next to the bank.','书店在哪里？',['银行旁边','银行对面','银行后面','银行前面'],0,'next to 是在……旁边。'),
 L('The zoo is far from here. Let’s take a bus.','他们怎么去动物园？',['坐公交车','走路','骑自行车','开车'],0,'take a bus 是坐公交车。'),
 L('Turn right at the traffic lights.','在红绿灯处怎么走？',['右转','左转','直走','掉头'],0,'turn right 是右转。'),
 L('How can I get to the museum? Take the number fifteen bus.','坐几路车？',['15 路','50 路','5 路','14 路'],0,'fifteen 是 15；fifty 才是 50。'),
 /* 身体和健康 */
 L('I have a headache. I need to see a doctor.','他怎么了？',['头疼','肚子疼','牙疼','发烧'],0,'headache 是头疼。'),
 L('Drink more water and get some rest.','医生建议什么？',['多喝水，多休息','多吃糖','多运动','少睡觉'],0,'drink more water 是多喝水；rest 是休息。'),
 L('My eyes are big and my hair is short.','他的头发怎么样？',['短','长','卷','没有'],0,'short hair 是短头发。'),
 L('Brush your teeth twice a day.','一天要做什么？',['刷两次牙','洗两次脸','吃两次药','喝两次水'],0,'twice a day 是一天两次。'),
 /* 正在做的事 */
 L('Listen! Who is singing? Amy is singing.','谁在唱歌？',['艾米','汤姆','莉莉','迈克'],0,'Amy is singing. 艾米在唱歌。'),
 L('The children are playing on the playground.','孩子们在哪里玩？',['操场上','教室里','公园里','家里'],0,'playground 是操场。'),
 L('What is Dad doing? He is cooking in the kitchen.','爸爸在哪里做什么？',['在厨房做饭','在客厅看电视','在花园浇花','在卧室睡觉'],0,'cooking in the kitchen 是在厨房做饭。'),
 L('My sister is drawing a picture. My brother is reading a book.','他的兄弟（哥哥或弟弟）在做什么？',['看书','画画','唱歌','跳舞'],0,'my brother is reading a book，他的兄弟在看书。'),
 L('Look! It’s raining. The girl is holding an umbrella.','女孩拿着什么？',['雨伞','书包','风筝','花'],0,'umbrella 是雨伞。'),
 /* 听问句选答语 */
 L('How are you today?','听问句，选出合适的回答。',['I’m fine, thank you.','I’m ten.','It’s sunny.','Yes, I do.'],0,'问“你今天好吗”，回答 I’m fine, thank you.'),
 L('What’s your favourite colour?','听问句，选出合适的回答。',['It’s blue.','I’m blue.','Yes, it is.','At six.'],0,'问颜色，回答 It’s + 颜色。'),
 L('How old is your sister?','听问句，选出合适的回答。',['She is eight.','She is tall.','She is a student.','At eight.'],0,'How old 问年龄，回答 She is + 数字。'),
 L('What do you want to be?','听问句，选出合适的回答。',['I want to be a teacher.','Yes, I do.','It’s a book.','At school.'],0,'问“你想当什么”，回答 I want to be a …。'),
 L('Where is my pencil?','听问句，选出合适的回答。',['It’s in your bag.','It’s a pencil.','Yes, it is.','I have one.'],0,'Where 问地点，回答 It’s in / on / under …。'),
 L('Do you like apples?','听问句，选出合适的回答。',['Yes, I do.','Yes, I am.','It’s red.','No, it isn’t.'],0,'Do you …? 用 Yes, I do. 或 No, I don’t. 回答。'),
 L('Whose book is this?','听问句，选出合适的回答。',['It’s Tom’s.','It’s a book.','Yes, it is.','He is Tom.'],0,'Whose 问“谁的”，回答 It’s + 某人’s。'),
 L('How do you go to school?','听问句，选出合适的回答。',['By bike.','At seven.','Yes, I do.','It’s far.'],0,'How 问方式，回答 By + 交通工具。'),
 /* 听写 */
 W('sandwich','sandwich','sandwich 是三明治，里面有 w。','一种食物'),
 W('Saturday','Saturday','Saturday 是星期六，首字母要大写。','星期几'),
 W('library','library','library 是图书馆。','借书的地方'),
 W('homework','homework','homework 由 home 和 work 组成。','放学后要做的作业'),
 W('I go to school by bus.','I go to school by bus.','by + 交通工具。','6 个词，说怎么去学校'),
 W('My favourite colour is blue.',['My favourite colour is blue.','My favorite color is blue.'],'favourite 是最喜欢的（英式拼法）。','5 个词，说最喜欢的颜色'),
 W('The monkey is climbing a tree.','The monkey is climbing a tree.','is climbing 表示正在爬。','6 个词，说猴子在爬树'),
 W('Brush your teeth.','Brush your teeth.','teeth 是 tooth 的复数。','3 个词，叫别人刷牙')
]}
);
ORDER.push('u40');
Object.assign(GRADES,{u40:'4'});
