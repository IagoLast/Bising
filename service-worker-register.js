(async () => {
  if (!navigator.serviceWorker) {
    console.log('foo?')
    return;
  }

  if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register');
    return;
  }
  const reg = await  navigator.serviceWorker.register('sw.js', { scope: './' });
  console.log('Service worker has been registered for scope:' + reg.scope);
})();