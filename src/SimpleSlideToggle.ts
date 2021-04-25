import { isElement } from './utils/isEmelent'

export const slideUp = async (target: HTMLElement, duration = 400) => {
  if (!checkSlideMovable(target, 'slideUp')) return

  // initialize
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = `${duration}ms`
  target.style.boxSizing = 'border-box'
  target.style.overflow = 'hidden'
  target.style.height = `${target.offsetHeight}px`

  target.setAttribute('aria-expanded', 'false')
  target.setAttribute('aria-hidden', 'true')

  // move
  target.offsetHeight
  target.style.height = '0'
  target.style.paddingTop = '0'
  target.style.paddingBottom = '0'
  target.style.marginTop = '0'
  target.style.marginBottom = '0'

  // reset
  return new Promise(resolve => {
    setTimeout(() => {
      target.style.display = 'none'
      target.style.removeProperty('height')
      target.style.removeProperty('box-sizing')
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.removeAttribute('data-slide-moving')
      resolve('done')
    }, duration)
  })
}

export const slideDown = async (target: HTMLElement, duration = 400) => {
  if (!checkSlideMovable(target, 'slideDown')) return

  // initialize
  target.style.removeProperty('display')

  const originDisplay = window.getComputedStyle(target).display
  target.style.display = (originDisplay === 'none') ? 'block' : originDisplay

  const originHeight = target.offsetHeight

  target.style.overflow = 'hidden'
  target.style.height = '0'
  target.style.paddingTop = '0'
  target.style.paddingBottom = '0'
  target.style.marginTop = '0'
  target.style.marginBottom = '0'
  target.offsetHeight
  target.style.boxSizing = 'border-box'
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = `${duration}ms`

  target.setAttribute('aria-expanded', 'true')
  target.setAttribute('aria-hidden', 'false')

  // move
  target.style.height = `${originHeight}px`
  target.style.removeProperty('padding-top')
  target.style.removeProperty('padding-bottom')
  target.style.removeProperty('margin-top')
  target.style.removeProperty('margin-bottom')

  // reset
  return new Promise(resolve => {
    setTimeout(() => {
      target.style.removeProperty('box-sizing')
      target.style.removeProperty('height')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.removeAttribute('data-slide-moving')
      resolve('done')
    }, duration)
  })
}

export const slideToggle = async (target: HTMLElement, duration = 400) => {
  return (window.getComputedStyle(target).display === 'none')
    ? slideDown(target, duration)
    : slideUp(target, duration)
}

const checkSlideMovable = (target: HTMLElement, name: string) => {
  if (!isElement(target)) {
    console.warn(`${name}: Slide target is not HTMLElement.`)
  }

  if (target.dataset.slideMoving === 'move') {
    return false
  } else {
    target.dataset.slideMoving = 'move'
    return true
  }
}
