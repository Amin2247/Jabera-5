document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close-button").addEventListener("click", function() {
        document.getElementById("accessibility").style.display = "none";
    });

    function prefillData() {
        if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
            // Room 1 Defaults
            document.getElementById('room1_name').value = "PanaCast40VBS";
            document.getElementById('room1_model').value = "ModelX123";
            document.getElementById('room1_service').value = "Zoom";
            document.getElementById('room1_firmware').value = "v2.1.4";
            document.getElementById('room1_mac').value = "00:1A:2B:3C:4D:5E";
            document.getElementById('room1_ip').value = "192.168.1.10";
            document.getElementById('room1_video').value = "Enabled";

            // Room 2 Defaults
            document.getElementById('room2_name').value = "LogiRoom9000";
            document.getElementById('room2_model').value = "Logitech Rally";
            document.getElementById('room2_service').value = "Microsoft Teams";
            document.getElementById('room2_firmware').value = "v3.0.1";
            document.getElementById('room2_mac').value = "00:1B:2C:3D:4E:5F";
            document.getElementById('room2_ip').value = "192.168.1.20";
            document.getElementById('room2_video').value = "Enabled";
        }
    }

    // Run the function when the page loads
    prefillData();

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
    

    // Attach the showSection function to navigation links
    document.querySelectorAll('.sidebar ul li').forEach(navItem => {
        navItem.addEventListener('click', function() {
            const sectionId = this.innerText.trim().toLowerCase();
            showSection(sectionId === 'about' ? 'general' : sectionId);
        });
    });

    // Load the Home section by default
    showSection('home');

    // Text slider event listener
    const textSlider = document.getElementById('textSlider');
    const textValue = document.getElementById('textValue');

    textSlider.addEventListener('input', function() {
        textValue.textContent = textSlider.value;
    });
});
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
    console.log("Slider Value:", slider.value);
});
document.getElementById("textSlider").addEventListener("input", function() {
    document.getElementById("textValue").textContent = this.value;
});
document.getElementById("noise-suppression").addEventListener("change", function() {
    this.value = "normal"; // Forces it to stay on normal
});
document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('microphone-slider');
    var output = document.getElementById('slider-value');

    // Display the default slider value
    output.textContent = slider.value;

    // Update the current slider value each time the slider is moved
    slider.addEventListener('input', function () {
        output.textContent = this.value;
    });
});
document.getElementById('microphone-slider').addEventListener('input', function() {
    document.getElementById('slider-value').textContent = this.value;
  });
  const noiseSuppressionBtn = document.getElementById('noise-suppression-btn');
const noiseLevels = ['Low', 'Normal (Recommended)', 'High'];
let currentLevelIndex = 1; // Start at 'Normal (Recommended)'

noiseSuppressionBtn.addEventListener('click', function() {
  currentLevelIndex = (currentLevelIndex + 1) % noiseLevels.length;
  noiseSuppressionBtn.textContent = noiseLevels[currentLevelIndex];
});
const textSizeSlider = document.getElementById('text-size-slider');
const textSizeValue = document.getElementById('text-size-value');
const textDisplay = document.getElementById('text-display');

textSizeSlider.addEventListener('input', function() {
  const size = this.value;
  textSizeValue.textContent = size;
  textDisplay.style.fontSize = size + 'px';
});
document.getElementById("high-contrast-toggle").addEventListener("click", function() {
    document.body.classList.toggle("high-contrast");
    this.classList.toggle("on");
    this.textContent = this.classList.contains("on") ? "On" : "Off";
});

const style = document.createElement("style");
style.textContent = `
  .high-contrast {
    background-color: white !important;
    color: black !important;
  }
  .high-contrast .high-contrast-label {
    color: black !important;
  }
`;
document.head.appendChild(style);
document.getElementById("color-blind-toggle").addEventListener("click", function () {
    document.body.classList.toggle("color-blind-mode");

    // Toggle button text and style
    if (document.body.classList.contains("color-blind-mode")) {
        this.textContent = "On";
        this.classList.add("active");
    } else {
        this.textContent = "Off";
        this.classList.remove("active");
    }
});
