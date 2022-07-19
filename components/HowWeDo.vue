<template>
  <div>
    <div class="how-we-do-sec-div common-padding-div pb-0">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text mb-0">How we Do</h2>
        </div>
        <div class="how-we-do-sub-div">
          <div class="row">
            <div v-for="(item, index) of howwedo" :key="index" class="col-md-4">
              <div class="how-we-do-box-div box-margin-div">
                <div class="how-we-do-icon-div">
                  <img :src="item.img" class="img-fluid" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1500" />
                </div>
                <h5>{{ item.title }}</h5>
                <p class="common-para">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../static/image/requirement-icon.png'
import img2 from '../static/image/planning-icon.png'
import img3 from '../static/image/design-icon.png'
import img4 from '../static/image/development-icon.png'
import img5 from '../static/image/deployment-icon.png'
import img6 from '../static/image/maintenance-icon.png'

export default {
  name: 'HowWeDo',
  data() {
    return {
      howwedo: [
        {
          img: img1,
          title: 'Requirement Gathering',
          desc: 'Write answers to questions written or dictated, to satisfy a practical test.',
        },
        {
          img: img2,
          title: 'Planning',
          desc: 'Selection of tech stack, project architecture and time-line of implement.',
        },
        {
          img: img3,
          title: 'Design',
          desc: 'We will Create a elegant layout and wireframe for your project.',
        },
        {
          img: img4,
          title: 'Development',
          desc: 'Building and testing your dream product',
        },
        {
          img: img5,
          title: 'Deployment',
          desc: 'Creating an environment, for growing, scaling and monitoring',
        },
        {
          img: img6,
          title: 'Maintenance',
          desc: 'It is an important step which makes sure that your product works with efficiency all the time.',
        },
      ],
    }
  },
}
</script>
