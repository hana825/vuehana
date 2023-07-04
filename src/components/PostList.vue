<template>
  <div class="postlist">
    <ul>
      <li v-for="folder in folders" :key="folder.name">
        <span class="folder" @click="toggleFolder(folder)">{{ folder.name }}</span>
        <ul v-if="folder.open">
          <li v-for="file in folder.files" :key="file.title">
            <button :class="{ selected: file === selectedPost }" @click="emitPostClicked(file)">
              {{ file.title }}
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    selectedPost: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      folders: [],
    };
  },
  created() {
    this.buildFolderStructure();
    if (this.folders.length > 0) {
      this.folders[0].open = true;
      if (this.folders[0].files.length > 0) {
        this.$emit("post-clicked", this.folders[0].files[0]);
      }
    }
  },
  methods: {
    buildFolderStructure() {
      const folders = {};

      for (const post of this.posts) {
        const folderPath = post.folderPath;
        const titleParts = folderPath.split("/");
        const fileName = post.title;
        let currentFolder = folders;

        for (const folderName of titleParts) {
          if (!currentFolder[folderName]) {
            currentFolder[folderName] = {
              name: folderName,
              open: false,
              files: [],
            };
          }
          currentFolder = currentFolder[folderName];
        }

        currentFolder.files.push({ title: fileName, ...post });
      }

      this.folders = Object.values(folders);
    },

    toggleFolder(folder) {
      folder.open = !folder.open;
    },
    emitPostClicked(post) {
      this.$emit("post-clicked", post);
    },
  },
  emits: ["post-clicked"],
};
</script>

<style lang="scss">
@import "@/assets/css/common.scss";

.postlist {
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .folder {
    cursor: pointer;
    font-weight: bold;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding: 6px 0;
  }

  .selected {
    text-decoration: underline;
    font-weight: 600;
    color: $main-color !important;
  }

  button {
    cursor: pointer;
    width: 100%;
    outline: none;
    border: none;
    padding: 6px 0;
    background-color: transparent;
  }

  button:hover {
    text-decoration: underline;
  }
}
</style>
