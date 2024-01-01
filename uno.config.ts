import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetRadix } from 'unocss-preset-radix'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-primary-9 text-white cursor-pointer hover:bg-primary-10 disabled:cursor-default disabled:bg-accent-9 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:bg-accent-3'],
  ],
  presets: [
    presetUno(),
    presetRadix({
      palette: ['indigo', 'slate', 'gray', 'green', 'purple'],
      aliases: {
        primary: 'indigo',
        accent: 'slate',
      },
      darkSelector: '.dark',
      extend: false,
    },
    ),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
