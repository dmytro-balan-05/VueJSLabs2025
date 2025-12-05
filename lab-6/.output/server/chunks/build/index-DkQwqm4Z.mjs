import { _ as _sfc_main$1 } from './Card-DZPm8rbz.mjs';
import { b as _sfc_main$2 } from './Button-3RZAQ_YZ.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useSeoMeta } from './server.mjs';
import { u as useFetch } from './fetch-D71fzI67.mjs';
import 'reka-ui';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'consola';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'node:path';
import 'tailwind-variants';
import '@vueuse/core';
import './index-ByA__lCN.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-BTaDajeh.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Блог - Всі статті",
      description: "Список корисних статей про Nuxt."
    });
    const { data: posts, status } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/posts", "$pD-mX6tkcV")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_UButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 style="${ssrRenderStyle({ "margin-bottom": "20px" })}">Блог</h1>`);
      if (unref(status) === "pending") {
        _push(`<div class="loading"> Завантаження... </div>`);
      } else {
        _push(`<div class="blog-grid"><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: post.id
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3${_scopeId}>${ssrInterpolate(post.title)}</h3>`);
              } else {
                return [
                  createVNode("h3", null, toDisplayString(post.title), 1)
                ];
              }
            }),
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  to: `/blog/${post.slug}`,
                  block: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Читати далі`);
                    } else {
                      return [
                        createTextVNode("Читати далі")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    to: `/blog/${post.slug}`,
                    block: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Читати далі")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p style="${ssrRenderStyle({ "margin-bottom": "15px", "color": "#666" })}"${_scopeId}>${ssrInterpolate(post.desc)}</p>`);
              } else {
                return [
                  createVNode("p", { style: { "margin-bottom": "15px", "color": "#666" } }, toDisplayString(post.desc), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DkQwqm4Z.mjs.map
