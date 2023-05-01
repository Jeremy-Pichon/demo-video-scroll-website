
export const data = {
  head: {
    title: 'Video Scroll Demo',
    description: 'Video Scroll Demo',
  },
  images: {
    width: 1024,
    height: 1024,
    startIndex: 1,
    endIndex: 344,
    getPath: (idx: number): string => `/images/out${idx}.webp`,
  }
}