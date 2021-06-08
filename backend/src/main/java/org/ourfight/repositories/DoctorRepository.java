package org.ourfight.repositories;

import org.ourfight.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Long> {

//    public List<Doctor> getAllDoctors();

}
