export function getStaticPath(): string {
  return process.env.NODE_ENV === 'production' ? 'https://epl18-9164b.web.app/_next/static' : 'http://localhost:5000/static';
}
