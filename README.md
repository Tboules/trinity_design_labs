# Trinity Design Labs Site

## Infrastructure Review

---

1. All of our Image will be uploaded to Cloudinary

![Coudinary Console](https://res.cloudinary.com/dojwooqzh/image/upload/v1755224799/Screenshot_2025-08-14_at_7.26.23_PM_fjflre.jpg)

Cloudinary makes scaling and querying performant images really easy.
You can copy the URL's directly after uploading, but you can also pass params
to the URL which will make it much more performant when loading the images.

We want the images to load instantly basically. 0 Latency is important.

In the example below I passed "f_auto,q_auto" inbetween upload and the file path.
This tells Cloudinary to automatically choose the format and compression level for the file based on the view width.

```html
<img
  src="https://res.cloudinary.com/dojwooqzh/image/upload/f_auto,q_auto/v1755215424/2150904669_2_yfdn45.png"
/>
```

---

2. Our collections will be structured using JSON.
   The files will live here: ./src/content/our-work/\*.json
   The structure of the collections uses a zod schema so you will get type safetly out of the box.

Look at the file "./src/content.config.ts"

For each Our Work Testimonial we can add a json file with the proper fromat defined in the content config.
Feel free to edit the content config to match the necessary data based on the Figma files.

What I provided is a small sample of how this all could work.

[Documentation Around Collections in Astro](https://docs.astro.build/en/guides/content-collections/)

---

3. Everything else is just plain Astro (html) and Tailwind. Should be straight forward.
