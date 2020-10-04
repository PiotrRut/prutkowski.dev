import './src/css/style.css';
import './src/css/animate.css';
import './src/css/languages.css';
import './src/css/prism-okaidia.css';

// This will invalidate old site cache and trigger a refresh everytime there is a new update pushed,
// meaning visitors to the site will always be presented with the most up to date content.
export const onServiceWorkerUpdateReady = () => window.location.reload();
