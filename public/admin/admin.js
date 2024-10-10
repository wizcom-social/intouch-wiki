import CMS from "decap-cms-app";

// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;

// Initialize without passing in config
CMS.init();

// Optionally pass in a config object.
CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      {
        label: "Blog",
        name: "blog",
        folder: "_posts/blog",
        create: true,
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Publish Date", name: "date", widget: "datetime" },
          { label: "Featured Image", name: "thumbnail", widget: "image" },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
});
