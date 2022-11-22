const url = window.location.search;
const searchParams = new URLSearchParams(url);
const courses = {
  1: '../courses/js/chain',
  2: '../courses/js/reducer',
  3: '../courses/js/map',
};

export default courses[searchParams.get('course')];
