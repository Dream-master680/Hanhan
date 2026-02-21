/**
 * 晗晗的 Python 小课堂 - 课程数据与交互
 */

const STORAGE_KEY = 'hanhan-python-progress';
const LOGIN_KEY = 'hanhan-python-login';
const NOTES_KEY = 'hanhan-python-notes';
const MESSAGE_KEY = 'hanhan-python-message';
const LOGIN_USER = 'Jasper';
const LOGIN_PASS = 'Hera';

const DEFAULT_HINT = '先再读一遍上面的「本节要点」，然后试着改一改示例代码里的一两行再运行～ 实在卡住了就点「看参考答案」对照一下，再自己写一遍会记得更牢。';

/** 运行成功后的爱意与鼓励文案（随机显示一条） */
const ENCOURAGE_MESSAGES = [
  '晗晗真棒～ 运行成功！',
  '又完成一步，俊杰为你骄傲 💕',
  '运行成功！继续加油，你可以的～',
  '代码跑起来啦，晗晗超厉害！',
  '俊杰在偷偷给你鼓掌 👏',
  '运行成功！离学会又近了一点～',
  '晗晗学得真快，继续保持～',
  '跑通了！俊杰觉得你超棒的',
  '运行成功～ 慢慢来，你一定行',
  '又成功一次！俊杰永远支持你',
  '代码跑起来了，晗晗最棒 🐷',
  '运行成功！今天也有进步～',
  '俊杰看到你又完成一节啦，开心',
  '运行成功～ 坚持下去会越来越顺手',
  '晗晗真厉害，运行成功！',
];

/** 学习阶段（按顺序，导航按阶段分组更清晰） */
const LESSON_UNITS = {
  1: '阶段一：从零开始',
  2: '阶段二：文字与列表',
  3: '阶段三：判断与循环',
  4: '阶段四：函数与结构',
  5: '阶段五：进阶与项目',
};

