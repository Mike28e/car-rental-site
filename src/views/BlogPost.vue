<template>
  <div>
    <v-custom-app-bar :inverted-scroll="false"></v-custom-app-bar>

    <v-sheet
      tile
      flat
      :class="isMobile ? 'mx-0 px-4 py-6' : 'mx-12 px-12 mt-6 pt-6 pb-6'"
    >
      <v-row>
        <v-col>
          <router-link to="/blog">
            <v-btn
              large
              tile
              class="mt-1 mb-4 mr-2 px-6 grey--text text--darken-3"
              ><v-icon class="pl-1" small>mdi-arrow-left</v-icon>Back to All
              Posts
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col>
              <v-card tile flat class="mx-0 px-0 mb-5">
                <v-card-title
                  class="mx-0 px-0"
                  style="
                    font-size: 42px !important;
                    font-weight: 300 !important;
                    line-height: 1.2em !important;
                    word-break: break-word !important;
                  "
                >
                  {{ selectedPost.name }}
                </v-card-title>
                <v-card-subtitle
                  class="mx-0 px-0 py-4 yellow--text text--darken-4"
                >
                  {{ selectedPost.dateCreated }} /
                  <v-chip
                    outlined
                    label
                    x-small
                    v-for="tag in selectedPost.tags"
                    :key="tag"
                    class="mr-1 mb-1 px-1 py-0 purple--text purple"
                    >{{ tag }}</v-chip
                  >
                </v-card-subtitle>
                <v-img
                  :src="selectedPost.image"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-height="500px"
                >
                </v-img>
                <v-sheet
                  v-for="(section, idx) in selectedPost.sections"
                  :key="idx"
                >
                  <v-card-text
                    class="mx-0 px-0 font-weight-normal"
                    style="
                      font-size: 18px !important;
                      font-weight: 400 !important;
                      line-height: 1.5em !important;
                      word-break: break-word;
                    "
                    v-html="section.body"
                  />
                  <!-- {{ section.body }} -->
                  <!-- </v-card-text> -->
                  <v-img
                    v-if="section.image != null"
                    :src="section.image"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="250px"
                  >
                  </v-img>
                </v-sheet>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="0" md="1"></v-col>
        <v-col cols="0" md="3" v-if="!isMobile">
          <v-card tile flat class="mx-0 px-0 mb-10">
            <v-card-subtitle
              class="mx-0 px-0 pt-4 pb-0 black--text text--lighten-4"
              style="font-size: 24px !important; font-weight: 350 !important"
            >
              Search Posts
            </v-card-subtitle>
            <v-card-text class="mx-0 px-0 pt-0">
              <v-text-field
                class="pt-0"
                v-model="searchText"
                append-icon="mdi-magnify"
                single-line
                hide-details
                @keydown.enter="setFilterQueryParams"
                clearable
              ></v-text-field>
            </v-card-text>
          </v-card>
          <v-card tile flat class="mx-0 px-0 mb-10">
            <v-card-subtitle
              class="mx-0 px-0 pt-4 pb-0 black--text text--lighten-4"
              style="font-size: 24px !important; font-weight: 350 !important"
            >
              Recent Posts
            </v-card-subtitle>
            <v-card-text class="mx-0 px-0 pt-2">
              <v-card
                tile
                flat
                class="mx-0 px-0 mb-4"
                v-for="post in blogposts"
                :key="post.name"
              >
                <router-link
                  :to="getBlogPostPageUrl(post.name)"
                  style="text-decoration: none !important"
                >
                  <v-row class="mt-2">
                    <v-col cols="5" class="pt-1">
                      <v-img
                        :src="post.image"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="7" class="pt-0">
                      <v-card-title
                        class="mx-0 px-0 pt-0"
                        style="
                          font-size: 16px !important;
                          font-weight: 400 !important;
                          line-height: 1.1em !important;
                          word-break: break-word !important;
                        "
                      >
                        {{ getShortenedPostName(post.name) }}
                      </v-card-title>
                      <v-card-subtitle
                        class="mx-0 px-0 py-1 yellow--text text--darken-4"
                        style="font-size: 12px !important"
                      >
                        {{ post.dateCreated }}
                      </v-card-subtitle>
                    </v-col>
                  </v-row>
                </router-link>
              </v-card>
            </v-card-text>
          </v-card>
          <v-card tile flat class="mx-0 px-0 mb-10">
            <v-card-text class="mx-0 px-0 pt-4">
              <v-skeleton-loader type="image">
                <v-img
                  max-height="400px"
                  :src="
                    require('../assets/decor/pexels-tima-miroshnichenko-5717642.jpg')
                  "
                ></v-img>
              </v-skeleton-loader>
            </v-card-text>
          </v-card>
          <v-card tile flat class="mx-0 px-0 mb-10">
            <v-card-subtitle
              class="mx-0 px-0 pt-4 pb-0 black--text text--lighten-4"
              style="font-size: 24px !important; font-weight: 350 !important"
            >
              Tags
            </v-card-subtitle>
            <v-card-text class="mx-0 px-0 pt-4">
              <v-chip
                outlined
                label
                v-for="tag in tagsAvailable"
                :key="tag"
                class="mr-12 mb-1 px-6 py-4"
                >{{ tag }}</v-chip
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import vCustomAppBar from "../components/AppBar.vue";
import blogpostsData from "../data/blogposts.js";
export default {
  name: "BlogView",
  metaInfo: {
    title: `Dyce Rentals - Blog Post`,
    meta: [
      {
        name: "blog-post",
        content: "",
      },
    ],
    link: [{ rel: "icon", href: "../assets/icons8-dice-90.png" }],
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    "v-custom-app-bar": vCustomAppBar,
  },
  mounted() {},
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 960;
    },
    tagsAvailable() {
      var allTags = this.blogposts.flatMap(({ tags }) => tags);
      return [...new Set(allTags)];
    },
    selectedPost() {
      return this.blogposts.find((p) => p.name == this.postId);
    },
  },
  data: () => ({
    blogposts: blogpostsData,
    searchText: "",
    postId: null,
  }),
  watch: {
    $route: {
      handler: function () {
        window.scrollTo(0, 0);
      },
      deep: true,
      immediate: true,
    },
    "$route.params.id": {
      handler: function (id) {
        this.postId = id;
        window.scrollTo(0, 0);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
    setFilterQueryParams() {
      if (this.searchText == null || this.searchText.length == 0) {
        this.$router.replace({
          path: "/blog",
          query: {},
        });
      } else {
        this.$router.replace({
          path: "/blog",
          query: { search: encodeURIComponent(this.searchText) },
        });
      }
    },
    getShortenedPostName(postName) {
      return postName.length > 40 ? `${postName.substring(0, 40)}..` : postName;
    },
    getBlogPostPageUrl(id) {
      return `/blog/post/${id}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
