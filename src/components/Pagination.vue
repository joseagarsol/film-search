<template>
  <div class="pagination" v-if="totalPages > 1">
    <button
      class="page-btn"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      &laquo; Anterior
    </button>
    <span class="page-info">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <button
      class="page-btn"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Siguiente &raquo;
    </button>
  </div>
</template>
<script>
export default {
  name: "PaginationComponent",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
  },
};
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.page-info {
  margin: 0 16px;
  color: var(--color-text-secondary);
  font-weight: bold;
}

.page-btn {
  padding: 2px 16px;
  border: 1px solid var(--color-accent);
  background-color: transparent;
  color: var(--color-accent);
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.page-btn:hover:not(:disabled) {
  background-color: var(--color-accent);
  color: #000;
}

.page-btn:disabled {
  border-color: var(--color-text-secondary);
  color: var(--color-text-secondary);
  cursor: not-allowed;
}
</style>
