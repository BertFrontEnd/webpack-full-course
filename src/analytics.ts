import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let itWasDestroyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on('click', listener);
  return {
    destroy() {
      $(document).off('click', listener);
      itWasDestroyed = true;
    },

    getClicks() {
      if (itWasDestroyed) {
        return 'Analytics is destroyed. Total clicks = ${counter}';
      }
      return counter;
    },
  };
}

window['analytics'] = createAnalytics();
