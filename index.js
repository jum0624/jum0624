import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `### Hi there 👋

<p align="center">Hi! I'm Eunmi</p>

<h3 align="center">📚 Tech Stack 📚</h3>
<p align="center">
  <img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/Mysql-E6B91E?style=flat-square&logo=MySql&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=Spring%20Boot&logoColor=white"/></a>&nbsp 
</p>

<h3 align="center">🌈 Follow Me 🌈</h3>
<p align="center">
  <a href="https://wldmsal.tistory.com/"><img src="https://img.shields.io/badge/Tistory-000000?style=flat-square&logo=Tistory&logoColor=white&link=https://wldmsal.tistory.com/"/></a>&nbsp
  <a href="https://www.instagram.com/wldmsal_/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/eunmi_ee/"/></a>&nbsp
  <a href="mailto:jum0624@inu.ac.kr"><img src="https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=eunmiee@gmail.com"/></a>
</p>

<h3 align="center">👩‍💻 Eunmi's Github Stats 👩‍💻</h3>
<div align="center">
  
[![Eummi's Github Stats](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=jum0624&show_icons=true&hide_title=true&theme=flag-india)](https://github.com/jum0624/github-readme-stats)

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://wldmsal.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();