const lessons = [
  {
    id: 'hello',
    unit: 1,
    title: '第一行代码：print 与输出',
    badge: '入门',
    encourage: '晗晗，从这里开始，你就正式写代码啦～',
    goal: '会用 print() 输出文字和多个内容，养成「先运行看结果」的习惯。',
    nextBrief: '学习用变量存数据，让同一段文字或数字可以反复使用、随时修改。',
    content: [
      '在 Python 里，<strong>print()</strong> 是「打印/输出」的意思：把括号里的内容显示在屏幕上。',
      '括号里可以是<strong>用引号包起来的文字</strong>（字符串），运行后就会原样显示。写多行 print，就会按顺序输出多行。',
      '<strong>多个内容</strong>用逗号隔开放在 print 里，会自动用空格连接并输出；<strong>print()</strong> 不带参数会输出一个空行（换行）。',
    ],
    points: ['print() 是函数，括号里放要输出的内容', '字符串必须用成对的引号 "" 或 \'\'', 'print(a, b, c) 会输出 a b c，中间自动加空格'],
    tips: '把引号里的文字改成你想说的话；试试 print("A", "B", 123) 看效果。',
    hint: '第一步：找到 print("晗晗，你好呀～") 这一行。\n第二步：把引号里的文字改成任意你想输出的内容，注意引号要成对。\n第三步：点「运行」看结果。',
    code: `# 我的第一行 Python 代码！
print("晗晗，你好呀～")
print("这是第二行输出")
print("多个内容", "用逗号隔开", 123)
print()  # 空一行
print("上面有一个空行")`,
  },
  {
    id: 'variable',
    unit: 1,
    title: '变量：给数据起个名字',
    badge: '基础',
    encourage: '变量就像一个小盒子，我们往里面放东西，以后用名字就能找到它。',
    goal: '会用变量存数据、用 print 输出变量，会多变量同时赋值。',
    nextBrief: '学习数字的加减乘除、整除余数和乘方，为后面的计算打基础。',
    content: [
      '上一节我们学了用 print 直接输出内容；这一节来<strong>给数据起个名字</strong>，存进变量里，后面想用就写名字。',
      '<strong>变量</strong>用来存放数据。写法是：<strong>变量名 = 值</strong>。等号表示「把右边的值赋给左边的变量」。',
      '一旦赋值，后面就可以用变量名代替这个值，参与运算、拼接到字符串里，或再次赋新值（变量里的内容可以改）。',
      '可以<strong>同时给多个变量赋值</strong>：<code>a, b = 1, 2</code>，或 <code>x = y = 0</code>。变量名建议用英文、数字、下划线，且不要以数字开头。',
    ],
    points: ['变量名 = 值 表示赋值', '变量名用英文/数字/下划线，如 name_1，不以数字开头', '多变量赋值：a, b = 1, 2'],
    tips: '试试 a, b = "晗", "晗" 再 print(a + b)。',
    hint: '变量就是「名字 = 值」。先看示例里 name 和 message 是怎么赋值的，再试着改 name 为别的字符串，或者多加一行 age = 18，然后用 print 把 name 和 age 都打出来。',
    code: `# 变量 = 值
name = "晗晗"
message = "今天也要开心哦"
print(name + "，" + message)
name = "小晗"
print(name)
# 多变量同时赋值
x, y = 10, 20
print("x =", x, "y =", y)`,
  },
  {
    id: 'number',
    unit: 1,
    title: '数字与简单运算',
    badge: '基础',
    encourage: '数字也能存进变量，还能做加减乘除，和数学一样直观。',
    goal: '会做加减乘除、整除余数、乘方，会用 int()、float() 做类型转换。',
    nextBrief: '学习字符串：和文字打交道，拼接、重复、取长度和单个字符。',
    content: [
      '变量里不仅可以存文字，还可以存<strong>数字</strong>。存进去之后就能像数学里一样做运算。',
      'Python 里可以直接写<strong>整数</strong>（如 3、100）和<strong>小数</strong>（如 3.14）。用 <strong>+ - * /</strong> 做运算。',
      '<strong>/</strong> 得到小数结果；<strong>//</strong> 整除（只保留整数部分）；<strong>%</strong> 取余数。<strong>**</strong> 表示乘方，如 2**3 是 8。',
      '运算顺序和数学一致：先乘除后加减，有括号先算括号。需要把字符串转成数字时用 <strong>int()</strong>、<strong>float()</strong>。',
    ],
    points: ['+ - * / 加减乘除，/ 得到小数', '// 整除，% 余数，** 乘方', 'int("123")、float("3.14") 字符串转数字'],
    tips: '试试 2**10、int("42") + 1。',
    code: `# 数字与运算
a, b = 10, 3
print("a + b =", a + b, "a / b =", a / b)
print("a // b =", a // b, "余数", a % b)
print("2 的 3 次方 =", 2 ** 3)
print(int("100") + 1)`,
  },
  {
    id: 'comment-error',
    unit: 1,
    title: '注释与报错：写给自己的备注',
    badge: '入门',
    encourage: '代码里可以写「备注」给自己看；报错时别慌，看最后一行往往就能找到原因。',
    goal: '会写 # 注释，能根据报错信息找到出错的大致位置。',
    nextBrief: '学习字符串：和文字打交道。',
    content: [
      '在代码里写 <strong># 后面的内容</strong> 是<strong>注释</strong>，程序运行时会忽略，是写给自己或别人看的说明。',
      '运行出错时，Python 会打印<strong>报错信息</strong>。最后一行通常是错误类型（如 SyntaxError、NameError）；往上看会看到文件名和行号。先看<strong>最后一行</strong>和<strong>箭头指向的那一行</strong>，多半就能发现哪里写错了。',
    ],
    points: ['# 后面到行末是注释，不会执行', '报错时看最后一行和提示的行号', '常见：SyntaxError 语法错、NameError 名字未定义'],
    tips: '故意少写一个引号或括号，运行看报错长什么样，再改回来。',
    code: `# 这是注释，不会执行
name = "晗晗"
# print(name)  暂时不输出就注释掉
print(name)
# 下面故意写错一个，运行看报错（看完可删掉下一行）
# print(未定义的变量)`,
  },
  {
    id: 'string',
    unit: 2,
    title: '字符串：和文字打交道',
    badge: '基础',
    encourage: '字符串就是一段文字，可以拼接、重复，还能查长度、取一段。',
    goal: '会用字符串拼接、重复、len() 取长度、用下标取单个字符。',
    nextBrief: '学习字符串进阶：切片取一段、f-string 格式化、常用方法。',
    content: [
      '除了数字，我们经常要处理<strong>文字</strong>。在 Python 里，用引号包起来的就是字符串。',
      '用<strong>成对的引号</strong>（"" 或 \'\'）包起来的内容叫<strong>字符串</strong>。',
      '<strong>+</strong> 拼接；<strong>字符串 * 数字</strong> 重复；<strong>len(字符串)</strong> 得到字符个数。<strong>字符串[下标]</strong> 取一个字符，下标从 0 开始，-1 表示最后一个。',
    ],
    points: ['字符串用 "" 或 \'\' 包裹', '用 + 拼接，用 * 数字 重复，len() 取长度', 's[0] 第一个字符，s[-1] 最后一个'],
    tips: '试试 "晗晗"[0]、"晗晗"[-1]、len("hello")。',
    code: `# 字符串：拼接、重复、长度、下标
a, b, c = "我", "喜欢", "你"
print(a + b + c)
print("晗晗" * 3)
print("长度:", len("晗晗"))
s = "晗晗"
print("第一个字:", s[0], "最后一个字:", s[-1])`,
  },
  {
    id: 'string-advanced',
    unit: 2,
    title: '字符串进阶：切片与 f-string',
    badge: '基础',
    encourage: '学会切片和格式化，处理文字就更顺手啦。',
    goal: '会用切片取子串、用 f-string 把变量插进字符串，会用 .upper()、.strip() 等。',
    nextBrief: '学习列表：把多个数据装进一个「清单」，按顺序存取。',
    content: [
      '在会了字符串的基本操作之后，再来学两样很常用的：<strong>切片</strong>（取一段）和<strong>f-string</strong>（把变量嵌进句子）。',
      '<strong>切片</strong>：<code>字符串[开始:结束]</code> 取从「开始」到「结束」前一位的子串。省略开始表示从头开始，省略结束表示到末尾。如 s[1:3]、s[:2]、s[1:]。',
      '<strong>f-string</strong>：在字符串前加 <code>f</code>，里面用 <code>{变量或表达式}</code> 可以直接把值插进去，例如 <code>f"你好，{name}"</code>。比用 + 拼接更清晰。',
      '常用方法：<strong>.upper()</strong> 全变大写、<strong>.lower()</strong> 全变小写、<strong>.strip()</strong> 去掉首尾空白。换行用 <strong>\\n</strong> 写在字符串里。',
    ],
    points: ['切片 s[开始:结束]，含开始不含结束', 'f"…{变量}…" 格式化字符串', '.upper() .lower() .strip()，\\n 换行'],
    tips: '把 name 和 score 改掉，看 f-string 的输出。试试 "  abc  ".strip()。',
    code: `# 切片与 f-string
s = "晗晗最棒"
print(s[0:2], s[:2], s[2:])
name = "晗晗"
score = 100
print(f"{name} 的分数是 {score} 分～")
print("第一行\\n第二行")
print("  hello  ".strip())`,
  },
  {
    id: 'summary-types',
    unit: 2,
    title: '小结：你已学会的数据类型',
    badge: '小结',
    encourage: '到这里，你已经会「存数据」和「看数据」了，先喘口气～',
    goal: '能回顾：数字、字符串、变量、print 分别能做什么，为学列表做准备。',
    nextBrief: '学习列表：把多个数据装进一个清单。',
    content: [
      '<strong>阶段一 + 阶段二前半</strong>我们学了：用 <strong>print</strong> 输出；用 <strong>变量</strong> 存一个值；值的类型有 <strong>数字</strong>（整数、小数）和 <strong>字符串</strong>（文字）；字符串可以拼接、切片、用 f-string 格式化。',
      '接下来要学<strong>列表</strong>：把「多个」数据按顺序放在一起，用下标取、用 append 加。列表是后面循环、函数里最常用的结构之一。',
    ],
    points: ['已会：print、变量、数字运算、字符串与切片', '下一阶段：列表 → 判断 → 循环'],
    tips: '可以回头随便打开前面任意一节，改几行代码再运行，巩固一下。',
    code: `# 小结：把前面学的串一遍
name = "晗晗"
age = 20
print(f"{name}，你已学会变量、数字和字符串～")
print("下一节：列表，把多个数据放一起。")`,
  },
  {
    id: 'list',
    unit: 2,
    title: '列表：把一组数据装进清单',
    badge: '基础',
    encourage: '列表就像一份清单，可以装很多项，按顺序排列，还能增删改。',
    goal: '会创建列表、用下标取元素、用 append 添加、用 in 判断是否在列表中。',
    nextBrief: '学习列表的更多方法：插入、删除、查找、排序。',
    content: [
      '前面我们学的变量只能存「一个」值。如果要存<strong>一排数据</strong>（比如一堆名字、一串数字），就用<strong>列表</strong>。',
      '<strong>列表</strong>用方括号 [] 表示，元素用逗号隔开。取元素用 <strong>列表[下标]</strong>，下标从 0 开始；<strong>-1</strong> 表示最后一个。',
      '<strong>列表.append(元素)</strong> 在末尾添加；<strong>len(列表)</strong> 得到长度。用 <strong>元素 in 列表</strong> 可以判断元素是否在列表中。',
      '<strong>切片</strong>同样适用：列表[1:3] 得到从下标 1 到 2 的子列表。列表里还可以放列表（嵌套）。',
    ],
    points: ['列表用 []，取元素 列表[下标]，下标从 0 开始', 'append() 末尾添加，len(列表) 长度', 'x in 列表 判断是否在列表中'],
    tips: '试试 3 in [1,2,3]、lst[1:3]。',
    code: `# 列表：下标、append、in、切片
favorites = ["奶茶", "晴天", "和你在一起"]
print(favorites[0], favorites[-1])
print("共", len(favorites), "项")
favorites.append("学 Python")
print("晴天" in favorites)
print(favorites[1:3])`,
  },
  {
    id: 'list-methods',
    unit: 2,
    title: '列表常用方法：增删改查',
    badge: '基础',
    encourage: '列表的方法很多，先掌握这几个最常用的。',
    goal: '会用 insert、pop、remove 增删元素，用 count、index 查找，用 sort、sorted 排序。',
    nextBrief: '学习条件判断 if/elif/else，让程序根据情况走不同的分支。',
    content: [
      '上一节我们学了列表和 append；这一节继续学列表的<strong>增删改查</strong>，用现成的方法就能完成。',
      '<strong>.append(x)</strong> 在末尾加一个元素；<strong>.insert(i, x)</strong> 在下标 i 处插入 x。<strong>.pop()</strong> 删除并返回最后一个元素，<strong>.pop(i)</strong> 删除下标 i 的元素。',
      '<strong>.remove(x)</strong> 删除第一个等于 x 的元素（找不到会报错）。<strong>.count(x)</strong> 统计 x 出现次数；<strong>.index(x)</strong> 找 x 第一次出现的下标。',
      '排序：<strong>.sort()</strong> 原地排序（改原列表）；<strong>sorted(列表)</strong> 返回新的排序后的列表，不改变原列表。',
    ],
    points: ['append/insert 添加，pop/remove 删除', 'count 计数，index 找下标', 'sort() 原地排序，sorted(列表) 返回新列表'],
    tips: '试着删掉某一项再 print；或先 lst.sort() 再 print(lst)。',
    code: `# 列表方法
lst = ["苹果", "香蕉", "橙子", "香蕉"]
lst.insert(1, "葡萄")
print(lst)
lst.remove("香蕉")
print(lst)
print("橙子在下标", lst.index("橙子"))
lst.sort()
print("排序后", lst)`,
  },
  {
    id: 'if',
    unit: 3,
    title: '条件判断：if、elif 与 else',
    badge: '基础',
    encourage: '根据条件决定执行哪段代码，是编程里最常用的逻辑之一。',
    goal: '会写 if/elif/else，会用 ==、!=、>、< 和 and、or、not 写条件。',
    nextBrief: '学习 for 循环，对列表里每一项做同样的事，或重复执行固定次数。',
    content: [
      '到目前为止，代码都是「从上到下执行一遍」。很多时候我们想<strong>根据条件</strong>决定执行哪一段，这时就要用 if。',
      '<strong>if 条件:</strong> 后面加冒号，下一行<strong>缩进</strong>（通常 4 个空格）的代码属于 if；条件成立时执行。<strong>else:</strong> 表示否则。<strong>elif</strong> 表示「否则如果」，可连续写多个。',
      '比较：<strong>==</strong> 等于、<strong>!=</strong> 不等于、<strong>&gt; &lt; &gt;= &lt;=</strong> 大小比较。逻辑：<strong>and</strong> 与、<strong>or</strong> 或、<strong>not</strong> 非。条件的结果是 <strong>True</strong> 或 <strong>False</strong>（布尔值）。',
    ],
    points: ['if/elif/else 后要冒号，下一行缩进', '== != > < >= <= 比较；and or not 逻辑', '条件为 True 时执行对应分支'],
    tips: '试试 if True: print("一定执行")；或写 score >= 80 and score < 90。',
    hint: 'if 后面跟的是「条件」，条件为真就执行下面缩进的代码。注意：冒号不能少，缩进要用空格（一般 4 个）。试着把 score 改成 70 或 50，再运行看会走哪个分支。',
    code: `# 条件判断与逻辑
score = 90
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("要再努力哦")
# 逻辑运算
age = 20
print(age >= 18 and age < 60)
print(not (score < 60))`,
  },
  {
    id: 'loop',
    unit: 3,
    title: '循环：for 与 range',
    badge: '进阶',
    encourage: '同一件事要做很多遍？用 for 循环，几行代码就搞定。',
    goal: '会用 for 遍历列表，会用 range 生成整数序列、配合循环重复若干次，会用 enumerate 带序号遍历。',
    nextBrief: '学习 while 循环：在「条件为真」时一直重复，以及 break、continue。',
    content: [
      '学了列表和 if 之后，我们经常想「对列表里<strong>每一个</strong>元素都做同一件事」，或者「把某段代码重复执行 N 次」。这时用 <strong>for 循环</strong>最合适。',
      '<strong>for 变量 in 列表:</strong> 依次把列表每个元素赋给变量，执行下面缩进的代码块。<strong>range(n)</strong> 得到 0 到 n-1 的整数；<strong>range(a, b)</strong> 得到 a 到 b-1；<strong>range(a, b, step)</strong> 步长为 step。',
      '缩进决定哪些代码在循环体内。若需要「第几个」这样的序号，常用 <code>for i in range(len(列表))</code> 或 <code>for i, x in enumerate(列表)</code>（i 从 0 开始）。',
    ],
    points: ['for 变量 in 列表 遍历每个元素', 'range(n)、range(a,b)、range(a,b,step)', '缩进决定循环体范围'],
    tips: '试试 range(2, 10, 2) 会得到什么；或 for i, x in enumerate(["A","B"]): print(i, x)。',
    code: `# for 与 range
for thing in ["早安", "午安", "晚安"]:
    print("晗晗，" + thing)
for i in range(3):
    print("第", i + 1, "次")
for i in range(0, 10, 2):
    print(i, end=" ")
print()
for i, x in enumerate(["苹果", "香蕉"]):
    print(i, x)`,
  },
  {
    id: 'while',
    unit: 3,
    title: 'while 循环：条件为真就继续',
    badge: '进阶',
    encourage: '当「满足某条件就重复」时，用 while 比 for 更自然。',
    goal: '会用 while 在条件为真时重复执行，会使用 break、continue，并注意避免死循环。',
    nextBrief: '学习函数：把一段逻辑包成「一块」，取个名字，随时调用。',
    content: [
      'for 适合「遍历已知的列表」或「固定次数」。当重复次数<strong>由条件决定</strong>（例如「数到 100 就停」）时，用 <strong>while</strong> 更自然。',
      '<strong>while 条件:</strong> 先判断条件，为 True 就执行下面缩进的代码块，执行完再判断条件，直到条件为 False 才跳出。',
      '<strong>break</strong> 可以立即跳出当前循环；<strong>continue</strong> 跳过本次剩余代码，直接进入下一轮循环。写 while 时要避免条件永远为 True 导致死循环（要有让条件变 False 或 break 的可能）。',
    ],
    points: ['while 条件: 条件为 True 时重复执行', 'break 跳出循环，continue 跳过本次', '注意避免死循环'],
    tips: '把 count 初值改小一点，看循环几次；或加 if 某条件: break。',
    code: `# while 与 break
count = 0
while count < 3:
    print("第", count + 1, "次说喜欢你")
    count = count + 1
# break 示例
n = 0
while True:
    n += 1
    if n > 2:
        break
    print("n =", n)`,
  },
  {
    id: 'summary-control',
    unit: 3,
    title: '小结：判断与循环',
    badge: '小结',
    encourage: '判断和循环是程序的「骨架」，到这里你已经能写不少小逻辑啦。',
    goal: '能回顾：if/elif/else、for、while、break/continue 分别用在什么场景。',
    nextBrief: '学习函数：把一段逻辑打包，随时调用。',
    content: [
      '<strong>阶段三</strong>我们学了：<strong>if / elif / else</strong> 根据条件走不同分支；<strong>for</strong> 遍历列表或 range 重复若干次；<strong>while</strong> 在条件为真时一直重复；<strong>break</strong> 跳出循环，<strong>continue</strong> 跳过本次。',
      '接下来学<strong>函数</strong>：把重复用到的逻辑包成一块、取个名字，需要时调用，代码会更清晰、更好维护。',
    ],
    points: ['已会：条件分支、for、while、break/continue', '下一阶段：函数 → 字典 → 输入与异常'],
    tips: '试着用 for + if 写「只打印列表里的偶数」。',
    code: `# 小结：判断与循环
nums = [1, 2, 3, 4, 5]
for x in nums:
    if x % 2 == 0:
        print(x, "是偶数")
print("下一节：函数～")`,
  },
  {
    id: 'function',
    unit: 4,
    title: '函数：定义与调用',
    badge: '进阶',
    encourage: '把一段步骤取个名字，以后一句调用就能重复用，代码更清晰。',
    goal: '会定义函数、传参数、用 return 返回结果，会使用默认参数。',
    nextBrief: '学习字典：用「键」找「值」，存一一对应的信息。',
    content: [
      '我们已经会写循环和条件，代码会越来越长。把<strong>一段逻辑打包</strong>、取个名字，需要时调用，这就是<strong>函数</strong>。',
      '<strong>def 函数名(参数):</strong> 定义函数，下一行缩进写函数体。调用时 <strong>函数名(实参)</strong>。参数可以有多个，用逗号隔开。',
      '<strong>return 值</strong> 把结果返回；没有 return 或只写 return 则返回 None。<strong>默认参数</strong>：<code>def f(a, b=0):</code> 调用时 f(1) 等价于 f(1, 0)。',
    ],
    points: ['def 函数名(参数): 定义，函数名(实参) 调用', 'return 值 返回结果', '参数可设默认值：def f(x, y=0)'],
    tips: '写一个 def greet(name, word="你好"): return word + name，再调用 greet("晗晗")。',
    code: `# 函数：参数、返回值、默认参数
def say_hello(name):
    return "你好呀，" + name + "～"

def add(a, b):
    return a + b

def greet(name, word="你好"):
    return word + "，" + name

print(say_hello("晗晗"))
print(add(3, 5))
print(greet("晗晗"), greet("晗晗", "早安"))`,
  },
  {
    id: 'dict',
    unit: 4,
    title: '字典：键值对存信息',
    badge: '进阶',
    encourage: '字典用「键」找「值」，像查词典一样，适合存一一对应的信息。',
    goal: '会创建字典、用键取值、用 .get() 安全取值，会遍历 .items()。',
    nextBrief: '学习 input()：让程序在运行时从用户那里获取输入。',
    content: [
      '列表是按<strong>顺序</strong>存一堆数据；有时我们想按<strong>名字（键）</strong>找对应的值，比如「名字→晗晗」「年龄→20」。这种一一对应用<strong>字典</strong>最合适。',
      '<strong>字典</strong>用 {} 表示，元素是 <strong>键: 值</strong>，用逗号隔开。通过 <strong>字典[键]</strong> 取值；键不存在会报错。用 <strong>字典.get(键, 默认值)</strong> 取不到时返回默认值，不报错。',
      '<strong>键 in 字典</strong> 判断键是否存在。<strong>字典[新键] = 值</strong> 可添加或修改。常用：<strong>.keys()</strong>、<strong>.values()</strong>、<strong>.items()</strong>（键值对），用于遍历。',
    ],
    points: ['字典用 {}，键: 值；取值 字典[键] 或 .get(键, 默认)', '键 in 字典 判断存在；赋值可新增或修改', '.keys() .values() .items() 遍历'],
    tips: '用 for k, v in info.items(): print(k, v) 遍历字典。',
    code: `# 字典：取值、get、遍历
info = {"名字": "晗晗", "身份": "最棒的学习者"}
print(info["名字"])
print(info.get("年龄", "保密"))
info["今日心情"] = "开心"
for k, v in info.items():
    print(k, ":", v)`,
  },
  {
    id: 'input',
    unit: 4,
    title: '用户输入：input()',
    badge: '进阶',
    encourage: '让程序在运行时从用户那里拿到输入，程序就更「互动」啦。',
    goal: '理解 input() 返回字符串，会用在 print 或变量里；需要数字时用 int()、float() 转换。',
    nextBrief: '学习 try/except：当用户输入不合法或运行出错时，不让程序直接崩溃。',
    content: [
      '前面的程序都是「写死」的数据。如果想让<strong>用户自己输入</strong>内容（比如名字、年龄），就用 <strong>input()</strong>。',
      '<strong>input("提示文字")</strong> 会先显示提示，然后等待用户输入一行内容（以回车结束），返回的是<strong>字符串</strong>。',
      '若需要当数字用，要用 <strong>int()</strong> 或 <strong>float()</strong> 转换，如 <code>age = int(input("年龄?"))</code>。若用户输入的不是数字，转换会报错，后面会学到用 try 处理。',
    ],
    points: ['input("提示") 返回用户输入的一行字符串', '需要数字时用 int() 或 float() 转换', '本页环境可能不支持 input，本地运行时可试'],
    tips: '在本地 Python 里试：name = input("你叫什么？"); print("你好，", name)。',
    code: `# input 返回字符串，需数字要转换
# 注意：本网页环境可能不支持 input，以下仅作语法示例
# name = input("你的名字？")
# print("你好，" + name)
# age = int(input("年龄？"))
# print("明年", age + 1, "岁")
# 这里用默认值模拟
name = "晗晗"
age = 20
print("你好，" + name + "，明年 " + str(age + 1) + " 岁")`,
  },
  {
    id: 'try-except',
    unit: 4,
    title: '异常处理：try 与 except',
    badge: '进阶',
    encourage: '程序出错时不想直接崩溃？用 try/except 可以「抓住」错误并做处理。',
    goal: '会用 try/except 捕获错误，知道常见的 ValueError、IndexError、KeyError，出错时给出友好提示。',
    nextBrief: '学习元组：和列表很像，但创建后不能修改，适合固定的一组值。',
    content: [
      '用 input() 时，用户可能输入非数字，<strong>int()</strong> 就会报错；访问列表越界、字典键不存在也会报错。用 <strong>try/except</strong> 可以把错误「接住」，不让整个程序崩溃。',
      '把可能出错的代码放在 <strong>try:</strong> 下面（缩进），然后写 <strong>except 错误类型:</strong> 或 <strong>except:</strong>，下面写出错时要做的事。这样错误被「捕获」后程序会继续执行。',
      '常见错误：<strong>ValueError</strong>（如 int("abc")）、<strong>IndexError</strong>（下标越界）、<strong>KeyError</strong>（字典键不存在）。写 <code>except Exception as e:</code> 可以用 <code>e</code> 拿到错误信息。',
    ],
    points: ['try: 放可能出错的代码，except: 处理错误', '可指定 except ValueError: 等具体类型', '避免程序因一处错误直接退出'],
    tips: '把 b 改成 0 看除零错误被捕获；或故意 int("xyz") 看 ValueError。',
    code: `# try / except
a, b = 10, 2
try:
    print(a / b)
    print(int("123"))
except ZeroDivisionError:
    print("不能除以 0")
except ValueError as e:
    print("转换出错:", e)
# 字典键不存在
d = {"名字": "晗晗"}
try:
    print(d["年龄"])
except KeyError:
    print("没有这个键，用 get 更安全:", d.get("年龄", "未知"))`,
  },
  {
    id: 'tuple',
    unit: 5,
    title: '元组：不可变的序列',
    badge: '进阶',
    encourage: '元组和列表很像，但创建后不能改，适合做「固定搭配」。',
    goal: '会创建元组、用下标和切片、会解包 a, b = (1, 2)，理解多返回值就是元组。',
    nextBrief: '学习集合：元素不重复、无序，适合去重和集合运算。',
    content: [
      '列表可以随时 append、remove；有时我们想要一种<strong>创建后就不能改</strong>的序列（比如坐标 (x, y)），就用<strong>元组</strong>。',
      '<strong>元组</strong>用圆括号 <code>()</code> 表示，元素用逗号隔开。和列表一样支持下标、切片、len()、in，但<strong>不能增删改</strong>。',
      '适合存不会变的一组值，例如坐标 (x, y)、函数返回多个值实际就是返回元组。可以 <code>a, b = (1, 2)</code> 解包。',
    ],
    points: ['元组用 ()，元素不可变', '支持下标、切片、len、in', '多返回值、解包 a, b = (1, 2)'],
    tips: '试试 t = (1, 2, 3); t[0]; len(t)；不能写 t.append(4)。',
    code: `# 元组：不可变序列
point = (10, 20)
print(point[0], point[1])
x, y = point
print("x =", x, "y =", y)
# 函数返回多值
def get_name():
    return "晗晗", "小晗"
a, b = get_name()
print(a, b)`,
  },
  {
    id: 'set',
    unit: 5,
    title: '集合：不重复的无序容器',
    badge: '进阶',
    encourage: '集合里的元素不重复、没有顺序，适合去重和判断成员。',
    goal: '会创建集合、用 add 添加、用 in/len，会用 & | - 做交集并集差集，会用来去重。',
    nextBrief: '学习列表推导式：用一行式子根据规则生成列表。',
    content: [
      '列表可以有重复元素、有顺序；有时我们只关心「有哪些不同的值」或「某个值在不在」，并且不关心顺序，用<strong>集合</strong>更合适。',
      '<strong>集合</strong>用 <code>set()</code> 或花括号 <code>{1, 2, 3}</code>（注意不是空字典）表示。元素<strong>不重复</strong>、<strong>无序</strong>。支持 <strong>in</strong>、<strong>len</strong>。',
      '<strong>添加</strong>：.add(x)。<strong>运算</strong>：& 交集、| 并集、- 差集。把列表转成集合可去重：<code>list(set(lst))</code>。',
    ],
    points: ['集合用 set() 或 {}，元素不重复、无序', 'add() 添加；in、len 可用', '& 交集 | 并集 - 差集；可用来去重'],
    tips: '试试 s = {1,2,2,3}; print(s)。list(set([1,2,2,3])) 得到去重后的列表。',
    code: `# 集合：去重与运算
s = {"苹果", "香蕉", "苹果", "橙子"}
print(s)
print("苹果" in s)
s.add("葡萄")
a, b = {1, 2, 3}, {2, 3, 4}
print("交集", a & b, "并集", a | b, "差集", a - b)
print("去重", list(set([1, 2, 2, 3, 3])))`,
  },
  {
    id: 'list-comprehension',
    unit: 5,
    title: '列表推导式：一行生成列表',
    badge: '进阶',
    encourage: '用一行式子根据规则生成列表，写起来简洁又清晰。',
    goal: '会写 [x for x in ...] 和带 if 的推导式，能看懂并改写简单循环为推导式。',
    nextBrief: '学习模块与 import：使用 Python 自带的 math、random 等。',
    content: [
      '我们经常要「根据一个列表生成另一个列表」，比如把每个数乘 2、或只保留偶数。用 for 循环可以，但写多了会发现模式固定，Python 提供了<strong>列表推导式</strong>，一行搞定。',
      '<strong>列表推导式</strong>格式：<code>[ 表达式 for 变量 in 可迭代对象 ]</code>，还可以加条件 <code>if 条件</code>。例如 <code>[x*2 for x in range(5)]</code> 得到 [0,2,4,6,8]。',
      '等价于先建空列表再 for 循环里 append。同样有<strong>字典推导式</strong> <code>{k: v for ...}</code>、<strong>集合推导式</strong> <code>{x for ...}</code>。',
    ],
    points: ['[ 表达式 for x in 可迭代 ] 生成列表', '可加 if： [x for x in lst if x>0]', '字典/集合也可用推导式'],
    tips: '试试 [c.upper() for c in ["a","b"]] 和 [i**2 for i in range(5) if i%2==0]。',
    code: `# 列表推导式
nums = [1, 2, 3, 4, 5]
double = [x * 2 for x in nums]
print(double)
evens = [x for x in nums if x % 2 == 0]
print("偶数", evens)
words = ["hello", "hanhan"]
upper = [w.upper() for w in words]
print(upper)`,
  },
  {
    id: 'module',
    unit: 5,
    title: '模块与 import：使用现成代码',
    badge: '进阶',
    encourage: 'Python 有大量标准库和第三方库，用 import 就能拿来用。',
    goal: '会用 import 模块 和 from 模块 import 名字，会调用 math、random 等常用模块。',
    nextBrief: '学习类与对象：把「数据 + 行为」打包成一种类型。',
    content: [
      '我们写的代码都在「当前文件」里；Python 还自带很多<strong>模块</strong>（如数学、随机数、日期），用 <strong>import</strong> 就能直接用，不用自己写。',
      '<strong>import 模块名</strong> 后使用 <strong>模块名.函数名</strong>，如 <code>import math</code> 再用 <code>math.sqrt(4)</code>。<strong>from 模块 import 函数</strong> 可只引入需要的名字。',
      '常用：<strong>math</strong> 数学、<strong>random</strong> 随机数、<strong>datetime</strong> 日期时间。本页环境已包含常用标准库。',
    ],
    points: ['import 模块 后用 模块.名字', 'from 模块 import 名字 直接使用名字', 'math、random、datetime 等是标准库'],
    tips: '试试 import random; print(random.randint(1, 10))。',
    code: `# 模块：math 与 random
import math
print("sqrt(16) =", math.sqrt(16))
print("pi =", math.pi)
import random
print("随机数", random.randint(1, 100))
print("随机选", random.choice(["晗", "晗", "棒"]))`,
  },
  {
    id: 'class',
    unit: 5,
    title: '类与对象：面向对象入门',
    badge: '进阶',
    encourage: '用类把「数据 + 行为」打包成一种类型，创建出来的就是对象。',
    goal: '会定义简单类、写 __init__ 和方法，会创建对象并调用方法。',
    nextBrief: '学习文件读写：用 open 和 with 读、写文件。',
    content: [
      '前面我们把「数据」放列表、字典，「逻辑」放函数。<strong>类</strong>可以把「一组数据 + 操作这组数据的函数」绑在一起，形成一种「类型」，创建出来的就是<strong>对象</strong>。',
      '<strong>class 类名:</strong> 下面缩进定义<strong>方法</strong>（函数），第一个参数通常是 <strong>self</strong>，表示对象自己。<strong>__init__(self, ...)</strong> 是构造方法，创建对象时自动调用。',
      '创建对象：<code>对象 = 类名(参数)</code>。调用方法：<code>对象.方法(参数)</code>。用 <strong>self.属性 = 值</strong> 在 __init__ 里给对象绑定属性。',
    ],
    points: ['class 类名: 定义类；方法第一个参数写 self', '__init__(self, ...) 构造方法', '对象 = 类名(参数)；对象.方法()'],
    tips: '试着给 Person 加一个 say_hello 方法，里面 print 一句话。',
    code: `# 类与对象
class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        return "你好，我是 " + self.name

p = Person("晗晗")
print(p.greet())
print(p.name)`,
  },
  {
    id: 'file',
    unit: 5,
    title: '文件读写：open 与 with',
    badge: '进阶',
    encourage: '程序经常要读文件、写文件，用 open 和 with 就能搞定。',
    goal: '理解 open 的 r/w/a 模式，会用 with 打开文件，会 .read()、.readlines()、.write()。',
    nextBrief: '做一个小测验程序，把列表、循环、条件、函数串起来。',
    content: [
      '数据除了在程序里写死、用 input 输入，还经常要<strong>从文件读入</strong>或<strong>写出到文件</strong>。Python 用 <strong>open()</strong> 打开文件，用 <strong>with</strong> 可以自动关闭。',
      '<strong>open("路径", "r")</strong> 只读、<strong>"w"</strong> 覆盖写、<strong>"a"</strong> 追加写。读内容：<strong>.read()</strong> 全文件、<strong>.readlines()</strong> 按行列表。写：<strong>.write(字符串)</strong>。',
      '用 <strong>with open(...) as f:</strong> 可以在用完后自动关闭文件，避免忘记 close。本页环境可能无法写真实文件，语法先掌握即可。',
    ],
    points: ['open(路径, "r"/"w"/"a") 打开文件', 'with open(...) as f: 自动关闭', '.read() .readlines() .write()'],
    tips: '在本地试：with open("test.txt","w") as f: f.write("hello")。',
    code: `# 文件读写语法示例（本环境可能无法实际写文件）
# with open("hello.txt", "w", encoding="utf-8") as f:
#     f.write("晗晗，你好～\\n")
# with open("hello.txt", "r", encoding="utf-8") as f:
#     content = f.read()
# 这里用字符串模拟
content = "晗晗，你好～\\n这是模拟的文件内容"
lines = content.strip().split("\\n")
print("行数", len(lines))
print("第一行", lines[0])`,
  },
  {
    id: 'comprehensive',
    unit: 5,
    title: '综合练习：小测验程序',
    badge: '小项目',
    encourage: '把变量、列表、循环、条件、函数串起来，做一个小测验。',
    goal: '能把列表、for、if、函数组合成一个小程序，理解「先设计数据结构再写逻辑」。',
    nextBrief: '用列表和循环写一首专属小情诗，为入门阶段收尾。',
    content: [
      '到这里，变量、类型、条件、循环、函数你都见过了。这一节我们<strong>综合运用</strong>：用列表存题目、用 for 出题、用函数封装，为后面加 input 互动打基础。',
      '用<strong>列表</strong>存题目和答案，<strong>for</strong> 循环逐题输出，<strong>条件</strong>判断对错并计分，最后用<strong>f-string</strong> 或 print 输出总分。可以再封装成<strong>函数</strong> run_quiz()。',
    ],
    points: ['列表存题、循环出题、条件判对错、变量计分', '结合前面所有基础语法'],
    tips: '试着加更多题目，或改成「选择题」用字典存选项。',
    code: `# 综合：简单测验（结构演示，实际可加 input 让用户作答）
def run_quiz():
    questions = [
        ("1+1=?", "2"),
        ("Python 里列表用啥表示?", "[]"),
        ("字符串拼接用哪个符号?", "+"),
    ]
    for i, (q, a) in enumerate(questions, 1):
        print(f"第{i}题: {q}")
        print("参考答案:", a)
    print(f"共 {len(questions)} 题，可用 input() 让用户输入答案再判对错～")

run_quiz()`,
  },
  {
    id: 'little-project',
    unit: 5,
    title: '小项目：专属小情诗',
    badge: '小项目',
    encourage: '用刚学的列表、循环和函数，拼出一段只属于你的小情诗吧。',
    goal: '独立完成一个小程序：列表 + for + 函数，并能按自己的想法修改和扩展。',
    nextBrief: null,
    content: [
      '这是入门阶段的最后一节：用<strong>列表</strong>存几行诗，用 <strong>for</strong> 逐行输出，用<strong>函数</strong>封装，用<strong>条件</strong>或 f-string 做一点小变化。学完你就具备 Python 最基础也最常用的能力啦～',
      '把多行文字放进<strong>列表</strong>，用 <strong>for 行 in 列表</strong> 逐行输出。可以加<strong>函数</strong>封装「打印一首诗」，用<strong>条件</strong>让某一行特殊显示，或用<strong>f-string</strong> 把变量嵌进句子里。',
    ],
    points: ['列表 + for 循环 按顺序处理', '结合函数、if、f-string 自由发挥'],
    tips: '写一个 def print_poem(lines): for line in lines: print(line)，再调用它。',
    code: `# 专属小情诗（可以随便改～）
def print_poem(lines):
    for i, line in enumerate(lines):
        if i == len(lines) - 1:
            print(">>>", line, "<<<")
        else:
            print(line)

lines = [
    "春天有花，夏天有风",
    "秋天有月，冬天有雪",
    "而我，四季都有你。"
]
print_poem(lines)`,
  },
];

