export default {
  blog: {
    totalCount: 2,
    edges: [{
      node: {
        id: '0bb54b5f-3e2a-5fb5-b1d8-884478cddc40',
        frontmatter: {
          title: 'NORWAC - I AM ON MY WAY',
          image: '/assets/cancer-norwac.jpg',
          publishDate: 'May 23, 2019',
          relatedItems: ['Cancer', 'Gemini'],
        },
        excerpt: "<p>I'm on my way to NORWAC - an astrological convention in Seattle, WA.  It has been almost 20 years since I was at a big conference and I am bursting with delight.  The action begins on Friday, May 24 at 1:00 PM and the event chart explodes with…</p>",
        fields: { slug: '/blog/norwac-i-am-on-my-way/' },
      },
    }, {
      node: {
        id: '361c122c-1e55-5ee3-9a9f-935f6c6b2e2f',
        frontmatter: {
          title: 'The Pleiades',
          image: '/assets/pleiades.jpg',
          publishDate: 'May 21, 2019',
          relatedItems: ['Taurus', 'Gemini'],
        },
        excerpt: '<p>The seven sisters gather</p>\n<p>At the shoulder of the Bull.</p>\n<p>They take a space no bigger</p>\n<p>Then the moon when it is full.</p>\n<p>They rise like shining warriors</p>\n<p>Out of the curling dust.</p>\n<p>They are the mother of all children,</p>\n<p>The goddess of all lust,</p>\n<p>The teacher of our…</p>',
        fields: { slug: '/blog/the-pleiades/' },
      },
    }],
  },
  events: {
    totalCount: 2,
    edges: [{
      node: {
        id: 'f0ecfd4d-1054-5fa2-90eb-5e9bff25e985',
        frontmatter: {
          title: 'Moon Circle',
          image: '/assets/gemini-moon-circle.jpg',
          eventDate: 'May 30, 2019',
          eventTime: '7 PM - 9 PM',
          eventDateShort: 'May 30',
          eventPrice: 25,
          priceDescription: '2 Hour Playshop',
          location: 'Divine Inspirations',
        },
        excerpt: '<p>Join us for a Goddess GEMINI Moon (12 Gemini) celebration at our sacred MOON CIRCLE.  We will explore the making "connections" lunar unfolding in June, learn about the "Lights Mandala" and apply our personal chart Lunar Planner to our monthly timing.</p>',
        fields: { slug: '/events/moon-circle/' },
      },
    }, {
      node: {
        id: 'b3ffaeb7-2067-54b0-a015-df104b6e1e34',
        frontmatter: {
          title: 'STONES OF FIRE',
          image: '/assets/stones-of-fire-lotus.jpg',
          eventDate: 'June 08, 2019',
          eventTime: '1PM - 4 PM',
          eventDateShort: 'Jun 08',
          eventPrice: 35,
          priceDescription: '3 Hour Playshop',
          location: 'DeMun Healing',
        },
        excerpt: '<p>A Healing Playshop</p>\n<p>Saturday, June 8, 2019, 1-4 PM</p>\n<p>DeMun Healing, 734 De Mun Ave., Clayton, MO 63105</p>\n<p>Every action, thought and emotion is empowered by a corresponding unending flow of energy – the Spinal Column is the <em>Trunk of Life</em> in the <em>Tree of Man</em>.  The chakras are the <strong>Stones of Fire</strong>…</p>',
        fields: { slug: '/events/stones-of-fire/' },
      },
    }],
  },
  natalChart: {
    id: '1a0bbe84-ce51-5251-8cc5-b91d976be40d',
    frontmatter: {
      title: 'Natal Chart',
      type: 'services',
      onlinePrice: 140,
      inPersonPrice: 175,
      origin: 'Western',
    },
    excerpt: '<p>This chart is the perfect introduction to understanding your Astrological dynamics. With an in-depth look into the planetary energies at work since your life began, you can make informed decisions about the world around you and the future that you…</p>',
    fields: { slug: '/services/natal-chart/' },
  },
  toolboxItems: {
    edges: [{
      node: {
        frontmatter: {
          title: 'Aries',
          toolboxType: 'Signs',
        },
        fields: { slug: '/toolbox/aries/' },
      },
    }, {
      node: {
        frontmatter: {
          title: 'First House',
          toolboxType: 'Houses',
        },
        fields: { slug: '/toolbox/first-house/' },
      },
    }, {
      node: {
        frontmatter: {
          title: 'Sun',
          toolboxType: 'Planets',
        },
        fields: { slug: '/toolbox/sun/' },
      },
    }],
  },
};
