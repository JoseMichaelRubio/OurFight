package org.ourfight.controllers;

import org.ourfight.models.Doctor;
import org.ourfight.services.DoctorService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
