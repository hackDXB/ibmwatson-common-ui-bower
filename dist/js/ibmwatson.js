/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';
(function () {

  angular
    .module('watson.common.ui', [
      'watson.common.ui.templates',
      'ngAnimate',
      'ngTagsInput',
      'ui.bootstrap'
    ]);

})();

angular.module("watson.common.ui.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/modal.html","<div aria-labelledby=\"modal-title\" modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n    uib-modal-animation-class=\"fade\" modal-in-class=\"in\" ng-style=\"{\'z-index\': 1050 + index*10, display: \'block\'}\" ng-click=\"close($event)\">\n  <div class=\"modal-dialog\" ng-class=\"size ? \'modal-\' + size : \'\'\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n</div>\n");
$templateCache.put("directives/helpAssistant/helpAssistant.html","<aside ng-show=\"showHelp\">\n  <div class=\"help-content\" ng-include src=\"template\"></div>\n  <div>\n    <button type=\"button\" role=\"button\" class=\"icon\" title=\"Close\" aria-label=\"Close\" ng-click=\"showHelp()\">\n      <span class=\"sr-only\">Close</span>\n      <span class=\"ibm-glyph--close\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n</aside>\n");
$templateCache.put("directives/navigation/navigation.html","<nav role=\"navigation\" aria-label=\"{{vm.label}}\" ng-class=\"{\'active\': vm.menuOpen}\">\n  <!-- Menu button -->\n  <button type=\"button\" role=\"button\" class=\"icon\"\n          ng-click=\"vm.toggleMenu()\" title=\"{{vm.label}}\" aria-label=\"{{vm.label}}\">\n    <svg ng-if=\"!vm.menuOpen\" class=\"ibm-icon\" aria-hidden=\"true\">\n      <use xlink:href=\"{{vm.icons.MENU}}\"></use>\n    </svg>\n    <svg ng-if=\"vm.menuOpen\" class=\"ibm-icon\" aria-hidden=\"true\">\n      <use xlink:href=\"{{vm.icons.CLOSE}}\"></use>\n    </svg>\n  </button>\n\n  <!-- Main menu -->\n  <div ng-show=\"vm.menuOpen\" class=\"menu\">\n    <div class=\"menu-loading\" ng-show=\"vm.loading\">\n      <div class=\"loading\"></div>\n      <span>{{vm.translations.LOADING}}</span>\n    </div>\n    <ul ng-if=\"!vm.loading\" class=\"main\" role=\"menu\">\n      <li ng-class=\"[{\'active-section\': vm.currentSection.label == section.label}]\" ng-repeat=\"section in vm.sections\">\n        <h3>\n          <a ng-if=\"section.href\" class=\"section-header\" href={{section.href}} ng-click=\"vm.setCurrent(section); vm.toggleMenu();\">\n            <svg ng-if=\"section.icon\" class=\"ibm-icon\" aria-hidden=\"true\">\n              <use xlink:href=\"{{section.icon}}\"></use>\n            </svg>\n            <span>{{section.label}}</span>\n          </a>\n          <div ng-if=\"!section.href\" class=\"section-header\">\n            <svg ng-if=\"section.icon\" class=\"ibm-icon\" aria-hidden=\"true\">\n              <use xlink:href=\"{{section.icon}}\"></use>\n            </svg>\n            <div>{{section.label}}</div>\n          </div>\n        </h3>\n        <ul ng-if=\"section.links && section.links.length > 0\">\n          <li ng-class=\"[{\'active-link\': vm.currentLink.href == link.href}]\" ng-repeat=\"link in section.links\">\n            <a role=\"menuitem\" href=\"{{link.href}}\" title=\"{{link.label}}\" ng-click=\"vm.setCurrent(section, link); vm.toggleMenu();\">\n              <span>{{link.label}}</span>\n            </a>\n            <div class=\"details\" ng-if=\"link.details && link.details.length > 0\">\n              <ul ng-show=\"link.detailsOpen\">\n                <li ng-repeat=\"detail in link.details\">{{detail}}</li>\n              </ul>\n              <button class=\"link small\" ng-click=\"vm.toggleDetails(link)\">{{link.detailsOpen ? vm.translations.CLOSE : vm.translations.DETAILS}}</button>\n            </div>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <ul class=\"footer\" ng-if=\"vm.footer.links && vm.footer.links.length > 0\">\n      <li ng-repeat=\"link in vm.footer.links\">\n        <a role=\"menuitem\" href=\"{{link.href}}\" title=\"{{link.label}}\" aria-label=\"link.label\" ng-click=\"vm.setCurrent(null, link)\">\n          <svg ng-if=\"link.icon\" class=\"ibm-icon\" aria-hidden=\"true\">\n            <use xlink:href=\"{{link.icon}}\"></use>\n          </svg>\n          <span>{{link.label}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Horizontal sub tabs -->\n  <div ng-if=\"vm.showTabs\" class=\"horizontal-nav\" ng-click=\"vm.toggleMenu(false)\">\n    <svg ng-if=\"vm.currentSection.icon\" class=\"ibm-icon\" aria-hidden=\"true\">\n      <use xlink:href=\"{{vm.currentSection.icon}}\"></use>\n    </svg>\n    <ul ng-if=\"vm.currentSection.links && vm.currentSection.links.length > 0\">\n      <li ng-class=\"[{\'active-link\': vm.currentLink.href == link.href}]\" ng-repeat=\"link in vm.currentSection.links\">\n        <a href=\"{{link.href}}\" label=\"{{link.label}}\" ng-click=\"vm.setCurrent(vm.currentSection, link)\">\n          <span>{{link.label}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");
$templateCache.put("directives/scrollToTop/scrollToTop.html","<div id=\"scroll-to-top-container\" class=\"ng-hide stt-container\" aria-hidden=\"true\">\n  <button id=\"scroll-to-top-button\" type=\"button\" role=\"button\" title=\"Scroll into view\" aria-label=\"Scroll into view\">\n    <span class=\"ibm-icon--top\" aria-hidden=\"true\"></span>\n  </button>\n</div>\n");
$templateCache.put("directives/sideNav/sideNav.html","<nav role=\"navigation\" aria-label=\"Navigation menu\">\n  <button type=\"button\" role=\"button\" class=\"icon\" ng-click=\"vm.toggleMenu()\" title=\"{{vm.sideNavOpen ? \'Close navigation menu\' : \'Open navigation menu\'}}\" aria-label=\"{{vm.sideNavOpen ? \'Close navigation menu\' : \'Open navigation menu\'}}\"><span class=\"ibm-icon--justify\" aria-hidden=\"true\"></span></button>\n  <ul role=\"menu\" ng-show=\"vm.sideNavOpen\">\n    <li ng-class=\"[{\'active\': vm.location(link.href)}]\" ng-repeat=\"link in links track by link.href\">\n      <a role=\"menuitem\" href=\"{{link.href}}\" title=\"{{link.label}}\"><span class=\"{{link.icon}}\" aria-hidden=\"true\"></span></a>\n    </li>\n  </ul>\n</nav>\n");}]);
/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';
(function () {

  angular
    .module('watson.common.ui')
    .directive('helpAssistant', helpAssistant);

  function helpAssistant () {
    return {
      restrict : 'E',
      templateUrl : 'directives/helpAssistant/helpAssistant.html',
      scope : {
        template : '=',
        showHelp : '='
      }
    };
  }

})();

