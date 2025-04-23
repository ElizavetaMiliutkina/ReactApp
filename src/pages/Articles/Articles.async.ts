import { lazy } from 'react';

const ArticlesAsync = lazy(() => import('./Articles.tsx'));

export default ArticlesAsync