let pyodideReady = false;
let currentCode = '';

function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getNotes() {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setNote(lessonId, text) {
  const notes = getNotes();
  notes[lessonId] = text;
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

function getNote(lessonId) {
  return (getNotes()[lessonId] || '').trim();
}

function getMessage() {
  return localStorage.getItem(MESSAGE_KEY) || '';
}

function setMessage(text) {
  localStorage.setItem(MESSAGE_KEY, text || '');
}

function getLessonHint(lesson) {
  if (lesson.hint) return Array.isArray(lesson.hint) ? lesson.hint.join('\n\n') : lesson.hint;
  if (lesson.tips) return lesson.tips;
  return DEFAULT_HINT;
}

function setDone(lessonId) {
  const progress = getProgress();
  progress[lessonId] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateProgressUI();
  markLessonDone(lessonId);
}

function updateProgressUI() {
  const progress = getProgress();
  const total = lessons.length;
  const done = Object.keys(progress).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const fill = document.getElementById('progressFill');
  const text = document.getElementById('progressText');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = `已完成 ${done}/${total}（${pct}%）`;
}

function markLessonDone(lessonId) {
  const card = document.getElementById('lesson-' + lessonId);
  if (card) card.classList.add('done');
}

function unmarkLessonDone(lessonId) {
  const card = document.getElementById('lesson-' + lessonId);
  if (card) card.classList.remove('done');
}

/** 重置本章学习进度（仅清除该章的完成状态） */
function resetLessonProgress(lessonId) {
  const progress = getProgress();
  delete progress[lessonId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateProgressUI();
  unmarkLessonDone(lessonId);
  buildNav();
}

/** 全部重置：进度、笔记、留言 */
function resetAll() {
  if (!confirm('确定要全部重置吗？将清空：学习进度、所有笔记、给俊杰的留言。此操作无法恢复。')) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(NOTES_KEY);
  localStorage.removeItem(MESSAGE_KEY);
  updateProgressUI();
  buildNav();
  lessons.forEach((l) => unmarkLessonDone(l.id));
  const lessonsEl = document.getElementById('lessons');
  if (lessonsEl) lessonsEl.querySelectorAll('.note-input').forEach((textarea) => { textarea.value = ''; });
  const messageEditor = document.getElementById('messageToJunjie');
  if (messageEditor) messageEditor.value = '';
  alert('已全部重置～');
}

function getBadgeGroup(badge) {
  if (badge === '入门') return '入门';
  if (badge === '基础') return '基础';
  if (badge === '进阶') return '进阶';
  if (badge === '小结') return '小结';
  return '小项目';
}

function buildNav() {
  const nav = document.getElementById('courseNav');
  if (!nav) return;
  let html = '<a href="#welcome" class="nav-link">欢迎</a>';
  [1, 2, 3, 4, 5].forEach((unitNum) => {
    const list = lessons.filter((l) => l.unit === unitNum);
    if (!list.length) return;
    html += `<div class="nav-group-title">${LESSON_UNITS[unitNum]}</div>`;
    list.forEach((l) => {
      const doneClass = getProgress()[l.id] ? ' nav-done' : '';
      html += `<a href="#lesson-${l.id}" class="nav-link${doneClass}" data-search="${escapeHtml(l.title)}">${escapeHtml(l.title)}</a>`;
    });
  });
  nav.innerHTML = html;
}

function buildLessons() {
  const container = document.getElementById('lessons');
  if (!container) return;
  container.innerHTML = lessons.map((lesson) => {
    const done = getProgress()[lesson.id] ? ' done' : '';
    const contentHtml = Array.isArray(lesson.content)
      ? lesson.content.map((p) => `<p>${p}</p>`).join('')
      : `<p>${lesson.content}</p>`;
    const pointsHtml = (lesson.points && lesson.points.length)
      ? `<div class="points"><h4>本节要点</h4><ul>${lesson.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}</ul></div>`
      : '';
    const tipsHtml = lesson.tips ? `<div class="tips"><span class="tips-label">小提示</span> ${escapeHtml(lesson.tips)}</div>` : '';
    const goalHtml = lesson.goal ? `<div class="lesson-goal"><span class="lesson-goal-label">本节目标</span> ${escapeHtml(lesson.goal)}</div>` : '';
    const nextHtml = lesson.nextBrief ? `<div class="lesson-next"><span class="lesson-next-label">下一节</span> ${escapeHtml(lesson.nextBrief)}</div>` : '';
    const badgeClass = 'badge-' + (lesson.badge === '小项目' ? 'project' : lesson.badge === '小结' ? 'summary' : lesson.badge === '入门' ? 'start' : lesson.badge === '基础' ? 'base' : 'advance');
    return `
      <section class="lesson-card ${badgeClass}${done}" id="lesson-${lesson.id}">
        <h2><span class="badge badge-${badgeClass.replace('badge-', '')}">${lesson.badge}</span> ${escapeHtml(lesson.title)}</h2>
        <p class="encourage">${escapeHtml(lesson.encourage)}</p>
        ${goalHtml}
        <div class="lesson-body">${contentHtml}</div>
        ${pointsHtml}
        ${tipsHtml}
        ${nextHtml}
        <pre class="code-block"><code>${escapeHtml(lesson.code)}</code><span class="run-hint">点击下方按钮可以修改并运行这段代码</span></pre>
        <button class="btn-try" data-lesson-id="${lesson.id}" data-code="${escapeAttr(lesson.code)}">试试运行</button>
        <div class="lesson-help">
          <button type="button" class="btn-hint" data-lesson-id="${lesson.id}">💡 不会？看提示</button>
          <button type="button" class="btn-answer" data-lesson-id="${lesson.id}">📋 看参考答案</button>
          <button type="button" class="btn-reset-lesson" data-lesson-id="${lesson.id}" title="清除本章完成状态">🔄 重置本章</button>
        </div>
        <div class="lesson-notes">
          <label for="note-${lesson.id}">我的笔记</label>
          <textarea class="note-input" id="note-${lesson.id}" data-lesson-id="${lesson.id}" placeholder="这里可以写不会的地方、想复习的要点，也可以发给俊杰，俊杰会看到~"></textarea>
        </div>
      </section>
    `;
  }).join('');

  container.querySelectorAll('.btn-try').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.lessonId;
      const code = btn.dataset.code || '';
      openRunModal(code, id);
    });
  });

  container.querySelectorAll('.btn-hint').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lesson = lessons.find((l) => l.id === btn.dataset.lessonId);
      if (lesson) openHelpModal('💡 提示', getLessonHint(lesson));
    });
  });

  container.querySelectorAll('.btn-answer').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lesson = lessons.find((l) => l.id === btn.dataset.lessonId);
      if (lesson) openHelpModal('📋 参考答案（先自己想一遍再对照哦）', lesson.code);
    });
  });

  container.querySelectorAll('.note-input').forEach((textarea) => {
    textarea.value = getNote(textarea.dataset.lessonId);
    textarea.addEventListener('input', () => {
      setNote(textarea.dataset.lessonId, textarea.value);
    });
    textarea.addEventListener('blur', () => {
      setNote(textarea.dataset.lessonId, textarea.value);
    });
  });

  container.querySelectorAll('.btn-reset-lesson').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.lessonId;
      if (id && confirm('确定要重置本章学习进度吗？')) resetLessonProgress(id);
    });
  });
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;');
}

