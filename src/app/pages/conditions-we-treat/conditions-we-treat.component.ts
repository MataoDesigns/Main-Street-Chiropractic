import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions-we-treat',
  templateUrl: './conditions-we-treat.component.html',
  styleUrls: ['./conditions-we-treat.component.scss']
})
export class ConditionsWeTreatComponent implements OnInit {

  services: Array<any> = [
    {
      Name: 'Children Health Symptoms',
      Description: 'Children often come to the chiropractor for a variety of reasons.  Most common being sports injuries or falls, but adjustments can also help with bed wetting, ADHD, ear infections, constipation, colic and more.  The nervous system is in charge of all your bodies functions and when it is not working correctly because something is pushing on it wrong it can cause a lot of issues.  Adjustments will allow the nervous system to function at 100% which will alleviate many of these symptoms in children. ',
      Image: 'assets/images/jpg/adjustment.jpg'
    },
    {
      Name: 'Sciatica',
      Description: 'Sciatica is a pain that radiates down the back of the leg.  It is caused by a pinching on the sciatic nerve.  It can just radiate into the buttocks or be more severe and cause pain into the toes.  Dr. Julie treats sciatica with adjustments and a highly effective flexion distraction technique that opens the disc spaces taking the pressure off the nerve. Very few chiropractors use the flexion distraction technique as it takes a bit of extra time, but the results are worth it.',
      Image: 'assets/images/jpg/adult-back-pain.jpg'
    },
    {
      Name: 'Low Back Pain',
      Description: 'Low back pain is the leading cause of disability in the United States with 8 out of every 10 people suffering from lower back pain at some point in their lives.  Chiropractic adjustments are the answer you are looking for if you are suffering from lower back pain.  Over the counter medications just help mask the symptoms but do not treat the cause of the problem.  Book an appointment today and let the team at Main Street Chiropractic relieve the symptoms and keep them from coming back time and time again. ',
      Image: 'assets/images/jpg/ache-adult-back-pain-1573823.jpg'
    },
    {
      Name: 'Headaches',
      Description: 'Headaches can have a lot of triggers.  Dehydration, caffeine, hormones, and even the weather can play a role in the frequency and severity of headaches.  Often when patients have headaches their upper cervical spine is out of alignment.  When this happens, it puts pressure on the nerves that supply the head and lead to a headache.  Getting the neck adjusted can relieve the pressure on the nerve and therefore relieving the headache.',
      Image: 'assets/images/jpg/beautiful-woman-blonde-gray-background-2050503.jpg'
    },
    {
      Name: 'Neck Pain',
      Description: 'There are many causes of neck pain and treating the symptoms will not fix any of them.  Dr. Julie will diagnose and treat the cause of your neck pain and get you feeling better.  Patients with neck pain often have trouble driving due to a decreased range of motion in the neck, difficulty getting comfortable while sleeping, and they may have a hard time concentrating.  By adjusting the neck these symptoms will show improvement and then with at home exercises the symptoms will stay away. ',
      Image: 'assets/images/jpg/neck-3739667_640.jpg'
    },
    {
      Name: 'Pregnancy Symptoms',
      Description: 'Back pain, Poor positioning of baby for delivery, and pelvic pain are all symptoms patients may have when pregnant.  Chiropractic is safe during pregnancy and is shown to reduce duration of labor and delivery and decrease discomfort.  Dr. Julie is also certified in the Webster Technique.  Webster technique is a specific chiropractic analysis and adjustment that reduces interference to the nervous system and balances maternal pelvic muscles and ligaments. This in turn reduces torsion in the uterus, a cause of intra-uterine constraint of the baby and allows for optimal fetal positioning in preparation for birth.',
      Image: 'assets/images/jpg/baby-belly-baby-bump-black-and-white-2220699.jpg'
    }
  ]


  constructor() { }

  ngOnInit() {
  }
}
