import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'consola';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'node:path';

const posts_get = defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: "Nuxt 4: \u0429\u043E \u043D\u043E\u0432\u043E\u0433\u043E?",
      slug: "nuxt-4-new",
      desc: "\u041E\u0433\u043B\u044F\u0434 \u043D\u043E\u0432\u043E\u0457 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438 \u043F\u0430\u043F\u043E\u043A \u0442\u0430 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0435\u0439.",
      content: "Nuxt 4 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454 \u0441\u043F\u0440\u043E\u0449\u0435\u043D\u0443 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 app/..."
    },
    {
      id: 2,
      title: "Nitro Server",
      slug: "nitro-server",
      desc: "\u042F\u043A \u043F\u0440\u0430\u0446\u044E\u0454 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0438\u0439 \u0440\u0443\u0448\u0456\u0439 \u0443 Nuxt.",
      content: "Nitro \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 API endpoints \u0431\u0435\u0437 \u0437\u0430\u0439\u0432\u0438\u0445 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C."
    },
    {
      id: 3,
      title: "SEO \u0432 Nuxt",
      slug: "seo-nuxt",
      desc: "\u041C\u0435\u0442\u0430-\u0442\u0435\u0433\u0438, sitemap \u0442\u0430 robots.txt.",
      content: "\u041C\u043E\u0434\u0443\u043B\u044C @nuxtjs/seo \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0443\u0454 \u0431\u0456\u043B\u044C\u0448\u0456\u0441\u0442\u044C \u0440\u0443\u0442\u0438\u043D\u043D\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."
    }
  ];
});

export { posts_get as default };
//# sourceMappingURL=posts.get.mjs.map
