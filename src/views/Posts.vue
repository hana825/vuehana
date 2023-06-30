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
      posts: posts,
      currentPost: null,
      isSidebarOpen: false,
    };
  },
  methods: {
    loadPost(post) {
      this.currentPost = post;
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
        <PostList @post-clicked="loadPost" />
      </div>
    </div>
    <div v-if="currentPost" class="posts-body">
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
      width: calc(100% - 300px);
    }
  }
}
div.posts {
  display: flex;
  width: 100%;
  .posts-sidebar {
    button {
      float: left;
      cursor: pointer;
      outline: none;
      border: none;
      padding: 6px 8px;
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
    background-color: #f3f3f3;
  }
}
</style>
