---
title: 🎖️ HTML 学习笔记
description: 2022 年整理的一份 HTML 速查笔记：整体结构、常用标签、表格、表单、实体与 HTML5 新元素。
pubDate: 2022-04-13
tags: ['HTML', '前端基础']
---

**超文本标记语言（HyperText Markup Language）是一种用于创建网页的标准标记语言，前端基础三大件之一。**

## 整体结构

```html
<!DOCTYPE html> # 声明 H5 文档
<html> # 完整 html 页面
  <head> # 头部元素
    <meta charset="utf-8"> # 定义网页编码格式
    <title># 文档标题</title>
  </head>
  <body>
    # 可见页面内容
  </body>
</html>
```

## 头部标签

```html
<base href="URL" target="_blank"> # 定义页面中所有链接默认的链接目标地址

<meta name="" content="内容"> # 描述 HTML 文档的描述、关键词、作者、字符集等
# 描述内容：name="description"
# 关键词：name="keywords"
# 网页作者：name="author"
# 禁用缩放：name="viewport" user-scalable="no"
# 每 30 秒刷新页面：http-equiv="refresh" content="30"

<title>定义 HTML 文档的标题</title>

<link rel="" type="text/css" href="URL"> # 定义文档与外部资源之间的关系
# 引入外部 css：rel="stylesheet"
# 引入网页图标：rel="favicon"

<style>加载样式表</style>
# 引入外部 css：<style src="URL" />

<script>加载脚本文件</script>
# 引入外部 js：<script src="URL" />
```

## 标签属性

| 常用属性 | 描述 |
| --- | --- |
| `class` | 为元素定义一个或多个类名（`.class name`） |
| `id` | 定义元素的唯一 id（`#id name`） |
| `style` | 规定元素的行内样式（inline style） |
| `title` | 描述了元素的额外信息（作为工具条使用） |

## 基本标签（Basic Tags）

```html
<!-- html 注释 -->
<h1~6>一级~六级标题</h1~6>
<p>一个段落</p>
<br> （换行）
<hr> （水平线）
<div>独占一行 - 块级</div>
<span>一行多个 - 行内</span>
```

## 文本格式化（Formatting）

```html
<b>粗体</b>
<strong>重要粗体</strong>
<i>斜体</i>
<em>强调斜体</em>
<u>下划线</u>
<ins>（插入的文本）</ins>
<s>删除线</s>
<del>（删除的文本）</del>
<code>计算机代码</code>
<kbd>键盘输入</kbd>
<pre>预格式化文本</pre>
<small>更小的文本</small>
<abbr>（缩写）</abbr>
<address>（联系信息）</address>
<bdo>（文字方向）</bdo>
<blockquote>（从另一个源引用的部分）</blockquote>
<cite>（工作的名称）</cite>
<sub>（下标文本）</sub>
<sup>（上标文本）</sup>
```

## 链接（Links）

```html
普通链接：<a href="跳转地址">链接文本</a>
图像链接：<a href="跳转地址"><img src="URL" alt="替换文本"></a>
邮件链接：<a href="mailto:邮箱地址">发送 e-mail</a>
阻止跳转：<a href="javascript:;">无效链接</a>
新窗口打开：<a target="_blank">新窗口</a>
书签：<a id="tips">提示部分</a>
      <a href="#tips">跳到提示部分</a>
```

## 媒体（Media）

```html
图片：<img src="路径" alt="替换文本" title="提示文本">
# 其他属性：loading="eager/lazy" 立即加载 / 延迟加载

视频（H5）：<video src="路径" controls（播放控件） poster="URL"（视频未播放时的图像）></video>

音频（H5）：<audio src="路径" controls（播放控件）></audio>
# 其他属性：
# autoplay 就绪后自动播放
# loop 循环播放
# muted 静音播放
# preload="auto/metadata/none" 规定当网页加载时，音频是否默认被加载以及如何被加载
```

## 列表（List）

```html
无序列表：
<ul>
  <li>行1</li>
  <li>行2</li>
</ul>

有序列表：
<ol>
  <li>第一项</li>
  <li>第二项</li>
</ol>

自定义列表：
<dl>
  <dt>表头</dt>
  <dd>表单1</dd>
  <dd>表单2</dd>
</dl>
```

## 表格（Tables）

```html
<table border="1">
  <caption>表名</caption>
  <thead>（表头部分）
    <tr>（行）
      <th>表头</th>
      <th>表头</th>
    </tr>
  </thead>
  <tbody>（主体部分）
    <tr>（行）
      <td>行内1</td>
      <td>行内2</td>
    </tr>
  </tbody>
  <tfoot>表脚部分</tfoot>
</table>
# 合并：rowspan 上下；colspan 左右
```

## 表单（Forms）

