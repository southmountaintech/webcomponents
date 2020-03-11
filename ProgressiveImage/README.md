# ProgressiveImage

## Description
A web component that renders a small image initially, and then the larger image progressively.  Inspired by this [Article](https://jmperezperez.com/medium-image-progressive-loading-placeholder/) from [José M. Pérez](https://github.com/JMPerez/).

## Installation
```shell script
npm install @southmountaintech/progressive-image
```

## Usage

In order to use this you need 3 thing:
1. An image you would like to display progressively.
2. A smaller, poorer quality version of the image you want to render.  I choose to make it 27x17.
3. The aspect ratio of the real image.  ```(height/width) X 100 = aspect ratio```.

Once you have those things, you have to decide how you would like to add it to you page.

## Example

You can add the ```progressive-image.web-component.js``` file to your html page.  Then use the component as an html tag.

For example, suppose I have an image named ```my-image.jpg``` and I create the small-poorer quality image ```my-image-small.jpg```.
The large images dimensions are ```1920x884``` which makes the aspect ratio ```(884/1920) X 100 = ~46.0```.
After having all these values, the html file would look like this.

```html

<html>
  <head>
    <script src="progressive-image.web-component.js"></script>
  </head>
  <body>
    <progressive-image
      smallimgsrc="my-image-small.jpg"
      largeimgsrc="my-image.jpg"
      alt="My Image"
      aspectratio="46"
    >
    </progressive-image>
  </body>
</html>

```

![DEMO](https://github.com/southmountaintech/webcomponents/blob/master/ProgressiveImage/demo.gif)

## Build
```shell script
npm run build
```

## Run Local
```shell script
cd public
npx http-server
```
