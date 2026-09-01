const videoModal = document.getElementById('videoModal');
  const introVideo = document.getElementById('introVideo');

  // Play video when modal opens
  videoModal.addEventListener('shown.bs.modal', function () {
    introVideo.play();
  });

  // Pause and reset video when modal closes
  videoModal.addEventListener('hidden.bs.modal', function () {
    introVideo.pause();
    introVideo.currentTime = 0;
  });