// tutorial-details.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tutorial } from '../../models/tutorial.model'; // Adjust the path as per your project structure
import { TutorialService } from '../../services/tutorial.service'; // Adjust the path as per your project structure

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.params['id'];
      if (id) {
        this.getTutorial(id);
      }
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data: Tutorial) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

  updatePublished(status: boolean): void {
    const data: Tutorial = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

}
