<template>
  <div>
    <div
      v-for="(item, index) of blogdescription"
      :key="index"
      class="blog-details-sub-div"
    >
      <div class="blog-details-header-div">
        <div class="blog-details-img-div">
          <img :src="item.img" class="img-fluid" />
        </div>
        <div class="blog-details-contains-div">
          <h2 class="blog-details-heading">
            {{ item.maintitle }}
          </h2>
          <p class="common-para">
            {{ item.para1 }}
          </p>
          <h4 class="blog-small-heading">{{ item.subtitle1 }}</h4>
          <p class="common-para">
            {{ item.subtitlepara }}
          </p>

          <h4 class="blog-small-heading">{{ item.subtitle2 }}</h4>
          <div class="common-ul-li-div">
            <ul>
              <li>{{ item.point1 }}</li>
              <li>
                {{ item.point2 }}
              </li>
              <li>
                {{ item.point3 }}
              </li>
              <li>
                {{ item.point4 }}
              </li>
              <li>
                {{ item.point5 }}
              </li>
            </ul>
          </div>

          <h4 class="blog-small-heading">
            {{ item.subtitle3 }}
          </h4>
          <p class="common-para">
            {{ item.subtitle3para1 }}
          </p>
          <p class="common-para">
            {{ item.subtitle3para2 }}
          </p>

          <h4 class="blog-small-heading">{{ item.subtitle4 }}</h4>
          <p class="common-para">
            {{ item.subtitle4para1 }}
          </p>
          <p class="common-para">
            {{ item.subtitle4para2 }}
          </p>

          <h4 class="blog-small-heading">
            {{ item.subtitle5 }}
          </h4>
          <p class="common-para">
            {{ item.subtitle5para }}
          </p>

          <h4 class="blog-small-heading">{{ item.subtitle6 }}</h4>
          <p class="common-para">
            {{ item.subtitle6para }}
          </p>

          <h4 class="blog-small-heading">{{ item.subtitle7 }}</h4>
          <p class="common-para">
            {{ item.subtitle7para1 }}
          </p>
          <p class="common-para">
            {{ item.subtitle7para2 }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) of hightlighttag"
      :key="index"
      class="hightlight-tag-main-div"
    >
      <a href="#" class="hightlight-tag-text">{{ item.title1 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title2 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title3 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title4 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title5 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title6 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title7 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title8 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title9 }}</a>
      <a href="#" class="hightlight-tag-text">{{ item.title10 }}</a>
    </div>
    <div class="recommended-posts-div">
      <h4 class="sub-heading-text text-center">Recommended Posts</h4>
      <div class="row">
        <div
          v-for="(item, index) of bloglistingcomp"
          :key="index"
          class="col-md-12 col-lg-6"
        >
          <div class="blog-box-main-div">
            <div class="blog-banner-img-div">
              <img :src="item.img" class="img-fluid" />
            </div>
            <div class="blog-cat-date-div">
              <div class="blog-cal-div">
                <a href="#" class="blog-links">{{ item.designation }}</a>
              </div>
              <div class="blog-date-div">
                <a href="#" class="blog-links">{{ item.date }}</a>
              </div>
            </div>
            <div class="blog-contains-div">
              <h3 class="blog-title-text">
                {{ item.heading }}
              </h3>
              <p class="blog-para-text">
                {{ item.description }}
              </p>
              <div class="blog-btn-div mt-4">
                <a href="/blogdetails" class="btn">{{ item.button }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../static/image/blog-nodejs-banner.png'
import img2 from '../static/image/blog-nodejs-banner.png'
import img3 from '../static/image/blog-devops.jpg'

export default {
  name: 'BlogDescription',
  data() {
    return {
      blogdescription: [
        {
          img: img1,
          maintitle: 'How Node.js is The Right Choice for Enterprise Software?',
          para1:
            'Today, everyone is talking about Node.js and its advantages over the programming world. All other frameworks and languages come with some benefits, but Node.js takes over the development with so many benefits in enterprises. In this blog, we are going to explain why you should choose it, especially for enterprise software. Node.js is the new standard for enterprise applications. Because it’s powerful with having the potential to replace Java. Some enterprise-level company reveals about its successfully using the platform in its operations. And the list is full of giants such as Walmart, NASA, Intel, and Twitter. And the others have been also decided to rewrite their existing code to Node.js to boost their teams’ productivity and the performance of their applications.',
          subtitle1: 'What is Node.js?',
          subtitlepara:
            'Node.js is a light, scalable, and cross-platform way to execute code. Its event-driven I/O model makes extremely efficient, real-time, and scalable network applications with more than a billion downloads. It ranks in the most demanding developer skills just because it’s gaining traction faster than any other technology.',
          subtitle2: 'The Advantages of Node.js:',
          point1: 'The code can execute faster than in any other language.',
          point2:
            'It’s possible to code in JavaScript for the client and server-side.',
          point3:
            'Too fast to build real-time, high-traffic apps like chatting or gaming.',
          point4:
            'It’s perfect for microservices which are a popular solution among enterprise applications.',
          point5:
            'Increasing the efficiency of the development process by removing the gap between frontend and backend developers.',
          subtitle3: 'Why Use Node.js for Enterprise Level?',
          subtitle3para1:
            'All programming languages will give you lots of reasons to choose them over others. But Node.js is different; it developed for applications at scale. When it comes to developing modern tools or complex applications, Node.js stand apart from other programming technologies. Let’s talking about its performance and scalability.',
          subtitle3para2:
            'Did you know Node.js built upon Google Chrome’s V8 runtime and written in C++, specially built for multiple operating systems and super fast? Because, both V8 and Node are frequently updated, performance boosters, security patches along supporting the modern JavaScript features. When we are using JavaScript, it means to transform the JSON data which is the most common data interchange format on the Web will faster by default. The most popular web platforms create an additional thread for every new request and also using the higher RAM every time to process. But Node.js operates on a single thread. It uses the event loop and callbacks for I/O operations and delegating tasks such as database operations faster which can handle the million concurrent connections. It enhances the app scalability with powerful features such as the Cluster module enabling load balancing over multiple CPU cores.',
          subtitle4: 'Where to Node.js Used For?',
          subtitle4para1:
            'Today, every development project starts out small. But time-by-time, client’s expectations continue to grow by adding new features with providing a top-notch performance. In the end, the project becomes larger and your development team struggles to cope with it. It’s common problem among enterprise applications. Let’s take an example if you run a marketing application that serves three theoretically separate and equal areas like email marketing, CMS, and reporting. Then people will be using the features, but some will use CMS, some will use reporting or email marketing while ignoring the rest. Day-by-day user base grows, lots of computing power will have to be added to the servers for your app to work properly and not crash.',
          subtitle4para2:
            'The solution is the microservices pattern. It’s much easier for Smaller, distributed teams to work with and no need to deploy the whole codebase every time if you want to introduce some change in any part of your app. There are lots of enterprise-level companies in the market that have already embraced the power of Node.js and microservices. Because, both are the perfect combination for better performance, less code, and efficient deployment.',
          subtitle5: 'Benefits of Building Cross-Functional Teams:',
          subtitle5para:
            'Cross-Functional teams are full of experts in all the relevant areas like front-end, back-end developers, infrastructure engineers, and quality assurance experts. Every member is responsible for the entire lifecycle of the app like writing code, testing, hosting, deployment, and maintenance. It’s quite common in startup circles, as most startups have limited workforces at their disposal. But, with the microservices, it should be encouraged for better agility, innovation, and smoother collaboration within the reach of enterprises. When working on live projects, some parts of the app may require a greater focus on the client’s side, but others will require server-side focus. You can use the Full-stack developers who know JavaScript for both. Developers will less of a problem and other developers can simply step in to pick up the slack when needed.',
          subtitle6: 'What is Node Package Manager?',
          subtitle6para:
            'Node Package Manager is a small open-source software package that allows programmers to install and update. No need to write common features from scratch. You can avoid new layers of complexity that often come with that particular territory. Today, privacy and security both are the biggest concern for enterprises; Node Package Manager released the Enterprise version of its package manager. Big organizations like government, the field of fintech, or medtech are wary of storing their data in the cloud. But Node Package Manager allows you to run its infrastructure behind your company’s firewall. It provides businesses access to a private registry with advanced security features to help them control access to code, identify vulnerabilities, and automatically replace unsafe code to organizations.',
          subtitle7: 'Development of Cross-Platform:',
          subtitle7para1:
            'When it comes to developing cross-platform desktop apps with Node.js, it means you can use some code for your web app in its desktop versions for macOS, Windows, and Linux. The same developer can work on your Web app can deliver a desktop app without having expert knowledge of C#, Objective-C, or any other language. Node developers have access to some great tools as front-end developers like Google Chrome Developer Tools which enable them to enhance the desktop apps as efficiently as client-side apps. These tools are also cross-platform, which means that developers don’t need a Mac to write or build a macOS app, or a Windows machine for Windows apps. Most innovative enterprises already know that Node.js is the best way to improve performance, coding efficiency, and overall happiness in their teams.',
          subtitle7para2:
            'In this blog, we’ve discussed Node.js from what, how, and where especially at the enterprise level, beginning with its goals, and ending with its sweet spots and pitfalls. Inventam Tech Solution has experienced Node.js developers who see this as an opportunity to become full-stack experts and have been very impressed with all the possibilities that Node.js brings. We are the well-known Node.js development company in Surat, India who provides complete full-stack development services to fulfill your or your client’s requirements. If your developers run into problems with Node, you can directly contact Hareen Desai, CTO, at hareen@inventam.com.',
        },
      ],
      hightlighttag: [
        {
          title1: 'Desktop App',
          title2: 'Full Stack Developers',
          title3: 'Full Stack Development',
          title4: 'Full stack expert',
          title5: 'Inventam Tech Solution',
          title6: 'Javascript',
          title7: 'Node js',
          title8: 'Node js developer',
          title9: 'Node js Development',
          title10: 'Web Apps',
        },
      ],
      bloglistingcomp: [
        {
          img: img2,
          designation: 'Full Stack Development',
          date: 'January 18, 2021',
          heading: 'How Node.js is The Right Choice for Enterprise Software?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More',
        },
        {
          img: img3,
          designation: 'DevOps Services',
          date: 'January 11, 2021',
          heading: 'Major DevOps Trends That Rule in 2021',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More',
        },
      ],
    }
  },
}
</script>
