const courses = {
  'JavaScript': {
    'Array': {
      'reduce': {
        'write your own': async () => await import('../courses/js/reduce')
      },
      'map': {
        'write your own': async () => await import('../courses/js/map')
      },
      'filter': {
        'write your own': async () => await import('../courses/js/filter')
      },
      'some': {
        'write your own': async () => await import('../courses/js/some')
      },
      'every': {
        'write your own': async () => await import('../courses/js/every')
      }
    },
    'Algorithm': {
      'chain': async () => await import('../courses/js/chain')
    }
  }
};

export default courses;
