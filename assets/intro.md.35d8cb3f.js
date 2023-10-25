import{_ as a,a as e,b as t,c as r}from"./chunks/readme-3.368c86c7.js";import{_ as l,o as s,c as o,Q as i}from"./chunks/framework.7d2df8c6.js";const w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"intro.md","filePath":"intro.md","lastUpdated":null}'),n={name:"intro.md"},h=i('<img src="'+a+'" width="300" alt="Twikoo"><hr><a href="https://www.npmjs.com/package/twikoo"><img class="shields" src="https://img.shields.io/npm/v/twikoo">  </a><a href="https://bundlephobia.com/result?p=twikoo"><img class="shields" src="https://img.shields.io/bundlephobia/minzip/twikoo">  </a><a href="https://www.npmjs.com/package/twikoo"><img class="shields" src="https://img.shields.io/npm/dt/twikoo">  </a><a href="https://www.jsdelivr.com/package/npm/twikoo"><img class="shields" src="https://data.jsdelivr.com/v1/package/npm/twikoo/badge">  </a><a href="https://github.com/twikoojs/twikoo/blob/main/LICENSE"><img class="shields" src="https://img.shields.io/npm/l/twikoo"></a><p>一个简洁、安全、免费的静态网站评论系统。<br> A simple, safe, free comment system.</p><p><strong>简体中文</strong> | <a href="/en/intro.html">English</a></p><h2 id="特色" tabindex="-1">特色 <a class="header-anchor" href="#特色" aria-label="Permalink to &quot;特色&quot;">​</a></h2><h3 id="简单" tabindex="-1">简单 <a class="header-anchor" href="#简单" aria-label="Permalink to &quot;简单&quot;">​</a></h3><ul><li>免费搭建（使用云开发 / Vercel / 私有服务器作为评论后台）</li><li>简单部署（支持云开发 / Vercel 一键部署）</li></ul><h3 id="易用" tabindex="-1">易用 <a class="header-anchor" href="#易用" aria-label="Permalink to &quot;易用&quot;">​</a></h3><ul><li>支持回复、点赞</li><li>无需额外适配，支持搭配浅色主题与深色主题使用</li><li>支持 API 调用，批量获取文章评论数、最新评论</li><li>访客在昵称栏输入 QQ 号，会自动补全 QQ 昵称和 QQ 邮箱</li><li>访客填写数字 QQ 邮箱，会使用 QQ 头像作为评论头像</li><li>支持评论框粘贴图片（可禁用）</li><li>支持插入图片（可禁用）</li><li>支持去不图床、云开发图床</li><li>支持插入表情（可禁用）</li><li>支持 Ctrl + Enter 快捷回复</li><li>评论框内容实时保存草稿，刷新不会丢失</li><li><a href="https://twikoo.js.org/faq.html#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8-katex-%E6%94%AF%E6%8C%81" target="_blank" rel="noreferrer">支持 Katex 公式</a></li><li>支持按语言的代码高亮</li></ul><h3 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h3><ul><li>隐私信息安全（通过云函数控制敏感字段（邮箱、IP、环境配置等）不会泄露）</li><li>支持 Akismet 垃圾评论检测（需自行注册 <a href="https://akismet.com/" target="_blank" rel="noreferrer">akismet.com</a>）</li><li>支持腾讯云内容安全垃圾评论检测（需自行注册 <a href="https://console.cloud.tencent.com/cms/text/overview" target="_blank" rel="noreferrer">腾讯云内容安全</a>）</li><li>支持人工审核模式</li><li>防 XSS 注入</li><li>支持限制每个 IP 每 10 分钟最多发表多少条评论</li></ul><h3 id="即时" tabindex="-1">即时 <a class="header-anchor" href="#即时" aria-label="Permalink to &quot;即时&quot;">​</a></h3><ul><li>支持邮件提醒（访客和博主）</li><li>支持微信提醒（仅针对博主，基于 <a href="https://sc.ftqq.com/3.version" target="_blank" rel="noreferrer">Server酱</a>，需自行注册）</li><li>支持 QQ 提醒（仅针对博主，基于 <a href="https://qmsg.zendee.cn/" target="_blank" rel="noreferrer">Qmsg酱</a>，需自行注册）</li><li>支持 QQ 提醒（针对博主QQ或者群，基于 <a href="https://docs.go-cqhttp.org/" target="_blank" rel="noreferrer">go-cqhttp</a>，需自己有服务器）</li></ul><h3 id="个性" tabindex="-1">个性 <a class="header-anchor" href="#个性" aria-label="Permalink to &quot;个性&quot;">​</a></h3><ul><li>支持自定义评论框背景图片</li><li>支持自定义“博主”标识文字</li><li>支持自定义通知邮件模板</li><li>支持自定义评论框提示信息（placeholder）</li><li>支持自定义表情列表（兼容 <a href="https://cdn.jsdelivr.net/npm/owo@1.0.2/demo/OwO.json" target="_blank" rel="noreferrer">OwO 的数据格式</a>）</li><li>支持自定义【昵称】【邮箱】【网址】必填 / 选填</li><li>支持自定义代码高亮主题</li></ul><h3 id="便捷管理" tabindex="-1">便捷管理 <a class="header-anchor" href="#便捷管理" aria-label="Permalink to &quot;便捷管理&quot;">​</a></h3><ul><li>内嵌式管理面板，通过密码登录，可方便地查看评论、隐藏评论、删除评论、修改配置</li><li>支持隐藏管理入口，通过输入暗号显示</li><li>支持从 Valine、Artalk、Disqus 导入评论</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>不支持 IE</li></ul><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><h3 id="评论" tabindex="-1">评论 <a class="header-anchor" href="#评论" aria-label="Permalink to &quot;评论&quot;">​</a></h3><p><img src="'+e+'" alt="评论"></p><h3 id="评论管理" tabindex="-1">评论管理 <a class="header-anchor" href="#评论管理" aria-label="Permalink to &quot;评论管理&quot;">​</a></h3><p><img src="'+t+'" alt="评论管理"></p><h3 id="推送通知" tabindex="-1">推送通知 <a class="header-anchor" href="#推送通知" aria-label="Permalink to &quot;推送通知&quot;">​</a></h3><p><img src="'+r+`" alt="推送通知"></p><h2 id="交流群" tabindex="-1">交流群 <a class="header-anchor" href="#交流群" aria-label="Permalink to &quot;交流群&quot;">​</a></h2><p>如果你想获取更新动态、建言献策、参与测试，欢迎加入讨论群：<br><img height="300" alt="1080829142" src="https://www.imaegoo.com/gallery/2020/hello-twikoo.png"></p><h2 id="浏览器支持" tabindex="-1">浏览器支持 <a class="header-anchor" href="#浏览器支持" aria-label="Permalink to &quot;浏览器支持&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>技术原因，不兼容 IE</p></div><table><thead><tr><th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px"><br>IE / Edge</th><th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"><br>Firefox</th><th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"><br>Chrome</th><th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"><br>Safari</th><th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px"><br>iOS Safari</th></tr></thead><tbody><tr><td>Edge</td><td>last version</td><td>last version</td><td>last version</td><td>last version</td></tr></tbody></table><blockquote><p>Generated by <a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer">browsers-support-badges</a></p></blockquote><h2 id="更新日志-开发计划" tabindex="-1">更新日志 &amp; 开发计划 <a class="header-anchor" href="#更新日志-开发计划" aria-label="Permalink to &quot;更新日志 &amp; 开发计划&quot;">​</a></h2><p><a href="https://github.com/twikoojs/twikoo/releases" target="_blank" rel="noreferrer">更新日志</a> &amp; <a href="https://github.com/twikoojs/twikoo/projects/2" target="_blank" rel="noreferrer">开发计划</a></p><h2 id="特别感谢" tabindex="-1">特别感谢 <a class="header-anchor" href="#特别感谢" aria-label="Permalink to &quot;特别感谢&quot;">​</a></h2><p>图标设计：<a href="https://www.maemo.cc" target="_blank" rel="noreferrer">Maemo Lee</a></p><h2 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h2><p>如果您想在本地二次开发，可以参考以下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 开发 (http://localhost:9820/demo.html)</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 代码检查</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 编译 (dist/twikoo.all.min.js)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 开发 (http://localhost:9820/demo.html)</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 代码检查</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 编译 (dist/twikoo.all.min.js)</span></span></code></pre></div><p>如果您的改动能够帮助到更多人，欢迎提交 Pull Request！</p><h2 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h2><p>支持简体中文、繁体中文、English。欢迎<a href="https://github.com/twikoojs/twikoo/edit/main/src/client/utils/i18n/i18n.js" target="_blank" rel="noreferrer">提交翻译 PR</a>。</p><h2 id="许可" tabindex="-1">许可 <a class="header-anchor" href="#许可" aria-label="Permalink to &quot;许可&quot;">​</a></h2><p><a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fimaegoo%2Ftwikoo?ref=badge_large" target="_blank" rel="noreferrer"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fimaegoo%2Ftwikoo.svg?type=large" alt="FOSSA Status"></a></p>`,49),p=[h];function c(d,m,b,g,u,f){return s(),o("div",null,p)}const q=l(n,[["render",c]]);export{w as __pageData,q as default};
