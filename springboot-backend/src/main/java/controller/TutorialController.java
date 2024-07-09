package controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus; // Import HttpStatus here
import java.util.List;
import repository.TutorialRepository; // Import TutorialRepository here
import model.Tutorial; // Import Tutorial here

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8081")
public class TutorialController {
    
    @Autowired
    TutorialRepository tutorialRepository;

    @GetMapping("/tutorials")
    public ResponseEntity<List<Tutorial>> getAllTutorials(@RequestParam(required = false) String title){
        // TODO
        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/tutorial/{id}")
    public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") long id){
        // TODO
        return ResponseEntity.ok().body(null);
    }

    @PostMapping("/tutorials")
    public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial){
        // TODO
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial> updateTutorial(@PathVariable("id") long id, @RequestBody Tutorial tutorial){
        // TODO
        return ResponseEntity.ok().body(null);
    }

    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllTutorials(){
        // TODO
        return ResponseEntity.ok().build();
    }

    @GetMapping("/tutorials/published")
    public ResponseEntity<List<Tutorial>> findByPublished(){
        // TODO
        return ResponseEntity.ok().body(null);
    }
}
