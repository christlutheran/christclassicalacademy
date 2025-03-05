// Decap CMS configuration
window.CMS_MANUAL_INIT = true;

window.addEventListener('load', function() {
  // Import Decap CMS
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/decap-cms@^3.1.3/dist/decap-cms.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = function() {
    // Initialize Decap CMS
    window.CMS.init({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        local_backend: true,
        media_folder: 'public/images',
        public_folder: '/images',
        collections: [
          // Pages collection
          {
            name: 'pages',
            label: 'Pages',
            files: [
              {
                name: 'home',
                label: 'Home Page',
                file: 'src/content/pages/home.md',
                fields: [
                  { name: 'title', label: 'Title', widget: 'string' },
                  { name: 'hero_heading', label: 'Hero Heading', widget: 'string' },
                  { name: 'hero_subheading', label: 'Hero Subheading', widget: 'string' },
                  { name: 'hero_image', label: 'Hero Background Image', widget: 'image' },
                ]
              },
              {
                name: 'about',
                label: 'About Page',
                file: 'src/content/pages/about.md',
                fields: [
                  { name: 'title', label: 'Title', widget: 'string' },
                  { name: 'heading', label: 'Heading', widget: 'string' },
                  { name: 'subheading', label: 'Subheading', widget: 'string' },
                  { name: 'content', label: 'Content', widget: 'markdown' },
                ]
              },
              {
                name: 'academics',
                label: 'Academics Page',
                file: 'src/content/pages/academics.md',
                fields: [
                  { name: 'title', label: 'Title', widget: 'string' },
                  { name: 'heading', label: 'Heading', widget: 'string' },
                  { name: 'subheading', label: 'Subheading', widget: 'string' },
                  { name: 'content', label: 'Content', widget: 'markdown' },
                ]
              },
              {
                name: 'admissions',
                label: 'Admissions Page',
                file: 'src/content/pages/admissions.md',
                fields: [
                  { name: 'title', label: 'Title', widget: 'string' },
                  { name: 'heading', label: 'Heading', widget: 'string' },
                  { name: 'subheading', label: 'Subheading', widget: 'string' },
                  { name: 'content', label: 'Content', widget: 'markdown' },
                ]
              },
            ]
          },
          // News collection
          {
            name: 'news',
            label: 'News & Events',
            folder: 'src/content/news',
            create: true,
            slug: '{{slug}}',
            fields: [
              { name: 'title', label: 'Title', widget: 'string' },
              { name: 'date', label: 'Date', widget: 'datetime' },
              { name: 'featured_image', label: 'Featured Image', widget: 'image', required: false },
              { name: 'excerpt', label: 'Excerpt', widget: 'text' },
              { name: 'body', label: 'Body', widget: 'markdown' },
            ]
          },
          // Faculty collection
          {
            name: 'faculty',
            label: 'Faculty & Staff',
            folder: 'src/content/faculty',
            create: true,
            slug: '{{slug}}',
            fields: [
              { name: 'name', label: 'Name', widget: 'string' },
              { name: 'position', label: 'Position', widget: 'string' },
              { name: 'image', label: 'Photo', widget: 'image', required: false },
              { name: 'bio', label: 'Biography', widget: 'markdown' },
              { name: 'order', label: 'Display Order', widget: 'number', default: 100 },
            ]
          },
          // Testimonials collection
          {
            name: 'testimonials',
            label: 'Testimonials',
            folder: 'src/content/testimonials',
            create: true,
            slug: '{{slug}}',
            fields: [
              { name: 'quote', label: 'Quote', widget: 'text' },
              { name: 'author', label: 'Author Name', widget: 'string' },
              { name: 'role', label: 'Author Role', widget: 'string' },
              { name: 'featured', label: 'Featured on Homepage', widget: 'boolean', default: false },
              { name: 'image', label: 'Author Image', widget: 'image', required: false },
            ]
          }
        ]
      }
    });
  };
});