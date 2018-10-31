# The Vue File Template

* template, script and style
* only one tag at the root (like `<div`)

Single file components split your markup from your business logic and from your styles. This means you don't have to mix your CSS into your HTML or have plain JavaScript in your templates.

With this separation, you'll have them split apart which is especially useful when you want to keep your components siloed and isolated or when you want to do code splitting for components, so a component only loads additional resources when it is needed.

Another advantage is that you can specify languages per component and code type. You can use Typescript for the `<script>` tag and another templating engine like `jade/pug` and `sass` for css, but you don't have to define that globally if your components have different needs.
