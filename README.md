# scroll-animate-directive

This is a directive to handle scroll based animations on angular.
I encourage using it with animate.css to make things easier.

### Demo
http://embed.plnkr.co/CXMXsuulxFxYElZUZBoT/preview

### Usage

HTML

```
<div class="box" ani-scroll="50">
animate me!
</div>
```

ani-scroll value is the scroll position at which the animation should trigger.

```
<div class="box" ani-view>
animate me!
</div>
```

ani-view triggers the animation when the element enters the viewport.


CSS:
```
.box.ng-hide{
  display: block!important;
  visibility: hidden;
}

.box.ng-hide-add {
  animation: bounceOutLeft 0.4s;
  visibility: visible;
}
.box.ng-hide-remove {
  animation: bounceInLeft 0.4s;
}
```

### Dependencies
- angular-animate 1.3.4
- angular 1.3.0
- animate.css