function openRunModal(code, lessonId) {
  currentCode = code;
  const modal = document.getElementById('runModal');
  const editor = document.getElementById('codeEditor');
  const output = document.getElementById('outputContent');
  if (!modal || !editor || !output) return;
  editor.value = code;
  output.textContent = '';
  output.classList.add('empty');
  modal.classList.add('show');
  editor.focus();
  modal.dataset.lessonId = lessonId || '';
}

function closeRunModal() {
  const modal = document.getElementById('runModal');
  if (modal) modal.classList.remove('show');
}

function openHelpModal(title, body) {
  const modal = document.getElementById('hintModal');
  const titleEl = document.getElementById('hintModalTitle');
  const bodyEl = document.getElementById('hintModalBody');
  if (titleEl) titleEl.textContent = title;
  if (bodyEl) bodyEl.textContent = body;
  if (modal) modal.classList.add('show');
}

function closeHelpModal() {
  const modal = document.getElementById('hintModal');
  if (modal) modal.classList.remove('show');
}

function showEncourageModal(text) {
  const el = document.getElementById('encourageText');
  const modal = document.getElementById('encourageModal');
  if (el) el.textContent = text;
  if (modal) modal.classList.add('show');
}

function closeEncourageModal() {
  const modal = document.getElementById('encourageModal');
  if (modal) modal.classList.remove('show');
}

