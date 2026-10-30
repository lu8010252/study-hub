/* 题量补齐：u25 听音辨句、u28 听短对话、u32 过去进行时（只追加到单元末尾，旧题编号不变） */
MORE.push({
u25:[
 L('This is my pen.','你听到的是哪一句？',['This is my pen.','These are my pens.','This are my pen.','This is my pens.'],0,'This is + 单数名词 pen。'),
 L('These are my books.','你听到的是哪一句？',['This is my book.','These are my books.','These is my books.','These are my book.'],1,'These are + 复数名词 books。'),
 L('He can swim, but he can’t skate.','你听到的是哪一句？',['He can swim, but he can’t skate.','He can’t swim, but he can skate.','He can swim, but he can skate.','He can’t swim, but he can’t skate.'],0,'听清 can 和 can’t，以及 swim 和 skate。'),
 L('She played football yesterday.','你听到的是哪一句？',['She plays football every day.','She played football yesterday.','She is playing football now.','She will play football tomorrow.'],1,'played 是过去式，yesterday 表示过去。'),
 L('We are going to visit the zoo.','听一听，这句话的意思是？',['我们打算去动物园。','我们昨天去了动物园。','我们正在动物园。','我们经常去动物园。'],0,'are going to 表示打算。'),
 L('There is a book on the desk.','你听到的是哪一句？',['There are a book on the desk.','There is a book on the desk.','There is a book in the desk.','There is books on the desk.'],1,'There is + 单数 a book；on the desk 是在桌子上。')
],
u28:[
 L('Excuse me, where is the library? It is next to the school.','图书馆在哪里？',['在学校旁边','在学校里面','在学校后面','在学校前面'],0,'next to 是在……旁边。'),
 L('What does your brother do? He is a policeman.','他哥哥做什么工作？',['警察','老师','医生','司机'],0,'policeman 是警察。'),
 L('How many books are there in your bag? There are six.','他书包里有几本书？',['6 本','16 本','60 本','5 本'],0,'six 是 6，注意和 sixteen、sixty 区分。'),
 L('Do you want some juice? Yes, please.','他要不要果汁？',['要','不要','不知道','要水'],1,'Yes, please. 表示“要，谢谢”。'),
 L('Where are you from? I am from China.','他来自哪里？',['中国','英国','美国','加拿大'],0,'I am from China. 我来自中国。'),
 L('What are you going to do this weekend? I am going to clean my room.','他周末打算做什么？',['打扫房间','去公园','看电影','做作业'],0,'clean my room 是打扫房间。')
],
u32:[
 F('At nine last night, I ___ (do) my homework.','was doing','过去某一刻正在做，用 was + doing。'),
 F('While my mother ___ (cook), I was watching TV.','was cooking','while 表示“当……的时候”，用过去进行时。'),
 C('They ___ basketball at four yesterday afternoon.',['were playing','was playing','are playing','played'],0,'主语 they，用 were + playing。'),
 C('___ you sleeping at ten last night?',['Were','Was','Are','Did'],0,'主语 you，过去进行时用 Were。'),
 J('When the phone rang, I was taking a shower.',true,'when 从句表示过去某一刻，主句用过去进行时 was taking。'),
 O('昨天下午三点他们正在踢足球。','They were playing football at three yesterday afternoon.','were + playing。')
]
});
