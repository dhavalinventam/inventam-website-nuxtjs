<template>
  <div>
    <div class="blog-sidebar-div">
      <div v-for="(item, index) of blogcategories"
            :key="index" class="blog-sidebar-box-div">
        <h4 class="blog-sidebar-heading">{{item.title}}</h4>
        <div class="blog-sidebar-contains-div">
          <div class="common-ul-li-div">
            <ul>
              <li><a href="#">{{item.linktitle1}}</a></li>
              <li><a href="#">{{item.linktitle2}}</a></li>
              <li><a href="#">{{item.linktitle3}}</a></li>
              <li><a href="#">{{item.linktitle4}}</a></li>
              <li><a href="#">{{item.linktitle5}}</a></li>
              <li><a href="#">{{item.linktitle6}}</a></li>
              <li><a href="#">{{item.linktitle7}}</a></li>
              <li><a href="#">{{item.linktitle8}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCategories',
  data() {
      return {
          blogcategories: [
              { 
                  title: 'Categories',
                  linktitle1: 'API Development',
                  linktitle2: 'DevOps Services',
                  linktitle3: 'Full Stack Development',
                  linktitle4: 'Mobile App Development',
                  linktitle5: 'SAAS',
                  linktitle6: 'Serverless Development',
                  linktitle7: 'UI UX Design',
                  linktitle8: 'Web App Development',
              },
              { 
                  title: 'Latest Posts',
                  linktitle1: 'Why Laravel is More Special Compared to Other Frameworks?',
                  linktitle2: 'How Node.js is The Right Choice for Enterprise Software?',
                  linktitle3: 'Major DevOps Trends That Rule in 2021'
              },
              { 
                  title: 'Featured Posts',
                  linktitle1: 'Why Laravel is More Special Compared to Other Frameworks?',
                  linktitle2: 'How Node.js is The Right Choice for Enterprise Software?',
                  linktitle3: 'Major DevOps Trends That Rule in 2021'
              },
          ]
      }
  }
}
</script>
