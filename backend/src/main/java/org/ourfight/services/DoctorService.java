package org.ourfight.services;

import org.ourfight.models.Doctor;
import org.ourfight.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    DoctorRepository doctorRepository;


    public List<Doctor> getAll(){ return doctorRepository.findAll(); }


}
