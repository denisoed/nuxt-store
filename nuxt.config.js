module.exports = {
  srcDir: 'src',
  buildDir: 'dist',
  head: {
    script: [{
        src: 'js/jquery/jquery-2.2.4.min.js',
        body: true
      },
      {
        src: 'js/popper.min.js',
        body: true
      },
      {
        src: 'js/bootstrap.min.js',
        body: true
      },
      {
        src: 'js/plugins.js',
        body: true
      },
      {
        src: 'js/active.js',
        body: true
      },
    ]
  },
  css: [{
    src: '~/assets/css/core-style.css'
  }],
  plugins: [
    '~/plugins/vue-frag.js',
    {
      src: '~/plugins/vue-masonry.js',
      ssr: false
    }
  ]
};