function resetCode() {
  const editor = document.getElementById('codeEditor');
  const modal = document.getElementById('runModal');
  if (editor && modal && currentCode) editor.value = currentCode;
}

async function runCode() {
  const editor = document.getElementById('codeEditor');
  const output = document.getElementById('outputContent');
  const modal = document.getElementById('runModal');
  if (!editor || !output) return;
  const code = editor.value.trim();
  output.classList.remove('empty');
  output.textContent = '运行中…';

  if (!pyodideReady) {
    output.textContent = 'Python 环境还在加载，请稍等几秒再点运行～';
    return;
  }

  try {
    await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);
    await pyodide.runPythonAsync(code);
    const result = pyodide.runPython('sys.stdout.getvalue()');
    const out = result !== undefined ? String(result) : '';
    output.textContent = out || '（没有输出，但运行成功啦）';
    const lessonId = modal && modal.dataset.lessonId;
    if (lessonId) setDone(lessonId);
    const msg = ENCOURAGE_MESSAGES[Math.floor(Math.random() * ENCOURAGE_MESSAGES.length)];
    showEncourageModal(msg);
  } catch (err) {
    const msg = err.message || String(err);
    output.textContent = msg + '\n\n没关系，再试一次～ 不会的话可以点本课下面的「看提示」或「看参考答案」。';
  }
}

