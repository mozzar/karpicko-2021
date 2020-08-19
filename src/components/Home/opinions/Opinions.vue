<template>
  <div id="opinions">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Opinie</h1>
        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <v-col cols="6">
          <v-carousel
            cycle
            show-arrows-on-hover
            hide-delimiter-background
            height="500"
          >
            <v-carousel-item v-for="(slide, index) in opinionList" :key="index">
              <opinion-item
                :src="slide.src"
                :name="slide.name"
                :quote="slide.quote"
              />
            </v-carousel-item>
          </v-carousel>
          <!--          <opinion-item :src="test.src" :name="test.name" :quote="test.quote" />-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OpinionItem from "@/components/Home/opinions/OpinionItem";
export default {
  name: "Opinions",
  components: { OpinionItem },
  data() {
    return {
      test: {
        src: "Oskar_i_Mokrzan.jpg",
        quote: '"Było w pytę, a będzie nawet lepiej"',
        name: "- Oskar i Daniel"
      },
      opinionList: [
        {
          src: "Oskar_i_Mokrzan.jpg",
          quote: '"Było w pytę, a będzie nawet lepiej"',
          name: "- Oskar i Daniel"
        },
        {
          src: "question.png",
          quote: '"No całkiem, całkiem"',
          name: "- ktośtam"
        },
        {
          src: "question.png",
          quote: '"Wow"',
          name: "- ktoś inny"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
