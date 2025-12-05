import { b as _sfc_main$1 } from './Button-3RZAQ_YZ.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { b as useSeoMeta } from './server.mjs';
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
import 'reka-ui';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Головна - Nuxt Blog",
      description: "Лабораторна робота №6: Nuxt 4 та Nitro"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}><h1>Вітаємо на Nuxt Course Blog</h1><p> Це демонстраційний проект на Nuxt 4 з використанням Server Routes. </p><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "gap": "10px" })}">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/blog",
        size: "xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Читати блог`);
          } else {
            return [
              createTextVNode("Читати блог")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://nuxt.com",
        target: "_blank",
        variant: "outline",
        size: "xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Документація `);
          } else {
            return [
              createTextVNode(" Документація ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dk6dHuId.mjs.map
