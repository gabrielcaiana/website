export default defineNuxtPlugin(() => {
  const { clarityId } = useRuntimeConfig()
  const scriptID = 'nuxt-microsoft-clarity'

  if (document.getElementById(scriptID)) {
    return
  }

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = scriptID
  script.defer = true
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  `
  document.head.appendChild(script)
})
