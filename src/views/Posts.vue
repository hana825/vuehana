<script>
import PostList from "@/components/PostList.vue";
import Post from "@/components/Post.vue";
import posts from "@/utils/posts";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  components: {
    PostList,
    Post,
    ScrollToTop,
  },
  data() {
    return {
      allPosts: posts,
      currentPost: null,
      isSidebarOpen: true,
    };
  },
  computed: {
    filteredPosts() {
      return this.allPosts
        .filter((post) => !post.isFolder)
        .map((post) => {
          return {
            ...post,
            title: post.name.replace(/\.md$/, ""),
          };
        });
    },
  },
  created() {
    if (this.filteredPosts.length > 0) {
      this.currentPost = this.filteredPosts[0];
    }
  },
  methods: {
    loadPost(post) {
      this.currentPost = post;
      // console.log("Selected post:", post);
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    scrollToTop() {
      const postsBody = document.querySelector(".posts-body");
      if (postsBody) {
        postsBody.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<template>
  <div class="posts">
    <div :class="['posts-sidebar', { isSidebarOpen: isSidebarOpen }]">
      <button @click="toggleSidebar">
        <font-awesome-icon icon="bars" />
      </button>
      <div :class="['sidebar-list', { isSidebarOpen: isSidebarOpen }]">
        <PostList :posts="filteredPosts" :selected-post="currentPost" @post-clicked="loadPost" @click="scrollToTop" />
      </div>
    </div>
    <div v-if="currentPost" :class="['posts-body', { isSidebarOpen: isSidebarOpen }]">
      <Post :title="currentPost.title" :content="currentPost.content" />
    </div>
  </div>
  <ScrollToTop />
</template>

<style lang="scss">
@import "@/assets/css/common.scss";

@media only screen and (min-width: 320px) and (max-width: 480px) {
  div.posts {
    flex-direction: column;
    .posts-sidebar.isSidebarOpen {
      width: 100%;
      height: 100px;
    }
    .posts-body {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
    .posts-body.isSidebarOpen {
      height: calc(100% - 100px);
    }
  }
}
@media only screen and (min-width: 481px) {
  div.posts {
    flex-direction: row;
    .posts-sidebar.isSidebarOpen {
      width: 300px;
      height: 100%;
    }
    .posts-body {
      width: 100%;
      overflow-y: auto;
    }
    .posts-body.isSidebarOpen {
      width: calc(100% - 300px);
    }
  }
}
div.posts {
  display: flex;
  width: 100%;
  .posts-sidebar {
    background-color: $f5-gray-color;
    button {
      float: left;
      cursor: pointer;
      outline: none;
      border: none;
      text-align: left;
      padding: 6px 8px;
      font-size: 17px;
      color: $gray-color;
      background-color: $f5-gray-color;
      margin: 0;
    }
    .postlist {
      display: none;
    }
  }
  .sidebar-list.isSidebarOpen {
    .postlist {
      display: block;
      padding-left: 10px;
    }
  }
  .posts-sidebar.isSidebarOpen {
    // width: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: $f3-gray-color;
  }
  .posts-body::-webkit-scrollbar {
    width: 10px;
    background-color: $f5-gray-color;
  }
  .posts-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $a-gray-color;
  }
  .posts-body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: $f5-gray-color;
  }
  .posts-body {
    padding-bottom: 50px;
    div {
      width: 90%;
      margin: auto;
      text-align: left;
      padding-bottom: 20px;
      p,
      li {
        line-height: 1.6;
      }
      blockquote {
        border-left: 5px solid $main-color;
        background-color: $f5-gray-color;
        margin: 0;
        padding: 0.5em 1em;
      }
      code:not(.hljs) {
        background-color: $e-gray-color;
        border-radius: 0.5em;
        padding: 0.2em 0.3em;
        font-weight: 600;
        color: $navy-color;
      }
      a {
        text-decoration: none;
        color: $main-color;
        font-weight: 600;
      }
      a:hover {
        text-decoration: underline;
      }
      img {
        width: 100%;
      }
      * {
        word-break: break-all;
      }
    }
  }
}
</style>
