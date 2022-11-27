const courses = {
  'JavaScript': {
    'Array': {
      'reduce': {
        'write your own': async () => await import('../courses/js/reduce')
      },
      'map': {
        'write your own': async () => await import('../courses/js/map')
      }
    },
    'Algorithm': {
      'chain': async () => await import('../courses/js/chain')
    }
  }
};

export default courses;