```html
<form action="提交URL" method="post/get" name="表单名" target="">
  文本框：<input type="text" name="表单名" value="表单值" placeholder="占位符">
  密码框：<input type="password">
  文件选择：<input type="file" multiple="true"（多选）>
  普通按钮：<input type="button" disabled="false"（禁用）>
  单选按钮：<input type="radio" checked="checked"（默认选中）>
  多选按钮：<input type="checkbox" label="绑定文字">
  提交按钮：<input type="submit" value="提交">
        或：<button type="submit">提交</button>
  重置按钮：<input type="reset">
        或：<button type="reset">重置</button>
  下拉菜单：<select>
              <option>选项1</option>
              <option selected="selected"（默认选中）>选项2</option>
              <option>选项3</option>
            </select>
  文本域：<textarea name="comment" rows="60" cols="20"></textarea>
</form>
# 更多 type 类型：
# number：数字输入
# range：范围输入
# color：颜色输入
# date：日期输入
# hidden：隐藏按钮
```

## 框架（Iframe）

```html
<iframe src="URL" width="200" height="200"></iframe>
# 在一个浏览器窗口中显示不止一个嵌套的页面
# 其他属性：
# loading="eager/lazy" - 立即 / 延迟加载
# name="" - 规定 iframe 的名称
# srcdoc="HTML_code" - 规定页面中的 HTML 内容显示在 iframe 中
```

## 实体替换字符（Entities）

| 显示结果 | 描述 | 实体名称 | 实体编号 |
| --- | --- | --- | --- |
| | 空格 | `&nbsp;` | `&#160;` |
| `<` | 小于号 | `&lt;` | `&#60;` |
| `>` | 大于号 | `&gt;` | `&#62;` |
| `&` | 和号 | `&amp;` | `&#38;` |
| `"` | 引号 | `&quot;` | `&#34;` |
| `'` | 撇号 | `&apos;`（IE 不支持） | `&#39;` |
| `¢` | 分 | `&cent;` | `&#162;` |
| `£` | 镑 | `&pound;` | `&#163;` |
| `¥` | 人民币 / 日元 | `&yen;` | `&#165;` |
| `€` | 欧元 | `&euro;` | `&#8364;` |
| `§` | 小节 | `&sect;` | `&#167;` |
| `©` | 版权 | `&copy;` | `&#169;` |
| `®` | 注册商标 | `&reg;` | `&#174;` |
| `™` | 商标 | `&trade;` | `&#8482;` |
| `×` | 乘号 | `&times;` | `&#215;` |
| `÷` | 除号 | `&divide;` | `&#247;` |

## 🆕 H5 新元素

**canvas 新元素**

| 标签 | 描述 |
| --- | --- |
| `canvas` | 定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API |

**新多媒体元素**

| 标签 | 描述 |
| --- | --- |
| `audio` | 定义音频内容 |
| `video` | 定义视频（video 或者 movie） |
| `source` | 定义多媒体资源 `video` 和 `audio` |
| `embed` | 定义嵌入的内容，比如插件 |
| `track` | 为诸如 `video` 和 `audio` 元素之类的媒介规定外部文本轨道 |

**新表单元素**

| 标签 | 描述 |
| --- | --- |
| `datalist` | 定义选项列表。请与 `input` 元素配合使用该元素，来定义 `input` 可能的值 |
| `keygen` | 规定用于表单的密钥对生成器字段 |
| `output` | 定义不同类型的输出，比如脚本的输出 |

**新的语义和结构元素**

HTML5 提供了新的元素来创建更好的页面结构：

| 标签 | 描述 |
| --- | --- |
| `article` | 定义页面独立的内容区域 |
| `aside` | 定义页面的侧边栏内容 |
| `bdi` | 允许你设置一段文本，使其脱离其父元素的文本方向设置 |
| `command` | 定义命令按钮，比如单选按钮、复选框或按钮 |
| `details` | 用于描述文档或文档某个部分的细节 |
| `dialog` | 定义对话框，比如提示框 |
| `summary` | 标签包含 `details` 元素的标题 |
| `figure` | 规定独立的流内容（图像、图表、照片、代码等等） |
| `figcaption` | 定义 `figure` 元素的标题 |
| `footer` | 定义 section 或 document 的页脚 |
| `header` | 定义了文档的头部区域 |
| `mark` | 定义带有记号的文本 |
| `meter` | 定义度量衡。仅用于已知最大和最小值的度量 |
| `nav` | 定义导航链接的部分 |
| `progress` | 定义任何类型的任务的进度 |
| `ruby` | 定义 ruby 注释（中文注音或字符） |
| `rt` | 定义字符（中文注音或字符）的解释或发音 |
| `rp` | 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容 |
| `section` | 定义文档中的节（section、区段） |
| `time` | 定义日期或时间 |
| `wbr` | 规定在文本中的何处适合添加换行符 |

## ⛔ 已移除的元素

以下的 HTML 4.01 元素在 HTML 5 中已经被删除：

```html
<acronym> <applet> <basefont> <big> <center> <dir> <font>
<frame> <frameset> <noframes> <strike> <tt>
```
