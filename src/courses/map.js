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
      'chain': async () => await import('../courses/js/chain'),
      'last three': async () => await import('../courses/js/interview/last-three')
    }
  }
};

export default courses;
