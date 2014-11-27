'use strict';

angular.module('scroll-animate-directive', [])
    .directive('anmScroll', function ($window) {
        return function (scope, element, attrs) {
     
            function getScrollOffsets(w) {
     
                // Use the specified window or the current window if no argument 
                w = w || window;
     
                // This works for all browsers except IE versions 8 and before
                if (w.pageXOffset !== null) {
                    return {
                        x: w.pageXOffset,
                        y: w.pageYOffset
                    };
                }
     
                // For IE (or any browser) in Standards mode
                var d = w.document;
                if (document.compatMode === 'CSS1Compat') {
                    return {
                        x: d.documentElement.scrollLeft,
                        y: d.documentElement.scrollTop
                    };
                }
     
                // For browsers in Quirks mode
                return {
                    x: d.body.scrollLeft,
                    y: d.body.scrollTop
                };
            }
     
            angular.element($window).bind('scroll', function () {
                var targetOffset = attrs.anmScroll;
                var offset = getScrollOffsets($window);
                if (offset.y >= targetOffset) {
                    scope.showme = true;
                } else {
                    scope.showme = false;
                }
                scope.$apply();
            });
        };
    });