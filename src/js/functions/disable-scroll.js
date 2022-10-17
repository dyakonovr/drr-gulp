export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - vars.document.body.offsetWidth)}px`;

  vars.document.documentement.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  vars.document.body.style.paddingRight = paddingOffset;
  vars.document.body.classList.add('dis-scroll');
  vars.document.body.dataset.position = pagePosition;
  vars.document.body.style.top = `-${pagePosition}px`;
}
