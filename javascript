(function () {
  const segmentItems = [
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
  ];

  let activeSegment = 'today';

  function renderSegmentedButtons() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'segment-wrapper';

    const group = document.createElement('div');
    group.className = 'segment-group';

    segmentItems.forEach((item) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = item.label;
      button.className = activeSegment === item.value ? 'segment-button is-active' : 'segment-button';

      button.addEventListener('click', () => {
        activeSegment = item.value;
        renderSegmentedButtons();
      });

      group.appendChild(button);
    });

    wrapper.appendChild(group);
    app.appendChild(wrapper);
  }

  renderSegmentedButtons();
})();