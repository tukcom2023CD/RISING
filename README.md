<h1 align="center">
<img src="https://user-images.githubusercontent.com/105929978/216260246-dbe4b0e1-d10b-4594-93e9-a0e4b50f59e0.png" width="150px"/>
</h1>

<div align="center" style="font-size:18px">
<b> 코딩, 누구에게 물어보지? 🤔 &nbsp; 아하에게 물어봐! 😲

실시간 코드 공유 에디터를 제공하는 코딩 멘토링 플랫폼<br>
</br>
[www.rising-aha.net](http://www.rising-aha.net)

[A-HA! medium]()
</b>

</div>
<hr>

## **Contents**

- [System Architecture](#system-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database](#database)
- [API](#api)
- [Monitoring Tools](#monitoring-tools)
- [File Directory](#file-directory)
- [Demo](#demo)
- [Team Member](#team-member)

<hr>

## **System Architecture**

![image](https://user-images.githubusercontent.com/105929978/215699453-4759adc2-2fe3-4fd1-9fc4-9bfa959a9847.png)

<hr>

## **Features**

<table  style="text-align: center; width=1000px">
        <tr>
          <th style="text-align: center;">로그인 전 메인 화면</th>
          <th style="text-align: center;">로그인 후 메인 화면</th>
        </tr>
      <tbody>
        <tr>
        <th><img src="https://user-images.githubusercontent.com/86594108/215865531-1e598c9e-ea6c-4615-9d9e-d6f3c55a9632.gif"  width="500px"/></th>
        <th><img src="https://user-images.githubusercontent.com/86594108/215863887-0e7cc063-bece-4b93-8a42-7f58730d8dfc.png" width="500px" />
        </th>
        </tr>
      </tbody>
      <tbody>
          <th style="text-align: center;">회원인증</th>
          <th style="text-align: center;">회원 페이지</th>
      </tbody>
      <tbody>
        <tr>
          <th><img src="https://user-images.githubusercontent.com/86594108/215867590-3342f7d7-cfef-4447-805d-495345e21284.gif" width="500px" /></th>
          <th><img src="https://user-images.githubusercontent.com/86594108/215866799-2f8080e9-a0dd-4541-a66f-a4d0af6ee06f.png" width="500px" /></th>
        </tr>
      </tbody>
      <tbody>
      <tr>
          <th style="text-align: center;">질문 작성</th>
          <th style="text-align: center;">질문 답변</th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th><img src="https://user-images.githubusercontent.com/86594108/215868252-6c006100-d805-48de-ab5a-7c022598220d.png" width="500px" /></th>
          <th><img src="https://user-images.githubusercontent.com/86594108/215870406-2c359ede-a485-4038-8e1d-46c2b7d476d4.gif" width="500px" /></th>
        </tr>
      </tbody>
      <tbody>
      <tr>
          <th style="text-align: center;">1대1 멘토링 채팅</th>
          <th style="text-align: center;">1대1 멘토링 멘토링</th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th><img src="https://user-images.githubusercontent.com/105929978/216263694-d053e25d-2b47-4191-9d75-755af50c84fd.gif" width="500px" /></th>
          <th><img src="https://user-images.githubusercontent.com/105929978/216261576-a6d7bd08-2ace-4143-b035-5ff4d04b1f68.gif" width="500px" /></th>
        </tr>
      </tbody>
    </table>

## **Tech Stack**

<!-- <div align =center> -->

|                                                                                                                                                                                                                                                                          Frontend                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                 Backend                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                        Logging & Monitoring                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                  Others                                                                                                                                                                                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/tailwindcss-36B7F0?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"><br><img src="https://img.shields.io/badge/eslint-6161DA?style=for-the-badge&logo=eslint&logoColor=white"><br><img src="https://img.shields.io/badge/prettier-EC6F91?style=for-the-badge&logo=prettier&logoColor=white"> | <img src="https://img.shields.io/badge/rabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"><img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"><img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"><img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=black"><img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black"> | <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=black"><img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=black"><img src="https://img.shields.io/badge/elasticsearch-02B9AD?style=for-the-badge&logo=elasticsearch&logoColor=white"><img src="https://img.shields.io/badge/logstash-F6B802?style=for-the-badge&logo=logstash&logoColor=white"><img src="https://img.shields.io/badge/kibana-E94B93?style=for-the-badge&logo=kibana&logoColor=white"><img src="https://img.shields.io/badge/Filebeats-0273C6?style=for-the-badge&logo=beats&logoColor=black"> | <img src="https://img.shields.io/badge/Github-73398D?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"><img src="https://img.shields.io/badge/githubactions-2084F7?style=for-the-badge&logo=githubactions&logoColor=white"><img src="https://img.shields.io/badge/postman-F56833?style=for-the-badge&logo=postman&logoColor=white"><img src="https://img.shields.io/badge/slack-E01D5A?style=for-the-badge&logo=slack&logoColor=white"> |

<br>
<hr>

## **Database**

![erd](https://user-images.githubusercontent.com/105929978/215703702-7f8e70f5-396c-4a90-8378-442d123b611b.png)

<hr>

## **API**

<details>
<summary>swagger</summary>
<div markdown="1">

<br>

![swagger](https://user-images.githubusercontent.com/105929978/215699854-664a9deb-0e97-4628-bcee-92c8ed03f0f9.png)

</div>
</details>

<hr>

## **Monitoring Tools**

### prometheus & grafana

 <img src="https://user-images.githubusercontent.com/105929978/216255260-e67d2da6-4853-41f6-b517-1d2b31a2b18d.png">
  <img src="https://user-images.githubusercontent.com/105929978/216255252-ef918bd5-e234-4140-8ace-79480c71acf8.png">

</br>

<hr>

## **File Directory**

<details>
<summary>FRONTEND</summary>

```
📦frontend
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Ans
 ┃ ┃ ┃ ┣ 📜Ans.tsx
 ┃ ┃ ┃ ┗ 📜ReAns.tsx
 ┃ ┃ ┣ 📂Chat
 ┃ ┃ ┃ ┣ 📜MyMessage.tsx
 ┃ ┃ ┃ ┗ 📜OthersMessage.tsx
 ┃ ┃ ┣ 📂Editor
 ┃ ┃ ┃ ┣ 📜EditorViewer.tsx
 ┃ ┃ ┃ ┗ 📜ToastEditor.tsx
 ┃ ┃ ┣ 📂Index
 ┃ ┃ ┃ ┣ 📜AnsTitleIndex.tsx
 ┃ ┃ ┃ ┣ 📜AnswerIndex.tsx
 ┃ ┃ ┃ ┣ 📜ContentIndex.tsx
 ┃ ┃ ┃ ┣ 📜EndIndex.tsx
 ┃ ┃ ┃ ┣ 📜KeywordIndex.tsx
 ┃ ┃ ┃ ┗ 📜QuesTitleIndex.tsx
 ┃ ┃ ┣ 📂NavBar
 ┃ ┃ ┃ ┣ 📜NavBar.tsx
 ┃ ┃ ┃ ┣ 📜PrivateQuesNavBar.tsx
 ┃ ┃ ┃ ┣ 📜QuesListNavBar.tsx
 ┃ ┃ ┃ ┗ 📜QuesNavBar.tsx
 ┃ ┃ ┣ 📂Select
 ┃ ┃ ┃ ┣ 📜KeyWordOptionSelect.tsx
 ┃ ┃ ┃ ┣ 📜KeywordData.ts
 ┃ ┃ ┃ ┣ 📜KeywordSelect.tsx
 ┃ ┃ ┃ ┣ 📜OptionSelect.tsx
 ┃ ┃ ┃ ┗ 📜QuesData.ts
 ┃ ┃ ┣ 📂Tags
 ┃ ┃ ┃ ┣ 📜Date.tsx
 ┃ ┃ ┃ ┗ 📜Tag.tsx
 ┃ ┃ ┣ 📜Btn.tsx
 ┃ ┃ ┣ 📜ChatBox.tsx
 ┃ ┃ ┣ 📜LoginBtn.tsx
 ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┣ 📜ProfileUpload.js
 ┃ ┃ ┗ 📜Ques.tsx
 ┃ ┣ 📂fonts
 ┃ ┣ 📂images
 ┃ ┣ 📂page
 ┃ ┃ ┣ 📜AfterMainPage.tsx
 ┃ ┃ ┣ 📜AnsPage.tsx
 ┃ ┃ ┣ 📜BeforeMainPage.tsx
 ┃ ┃ ┣ 📜LoginPage.tsx
 ┃ ┃ ┣ 📜MainPage2.tsx
 ┃ ┃ ┣ 📜MentoringPage.tsx
 ┃ ┃ ┣ 📜MyPage.tsx
 ┃ ┃ ┣ 📜PrivateAnsCheckPage.tsx
 ┃ ┃ ┣ 📜PrivateAnsPage.tsx
 ┃ ┃ ┣ 📜PrivateQuesPage.tsx
 ┃ ┃ ┣ 📜QuesChatPage.tsx
 ┃ ┃ ┣ 📜QuesListPage.tsx
 ┃ ┃ ┣ 📜QuesPage.tsx
 ┃ ┃ ┗ 📜SignUpPage.tsx
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜ColorSystem.tsx
 ┃ ┃ ┣ 📜pageStyle.css
 ┃ ┃ ┣ 📜useCopyClipBoard.tsx
 ┃ ┃ ┗ 📜useInput.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜image.d.ts
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜tailwind.css
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.js
 ┣ 📜Dockerfile
 ┣ 📜README.md
 ┣ 📜nginx.conf
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┗ 📜webpack.config.js
```

</details>
<details>
<summary>BACKEND</summary>

```
📦backend
 ┣ 📂gradle
 ┣ 📂src
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂generated
 ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┗ 📂rising
 ┃ ┃ ┃ ┃ ┃ ┗ 📂backend
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂post
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂sharecoding
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂global
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂annotation
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂constant
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂interceptor
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂resolver
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂result
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂util
 ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃ ┣ 📜application.yml
 ┃ ┃ ┃ ┣ 📜data.sql
 ┃ ┃ ┃ ┗ 📜templates
 ┃
```

</details>

<hr>

## **Demo**

[A-HA! Demo](https://www.youtube.com/watch?v=fT_wYaRvEJY)

<hr>

## **Team Member**

<table width="950px">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>사진</th>
         <td width="100" align="center">
            <a href="https://github.com/KoneJ">
                <img src="https://avatars.githubusercontent.com/u/86594108?v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/kjeongh">
                <img src="https://avatars.githubusercontent.com/u/88549117?v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/kimhalin">
                <img src="https://avatars.githubusercontent.com/u/75435113?v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/suhyeon3484">
                <img src="https://avatars.githubusercontent.com/u/105929978?v=4" width="60" height="60">
            </a>
        </td>
    </tr>
    <tr>
        <th>이름</th>
        <td width="100" align="center">고원준</td>
        <td width="100" align="center">김정현</td>
        <td width="100" align="center">김하린</td>
        <td width="100" align="center">이수현</td>
    </tr>
    <tr>
        <th>역할</th>
        <td width="150" align="center">
            frontend<br>
        </td>
        <td width="150" align="center">
            backend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            frontend<br>
            backend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            frontend<br>
            devops<br>
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/KoneJ">
                <img src="http://img.shields.io/badge/KoneJ-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/kjeongh">
                <img src="http://img.shields.io/badge/kjeongh-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/kimhalin">  
                <img src="http://img.shields.io/badge/kimhalin-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/suhyeon3484">
                <img src="http://img.shields.io/badge/suhyeon3484-green?style=social&logo=github"/>
            </a>
        </td>
    </tr>
    </tbody>
</table>
<hr>
