// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { PageContextBuiltIn } from "vite-plugin-ssr";
import type { App } from "vue";
import { inject } from "vue";
import { PageContext } from "./types";

export { usePageContext };
export { setPageContext };

const key = Symbol();

function usePageContext(): PageContextBuiltIn & PageContext {
  const pageContext = inject<PageContextBuiltIn & PageContext>(key)!;
  return pageContext;
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext);
}
