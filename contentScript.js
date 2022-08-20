;(() => {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
      let ExistedEl = document.querySelector('#amr-aboras-btn')
      if (!ExistedEl) {
        const e = document.createElement('button')
        e.setAttribute('id', 'amr-aboras-btn')
        e.className = 'artdeco-button--2'
        e.style.cssText =
          'background-color:white; border-radius:8px; padding-left:6px; padding-right:6px; font-size:1.6rem; font-weight: 600; margin-left:4px; margin-right:6px;'
        var intervalID = setInterval(function () {
          let targetDiv = document.querySelector('.pv-top-card-v2-ctas')
          let H1Text = document.querySelector('.text-heading-xlarge')
          if (targetDiv != null && H1Text != null) {
            e.innerHTML = H1Text.innerHTML
            targetDiv.appendChild(e)
            clearInterval(intervalID)
          }
        }, 3000)
        e.onclick = () => {
          alert(`Hello This is ${e.innerHTML} `)
        }
      } else if (ExistedEl) {
        let H1Text = document.querySelector('.text-heading-xlarge')
        ExistedEl.innerHTML = H1Text.innerHTML
      }
      sendResponse({
        response: 'Message received',
      })
    }
  })
  // document.addEventListener('document_start', async () => {
  // })
})()

/**
 * 
 * ;(() => {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
      let ExistedEl = document.querySelector('#amr-aboras-btn')

      if (!ExistedEl && request.tabURL.includes('linkedin.com/in/') === true) {
        const e = document.createElement('button')
        e.setAttribute('id', 'amr-aboras-btn')
        e.className = 'artdeco-button--2'
        e.style.cssText =
          'background-color:white; border-radius:8px; padding-left:6px; padding-right:6px; font-size:1.6rem; font-weight: 600; margin-left:4px; margin-right:6px;'
        let H1Text = document.querySelector('.text-heading-xlarge')
        let targetDiv = document.querySelector('.pv-top-card-v2-ctas')
        var intervalID = setInterval(function () {
          if (H1Text != null) {
            e.innerHTML = H1Text.innerHTML
          }
          if (targetDiv != null) {
            targetDiv.appendChild(e)
            clearInterval(intervalID)
          }
        }, 3000)
        e.onclick = () => {
          alert(`Hello This is ${e.innerHTML} `)
        }
      } else if (ExistedEl) {
        ExistedEl.innerHTML = H1Text.innerHTML
        //  if (H1Text.innerHTML !== ExistedEl.innerHTML && H1Text != null) {
        //    ExistedEl.innerHTML = H1Text.innerHTML
        //  }
      }
      sendResponse({
        response: 'Message received',
      })
    }
  })
  // document.addEventListener('document_start', async () => {
  // })
})()

 * 
 */
