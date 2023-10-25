<script>
  export default {

  }
</script>

<template>
    <img src="/imageBar2.png" alt="" class="chiSiamoBG">

    <div class="container">
        <div class="citazione">
          <h1 class="citText">“La realtà e la fantasia spesso si confondono come un cocktail di cui non riesci a distinguere i sapori.”</h1>
          <h3 class="citAutore">Dario Argento</h3>
        </div>
        
        <h2 class="ourStory">La nostra storia</h2>

        <div class="container-fluid">
          <div class="row">
            <div class="col-4">
              <div class="storyColumn">
                <div class="storyYear">2010</div>

                <div class="d-flex align-items-center">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="storyTitle">La nascita</div>

                <div class="storyParagraph">“Lorem ipsum dolor sit amet consectetur. Nulla consectetur ut sed non turpis. Senectus commodo sed eu a et. Purus consequat morbi tellus mauris vel cursus nec faucibus.</div>
              </div>
            </div>

            <div class="col-4">
              <div class="storyColumn">
                <div class="storyYear">2017</div>

                <div class="d-flex align-items-center">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="storyTitle">La nascita</div>

                <div class="storyParagraph">“Lorem ipsum dolor sit amet consectetur. Nulla consectetur ut sed non turpis. Senectus commodo sed eu a et. Purus consequat morbi tellus mauris vel cursus nec faucibus.</div>
              </div>
            </div>

            <div class="col-4">
              <div class="storyColumn">
                <div class="storyYear">2022</div>

                <div class="d-flex align-items-center">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="storyTitle">La nascita</div>

                <div class="storyParagraph">“Lorem ipsum dolor sit amet consectetur. Nulla consectetur ut sed non turpis. Senectus commodo sed eu a et. Purus consequat morbi tellus mauris vel cursus nec faucibus.</div>
              </div>
            </div>
          </div>
        </div>

        

    </div>
</template>

<style scoped>
.col-4{
  padding: 0;
  margin: 0;
}

.citazione{
  margin-top: 80px;
}

.citText{
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  color: white;
  font-size: 62px;
}

.citAutore{
  font-family: 'Karla', serif;
  color: white;
  font-size: 16px;
  margin-top: 24px;
}

.circle{
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: white;
}

.line {
  width: 100%;
  height: 1px;
  border-top: 1px solid white;
}

.storyYear{
  font-family: 'Karla', serif;
  font-weight: 300;
  color: #D1B875;
  font-size: 72px;
  letter-spacing: -3.6px;
  margin-bottom: 16px;
}

.ourStory{
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
  font-size: 40px;
  letter-spacing: -0.4px;
  margin-bottom: 16px;
  margin-top: 60px;
}

.storyTitle{
  font-family: 'Karla', serif;
  font-weight: 500;
  color: white;
  font-size: 20px;
  margin-top: 24px;
}

.storyParagraph{
  font-family: 'Karla', serif;
  font-weight: 300;
  color: white;
  font-size: 16px;
  margin-top: 16px;
  padding-right: 16px;
}

.chiSiamoBG{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>