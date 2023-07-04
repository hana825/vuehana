<script>
import PostList from "@/components/PostList.vue";
import Post from "@/components/Post.vue";
import posts from "@/utils/posts";

export default {
  components: {
    PostList,
    Post,
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
        <PostList :posts="filteredPosts" :selected-post="currentPost" @post-clicked="loadPost" />
      </div>
    </div>
    <div v-if="currentPost" :class="['posts-body', { isSidebarOpen: isSidebarOpen }]">
      <Post :title="currentPost.title" :content="currentPost.content" />
    </div>
  </div>
</template>

<style lang="scss">
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
    background-color: #f5f5f5;
    button {
      float: left;
      cursor: pointer;
      outline: none;
      border: none;
      padding: 6px 8px;
      font-size: 17px;
      color: #555;
      background-color: #f5f5f5;
    }
    .postlist {
      display: none;
    }
  }
  .sidebar-list.isSidebarOpen {
    .postlist {
      display: block;
    }
  }
  .posts-sidebar.isSidebarOpen {
    // width: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f3f3f3;
  }
  .posts-body::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  .posts-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #aaa;
  }
  .posts-body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  .posts-body {
    div {
      width: 90%;
      margin: auto;
      text-align: left;
      blockquote {
        border-left: 5px solid #42b983;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0.5em 1em;
      }
      code:not(.hljs) {
        background-color: #eee;
        border-radius: 0.5em;
        padding: 0.2em 0.3em;
        font-weight: 600;
        color: #2c3e50;
      }
      a {
        text-decoration: none;
        color: #42b983;
        font-weight: 600;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
