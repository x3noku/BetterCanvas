# BetterCanvas
Library for  easier work with html5 canvas

First of all you need to create new object of Canvas:
```sh
let c = new Canvas(widthQuality heightQuality, backgroundColor);
```

Now you are able to create html canvas by using createHTML method:
```sh
c.createHTML(parentObject, width, height);
```

So, you are ready to draw!
Use drawRect method to draw rectangles. You can also add a stroke effect to them:
```sh
c.drawRect(x, y, width, height, backgroundColor, strokeColor, lineWidth);
```

If you want to clear some area you should use clearRect method:
```sh
c.clearRect(x, y, width, height);
```

If you don't give him any arguments it will clear the whole canvas:
```sh
c.clearRect();
```

Theare are also some methods, I think their names speak for itself:
* drawCircle(x, y, radius, backgroundColor, strokeColor, lineWidth);
* drawEllipse(x, y, radiusX, radiusY, backgroundColor, strokeColor, lineWidth);

When you are working with circles and ellipses, x & y coordinates isn't center coordinates,
it is coordinates of it's left top corner.

##This library was designed specially for my needs, so it is very primitive and doesn't provide 
some hard actions. Thank you for reading!
