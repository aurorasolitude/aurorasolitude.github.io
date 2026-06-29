# Academic Homepage Template

这是一个可直接部署到 GitHub Pages 的静态学术个人主页模板，支持中文/英文切换。

## 修改个人内容

主要编辑 `site-data.js`：

- `shared`: 照片、邮箱、Google Scholar、GitHub、CV 等中英文共用链接。
- `languages.zh`: 中文主页内容。
- `languages.en`: 英文主页内容。
- `education`: 教育经历。当前模板已经按硕士生写法预留。
- `experience`: 实习、科研或工作经历。
- `conferencePapers`: 会议论文。每篇文章的 `links` 可以放 arXiv、PDF、Code、Project Page 等链接。
- `preprints`: 预发表论文。
- `technicalReports`: 技术报告、项目报告。
- `awards`: 奖项、奖学金、竞赛荣誉。
- `news`: 近期动态。

新增会议论文时，分别在 `languages.zh.conferencePapers` 和 `languages.en.conferencePapers` 数组里复制一项再修改即可。新增预发表论文时修改 `preprints`，新增技术报告时修改 `technicalReports`。

```js
{
  title: "New Paper Title",
  authors: "Your Name, Collaborator A",
  venue: "Conference Name, 2026",
  status: "Published",
  abstract: "One-sentence paper summary.",
  links: [
    { label: "arXiv", url: "https://arxiv.org/abs/xxxx.xxxxx" },
    { label: "Code", url: "https://github.com/yourname/project" }
  ]
}
```

## 替换照片和 CV

- 把个人照片放到 `assets/` 目录，例如 `assets/profile.jpg`，然后把 `site-data.js` 里的 `shared.photo` 改成 `"assets/profile.jpg"`。
- 如果有 CV，把 PDF 放到 `assets/cv.pdf`，模板里的 CV 链接就会生效。

## 语言切换

页面右上角的按钮会在中文和英文之间切换，并把选择保存到浏览器 `localStorage`。默认语言由 `site-data.js` 里的 `defaultLanguage` 控制。

## 本地预览

直接用浏览器打开 `index.html` 即可预览。也可以用任意静态服务器预览。

## 部署到 GitHub Pages

1. 在 GitHub 创建一个仓库，例如 `yourname.github.io`。
2. 把这些文件提交并推送到仓库。
3. 在仓库的 `Settings -> Pages` 中选择从 `main` 分支部署。
4. 部署完成后访问 `https://yourname.github.io/`。
