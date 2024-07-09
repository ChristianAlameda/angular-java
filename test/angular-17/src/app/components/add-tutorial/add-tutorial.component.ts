// add-tutorial.component.ts

import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model'; // Adjust the path as per your project structure
import { TutorialService } from '../../services/tutorial.service'; // Adjust the path as per your project structure

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data: Tutorial = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      published: false // set to false initially, update as needed
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
