// 博客文章数据
// 每篇文章包含: id, title, content(HTML), tags, createdAt(timestamp), updatedAt(timestamp)
var posts = [
  {
    id: "hello-world",
    title: "Hello World - 我的第一篇博客",
    content: `<p>欢迎来到我的博客！🎉</p>
<p>这是我的个人空间，用来记录想法、分享知识和经历。</p>
<h2>关于这个博客</h2>
<p>这个博客使用纯静态页面搭建，部署在 GitHub Pages 上，轻量、快速、免费。</p>
<p>目前功能：</p>
<ul>
  <li>文章浏览（你现在看到的）</li>
  <li>管理后台 - 密码登录后可以写文章、编辑、删除</li>
  <li>标签分类</li>
  <li>响应式设计，手机也能看</li>
</ul>
<h2>开始探索</h2>
<p>返回首页看看有哪些文章吧。如果你看到的是管理后台，可以登录后开始创作。</p>`,
    tags: ["随笔", "博客"],
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
];
