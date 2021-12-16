(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{698:function(t,s,a){"use strict";a.r(s);var e=a(36),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git基础与命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git基础与命令"}},[t._v("#")]),t._v(" Git基础与命令")]),t._v(" "),a("p",[t._v("官方文档（中文）：https://git-scm.com/book/zh/v2")]),t._v(" "),a("blockquote",[a("p",[t._v("本文档是根据官方文档来编写的，以官方文档为准。")])]),t._v(" "),a("h2",{attrs:{id:"git基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git基础"}},[t._v("#")]),t._v(" Git基础")]),t._v(" "),a("h3",{attrs:{id:"全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your name'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx@xx.com'")]),t._v("\n")])])]),a("p",[t._v("自报家门")]),t._v(" "),a("h3",{attrs:{id:"检查配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息"}},[t._v("#")]),t._v(" 检查配置信息")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n")])])]),a("h3",{attrs:{id:"获取帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[t._v("#")]),t._v(" 获取帮助")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取全局帮助手册")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取特定命令的详细版帮助手册 (两个命令是等价的)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("某个命令"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("某个命令"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --help "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个横杠")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取特定命令的简明版帮助手册")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("某个命令"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -h  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个横杠")]),t._v("\n")])])]),a("h3",{attrs:{id:"初始化仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化仓库"}},[t._v("#")]),t._v(" 初始化仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地目录初始化仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),a("p",[t._v("如果你是从远程仓库clone的项目，则该项目是已经初始化好的git仓库")]),t._v(" "),a("h3",{attrs:{id:"克隆远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程仓库"}},[t._v("#")]),t._v(" 克隆远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆同时修改目录名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态，因为 Git 刚刚检出了它们， 而你尚未编辑过它们")]),t._v(" "),a("h3",{attrs:{id:"检查文件状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查文件状态"}},[t._v("#")]),t._v(" 检查文件状态")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看详细状态说明")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看简明状态说明")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -s 或 --short")]),t._v("\n M README "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已修改，但未暂存 （M的位置靠右，红色）")]),t._v("\nMM Rakefile "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已修改，暂存后又作了修改（有暂存和未暂存）")]),t._v("\nA  lib/git.rb "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新添加到暂存区，未提交")]),t._v("\nM  lib/simplegit.rb "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已修改，已暂存 （M的位置靠左，绿色）")]),t._v("\n?? LICENSE.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新添加，未跟踪")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("git目录中的文件状态包含：是否跟踪、是否修改、是否已存入暂存区")])]),t._v(" "),a("li",[a("p",[t._v("参数的"),a("strong",[t._v("一个横杠表示缩写，两个横杠表示全称。")])])])]),t._v(" "),a("h3",{attrs:{id:"加入暂存区-跟踪文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加入暂存区-跟踪文件"}},[t._v("#")]),t._v(" 加入暂存区 (跟踪文件)")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件加入暂存区（跟踪指定文件)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("code",[t._v("git add")]),t._v(" 命令使用文件或目录的路径作为参数；如果参数是目录的路径，该命令将递归地跟踪该目录下的所有文件。")]),t._v(" "),a("p",[a("code",[t._v("add")]),t._v(" 命令是将文件"),a("strong",[t._v("加入")]),t._v("到"),a("strong",[t._v("暂存区")]),t._v("，"),a("code",[t._v("commit")]),t._v(" 命令的"),a("strong",[t._v("提交")]),t._v("到"),a("strong",[t._v("本地仓库")]),t._v("，"),a("code",[t._v("push")]),t._v(" 命令是"),a("strong",[t._v("推送")]),t._v("到"),a("strong",[t._v("远程仓库")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"忽略文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[t._v("#")]),t._v(" 忽略文件")]),t._v(" "),a("p",[t._v("添加一个名为 "),a("code",[t._v(".gitignore")]),t._v(" 的文件，列出要忽略的文件的模式")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("*."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略以 .o 或 .a 结尾的文件（一般这类文件是编译过程出现）")]),t._v("\n*~      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略以 ~ 结尾的文件（一般是文本编辑软件保存的副本）")]),t._v("\n")])])]),a("p",[t._v("文件 "),a("code",[t._v(".gitignore")]),t._v(" 的"),a("strong",[t._v("格式规范")]),t._v("如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("所有空行或者以 "),a("code",[t._v("#")]),t._v(" 开头的行都会被 Git 忽略（注释符号）。")])]),t._v(" "),a("li",[a("p",[t._v("可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。")]),t._v(" "),a("blockquote",[a("p",[t._v("glob 模式是指 shell 所使用的简化了的正则表达式")])])]),t._v(" "),a("li",[a("p",[t._v("匹配模式可以以（"),a("code",[t._v("/")]),t._v("）开头防止递归。")])]),t._v(" "),a("li",[a("p",[t._v("匹配模式可以以（"),a("code",[t._v("/")]),t._v("）结尾指定目录。")])]),t._v(" "),a("li",[a("p",[t._v("要忽略指定模式以外的文件或目录，可以在模式前加上叹号（"),a("code",[t._v("!")]),t._v("）取反。")])])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("星号（"),a("code",[t._v("*")]),t._v("）匹配零个或多个任意字符")]),t._v(" "),a("li",[a("code",[t._v("[abc]")]),t._v(" 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）")]),t._v(" "),a("li",[t._v("问号（"),a("code",[t._v("?")]),t._v("）只匹配一个任意字符")]),t._v(" "),a("li",[a("code",[t._v("[0-9]")]),t._v(" 表示匹配所有 0 到 9 的数字。在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配")]),t._v(" "),a("li",[t._v("使用两个星号（"),a("code",[t._v("**")]),t._v("）表示匹配任意中间目录，比如 "),a("code",[t._v("a/**/z")]),t._v(" 可以匹配 "),a("code",[t._v("a/z")]),t._v(" 、 "),a("code",[t._v("a/b/z")]),t._v(" 或 "),a("code",[t._v("a/b/c/z")]),t._v(" 等。")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略所有的 .a 文件")]),t._v("\n*.a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("lib.a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO")]),t._v("\n/TODO\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略任何目录下名为 build 的文件夹")]),t._v("\nbuild/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt")]),t._v("\ndoc/*.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件")]),t._v("\ndoc/**/*.pdf\n")])])]),a("p",[t._v("GitHub 有一个十分详细的针对数十种项目及语言的 "),a("code",[t._v(".gitignore")]),t._v(" 文件列表， 你可以在 https://github.com/github/gitignore 找到它。")]),t._v(" "),a("h3",{attrs:{id:"查看修改的具体内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看修改的具体内容"}},[t._v("#")]),t._v(" 查看修改的具体内容")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比较修改之后还没有暂存起来的变化内容。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --staged "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已暂存的将要添加到下次提交里的内容")]),t._v("\n")])])]),a("p",[a("code",[t._v("git status")]),t._v(" 只能查看文件变动的状态，并不能查看具体修改了哪些内容。使用"),a("code",[t._v("git diff")]),t._v("可以看到具体变动的内容。")]),t._v(" "),a("h3",{attrs:{id:"提交更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交更新"}},[t._v("#")]),t._v(" 提交更新")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 未带参数的会打开默认文本编辑器让你输入提交说明")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交说明'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 带-m参数直接输入提交说明")]),t._v("\n")])])]),a("p",[t._v("使用"),a("code",[t._v("git commit")]),t._v("提交更新，在此之前，务必确认所有变动已经被"),a("code",[t._v("git add")]),t._v("添加到暂存区。")]),t._v(" "),a("h3",{attrs:{id:"跳过使用暂存区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳过使用暂存区域"}},[t._v("#")]),t._v(" 跳过使用暂存区域")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交说明'")]),t._v("\n")])])]),a("p",[t._v("添加"),a("code",[t._v("-a")]),t._v("选项可以跳过"),a("code",[t._v("git add")]),t._v(" 步骤，把已经跟踪过的文件一并提交。")]),t._v(" "),a("p",[t._v("注意：这个操作"),a("strong",[t._v("无法提交未跟踪")]),t._v("的文件。")]),t._v(" "),a("h2",{attrs:{id:"git-基础-查看提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-基础-查看提交历史"}},[t._v("#")]),t._v(" Git 基础 - 查看提交历史")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),a("p",[t._v("不传入任何参数的默认情况下，"),a("code",[t._v("git log")]),t._v(" 会按时间先后顺序列出所有的提交，最近的更新排在最上面。")]),t._v(" "),a("p",[t._v("此命令打印的数据中有一项是一长串的 "),a("code",[t._v("SHA-1")]),t._v(" 校验码。")]),t._v(" "),a("p",[a("strong",[t._v("带入"),a("code",[t._v("-p")]),t._v("或"),a("code",[t._v("--patch")]),t._v("查看提交的具体差异：")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p -2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -p显示差异  -2显示最近的提交次数")]),t._v("\n")])])]),a("p",[a("code",[t._v("--stat")]),t._v(" 显示每次提交的差异统计")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n")])])]),a("p",[a("code",[t._v("--pretty")]),t._v("  这个选项可以使用不同于默认格式的方式展示提交历史")]),t._v(" "),a("p",[t._v("这个选项有一些内建的子选项供你使用。 比如 "),a("code",[t._v("oneline")]),t._v(" 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 "),a("code",[t._v("short")]),t._v("，"),a("code",[t._v("full")]),t._v(" 和 "),a("code",[t._v("fuller")]),t._v(" 选项，它们展示信息的格式基本一致，但是详尽程度不一：")]),t._v(" "),a("div",{staticClass:"language-fsharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-fsharp"}},[a("code",[t._v("$ git log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\nca82a6dff817ec66f44342007202690a93763949 changed the version number\n085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 removed unnecessary test\na11bef06a3f659402fe7563abf99ad00de2209e6 first commit\n")])])]),a("p",[t._v("最有意思的是 "),a("code",[t._v("format")]),t._v(" ，可以定制记录的显示格式。 这样的输出对后期提取分析格外有用——因为你知道输出的格式不会随着 Git 的更新而发生改变：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h - %an, %ar : %s"')]),t._v("\nca82a6d - Scott Chacon, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" years ago "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" changed the version number\n085bb3b - Scott Chacon, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" years ago "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" removed unnecessary "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\na11bef0 - Scott Chacon, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" years ago "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" first commit\n")])])]),a("p",[a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/pretty_format",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("git log --pretty=format")]),t._v(" 常用的选项"),a("OutboundLink")],1),t._v(" 列出了 "),a("code",[t._v("format")]),t._v(" 接受的常用格式占位符的写法及其代表的意义。")]),t._v(" "),a("p",[a("strong",[t._v("当 "),a("code",[t._v("oneline")]),t._v(" 或 "),a("code",[t._v("format")]),t._v(" 与另一个 "),a("code",[t._v("log")]),t._v(" 选项 "),a("code",[t._v("--graph")]),t._v(" 结合使用时尤其有用。 这个选项添加了一些 ASCII 字符串来形象地展示你的分支、合并历史：")])]),t._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git log --pretty=format:\"%h %s\" --graph\n* 2d3acf9 ignore errors from SIGCHLD on trap\n*  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit\n|\\\n| * 420eac9 Added a method for getting the current branch.\n* | 30e367c timeout code and tests\n* | 5a09431 add timeout protection to grit\n* | e1193f8 support for heads with slashes in them\n|/\n* d6016bc require time for xmlschema\n*  11d191e Merge branch 'defunkt' into local\n")])])]),a("h2",{attrs:{id:"git-基础-撤消操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-基础-撤消操作"}},[t._v("#")]),t._v(" Git 基础 - 撤消操作")]),t._v(" "),a("p",[t._v("你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial commit'")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" forgotten_file\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新提交，且只有一次提交记录")]),t._v("\n")])])]),a("p",[t._v("最终你只会有一个提交——第二次提交将代替第一次提交的结果。")]),t._v(" "),a("p",[t._v("更多撤销操作请了解 "),a("code",[t._v("reset")]),t._v("命令。")]),t._v(" "),a("h2",{attrs:{id:"git-基础-远程仓库的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-基础-远程仓库的使用"}},[t._v("#")]),t._v(" Git 基础 - 远程仓库的使用")]),t._v(" "),a("h3",{attrs:{id:"查看远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[t._v("#")]),t._v(" 查看远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅显示远程仓库的名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示远程仓库的名称 + 地址")]),t._v("\n")])])]),a("h3",{attrs:{id:"添加远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[t._v("#")]),t._v(" 添加远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程仓库名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"从远程仓库中抓取与拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库中抓取与拉取"}},[t._v("#")]),t._v(" 从远程仓库中抓取与拉取")]),t._v(" "),a("p",[t._v("就如刚才所见，从远程仓库中获得数据，可以执行：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。")]),t._v(" "),a("p",[t._v("注意： "),a("code",[t._v("git fetch")]),t._v(" 命令只会将数据下载到你的本地仓库——"),a("strong",[t._v("它并不会自动合并或修改你当前的工作")]),t._v("。 当准备好时你必须手动将其合并入你的工作。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])])]),a("p",[t._v("用 "),a("code",[t._v("git pull")]),t._v(" 命令来自动抓取后合并该远程分支到当前分支。 这或许是个更加简单舒服的工作流程。默认情况下，"),a("code",[t._v("git clone")]),t._v(" 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 "),a("code",[t._v("master")]),t._v(" 分支（或其它名字的默认分支）。 "),a("strong",[t._v("运行 "),a("code",[t._v("git pull")]),t._v(" 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。")])]),t._v(" "),a("h3",{attrs:{id:"推送到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库"}},[t._v("#")]),t._v(" 推送到远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push origin master")]),t._v("\n")])])]),a("h3",{attrs:{id:"查看某个远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看某个远程仓库"}},[t._v("#")]),t._v(" 查看某个远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git remote show origin")]),t._v("\n")])])]),a("p",[t._v("查看远程仓库的详细信息。这个命令列出了当你在特定的分支上执行 "),a("code",[t._v("git push")]),t._v(" 会自动地推送到哪一个远程分支")]),t._v(" "),a("h3",{attrs:{id:"远程仓库的重命名与移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库的重命名与移除"}},[t._v("#")]),t._v(" 远程仓库的重命名与移除")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("原名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("新名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重命名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove paul "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除远程仓库")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-基础-打标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-基础-打标签"}},[t._v("#")]),t._v(" Git 基础 - 打标签")]),t._v(" "),a("h3",{attrs:{id:"列出标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出标签"}},[t._v("#")]),t._v(" 列出标签")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整标签列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2.0*"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只显示包含 v2.0 的标签。 注意加星号(*)")]),t._v("\n")])])]),a("p",[a("code",[t._v("-l")]),t._v(" 或 "),a("code",[t._v("--list")]),t._v(" 都可以。")]),t._v(" "),a("h3",{attrs:{id:"创建标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[t._v("#")]),t._v(" 创建标签")]),t._v(" "),a("p",[t._v("Git 支持两种标签："),a("strong",[t._v("轻量标签")]),t._v("（lightweight）与"),a("strong",[t._v("附注标签")]),t._v("（annotated）。")]),t._v(" "),a("p",[t._v("轻量标签很像一个不会改变的分支——它"),a("strong",[t._v("只是某个特定提交的引用")]),t._v("。")]),t._v(" "),a("p",[t._v("而附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中"),a("strong",[t._v("包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息")]),t._v("，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 通常会建议创建附注标签，这样你可以拥有以上所有信息。但是如果你只是想用一个临时的标签， 或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。")]),t._v(" "),a("h3",{attrs:{id:"附注标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附注标签"}},[t._v("#")]),t._v(" 附注标签")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.4 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my version 1.4"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -a表示add， -m 表示附件信息")]),t._v("\n")])])]),a("p",[t._v("通过使用 "),a("code",[t._v("git show")]),t._v(" 命令可以看到标签信息和与之对应的提交信息：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.4\n")])])]),a("h3",{attrs:{id:"轻量标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量标签"}},[t._v("#")]),t._v(" 轻量标签")]),t._v(" "),a("p",[t._v("轻量标签本质上是将提交校验和存储到一个文件中——没有保存任何其他信息。 创建轻量标签，不需要使用 "),a("code",[t._v("-a")]),t._v("、"),a("code",[t._v("-s")]),t._v(" 或 "),a("code",[t._v("-m")]),t._v(" 选项，只需要提供标签名字：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.4-lw "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不需要添加选项")]),t._v("\n")])])]),a("p",[t._v("这时，如果在标签上运行 "),a("code",[t._v("git show")]),t._v("，你不会看到额外的标签信息。 命令只会显示出提交信息：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.4-lw\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Mon Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":52:11 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" -0700\n")])])]),a("h3",{attrs:{id:"后期打标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后期打标签"}},[t._v("#")]),t._v(" 后期打标签")]),t._v(" "),a("p",[t._v("你也可以对过去的提交打标签。 假设提交历史是这样的：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n166ae0c4d3f420721acbb115cc33848dfcc2121a started "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" support\n9fceb02d0ae598e95dc970b74767f19372d61af8 updated rakefile\n8a5cbc430f1a9c3d00faaeffd07798508422908a updated readme\n")])])]),a("p",[t._v("现在，假设在 v1.2 时你忘记给项目打标签，也就是在 “updated rakefile” 提交。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定提交的校验和（或部分校验和）：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.2 9fceb02 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打的标签属于附注标签")]),t._v("\n")])])]),a("h3",{attrs:{id:"共享标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享标签"}},[t._v("#")]),t._v(" 共享标签")]),t._v(" "),a("p",[a("code",[t._v("git push")]),t._v(" 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样——你可以运行 "),a("code",[t._v("git push origin <tagname>")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin v1.5 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显式地推送标签到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一次性推送所有不在远程仓库上的标签")]),t._v("\n")])])]),a("p",[t._v("现在，当其他人从仓库中克隆或拉取，他们也能得到你的那些标签。")]),t._v(" "),a("h3",{attrs:{id:"删除标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除标签"}},[t._v("#")]),t._v(" 删除标签")]),t._v(" "),a("p",[t._v("要删除掉你本地仓库上的标签，可以使用命令 "),a("code",[t._v("git tag -d <tagname>")]),t._v("。 例如，可以使用以下命令删除一个轻量标签：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v1.4-lw\nDeleted tag "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v1.4-lw'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("was e7d5add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注意上述命令并不会从任何远程仓库中移除这个标签，你必须用 "),a("code",[t._v("git push <remote> :refs/tags/<tagname>")]),t._v(" 来更新你的远程仓库：")]),t._v(" "),a("p",[t._v("第一种变体是 "),a("code",[t._v("git push <remote> :refs/tags/<tagname>")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/v1.4-lw\nTo /git@github.com:schacon/simplegit.git\n - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         v1.4-lw\n")])])]),a("p",[t._v("上面这种操作的含义是，将冒号前面的空值推送到远程标签名，从而高效地删除它。")]),t._v(" "),a("p",[t._v("第二种更直观的删除远程标签的方式是：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"检出标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检出标签"}},[t._v("#")]),t._v(" 检出标签")]),t._v(" "),a("p",[t._v("如果你想查看某个标签所指向的文件版本，可以使用 "),a("code",[t._v("git checkout")]),t._v(" 命令， 虽然这会使你的仓库处于“分离头指针（detached HEAD）”的状态——这个状态有些不好的副作用：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(".0\nNote: checking out "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.0.0'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\nYou are "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detached HEAD'")]),t._v(" state. You can "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("look")]),t._v(" around, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" experimental\nchanges and commit them, and you can discard any commits you "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" this\nstate without impacting any branches by performing another checkout.\n\nIf you want to create a new branch to retain commits you create, you may\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" so "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now or later"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" by using -b with the checkout "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" again. Example:\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nHEAD is now at 99ada87"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#89 from schacon/appendix-final")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("-beta-0.1\nPrevious HEAD position was 99ada87"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#89 from schacon/appendix-final")]),t._v("\nHEAD is now at df3f601"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" atlas.json and cover image\n")])])]),a("p",[t._v("在“分离头指针”状态下，如果你做了某些更改然后提交它们，标签不会发生变化， 但你的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。 因此，如果你需要进行更改，比如你要修复旧版本中的错误，那么通常需要创建一个新分支：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b version2 v2.0.0\nSwitched to a new branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'version2'")]),t._v("\n")])])]),a("p",[t._v("如果在这之后又进行了一次提交，"),a("code",[t._v("version2")]),t._v(" 分支就会因为这个改动向前移动， 此时它就会和 "),a("code",[t._v("v2.0.0")]),t._v(" 标签稍微有些不同，这时就要当心了。")]),t._v(" "),a("h2",{attrs:{id:"git-命令别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-命令别名"}},[t._v("#")]),t._v(" Git 命令别名")]),t._v(" "),a("p",[t._v("Git 并不会在你输入部分命令时自动推断出你想要的命令。 如果不想每次都输入完整的 Git 命令，可以通过 "),a("code",[t._v("git config")]),t._v(" 文件来轻松地为每一个命令设置一个别名。 这里有一些例子你可以试试：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.co checkout\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.br branch\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.ci commit\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.st status\n")])])]),a("p",[t._v("这意味着，当要输入 "),a("code",[t._v("git commit")]),t._v(" 时，只需要输入 "),a("code",[t._v("git ci")]),t._v("。")]),t._v(" "),a("p",[t._v("在创建你认为应该存在的命令时这个技术会很有用。 例如，为了解决取消暂存文件的易用性问题，可以向 Git 中添加你自己的取消暂存别名：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.unstage "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reset HEAD --'")]),t._v("\n")])])]),a("p",[t._v("这会使下面的两个命令等价：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" unstage fileA\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD -- fileA\n")])])]),a("p",[t._v("这样看起来更清楚一些。 通常也会添加一个 "),a("code",[t._v("last")]),t._v(" 命令，像这样：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.last "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log -1 HEAD'")]),t._v("\n")])])]),a("p",[t._v("这样，可以轻松地看到最后一次提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" last\ncommit 66938dae3329c7aebe598c2246a8e6af90d04646\nAuthor: Josh Goebel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dreamer3@example.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(":48:51 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" +0800\n\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v("\n\n    Signed-off-by: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@example.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("可以看出，Git 只是简单地将别名替换为对应的命令。 然而，你可能想要执行外部命令，而不是一个 Git 子命令。 如果是那样的话，可以在命令前面加入 "),a("code",[t._v("!")]),t._v(" 符号。 如果你自己要写一些与 Git 仓库协作的工具的话，那会很有用。 我们现在演示将 "),a("code",[t._v("git visual")]),t._v(" 定义为 "),a("code",[t._v("gitk")]),t._v(" 的别名：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.visual "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!gitk'")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);