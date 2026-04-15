// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/research/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Trust-weighted Multi-modal Evidence Fusion (TMEF) for Structural Health Monitoring.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/research/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-received-the-young-scientist-award-at-seoul-national-university-for-research-contributions-to-shm-and-digital-twins-for-offshore-wind",
          title: 'Received the Young Scientist Award at Seoul National University for research contributions to...',
          description: "",
          section: "News",},{id: "news-icpmg-2026-paper-on-bearing-capacity-degradation-of-suction-bucket-foundations-under-general-scour-accepted-for-geotec-hanoi-2026",
          title: 'ICPMG 2026 paper on Bearing Capacity Degradation of Suction Bucket Foundations under General...',
          description: "",
          section: "News",},{id: "news-op-v1-0-0-rc2-released-on-pypi-pip-install-op3-framework-140-tests-39-v-amp-amp-v-benchmarks-34-reproducible-figures",
          title: 'Op³ v1.0.0-rc2 released on PyPI — pip install op3-framework. 140 tests, 39 V&amp;amp;amp;V...',
          description: "",
          section: "News",},{id: "news-paper-a-from-sensors-to-decisions-drafted-and-queued-for-submission-to-reliability-engineering-amp-amp-system-safety-within-two-weeks",
          title: 'Paper A (“From Sensors to Decisions”) drafted and queued for submission to Reliability...',
          description: "",
          section: "News",},{id: "news-phd-defense-scheduled-for-3-september-2026-at-seoul-national-university-advisor-prof-sung-ryul-kim",
          title: 'PhD defense scheduled for 3 September 2026 at Seoul National University, advisor Prof....',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%79%65%6F%6E%67%73%75%6E%6B%69%6D@%73%6E%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ksk5429", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/research/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
