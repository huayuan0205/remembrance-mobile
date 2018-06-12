Vue.component('encyclopedia-item', {
  props: ['encyclopedia'],
  template: `
    <div class="encyclopedia-item">
      <h3 class="text-date">{{ encyclopedia.date }}</h3>
      <p class="text-desc">{{ encyclopedia.location }}. {{ encyclopedia.description }}</p>
    </div>
    `

})


var app = new Vue({
  el: '#app',
  data: {
    timeline: [
      { date: 'April 22, 2036', location: 'Rogers Street Park', description: 'Trees planted 20 years earlier have now matured to provide cooling canopy of shade on this hot spring day.'},
      { date: 'July 1, 2035', location: '119 Windsor Street', description: 'Site of The Port Resilience Hub, which first started to train neighborhood residents to prepare their homes for the coming hurricane season.'},
      { date: 'April 12, 2020', location: 'North Point', description: 'Cambridge Crossing Park built to provide neighborhood cooling and flood water storage.'}
    ]
  }
})
