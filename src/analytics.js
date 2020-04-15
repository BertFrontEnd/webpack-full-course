import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let isWasDestroyed = false;

  const listener = () => counter++;

  $(document).on('click', listener);
  return {
    destroy() {
      $(document).off('click', listener);
      isWasDestroyed = true;
    },

    getClicks() {
      if (isWasDestroyed) {
        return 'Analytics is destroyed. Total clicks = ${counter}';
      }
      return counter;
    },
  };
}

let analytics = createAnalytics();

window.analytics();
