import { Component, OnInit } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    { name: 'Laurie F.', testimonial: 'After 10+ years, Dr. Julie has me on my way to a better feeling body. Personable, professional and oh so full of information.' },
    { name: 'Jamie T.', testimonial: 'This place has changed my overall wellbeing and has allowed me to work with minimal to no pain, which is huge for me. The staff is like no other! They are all friendly, caring, and professional!' },
    { name: 'Cathy W.', testimonial: 'Dr Julie is amazing. She has a plethora of treatment modalities so that if one isn’t optimum, another fits the bill. I have visited quite a few chiropractors closer to my home, but have never had the results that Dr Julie is able to achieve. The long drive is worth it!' },
    { name: 'Cara A.', testimonial: 'I went to Dr. Julie when I was in the most pain while 9 months pregnant. My sciatica was excruciating and still trying to work full time. Dr. Julie impressed me before I even walked in the door. She promptly emailed me back on a weekend with her earliest appointment options. My first appointment was amazing and though it would take time to make the sciatica feel better, I was able to walk out of there with a little less pain. I saw her for the rest of my pregnancy and now my newborn and I both get adjusted. Give Main Street Chiropractic Center in armada a try. You will not be disappointed.' }
  ]

  constructor() { }

  ngOnInit() {

  }

  // ngAfterContentInit() {

  //   let scrollCount = 0;

  //   setTimeout(scrollTestimonials, 3000);

  //   function scrollTestimonials() {
  //     let testimonials = document.getElementsByClassName('testimonial');
  //     if (scrollCount > this.testimonials.length) { scrollCount = 0; }

  //     for (let i = 0; i < testimonials.length; i++) {
  //       this.testimonials[i].style.display = 'none';
  //     }

  //     this.testimonials[scrollCount].style.display = 'block';

  //   }


  // }

}
