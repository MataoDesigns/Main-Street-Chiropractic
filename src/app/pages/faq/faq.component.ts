import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  qnas = [
    {
      question: 'Q: Once I go to the chiropractor do I have to for the rest of my life?',
      answer: 'A: No. Dr. Julie will set you up with a treatment plan to get your body functioning properly again. While wellness or maintenance care is suggested and encouraged it is up to you if you’d like to continue your care after you are feeling better. '
    },
    {
      question: 'Q: How long will it take to get me better?',
      answer: 'A: Length of care depends on a lot of factors including how long the problem has been there, the cause of the problem, and other factors that will all be addressed during your initial exam. '
    },
    {
      question: 'Q: How much does it cost? ',
      answer: 'A: Most insurance policies cover chiropractic care and we are in network with a lot of them. If you have no chiropractic coverage an adjustment will cost $40. The first visit will be more with exam and possible X-ray fees. '
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
