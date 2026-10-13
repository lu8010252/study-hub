/* 追加题目：在句子里认词性、一词多性、容易混的代词、and 连接的主语、比较级变形（只追加到各单元末尾，旧题编号不变） */
MORE.push({
u0:[
 C('My sister has a red bag. 句子里的名词是哪两个？',['sister, bag','has, red','My, a','red, bag'],0,'sister（姐姐）和 bag（包）是人和东西的名字，是名词。'),
 C('The cat is very small. 其中的 very 是什么词？',['副词','形容词','名词','动词'],0,'very（很）说明 small 有多小，是副词。'),
 C('I like her bag. 其中的 her 是什么词？',['代词（物主代词）','名词','动词','冠词'],0,'her（她的）是物主代词，放在名词 bag 前面。'),
 C('Look at the big tree. 其中的 at 是什么词？',['介词','动词','副词','连词'],0,'at 和后面的 the big tree 一起表示看的对象，at 是介词。'),
 J('She does her homework. 这句话里的 does 是真正的动词，意思是“做”。',true,'does 在这里表示“做”，不是帮手。')
],
u29:[
 C('I drink milk. 其中的 drink 是什么词性？',['动词','名词','形容词','副词'],0,'drink 在这里表示“喝”，是动词。'),
 C('I want a drink. 其中的 drink 是什么词性？',['名词','动词','形容词','副词'],0,'a 后面的 drink 是“饮料”，是名词。'),
 C('I watch TV every day. 其中的 watch 是什么词性？',['动词','名词','形容词','副词'],0,'watch 在这里表示“看”，是动词。'),
 C('This is my watch. 其中的 watch 是什么词性？',['名词','动词','形容词','副词'],0,'my 后面的 watch 是“手表”，是名词。'),
 C('She has an orange bag. 其中的 orange 是什么词性？',['形容词','名词','动词','副词'],0,'orange 在这里描述 bag 的颜色，是形容词。'),
 C('My family is big. family 以 -y 结尾，它是什么词性？',['名词','形容词','副词','动词'],0,'family（家庭）是名词；词尾只是线索，还要看意思。'),
 C('He is taller than me. taller 是什么词性？',['形容词','名词','动词','副词'],0,'taller 是 tall 的比较级，仍然是形容词。'),
 C('The girl is running. 其中的 is 是什么词性？',['动词（be 动词）','名词','形容词','副词'],0,'is 是 be 动词，属于动词。'),
 J('animal 以 -al 结尾，所以它是形容词。',false,'animal（动物）是名词，词尾只是线索。'),
 J('beautiful 是 beauty 变 y 为 i 再加 ful 得到的。',true,'beauty + ful，y 变 i，是形容词 beautiful。')
],
u4:[
 C('I like ___.（她）',['her','she','hers','she’s'],0,'like 后面是被喜欢的人，用 her。'),
 C('___ is my friend.（她）',['She','Her','Him','Hers'],0,'做事的人（主语）用 She。'),
 C('The dog is wagging ___ tail.（它的）',['its','it’s','it','his’'],0,'its 是“它的”；it’s 是 it is。'),
 C('___ a nice dog.（它是）',['It’s','Its','It','Is'],0,'It’s = It is。'),
 C('Look at ___!（他们）',['them','they','their','theirs'],0,'at 后面用 them。'),
 F('The boy helps ___.（我）','me','help 后面被帮的人用 me。'),
 J('I like her bag. 里的 her 表示“她的”。',true,'her 后面有名词 bag，意思是“她的”。')
],
u5:[
 C('Tom and Lucy ___ friends.',['are','is','am','be'],0,'Tom and Lucy 是两个人，用 are。'),
 C('Mike and I ___ in the park.',['are','is','am','be'],0,'Mike and I 是两个人，用 are。'),
 F('My brother and my sister ___ at home.（is / are）','are','两个人，用 are。')
],
u6:[
 C('She ___ her homework every day.（做作业）',['does','do','doing','dos'],0,'She 是第三人称单数，do 变 does。')
],
u8:[
 C('big 的比较级是？',['bigger','biger','biggest','more big'],0,'big 是“一个元音 + 一个辅音”的短词，双写 g 再加 er。'),
 C('hot 的最高级是？',['the hottest','the hotest','the most hot','the hotter'],0,'hot 双写 t 再加 est，最高级前面加 the。'),
 C('beautiful 的比较级是？',['more beautiful','beautifuller','most beautiful','beautifuler'],0,'beautiful 是长词，前面加 more。'),
 J('tall 是短词，所以比较级是 more tall。',false,'短词直接加 er：taller。')
]
});
