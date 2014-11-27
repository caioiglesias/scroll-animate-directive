# scroll-animate-directive

This is a directive to handle scroll based animations on angular.
I encourage using it with animate.css to make things easier.

### Demo
http://embed.plnkr.co/CXMXsuulxFxYElZUZBoT/preview

### Usage

HTML

```
<div class="marketing" anm-scroll="50" ng-show="showme">
animate me!
</div>
```

anm-scroll value is the scroll position at which the animation should trigger.

CSS:
```
.marketing.ng-hide{
  display: block!important;
  visibility: hidden;
}

.marketing.ng-hide-add {
  animation: bounceOutLeft 0.4s;
  visibility: visible;
}
.marketing.ng-hide-remove {
  animation: bounceInLeft 0.4s;
}
```

### Dependencies
- angular-animate 1.3.4
- angular 1.3.0

# Credits
- Mark Coleman
- Stuart Trutter
- Flek
