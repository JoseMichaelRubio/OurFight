package org.ourfight.controllers;

import org.ourfight.models.Doctor;
import org.ourfight.services.DoctorService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.List;
import java.util.logging.LogManager;


@RestController
@CrossOrigin
@RequestMapping("/doctors")
public class DoctorController {


    @Autowired
     DoctorService doctorService;

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors(@RequestParam(value ="name", required = false) String nameParam){
        return ResponseEntity.ok().body(doctorService.getAll());
    }
    @PostMapping
    public ResponseEntity<Doctor> addNewDoctor(@RequestBody Doctor doctor){
        doctorService.create(doctor);
        return new ResponseEntity<>(doctor, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable long id){
        doctorService.deleteDoctor(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor){
        doctorService.updateDoctor(doctor);
        return new ResponseEntity<>(doctor, HttpStatus.ACCEPTED);
    }

    @GetMapping("/marriage-counselors")
    public  ResponseEntity<List<Doctor>> getMarriageCounselors(@RequestParam(value = "name", required = false) String nameParam){
        return ResponseEntity.ok().body(doctorService.getMarriageCounselors());
    }
    @GetMapping("/psychiatrists")
    public ResponseEntity<List<Doctor>> getPsychiatrists(@RequestParam(value ="name", required = false) String nameParam){
        return ResponseEntity.ok().body(doctorService.getPsychiatrists());
    }
}
