package org.ourfight.services;

import org.ourfight.models.Doctor;
import org.ourfight.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;

@Service
public class DoctorService {

    @Autowired
    DoctorRepository doctorRepository;


    public List<Doctor> getAll() {
        return doctorRepository.findAll();
    }

    public Doctor create(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public void deleteDoctor(long id) {
        doctorRepository.deleteById(id);
    }

    public Doctor updateDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public List<Doctor> getMarriageCounselors() {
        return doctorRepository.getDoctorsOfMarriageCounselor();
    }

    public List<Doctor> getPsychiatrists() {
        return doctorRepository.getDoctorsOfPsychiatry();
    }

    public List<Doctor> getGroupTherapists() {
        return doctorRepository.getGroupTherapists();
    }

    public List<Doctor> getTherapists(){
        return doctorRepository.getTherapists();
    }
    public List<Doctor> getChildPsychologists(){
        return doctorRepository.getChildPsychologists();
    }
}