function initModal() {
  const closeBtn = document.getElementById('closeModal');
  const runBtn = document.getElementById('runCode');
  const resetBtn = document.getElementById('resetCode');
  const modal = document.getElementById('runModal');
  if (closeBtn) closeBtn.addEventListener('click', closeRunModal);
  if (runBtn) runBtn.addEventListener('click', runCode);
  if (resetBtn) resetBtn.addEventListener('click', resetCode);
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeRunModal(); });
  }

  const closeEncourageBtn = document.getElementById('closeEncourageModal');
  const encourageModal = document.getElementById('encourageModal');
  if (closeEncourageBtn) closeEncourageBtn.addEventListener('click', closeEncourageModal);
  if (encourageModal) {
    encourageModal.addEventListener('click', (e) => { if (e.target === encourageModal) closeEncourageModal(); });
  }

  const closeHintBtn = document.getElementById('closeHintModal');
  const hintModal = document.getElementById('hintModal');
  if (closeHintBtn) closeHintBtn.addEventListener('click', closeHelpModal);
  if (hintModal) {
    hintModal.addEventListener('click', (e) => { if (e.target === hintModal) closeHelpModal(); });
  }

  const btnMessage = document.getElementById('btnMessage');
  const closeMessageBtn = document.getElementById('closeMessageModal');
  const messageModal = document.getElementById('messageModal');
  const messageEditor = document.getElementById('messageToJunjie');
  const saveMessageBtn = document.getElementById('saveMessage');
  const messageSavedEl = document.getElementById('messageSaved');
  if (btnMessage && messageModal) {
    btnMessage.addEventListener('click', () => {
      if (messageEditor) messageEditor.value = getMessage();
      if (messageSavedEl) messageSavedEl.textContent = '';
      messageModal.classList.add('show');
    });
  }
  if (closeMessageBtn) closeMessageBtn.addEventListener('click', () => { if (messageModal) messageModal.classList.remove('show'); });
  if (messageModal) {
    messageModal.addEventListener('click', (e) => { if (e.target === messageModal) messageModal.classList.remove('show'); });
  }
  if (saveMessageBtn && messageEditor && messageSavedEl) {
    saveMessageBtn.addEventListener('click', () => {
      setMessage(messageEditor.value);
      messageSavedEl.textContent = '已保存，也可以发给俊杰，俊杰会看到~';
      setTimeout(() => { messageSavedEl.textContent = ''; }, 3000);
    });
  }
}

