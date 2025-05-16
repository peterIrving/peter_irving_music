/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Add Vue component type declarations
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// Add Astro client directive type declarations
declare namespace JSX {
    interface IntrinsicAttributes {
        'client:load'?: boolean;
        'client:idle'?: boolean;
        'client:visible'?: boolean;
        'client:media'?: string;
        'client:only'?: boolean | string;
    }
}