/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';

(function () {
  angular
    .module('watson.common.ui')
    .controller('NavigationController', NavigationController);


  var DEFAULT_TRANSLATIONS = {
    'LOADING' : 'Loading',
    'DETAILS' : 'Details',
    'CLOSE' : 'Close'
  };

  var DEFAULT_ICONS = {
    'MENU' : '#ibm-icon--menu_24',
    'CLOSE' : '#ibm-icon--close_cancel_24'
  };

  NavigationController.$inject = ['$scope', '$location', '$q'];

  function NavigationController ($scope, $location, $q) {
    var vm = this;

    vm.toggleMenu = toggleMenu;
    vm.location = location;
    vm.setCurrent = setCurrent;
    vm.toggleDetails = toggleDetails;

    vm.showTabs = true;
    vm.sections = [];
    vm.footer = [];
    vm.icons = DEFAULT_ICONS;
    vm.translations = DEFAULT_TRANSLATIONS;

    vm.loading = true;

    $scope.$watch('config', function (config, oldConfig) {
      vm.loading = config && typeof config.then === 'function';
      $q.when(config, setup, handleRejection);
    });

    $scope.$on('$locationChangeSuccess', function () {
      if (vm.sections) {
        initializeLocation(vm.sections);
      }
    });

    function initializeLocation (sections) {
      // Find current section from path e.g. /elements
      var currentUrl = $location.path();
      for (var i = 0; i < sections.length; i++) {
        var links = sections[i].links;
        if (links) {
          for (var j = 0; j < links.length; j++) {
            if (links[j].href.indexOf(currentUrl) > -1) {
              setCurrent(sections[i], links[j]);
              return;
            }
          }
        }
      }
    }


    function setup (config) {

      if (config) {
        vm.label = config.label;
        vm.showTabs = !(config.showTabs === false);
        vm.footer = config.footer;
        vm.translations = angular.extend({}, DEFAULT_TRANSLATIONS, config.translations || {});
        vm.icons = angular.extend({}, DEFAULT_ICONS, config.icons || {});

        // If sections are a promise, loading in progress
        vm.loading = config.sections && typeof config.sections.then === 'function';
        $q.when(config.sections, setupSections, handleRejection);

      } else {
        vm.loading = false;
      }

    }


    function setupSections (sections) {
      vm.sections = sections;
      initializeLocation(sections);
      vm.loading = false;
    }


    function handleRejection () {
      vm.loading = false;
    }


    function toggleMenu (open) {
      if (open === true || open === false) {
        vm.menuOpen = open;
      } else {
        vm.menuOpen = !vm.menuOpen;
      }
    }


    function setCurrent (section, link) {
      if (section) {
        vm.currentSection = section;
      }
      vm.currentLink = link;
    }


    function toggleDetails (link) {
      if (link.detailsOpen) {
        link.detailsOpen = false;
      } else {
        link.detailsOpen = true;
      }
    }

  }
}());

