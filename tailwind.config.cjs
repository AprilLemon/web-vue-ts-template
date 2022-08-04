module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  // important: '#app',
  theme: {
    extend: {
      //   fontSize: {
      //     xs: '20rpx',
      //     sm: '24rpx',
      //     df: '28rpx',
      //     lg: '32rpx',
      //     xl: '36rpx',
      //     xxl: '44rpx',
      //   },
      //   colors: {
      //     success: '#67C23A',
      //     warning: '#E6A23C',
      //     danger: '#F56C6C',
      //     info: '#909399',
      //
      //     stress: '#303133',
      //     main: '#303133',
      //     minor: '#666666',
      //     placeholder: '#C0C4CC',
      //   },
      //   boxShadow: {
      //     df: '0 0 16rpx 0 rgba(0, 0, 0, 0.10)',
      //   },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
}
