import { AnyObject } from '@/types'

export const icons: AnyObject = {
  // 播放
  'play': `<svg  width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z" fill="none" stroke="#999" stroke-width="2" stroke-linejoin="round"/></svg>`,
  // 暂停
  'pause': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M16 12V36" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 12V36" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 停止
  'stop': `<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="#999" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>`,
  // 全屏
  'arrows-expand': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="24" y="24" width="20" height="16" rx="2" fill="none" stroke="#999" stroke-width="2" stroke-linejoin="round"/></svg>`,
  // 圆圈箭头向左
  'arrow-circle-left': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#999" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>`,
  // 监控视频
  'video-camera': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01"/><path d="M19.0059 26.2758V37H5" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M42.6205 21.2153L38.7568 20.18L34.7544 27.3898L40.55 28.9427L42.6205 21.2153Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.7566 20.18L34.7542 27.3898L33.0118 30.0287L5 22.523L8.62347 9L40.499 17.541L38.7566 20.18Z" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 注意
  'attention': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#999" stroke-width="2" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#999"/><path d="M24 12V28" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 注意
  'attention-fill': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#ff4d4f" stroke="#ff4d4f" stroke-width="2" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#FFF"/><path d="M24 12V28" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 关闭
  'close': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 左
  'left': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M31 36L19 24L31 12" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 右
  'right': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M19 12L31 24L19 36" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 加
  'plus': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24.0607 10L24.024 38" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 24L38 24" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // loading 菊花样式
  'loading-one': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 4V8" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 6.67944L32 10.1435" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M41.3206 14L37.8565 16" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 24H40" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M41.3206 34L37.8565 32" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 41.3206L32 37.8565" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 44V40" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 41.3206L16 37.8565" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.67944 34L10.1435 32" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 24H8" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.67944 14L10.1435 16" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 6.67944L16 10.1435" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // loading 箭头
  'loading-four': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#8799a3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 已定位 绿色
  'local--green': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43V43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574" stroke="#00be63" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z" fill="#00be63" stroke="#00be63" stroke-width="4" stroke-linejoin="round"/><path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z" fill="#00be63" stroke="#FFF" stroke-width="4" stroke-linejoin="round"/></svg>`,
  //搜索
  'search': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.2218 33.2218L41.7071 41.7071" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  // 校验 √
  'check': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M43 11L16.875 37L5 25.1818" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
}

interface GetIcon {
  icon: string,
  color?: string,
  fill?: string
}

export const getIcon = (params: GetIcon) => {
  const { icon, fill, color } = params

  // const PathRegexp = /<path.*?\/>/ig
  const FillRegexp = /fill=".*?"/ig
  const StrokeRegexp = /stroke=".*?"/ig

  const temp = icons[icon].replace(FillRegexp, (val: string) => {
    return fill && val !== 'fill="none"' ? `fill="${fill}"` : val
  })

  const result = temp.replace(StrokeRegexp, (val: string) => {
    return color ? `stroke="${color}"` : val
  })
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(result)}`
}
