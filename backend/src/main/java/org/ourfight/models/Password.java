package org.ourfight.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Component
@Scope("prototype")
@JsonIgnoreProperties("hibernateLazyInitializer")
public class Password {
    @Id
    private Long employeeId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name="user_id")
    private User user;

    public Password(Long employeeId, User user, byte[] salt, byte[] hash) {
        this.employeeId = employeeId;
        this.user = user;
        this.salt = salt;
        this.hash = hash;
    }

    private byte[] salt, hash;

    public Password(){}

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public byte[] getSalt() {
        return salt;
    }

    public void setSalt(byte[] salt) {
        this.salt = salt;
    }

    public byte[] getHash() {
        return hash;
    }

    public void setHash(byte[] hash) {
        this.hash = hash;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Password password = (Password) o;
        return Objects.equals(employeeId, password.employeeId) && Objects.equals(user, password.user) && Arrays.equals(salt, password.salt) && Arrays.equals(hash, password.hash);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(employeeId, user);
        result = 31 * result + Arrays.hashCode(salt);
        result = 31 * result + Arrays.hashCode(hash);
        return result;
    }
}
