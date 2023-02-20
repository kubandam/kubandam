
import $ from 'jquery';
export function hoverMouse() {
    const links = document.querySelectorAll('.hover-me');
    const animateMe = function(e) {
      const span =this
      const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this;
      
      var move = 30;
      var xMove = x / width * (move * 2) - move;
      var yMove = y / height * (move * 2) - move;
      
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      span.style.transition = `transform 300ms cubic-bezier(0.3, 1, 0.7, 1)`;
      span.style.transition = `all 300ms ease`;
      
      if (e.type === 'mouseleave') span.style.transform = '';
    };
    links.forEach(link => link.addEventListener('mousemove', animateMe));
    links.forEach(link => link.addEventListener('mouseleave', animateMe));
}