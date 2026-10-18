/* 三年级语法：词性和基础语法，用最简单的话讲清楚，对应三年级课本每个单元后面的 Grammar（语法小结）。
 * 内容是按三年级常见的语法点整理的，没有核对课本原文。 */
Object.assign(GRADES,{u50:'3'});
ORDER.push('u50');
U.push(
{id:'u50',cn:'三年级语法：词性和基础语法',en:'Grade 3 Grammar',sum:'名词、动词、形容词、代词；am / is / are；a / an；单数和复数；怎么提问',
intro:'语法不难，就是句子里的“规矩”。这一课用最简单的话讲：<b>每个词是什么“家族”（词性）</b>，以及造句最常用的几条规矩。先看讲解，再做题。每个英文例句都可以点 🔊 听。',
lesson:
h('第一步：先认识三个最重要的词家族')+
p('英语单词按“干什么用”分成不同的家族，这叫<b>词性</b>。先记住最重要的三个：')+
tbl(['家族','它回答什么问题','例子'],[
 [pos('名词','n')+'<br>noun','<b>是什么？</b>人、动物、东西、地方的名字','cat（猫）、book（书）、Tom、school（学校）'],
 [pos('动词','v')+'<br>verb','<b>做什么？</b>动作，还有“是”','run（跑）、eat（吃）、like（喜欢）、is（是）'],
 [pos('形容词','adj')+'<br>adjective','<b>什么样？</b>说明名词的样子、颜色、大小','big（大的）、red（红色的）、happy（开心的）']])+
rule('<b>名词 = 是什么</b>；<b>动词 = 做什么</b>；<b>形容词 = 什么样</b>。遇到一个词，先问自己：它是在说“东西的名字”、“动作”，还是“样子”？')+
xs([["The "+pos('big','adj')+" "+pos('cat','n')+" "+pos('runs','v')+".","这只大猫在跑。"],["I "+pos('like','v')+" "+pos('red','adj')+" "+pos('apples','n')+".","我喜欢红苹果。"]])+
h('再认识三个“小帮手”')+
tbl(['家族','作用','例子'],[
 [pos('代词','pron')+'<br>pronoun','<b>代替名词</b>，不用一遍遍说名字','I（我）、you（你）、he（他）、she（她）、it（它）、we（我们）、they（他们）'],
 [pos('冠词','art')+'<br>article','放在名词前面，帮名词“报到”','a、an、the'],
 [pos('数词','num')+'<br>numeral','表示数量或顺序','one、two、three、first、second']])+
xs([["Amy is my friend. "+pos('She','pron')+" is kind.","艾米是我的朋友。她很友善。（She 代替 Amy）"]])+
tip('<b>my、your、his、her</b>（我的、你的、他的、她的）也是代词家族的，叫“物主代词”，后面一定要跟名词：my <b>book</b>、her <b>bag</b>。')+
h('一句话拆开看：每个词是什么词性')+
tbl(['句子','拆开看'],[
 ['My name is Tom.',pos('My','pron')+'（我的）　'+pos('name','n')+'（名字）　'+pos('is','v')+'（是）　'+pos('Tom','n')+'（人名）'],
 ['I see a cat.',pos('I','pron')+'（我）　'+pos('see','v')+'（看见）　'+pos('a','art')+'（一只）　'+pos('cat','n')+'（猫）'],
 ['The tiger is big.',pos('The','art')+'　'+pos('tiger','n')+'（老虎）　'+pos('is','v')+'（是）　'+pos('big','adj')+'（大的）']])+
warn('一个词到底是什么词性，要看它在<b>这句话里</b>干什么。比如 <b>drink</b>：I drink milk.（喝，动词）；I want a drink.（饮料，名词）。')+
h('句子的样子：谁 + 做什么 / 是什么')+
p('最简单的英语句子，顺序和中文很像：')+
xs([["I "+pos('like','v')+" dogs.","我（谁）喜欢（做什么）狗。"],["She "+pos('is','v')+" my sister.","她（谁）是（是什么）我的姐姐。"]])+
h('规矩一：am / is / are 怎么选？')+
p('<b>am、is、are</b> 都表示“是”，叫 <b>be 动词</b>。选哪一个，要看前面的人或东西：')+
tbl(['前面是','用','例子'],[
 ['I（我）','<b>am</b>','I <b>am</b> a student.　I’m Amy.'],
 ['he、she、it，或一个人 / 一个东西','<b>is</b>','He <b>is</b> tall.　The cat <b>is</b> small.　Tom <b>is</b> my friend.'],
 ['you、we、they，或两个以上','<b>are</b>','You <b>are</b> kind.　We <b>are</b> friends.　Tom and Amy <b>are</b> nine.']])+
tip('口诀：<b>我用 am，你用 are，is 连着他她它，单数用 is，复数都用 are。</b>')+
h('规矩二：a 和 an 怎么选？')+
tbl(['情况','用','例子'],[
 ['后面的词读音以<b>辅音</b>开头','<b>a</b>','a cat、a dog、a book、a pen'],
 ['后面的词读音以<b>元音 a e i o u</b> 开头','<b>an</b>','an apple、an elephant、an egg、an orange']])+
warn('看的是<b>后面那个词的第一个音</b>。a / an 只能放在<b>一个</b>东西前面，两个以上不用 a / an：two cats。')+
h('规矩三：一个变多个（名词变复数）')+
tbl(['怎么变','例子'],[
 ['一般直接加 <b>s</b>','cat → cats，dog → dogs，book → books'],
 ['以 s、x、ch、sh 结尾，加 <b>es</b>','bus → buses，box → boxes，watch → watches'],
 ['“辅音字母 + y”结尾，变 y 为 i 再加 <b>es</b>','baby → babies，family → families'],
 ['不规则，要单独记','child → children，man → men，foot → feet，mouse → mice']])+
h('规矩四：形容词放哪里？')+
xs([["a "+pos('big','adj')+" "+pos('cat','n'),"形容词放在名词<b>前面</b>"],["The cat "+pos('is','v')+" "+pos('big','adj')+".","形容词也可以放在 <b>be 动词后面</b>"]])+
h('规矩五：怎么提问？')+
p('<b>一般疑问句</b>（回答 Yes / No）：把 <b>be 动词</b>或 <b>can</b> 放到句首。')+
tbl(['陈述句','疑问句','回答'],[
 ['She <b>is</b> tall.','<b>Is</b> she tall?','Yes, she is. / No, she isn’t.'],
 ['You <b>are</b> nine.','<b>Are</b> you nine?','Yes, I am. / No, I’m not.'],
 ['He <b>can</b> swim.','<b>Can</b> he swim?','Yes, he can. / No, he can’t.']])+
p('<b>特殊疑问句</b>：用疑问词开头，问具体的信息：')+
tbl(['疑问词','问什么','例子'],[
 ['What','什么','What’s this? — It’s a cat.　What colour is it? — It’s red.'],
 ['Who','谁','Who’s that? — He’s my father.'],
 ['How old','几岁','How old are you? — I’m eight.'],
 ['How many','多少个','How many apples? — Five.'],
 ['Where','哪里','Where is my bag? — It’s on the desk.']])+
h('规矩六：请别人做事，和告诉别人不要做什么')+
xs([["Sit down, "+pos('please','adv')+".","请坐下。（动词开头，加 please 更礼貌）"],["Don’t "+pos('pick','v')+" the flowers.","不要摘花。（Don’t + 动词原形）"]])+
rule('这种句子叫<b>祈使句</b>：直接用<b>动词原形</b>开头，不用说“你”。想说“不要”，在前面加 <b>Don’t</b>。'),
qs:[
 C('cat 是什么词性？',['名词','动词','形容词','代词'],0,'cat（猫）是动物的名字，是名词。'),
 C('run 是什么词性？',['动词','名词','形容词','冠词'],0,'run（跑）是动作，是动词。'),
 C('big 是什么词性？',['形容词','名词','动词','数词'],0,'big（大的）说明样子，是形容词。'),
 C('she 是什么词性？',['代词','名词','动词','形容词'],0,'she（她）代替一个女生的名字，是代词。'),
 C('a 和 an 是什么词性？',['冠词','名词','数词','动词'],0,'a、an、the 都是冠词。'),
 C('three 是什么词性？',['数词','名词','形容词','代词'],0,'three（三）表示数量，是数词。'),
 C('下面哪个是动词？',['eat','apple','red','she'],0,'eat（吃）是动作，是动词。'),
 C('下面哪个是形容词？',['happy','Tom','jump','we'],0,'happy（开心的）说明感受，是形容词。'),
 C('I see a tiger. 里面的名词是哪个？',['tiger','see','a','I'],0,'tiger（老虎）是动物的名字，是名词。'),
 C('The cat is big. 里面的形容词是哪个？',['big','cat','is','The'],0,'big（大的）说明猫的样子，是形容词。'),
 C('Amy is my friend. She is kind. 里的 She 代替了谁？',['Amy','my friend','kind','is'],0,'She（她）代替前面提到的 Amy，所以是代词。'),
 C('My name is Tom. 里的 is 是什么词性？',['动词（be 动词）','名词','形容词','冠词'],0,'is 表示“是”，是 be 动词，属于动词家族。'),
 C('I ___ a student.',['am','is','are','be'],0,'主语是 I，用 am。'),
 C('She ___ my sister.',['is','am','are','be'],0,'She 是单数，用 is。'),
 C('We ___ good friends.',['are','is','am','be'],0,'We 是复数，用 are。'),
 C('Tom and Amy ___ nine.',['are','is','am','be'],0,'Tom and Amy 是两个人，用 are。'),
 C('The dog ___ small.',['is','are','am','be'],0,'The dog 是一只狗，单数，用 is。'),
 C('This is ___ apple.',['an','a','the','am'],0,'apple 读音以元音开头，前面用 an。'),
 C('I have ___ cat.',['a','an','are','is'],0,'cat 读音以辅音开头，前面用 a。'),
 C('I see ___ elephant.',['an','a','am','are'],0,'elephant 以元音开头，用 an。'),
 C('book 的复数是？',['books','bookes','bookies','book'],0,'一般直接加 s。'),
 C('box 的复数是？',['boxes','boxs','boxies','boxen'],0,'以 x 结尾，加 es。'),
 C('baby 的复数是？',['babies','babys','babyes','babyies'],0,'“辅音 + y”结尾，变 y 为 i 再加 es。'),
 C('child 的复数是？',['children','childs','childes','childrens'],0,'child 是不规则变化：children。'),
 C('把 She is tall. 变成一般疑问句。',['Is she tall?','She is tall?','Are she tall?','Does she tall?'],0,'把 be 动词 is 放到句首。'),
 C('把 He can swim. 变成一般疑问句。',['Can he swim?','Is he can swim?','Does he swim?','He can swim?'],0,'把 can 放到句首，swim 不变。'),
 C('— Are you nine? — Yes, ___.',['I am','I’m am','I is','I are'],0,'Are you …? 的肯定回答是 Yes, I am.'),
 C('— ___ is that? — He’s my father.',['Who','What','Where','How'],0,'回答是“他是我爸爸”，问的是“谁”，用 Who。'),
 C('— ___ old are you? — I’m eight.',['How','What','Who','Where'],0,'问年龄用 How old。'),
 C('— How ___ apples? — Five.',['many','much','old','are'],0,'问数量，数得清的东西用 How many。'),
 C('下面哪一句是对的？',['I have two cats.','I have two cat.','I have a cats.','I have two a cats.'],0,'两只猫，cat 要变复数 cats，不能再用 a。'),
 C('Don’t ___ the flowers.',['pick','picks','picking','picked'],0,'Don’t 后面用动词原形 pick。'),
 F('He ___ (is / are) my brother.','is','He 是单数，用 is。'),
 F('They ___ (is / are) in the park.','are','They 是复数，用 are。'),
 F('two ___ (box)','boxes','以 x 结尾，加 es。'),
 J('名词是表示“做什么”的词。',false,'表示“做什么”的是动词；名词是“是什么”（东西的名字）。'),
 J('形容词可以放在名词前面，比如 a big cat。',true,'big 放在 cat 前面，说明猫的样子。'),
 J('an elephant 是对的，因为 elephant 以元音开头。',true,'元音开头的词前面用 an。'),
 O('我有一只小猫。','I have a cat.','I + have + a cat.'),
 O('她是我的老师吗？','Is she my teacher?','把 is 放到句首。')
]}
);
