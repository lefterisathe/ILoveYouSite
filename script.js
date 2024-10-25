function showHearts(button) {
    // Add color transition animation to the clicked button
    button.classList.add("animate");
    
    // Generate hearts on button click
    for (let i = 0; i < 30; i++) {
      createHeart(button);
    }
  
    // Show the slider after clicking "Yes"
    document.getElementById("slider-container").classList.remove("hidden");
  
    // Remove animation class after a delay to reset for next click
    setTimeout(() => {
      button.classList.remove("animate");
    }, 400);
  }
  
  function createHeart(element) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    
    // Position hearts relative to the button
    const rect = element.getBoundingClientRect();
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top - 10}px`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Duration between 2s and 5s
    
    // Append heart to the container
    document.getElementById("hearts-container").appendChild(heart);
    
    // Remove heart after animation is complete
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
  
  function showSliderHearts(slider) {
    const sliderValue = document.getElementById("slider-value");
    sliderValue.textContent = `${slider.value}%`;
  
    // Show hearts on slider move
    if (slider.value < 100) {
      createHeart(slider);
    } else {
      // If slider reaches 100, redirect to the love message page
      setTimeout(() => {
        window.location.href = "lovemessage.html";
      }, 500);
    }
  }
  