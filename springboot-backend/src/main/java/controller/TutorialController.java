package controller;

package com.bezkoder.spring.datajpa.controller;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")


public class TutorialController {
    
    @Autowired
    TutorialRepository tutorialRepository;

    @GetMapping("/tutorials")
    public ResponseEntity<List<Tutorial>> getAllTutorials(@RequestParam(required = false) String title){
        // TODO 
    }

    @GetMapping("/tutorial/{id}")
    public ResponseEntity<Tutorial> getTutorialById(@PathParam("id") long id){
        // TODO
    }

    @PostMapping("/tutorials")
    public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial){
        // TODO
    }

    @PutMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial> updateTurial(@PathVariable("id") long id, @RequestBody Tutorial tutorial){
        // TODO
    }

    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllTutorials(){
        // TODO
    }

    @GetMapping("/tutorials/published")
    public ResponseEntity<List<Tutorial>> findByPublished(){
        
    }


}
