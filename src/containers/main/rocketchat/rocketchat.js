// import _ from 'lodash';

export const mainRocketchat = {
  template: require('./rocketchat.html'),
  /** @ngInject */
  controller() {
    this.$onInit = () => {
      const rcw = angular.element(document)[0].querySelector('.rocketchat-widget');

      // put the Rocket chat window inside the component
      angular.element(document)[0].querySelector('.main__rocketchat').append(rcw);
      rcw.classList.remove('hidden');
      rcw.classList.add('displayed');
      rcw.querySelector('.maximize').click();
    };
    this.$onDestroy = () => {
      const rcw = angular.element(document)[0].querySelector('.rocketchat-widget');
      angular.element(document)[0].querySelector('body').append(rcw);
      rcw.classList.add('hidden');
    };
  }
};