async function initPyodide() {
  if (window.pyodide) {
    pyodideReady = true;
    return;
  }
  const loadPyodideFn = window.loadPyodide;
  if (!loadPyodideFn) {
    console.warn('Pyodide script not loaded');
    return;
  }
  try {
    window.pyodide = await loadPyodideFn({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/' });
    pyodideReady = true;
  } catch (e) {
    console.warn('Pyodide load failed:', e);
  }
}

function isLoggedIn() {
  return localStorage.getItem(LOGIN_KEY) === '1';
}

function showLogin() {
  const loginPage = document.getElementById('loginPage');
  const appContent = document.getElementById('appContent');
  if (loginPage) loginPage.classList.remove('hidden');
  if (appContent) appContent.classList.add('hidden');
}

function showApp() {
  const loginPage = document.getElementById('loginPage');
  const appContent = document.getElementById('appContent');
  if (loginPage) loginPage.classList.add('hidden');
  if (appContent) appContent.classList.remove('hidden');
}

function initLogin() {
  const form = document.getElementById('loginForm');
  const userInput = document.getElementById('loginUser');
  const passInput = document.getElementById('loginPass');
  const errEl = document.getElementById('loginError');
  const btn = document.getElementById('loginBtn');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = (userInput && userInput.value) ? userInput.value.trim() : '';
    const pass = (passInput && passInput.value) ? passInput.value : '';
    if (errEl) errEl.textContent = '';
    if (user === LOGIN_USER && pass === LOGIN_PASS) {
      localStorage.setItem(LOGIN_KEY, '1');
      showApp();
      init();
    } else {
      if (errEl) errEl.textContent = '账号或密码错误，再试一次吧～';
      if (passInput) passInput.focus();
    }
  });
}

