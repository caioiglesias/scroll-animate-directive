'use strict';

angular.module('scroll-animate-directive', [])
    .directive('anmScroll', function($window) {
        return {
            restrict: 'A',
            transclude: true,
            template: '<div ng-transclude ng-show=\'show\' class={{prevClass}}></div>',
            link: function(scope, element, attrs) {
                console.log(attrs);
                scope.prevClass=attrs.class;

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

                angular.element($window).bind('scroll', function() {
                    var targetOffset = attrs.anmScroll;
                    var offset = getScrollOffsets($window);
                    if (offset.y >= targetOffset) {
                        scope.show = true;
                    } else {
                        scope.show = false;
                    }
                    scope.$apply();
                });
            }
        };
    });