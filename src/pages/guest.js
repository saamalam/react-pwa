import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';
import FeaturesImage from '../resources/img/seo/features.png';
import CSSGlobalLocalImage from '../resources/img/seo/css-global-local.png';
import SkeletonImage from '../resources/img/seo/skeleton-loading.png';
import ImageOptimizationImage from '../resources/img/seo/image-optimization.png';

export default [
  {
    path: '/home',
    exact: true,
    component: () => import('../components/Home'),
    seo: {
      title: 'Home | ReactPWA Demo',
      description: 'Feature set offered by ReactPWA with pluggable @pawjs plugins. ReactPWA is highly customizable and once can achieve anything as it is extendable',
      image: FeaturesImage,
    },
  },
  {
    path: '/business',
    exact: true,
    component: () => import('../components/business'),
    seo: {
      title: 'CSS - Globally & Locally | ReactPWA Demo',
      description: 'Sometimes we use global css classes like pad-10 but sometimes we need to write class names within modules that do not conflict with other modules, that is where local css comes into the picture',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/entertainment',
    exact: true,
    component: () => import('../components/entertainment'),
    seo: {
      title: 'TypeScript Counter | ReactPWA Demo',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/science',
    exact: true,
    component: () => import('../components/science'),
    seo: {
      title: 'TypeScript Counter | ReactPWA Demo',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/technology',
    exact: true,
    component: () => import('../components/technology'),
    seo: {
      title: 'TypeScript Counter | ReactPWA Demo',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/sports',
    exact: true,
    component: () => import('../components/sports'),
    seo: {
      title: 'TypeScript Counter | ReactPWA Demo',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/async-loading',
    exact: true,
    loadData: async () => new Promise((r) => {
      setTimeout(() => {
        fetch('https://jacklyons.me/wp-json/wp/v2/posts')
          .then(res => res.json())
          .then(res => r(res));
      }, 1000);
    }),
    component: () => import('../components/skeleton-loading'),
    skeleton,
    seo: {
      title: 'Async Loading | ReactPWA Demo',
      description: 'Tired of adding ugly loaders? Do not let your users get confused, give them the best user experience of what is getting loaded. Use Skeleton Loading',
      image: SkeletonImage,
    },
  },
  {
    path: '/image-optimization',
    exact: true,
    component: () => import('../components/image-optmization'),
    seo: {
      title: 'Image Optimization | ReactPWA Demo',
      description: 'Serve optimize images automatically with Lazy loading and WebP support with fallback to JPG/PNG of original image.',
      image: ImageOptimizationImage,
    },
  },
];
