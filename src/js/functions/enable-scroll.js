export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(vars.document.body.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  vars.document.body.style.paddingRight = '0px';

  vars.document.body.style.top = 'auto';
  vars.document.body.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  vars.document.body.removeAttribute('data-position');
  vars.document.documentement.style.scrollBehavior = 'smooth';
}
