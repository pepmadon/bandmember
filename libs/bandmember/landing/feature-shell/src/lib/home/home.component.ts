import { Component } from '@angular/core';

@Component({
  selector: 'pepmadon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  // faPropIcon1 = faCoffee as IconProp;
  // faPropIcon2 = faLightbulb as IconProp;
  // faPropIcon3 = faBarChart as IconProp;

  tiles = [
    {
      text: 'Fullstack Development',
      longText:
        "Spend your time generating new ideas. You don't have to think of implementing.",
      cols: 1,
      rows: 1,
      border: '3px double purple',
      icon: "",
    },
    {
      text: 'Have a new Idea?',
      longText: 'Start up, need help? Lets tak we can provide a solution',
      cols: 1,
      rows: 1,
      border: '3px double red',
      icon: "",
    },
    {
      text: 'Predictive Insight(PI)',
      longText:
        'An Automated, and Digitally Integrated, Predictive Analytics Solution.',
      cols: 1,
      rows: 1,
      border: '3px double skyblue',
      icon: "",
    },
  ];

}
