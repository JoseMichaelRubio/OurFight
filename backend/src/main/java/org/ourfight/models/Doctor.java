package org.ourfight.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name= "doctor")
public class Doctor implements Serializable {
    @Id //determines primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto incrementing, behaves like a serial datatype
    private Long id;
    private String name;
    private String gender;
    private boolean available;
    private boolean volunteer;
// Columns are auto generated for these ^

    public Doctor(){
        super();
    }

    @ManyToOne
    private Specialization specialty;




    public Doctor(Long id, String name, Specialization specialty, String gender, boolean available, boolean volunteer){
        this.id = id;
        this.name = name;
        this.specialty = specialty;
        this.gender = gender;
        this.available = available;
        this.volunteer = volunteer;
    }

    public Doctor(String name, Specialization specialty, String gender, boolean available, boolean volunteer){
        this.name = name;
        this.specialty = specialty;
        this.gender = gender;
        this.available = available;
        this.volunteer = volunteer;
    }

    public Doctor(Specialization specialty, boolean available, String name, String gender) {
        this.specialty = specialty;
        this.available= available;
        this.name = name;
        this.gender = gender;
    }

    public Doctor(Long id) {
        this.id = id;
    }

    public Doctor(String id) {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public boolean isVolunteer() {
        return volunteer;
    }

    public void setVolunteer(boolean volunteer) {
        this.volunteer = volunteer;
    }

    public Specialization getSpecialty() {
        return specialty;
    }

    public void setSpecialty(Specialization specialty) {
        this.specialty = specialty;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doctor doctor = (Doctor) o;
        return available == doctor.available && volunteer == doctor.volunteer && Objects.equals(id, doctor.id) && Objects.equals(name, doctor.name) && Objects.equals(gender, doctor.gender) && Objects.equals(specialty, doctor.specialty);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, gender, available, volunteer, specialty);
    }
}