/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';
(function () {

  angular
    .module('watson.common.ui')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict : 'E',
      templateUrl : 'directives/navigation/navigation.html',
      scope : {
        config : '='
      },
      controllerAs : 'vm',
      controller : 'NavigationController'
    };
  }

})();

/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';
(function () {

  angular
    .module('watson.common.ui')
    .directive('scrollToTop', scrollToTop);


  function scrollToTop ($window) {
    return {
      restrict : 'A',
      templateUrl : 'directives/scrollToTop/scrollToTop.html',
      link : function (scope, element, attributes) {
        var container = angular.element(element[0].querySelector('#scroll-to-top-container'));
        var useWindow = false;

        var scrollBody = angular.element(document.getElementById(attributes.scrollBody));
        if (!scrollBody.length) {
          scrollBody = angular.element($window);
          useWindow = true;
        }

        scrollBody.bind('scroll', function () {
          var scrollValue = (useWindow ? this.scrollY : this.scrollTop);
          if (scrollValue >= 100) {
            container.removeClass('ng-hide');
          } else {
            container.addClass('ng-hide');
          }
          scope.$apply();
        });

        var button = angular.element(element[0].querySelector('#scroll-to-top-button'));
        button.bind('click', function () {
          if (useWindow) {
            scrollBody[0].scrollY = 0;
          } else {
            scrollBody[0].scrollTop = 0;
          }
        });
      }
    };
  }

})();

/**
 * Copyright IBM Corp. 2016
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';

(function () {
  angular
    .module('watson.common.ui')
    .controller('SideNavController', SideNavController);

  SideNavController.$inject = ['$scope', '$location'];

  function SideNavController ($scope, $location) {
    var vm = this;

    vm.toggleMenu = function () {
      vm.sideNavOpen = !vm.sideNavOpen;
      angular.element(document.body).toggleClass('side-nav-open');
    };

    vm.location = function (href) {
      if (!href) {
        return false;
      }
      if (href.indexOf('#') == 0) {
        href = href.substring(1);
      }
      return $location.url().indexOf(href) > -1;
    };

    $scope.$on('$destroy', function () {
      angular.element(document.body).removeClass('side-nav-open');
    });
  }
}());

/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

'use strict';
(function () {

  angular
    .module('watson.common.ui')
    .directive('sideNav', sideNav);

  function sideNav () {
    return {
      restrict : 'E',
      templateUrl : 'directives/sideNav/sideNav.html',
      scope : {
        links : '='
      },
      controllerAs : 'vm',
      controller : 'SideNavController'
    };
  }

})();
