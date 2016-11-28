window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
  if (loaded) {
    document.querySelector('.castCheck').textContent =
      'このブラウザにはGoogle Castがインストールされているので大丈夫です．';
  } else {
    document.querySelector('.castCheck').textContent =
      'このブラウザにはGoogle Castがインストールされていないようです．';
    console.error(errorInfo);
  }
}
