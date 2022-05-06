<template>
  <div>
    <div class="used-technologies-div common-padding-div">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text">Technologies We Use</h2>
          <p class="common-hight-text">
            For Guaranteed Result and Return on Investment
          </p>
        </div>
        <div class="technologies-grid-div">
          <div
            v-for="(item, index) of technologies"
            :key="index"
            class="technologies-box-div"
          >
            <div class="flip-box" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img :src="item.img" class="img-fluid" />
                </div>
                <div class="flip-box-back">
                  <h2>{{ item.title }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../static/image/technology-react-icon.png'
import img2 from '../static/image/technology-node-icon.png'
import img3 from '../static/image/technology-vue-icon.png'
import img4 from '../static/image/technology-angular-icon.png'
import img5 from '../static/image/technology-redux-icon.png'
import img6 from '../static/image/technology-electron-icon.png'
import img7 from '../static/image/technology-postgres-icon.png'
import img8 from '../static/image/technology-paython-icon.png'
import img9 from '../static/image/technology-mysql-icon.png'
import img10 from '../static/image/technology-googlecloud-icon.png'
import img11 from '../static/image/technology-mongodb-icon.png'
import img12 from '../static/image/technology-kubernetes-icon.png'
import img13 from '../static/image/technology-graphql-icon.png'
import img14 from '../static/image/technology-firebase-icon.png'
import img15 from '../static/image/technology-docker-icon.png'
import img16 from '../static/image/technology-aws-icon.png'
import img17 from '../static/image/technology-flutter-icon.png'

export default {
  name: 'TechWeUse',
  data() {
    return {
      technologies: [
        {
          img: img1,
          title: 'React js',
        },
        {
          img: img2,
          title: 'Node js',
        },
        {
          img: img3,
          title: 'Vue js',
        },
        {
          img: img4,
          title: 'Angular',
        },
        {
          img: img5,
          title: 'Redux',
        },
        {
          img: img6,
          title: 'Electron',
        },
        {
          img: img7,
          title: 'PostgreSQL',
        },
        {
          img: img8,
          title: 'Python',
        },
        {
          img: img9,
          title: 'MySQL',
        },
        {
          img: img10,
          title: 'Google Cloud',
        },
        {
          img: img11,
          title: 'MongoDB',
        },
        {
          img: img12,
          title: 'Kubernetes',
        },
        {
          img: img13,
          title: 'GraphQL',
        },
        {
          img: img14,
          title: 'Firebase',
        },
        {
          img: img15,
          title: 'Docker',
        },
        {
          img: img16,
          title: 'Amazon Web Services',
        },
        {
          img: img17,
          title: 'Flutter',
        },
      ],
    }
  },
}
</script>