function initLogout() {
  const btn = document.getElementById('btnLogout');
  if (!btn) return;
  btn.addEventListener('click', () => {
    localStorage.removeItem(LOGIN_KEY);
    showLogin();
  });
}

function initResetAll() {
  const btn = document.getElementById('btnResetAll');
  if (!btn) return;
  btn.addEventListener('click', () => { resetAll(); });
}

function initSearch() {
  const searchInput = document.getElementById('navSearch');
  if (!searchInput) return;
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    lessons.forEach((l) => {
      const card = document.getElementById('lesson-' + l.id);
      if (!card) return;
      const match = !q || l.title.toLowerCase().includes(q) || (l.content && (Array.isArray(l.content) ? l.content.join(' ') : l.content).toLowerCase().includes(q));
      card.classList.toggle('hidden-by-search', !match);
    });
  });
}

function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  const onScroll = () => {
    btn.classList.toggle('hidden', window.scrollY < 300);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function init() {
  buildNav();
  buildLessons();
  updateProgressUI();
  initModal();
  initSearch();
  initBackTop();
  initLogout();
  initResetAll();
  lessons.forEach((l) => { if (getProgress()[l.id]) markLessonDone(l.id); });
  initPyodide();
}

function onReady() {
  if (isLoggedIn()) {
    showApp();
    init();
  } else {
    showLogin();
    initLogin();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  onReady();
}
