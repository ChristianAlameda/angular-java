// tutorials-list.component.ts

import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../../models/tutorial.model'; // Adjust the path as per your project structure
import { TutorialService } from '../../services/tutorial.service'; // Adjust the path as per your project structure


@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials: Tutorial[] = [];
  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data: Tutorial[]) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {
      title: '',
      description: '',
      published: false
    };
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.refreshList();
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

  searchTitle(): void {
    this.currentTutorial = {
      title: '',
      description: '',
      published: false
    };
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data: Tutorial[]) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e: any) => {
          console.error(e);
          // Handle error as per your application's requirements
        }
      });
  }

}
