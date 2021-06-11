package org.ourfight.repositories;

import org.ourfight.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Long> {

    @Query(value ="select * from doctor d where specialty_specialty = 'Marriage Counselors';", nativeQuery = true)
    List<Doctor> getDoctorsOfMarriageCounselor();

    @Query(value ="select * from doctor d where specialty_specialty = 'Psychiatrist';", nativeQuery = true)
    List<Doctor> getDoctorsOfPsychiatry();

}
