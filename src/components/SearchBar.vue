<template>
  <div class="search-bar" :class="{ 'is-active': isInputVisible }">
    <div class="search-bar-input-container">
      <input
        ref="searchInput"
        v-model="searchQuery"
        :class="{ 'is-active': isInputVisible }"
        type="text"
        placeholder="Buscar una película..."
        autocomplete="off"
      />
    </div>
    <button @click="handleSearchIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      isInputVisible: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (this.isInputVisible && !this.$el.contains(event.target)) {
        this.handleBlur();
      }
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({
          name: "searchResult",
          query: { q: this.searchQuery },
        });
        this.searchQuery = "";
        this.isInputVisible = false;
      }
    },
    openInput() {
      this.isInputVisible = true;
      this.$nextTick(() => {
        this.$refs.searchInput.focus();
      });
    },
    handleSearchIcon() {
      if (!this.isInputVisible) {
        this.openInput();
      } else {
        this.handleSearch();
      }
    },
    handleBlur() {
      this.isInputVisible = false;
    },
  },
};
</script>
<style scoped>
.search-bar {
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(to left, white, white) no-repeat right / 0% 100%;
  transition: background-size 0.2s ease-in-out;
}

.search-bar.is-active {
  background-size: 100% 100%;
}

.search-bar-input-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 40px;
}

.search-bar svg {
  transition: transform 0.2s ease-in-out;
  right: 0;
  z-index: 10;
}

.search-bar-input-container input {
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.4s ease-in-out;
  border: none;
  background-color: transparent;
  padding: 4px 8px;
  height: 40px;
}

.search-bar-input-container input.is-active {
  opacity: 1;
  transform: translateX(0);
  background-color: white;
}

.search-bar-input-container input::placeholder {
  color: var(--color-text-secondary);
}

.search-bar-input-container input:focus-visible {
  outline: none;
  outline-offset: 0;
}

.search-bar button {
  border: none;
  cursor: pointer;
  background: linear-gradient(to left, white, white) no-repeat right / 0% 100%;
  height: 40px;
  transition: background-size 0.2s ease-in-out;
  padding: 4px 8px;
}

.search-bar button.is-active {
  background-size: 100% 100%;
}
</style>
