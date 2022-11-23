const courses = {
  1: async () => await import('../courses/js/chain'),
  2: async () => await import('../courses/js/reduce'),
  3: async () => await import('../courses/js/map'),
};

export default courses;
