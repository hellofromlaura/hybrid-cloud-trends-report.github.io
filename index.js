AOS.init({once: true});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const box1 = document.querySelector('#animate-stats1');
const box2 = document.querySelector('#animate-stats2');
const box3 = document.querySelector('#animate-stats3');

const box4 = document.querySelector('#animate-stats4');
const box5 = document.querySelector('#animate-stats5');
const box6 = document.querySelector('#animate-stats6');
const box7 = document.querySelector('#animate-stats7');

var bar1 = new ProgressBar.Circle(circle1, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#11BAE9',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

var bar2 = new ProgressBar.Circle(circle2, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#6ABD4A',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

var bar3 = new ProgressBar.Circle(circle3, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#F8A919',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

var bar4 = new ProgressBar.Circle(circle4, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#69BAE8',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

var bar5 = new ProgressBar.Circle(circle5, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#8DBE55',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

var bar6 = new ProgressBar.Circle(circle6, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#2E53AB',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

var bar7 = new ProgressBar.Circle(circle7, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1400,
  color: '#F8A919',
  trailColor: '#E2E2E2',
  trailWidth: 18,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

document.addEventListener('scroll', function () {
  if (isInViewport(box1)) {
    bar1.animate(0.82);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box2)) {
    bar2.animate(0.92);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box3)) {
    bar3.animate(0.08);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box4)) {
    bar4.animate(0.09);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box5)) {
    bar5.animate(0.62);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box6)) {
    bar6.animate(0.21);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box7)) {
    bar7.animate(0.08);  // Number from 0.0 to 1.0
  }
});

// horizontal bar
const data = {
  labels: ['Backup or disaster recovery', 'Application development', 'Archiving', 'Cloudbursting', 'Security processes', 'Asset tracking' ],
  datasets: [{
    axis: 'y',
    // label: false,
    data: [73, 70, 54, 51, 47, 45],
    fill: false,
    backgroundColor: [
      '#68B8E6',
      '#69BAE8',
      '#B1E3F5',
      '#8DBE55',
      '#ADD084',
      '#CFE5B8'
    ]
  }]
};
const config = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          dissplay: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
            display: false,
        }
      }
    },
    tooltips: {
      enable: false,
    }
  }
};
const horizontalBar1 = new Chart(
  document.getElementById('horizontalBar1'),
  config
);
const data2 = {
  labels: ['Managing security', 'More agile and scalable development environment', 'Best of breed cloud services and applications', 'Business agility and innovation', 'Reducing cloud services costs', 'Business resilience and disaster recovery' ],
  datasets: [{
    axis: 'y',
    // label: false,
    data: [43, 42, 41, 40, 34, 34],
    fill: false,
    backgroundColor: [
      '#68B8E6',
      '#69BAE8',
      '#B1E3F5',
      '#8DBE55',
      '#ADD084',
      '#CFE5B8'
    ]
  }]
};
const config2 = {
  type: 'bar',
  data: data2,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          dissplay: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
            display: false,
        }
      }
    },
    tooltips: {
      enable: false,
    }
  }
};
const horizontalBar2 = new Chart(
  document.getElementById('horizontalBar2'),
  config2
);

const data3 = {
  labels: ['Security concerns', 'Operational complexity', 'Managing costs', 'Compliance and privacy', 'Disparate cloud operating model', 'Lack of visibility and control' ],
  datasets: [{
    axis: 'y',
    // label: false,
    data: [43, 42, 41, 40, 34, 34],
    fill: false,
    backgroundColor: [
      '#68B8E6',
      '#69BAE8',
      '#B1E3F5',
      '#8DBE55',
      '#ADD084',
      '#CFE5B8'
    ]
  }]
};

const config3 = {
  type: 'bar',
  data: data3,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          dissplay: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
            display: false,
        }
      }
    },
    tooltips: {
      enable: false,
    }
  }
};
const horizontalBar3 = new Chart(
  document.getElementById('horizontalBar3'),
  config3
);

const data5 = {
  labels: ['Created a cloud center of excellence', 'Adopted a cost benefit approach', 'Adopted an AIOps operating model', 'Centralized CloudOps and NetOps functions', 'Developed multicloud networking strategy' ],
  datasets: [{
    axis: 'y',
    // label: false,
    data: [57, 53, 53, 50, 50],
    fill: false,
    backgroundColor: [
      '#68B8E6',
      '#69BAE8',
      '#B1E3F5',
      '#8DBE55',
      '#ADD084'
    ]
  }]
};

const config5 = {
  type: 'bar',
  data: data5,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          dissplay: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
            display: false,
        }
      }
    },
    tooltips: {
      enable: false,
    }
  }
};
const horizontalBar5 = new Chart(
  document.getElementById('horizontalBar5'),
  config5
);

const data6 = {
  labels: ['Performance', 'Security', 'Speed', 'Workload mobility', 'Cost', 'Agility', 'Scalability', 'Resiliency' ],
  datasets: [{
    axis: 'y',
    // label: false,
    data: [45, 44, 39, 36, 33, 30, 29, 29],
    fill: false,
    backgroundColor: [
      '#68B8E6',
      '#69BAE8',
      '#B1E3F5',
      '#8DBE55',
      '#89C966',
      '#9ED281',
      '#B2DC9C',
      '#C7E5B7',
    ]
  }]
};

const config6 = {
  type: 'bar',
  data: data6,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          dissplay: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
            display: false,
        }
      }
    },
    tooltips: {
      enable: false,
    }
  }
};
const horizontalBar6 = new Chart(
  document.getElementById('horizontalBar6'),
  config6
);

console.log('chart 6', horizontalBar6);