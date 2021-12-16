(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{708:function(t,s,a){"use strict";a.r(s);var n=a(36),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git工具-交互式暂存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git工具-交互式暂存"}},[t._v("#")]),t._v(" Git工具-交互式暂存")]),t._v(" "),a("p",[t._v("本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 "),a("code",[t._v("git add")]),t._v(" 时使用 "),a("code",[t._v("-i")]),t._v(" 或者 "),a("code",[t._v("--interactive")]),t._v(" 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -i\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":    unchanged        +0/-1 TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":    unchanged        +1/-1 index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\n\n*** Commands ***\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tatus     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("pdate      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("evert     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("dd untracked\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("atch      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("iff        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("uit       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("elp\nWhat now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("可以看到这个命令以和平时非常不同的视图显示了暂存区——基本上与 "),a("code",[t._v("git status")]),t._v(" 是相同的信息，但是更简明扼要一些。 它将暂存的修改列在左侧，未暂存的修改列在右侧。")]),t._v(" "),a("p",[t._v("在这块区域后是“Commands”命令区域。 在这里你可以做一些工作，包括暂存文件、取消暂存文件、暂存文件的一部分、添加未被追踪的文件、显示暂存内容的区别。")]),t._v(" "),a("h2",{attrs:{id:"暂存与取消暂存文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存与取消暂存文件"}},[t._v("#")]),t._v(" 暂存与取消暂存文件")]),t._v(" "),a("p",[t._v("如果在 "),a("code",[t._v("What now>")]),t._v(" 提示符后键入 "),a("code",[t._v("u")]),t._v(" 或 "),a("code",[t._v("2")]),t._v("（更新），它会问你想要暂存哪个文件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("What now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" u\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":    unchanged        +0/-1 TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":    unchanged        +1/-1 index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\nUpdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("\n")])])]),a("p",[t._v("要暂存 "),a("code",[t._v("TODO")]),t._v(" 和 "),a("code",[t._v("index.html")]),t._v(" 文件，可以输入数字：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Update"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,2")]),t._v("\n           staged     unstaged path\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":    unchanged        +0/-1 TODO\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":    unchanged        +1/-1 index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\nUpdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("\n")])])]),a("p",[t._v("每个文件前面的 "),a("code",[t._v("*")]),t._v(" 意味着选中的文件将会被暂存。 如果在 "),a("code",[t._v("Update>>")]),t._v(" 提示符后不输入任何东西并直接按回车，Git 将会暂存之前选择的文件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Update"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("\nupdated "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" paths\n\n*** Commands ***\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tatus     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("pdate      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("evert     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("dd untracked\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("atch      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("iff        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("uit       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("elp\nWhat now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":        +0/-1      nothing TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":        +1/-1      nothing index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\n")])])]),a("p",[t._v("现在可以看到 "),a("code",[t._v("TODO")]),t._v(" 与 "),a("code",[t._v("index.html")]),t._v(" 文件已经被暂存而 "),a("code",[t._v("simplegit.rb")]),t._v(" 文件还未被暂存。 如果这时想要取消暂存 TODO 文件，使用 "),a("code",[t._v("r")]),t._v(" 或 "),a("code",[t._v("3")]),t._v("（撤消）选项：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("*** Commands ***\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tatus     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("pdate      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("evert     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("dd untracked\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("atch      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("iff        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("uit       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("elp\nWhat now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" r\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":        +0/-1      nothing TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":        +1/-1      nothing index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\nRevert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n           staged     unstaged path\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":        +0/-1      nothing TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":        +1/-1      nothing index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\nRevert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("enter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nreverted one path\n")])])]),a("p",[t._v("再次查看 Git 状态，可以看到已经取消暂存 "),a("code",[t._v("TODO")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("*** Commands ***\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tatus     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("pdate      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("evert     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("dd untracked\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("atch      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("iff        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("uit       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("elp\nWhat now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":    unchanged        +0/-1 TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":        +1/-1      nothing index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":    unchanged        +5/-1 lib/simplegit.rb\n")])])]),a("p",[t._v("如果想要查看已暂存内容的区别，可以使用 "),a("code",[t._v("d")]),t._v(" 或 "),a("code",[t._v("6")]),t._v("（区别）命令。 它会显示暂存文件的一个列表，可以从中选择想要查看的暂存区别。 这跟你在命令行指定 "),a("code",[t._v("git diff --cached")]),t._v(" 非常相似：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("*** Commands ***\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tatus     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("pdate      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("evert     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("dd untracked\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("atch      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("iff        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("uit       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("elp\nWhat now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" d\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":        +1/-1      nothing index.html\nReview diff"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/index.html b/index.html\nindex 4d07108"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("4335f49 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/index.html\n+++ b/index.html\n@@ -16,7 +16,7 @@ Date Finder\n\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("contact "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" support@github.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n+"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("contact "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" email.support@github.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("通过这些基本命令，可以使用交互式添加模式来轻松地处理暂存区。")]),t._v(" "),a("h2",{attrs:{id:"暂存补丁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存补丁"}},[t._v("#")]),t._v(" 暂存补丁")]),t._v(" "),a("p",[t._v("Git 也可以暂存文件的特定部分。 例如，如果在 simplegit.rb 文件中做了两处修改，但只想要暂存其中的一个而不是另一个，Git 会帮你轻松地完成。 在和上一节一样的交互式提示符中，输入 "),a("code",[t._v("p")]),t._v(" 或 "),a("code",[t._v("5")]),t._v("（补丁）。 Git 会询问你想要部分暂存哪些文件；然后，对已选择文件的每一个部分，它都会一个个地显示文件区别并询问你是否想要暂存它们：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/lib/simplegit.rb b/lib/simplegit.rb\nindex dd5ecc4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("57399e0 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/lib/simplegit.rb\n+++ b/lib/simplegit.rb\n@@ -22,7 +22,7 @@ class SimpleGit\n   end\n\n   def log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("treeish "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n-    command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git log -n 25 #{treeish}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n+    command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git log -n 30 #{treeish}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   end\n\n   def blame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nStage this hunk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y,n,a,d,/,j,J,g,e,?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("?\n")])])]),a("p",[t._v("这时有很多选项。 输入 "),a("code",[t._v("?")]),t._v(" 显示所有可以使用的命令列表：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Stage this hunk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y,n,a,d,/,j,J,g,e,?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("? ?\ny - stage this hunk\nn - "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not stage this hunk\na - stage this and all the remaining hunks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nd - "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not stage this hunk nor any of the remaining hunks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\ng - "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a hunk to go to\n/ - search "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a hunk matching the given regex\nj - leave this hunk undecided, see next undecided hunk\nJ - leave this hunk undecided, see next hunk\nk - leave this hunk undecided, see previous undecided hunk\nK - leave this hunk undecided, see previous hunk\ns - "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" the current hunk into smaller hunks\ne - manually edit the current hunk\n? - print "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n")])])]),a("p",[t._v("通常情况下可以输入 "),a("code",[t._v("y")]),t._v(" 或 "),a("code",[t._v("n")]),t._v(" 来选择是否要暂存每一个区块， 当然，暂存特定文件中的所有部分或为之后的选择跳过一个区块也是非常有用的。 如果你只暂存文件的一部分，状态输出可能会像下面这样：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("What now"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n           staged     unstaged path\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":    unchanged        +0/-1 TODO\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":        +1/-1      nothing index.html\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":        +1/-1        +4/-0 lib/simplegit.rb\n")])])]),a("p",[a("code",[t._v("simplegit.rb")]),t._v(" 文件的状态很有趣。 它显示出若干行被暂存与若干行未被暂存。 已经部分地暂存了这个文件。 在这时，可以退出交互式添加脚本并且运行 "),a("code",[t._v("git commit")]),t._v(" 来提交部分暂存的文件。")]),t._v(" "),a("p",[t._v("也可以不必在交互式添加模式中做部分文件暂存——可以在命令行中使用 "),a("code",[t._v("git add -p")]),t._v(" 或 "),a("code",[t._v("git add --patch")]),t._v(" 来启动同样的脚本。")]),t._v(" "),a("p",[t._v("更进一步地，可以使用 "),a("code",[t._v("git reset --patch")]),t._v(" 命令的补丁模式来部分重置文件， 通过 "),a("code",[t._v("git checkout --patch")]),t._v(" 命令来部分检出文件与 "),a("code",[t._v("git stash save --patch")]),t._v(" 命令来部分暂存文件。 我们将会在接触这些命令的高级使用方法时了解更多详细信息。")])])}),[],!1,null,null,null);s.default=e.exports}}]);