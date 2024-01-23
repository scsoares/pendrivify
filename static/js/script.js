var timeFrameSelect = document.getElementById('timeFrameSelect');

function changeTimeFrame() {
  var shortTermContainer = document.getElementById(
    'short_term_pendrive_wrapper'
  );
  var mediumTermContainer = document.getElementById(
    'medium_term_pendrive_wrapper'
  );
  var longTermContainer = document.getElementById('long_term_pendrive_wrapper');

  var selectedTimeFrame = timeFrameSelect.value;

  shortTermContainer.style.display = 'none';
  mediumTermContainer.style.display = 'none';
  longTermContainer.style.display = 'none';

  if (selectedTimeFrame === 'short_term_pendrive_container') {
    shortTermContainer.style.display = 'block';
  } else if (selectedTimeFrame === 'medium_term_pendrive_container') {
    mediumTermContainer.style.display = 'block';
  } else if (selectedTimeFrame === 'long_term_pendrive_container') {
    longTermContainer.style.display = 'block';
  }
}

function selectPngOption(option) {
  var containers = document.querySelectorAll('.pendriveContainer');

  containers.forEach(function (container) {
    if (option === 1) {
      container.style.backgroundImage = "url('../static/images/1.png')";
    } else if (option === 2) {
      container.style.backgroundImage = "url('../static/images/2.png')";
    } else if (option === 3) {
      container.style.backgroundImage = "url('../static/images/3.png')";
    } else if (option === 4) {
      container.style.backgroundImage = "url('../static/images/4.png')";
    } else if (option === 5) {
      container.style.backgroundImage = "url('../static/images/5.png')";
    }
  });
}

changeTimeFrame();


selectPngOption(1);


$(document).ready(function () {

  $('#downloadPicButton').on('click', function () {

    if (timeFrameSelect.value == 'short_term_pendrive_container') {
      var offScreen = document.querySelector('.pendriveContainerShortWrapper');
    } else if (timeFrameSelect.value == 'medium_term_pendrive_container') {
      var offScreen = document.querySelector('.pendriveContainerMediumWrapper');
    } else if (timeFrameSelect.value == 'long_term_pendrive_container') {
      var offScreen = document.querySelector('.pendriveContainerLongWrapper');
    }

    window.scrollTo(0, 0);

    var displayStyle = offScreen.style.display;
    offScreen.style.display = 'block';

    setTimeout(function () {
      domtoimage
        .toPng(offScreen)
        .then(function (dataURL) {
          offScreen.style.display = displayStyle;

          var link = document.createElement('a');
          link.href = dataURL;
          link.download = `meu-pendrive.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(function (error) {
          console.error('Error generating image:', error);
        });
    }, 300);
  });
});