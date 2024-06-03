<template>
  <div>
    <v-custom-app-bar :inverted-scroll="false"></v-custom-app-bar>

    <v-sheet
      tile
      flat
      :class="isMobile ? 'mx-0 px-4 py-6' : 'mx-12 px-12 mt-12 pt-12 pb-6'"
    >
      <template v-if="searchedText.length > 0">
        <v-row>
          <v-col class="py-2">
            <v-card
              tile
              flat
              class="mx-0 px-0 black--text text--lighten-4"
              style="font-size: 22px !important; font-weight: 350 !important"
              >Search results for "<span class="purple--text">{{
                searchedText
              }}</span
              >"</v-card
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-2">
            <v-btn
              tile
              class="mt-0 pt-0 mb-4 px-6 grey--text text--darken-3"
              @click="clearFilter"
              ><v-icon class="pr-1" small>mdi-close</v-icon>Clear Search
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <v-row>
        <v-col cols="12" md="8">
          <v-row v-for="(post, idx) in visiblePosts" :key="post.name">
            <v-col>
              <v-card tile flat class="mx-0 px-0 mb-5">
                <v-row>
                  <v-col cols="4" class="pt-10">
                    <v-img
                      :src="post.image"
                      aspect-ratio="1"
                      class="grey lighten-2"
                      max-height="500px"
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="8">
                    <v-card-title
                      class="mx-0 px-0"
                      style="
                        font-size: 42px !important;
                        font-weight: 300 !important;
                        line-height: 1.2em !important;
                        word-break: break-word !important;
                      "
                    >
                      {{ post.name }}
                    </v-card-title>
                    <v-card-subtitle
                      class="mx-0 px-0 py-4 yellow--text text--darken-4"
                    >
                      {{ post.dateCreated }} /
                      <v-chip
                        outlined
                        label
                        x-small
                        v-for="tag in post.tags"
                        :key="tag"
                        class="mr-1 mb-1 px-1 py-0 purple--text purple"
                        >{{ tag }}</v-chip
                      >
                    </v-card-subtitle>

                    <v-card-text
                      class="mx-0 px-0 font-weight-normal"
                      style="
                        font-size: 18px !important;
                        font-weight: 400 !important;
                        line-height: 1.5em !important;
                      "
                    >
                      {{ post.description }}
                    </v-card-text>
                    <router-link :to="getBlogPostPageUrl(post.name)">
                      <v-btn
                        large
                        tile
                        class="mt-1 mb-4 mr-2 px-6 white--text purple darken-2"
                        >Read more
                        <v-icon class="pl-1" small
                          >mdi-arrow-right</v-icon
                        ></v-btn
                      >
                    </router-link>
                  </v-col>
                </v-row>
                <v-divider v-if="idx < visiblePosts.length - 1" class="mt-8" />
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-pagination
                v-model="page"
                color="blue-grey lighten-2"
                class=""
                :length="Math.ceil(filteredPosts.length / perPage)"
              ></v-pagination>
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
                v-for="post in recentPosts"
                :key="post.name"
              >
                <router-link
                  :to="getBlogPostPageUrl(post.name)"
                  style="text-decoration: none !important"
                >
                  <v-row class="mt-2">
                    <v-col cols="5">
                      <v-img
                        :src="post.image"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="7" class="pt-0">
                      <v-card-title
                        class="mx-0 px-0 pt-1"
                        style="
                          font-size: 16px !important;
                          font-weight: 400 !important;
                          line-height: 1.1em !important;
                          word-break: break-word !important;
                        "
                      >
                        {{ post.name }}
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
    title: "Dyce Rentals - Blog - Las Vegas Car Rentals",
    meta: [
      {
        name: "blog",
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
    visiblePosts() {
      return this.filteredPosts.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    recentPosts() {
      return this.blogposts.slice(0, 4);
    },
  },
  data: () => ({
    blogposts: blogpostsData,
    filteredPosts: blogpostsData,
    searchText: "",
    searchedText: "",
    page: 1,
    perPage: 4,
  }),
  watch: {
    $route: {
      handler: function () {
        window.scrollTo(0, 0);
      },
      deep: true,
      immediate: true,
    },
    "$route.query.search": {
      handler: function (searchURI) {
        if (searchURI == null) this.filterPosts(searchURI);
        else {
          var search = decodeURIComponent(searchURI);
          this.filterPosts(search);
        }
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
    tagsToString(tags) {
      return Array.isArray(tags) ? tags.join(", ") : "";
    },
    setFilterQueryParams() {
      if (
        this.searchedText != this.searchText &&
        (this.searchText == null || this.searchText.length == 0)
      ) {
        this.$router.push({
          path: "blog",
          query: {},
        });
      } else if (this.searchedText != this.searchText) {
        this.$router.push({
          path: "blog",
          query: { search: encodeURIComponent(this.searchText) },
        });
      }
    },
    filterPosts(search) {
      this.page = 1;
      if (typeof search === undefined || search == null || search.length == 0) {
        this.searchText = "";
        this.searchedText = this.searchText;
        this.filteredPosts = this.blogposts;
      } else if (this.searchedText != search) {
        this.searchedText = search;
        this.filteredPosts = this.blogposts.filter((p) =>
          p.name.toLowerCase().includes(search)
        );
      }
    },
    getBlogPostPageUrl(id) {
      return `/blog/post/${id}`;
    },
    clearFilter() {
      this.searchText = null;
      this.setFilterQueryParams();
    },
  },
};
</script>

<style lang="scss" scoped></style>
