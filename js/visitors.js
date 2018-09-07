window.fetch('https://tehpsalmist-visitors.now.sh?visit=1', {
  headers: {
    'Accept': '*/*'
  }
})
  .then(response => response.json())
  .then(data => {
    const footer = document.querySelector('footer')
    const text = document.createElement('p')
    text.classList = 'visitors'
    text.innerHTML = `${data.visitorCount > 1 ? `Welcome back! (x${data.visitorCount})` : 'Thanks for stopping by!'}<br><em>Total Visitors</em>: ${data.totalVisitors}`
    footer.appendChild(text)
  })
  .catch(err => console.error(err))
