package com.example.application.data.entity;

import com.example.application.data.AbstractEntity;
import com.vaadin.fusion.Nonnull;
import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
public class ValidationTestEntity extends AbstractEntity {

    @Nonnull
    @Size(min = 5, max = 10)
    private String minMaxLengthString;
    @Nonnull
    @Size(min = 6, max = 12, message = "{javax.validation.constraints.Size.message}")
    private String minMaxLengthCustomMessage;
    @Nonnull
    @Size(min = 6, max = 12, message = "{com.example.my.size.constraint}")
    private String minMaxLengthCustomMessage2;
    @Nonnull
    @Size(min = 6, message = "{com.example.my.size.constraint.min}")
    private String minLengthCustomMessage;
    @Nonnull
    @NotBlank
    private String notBlankString;
    @Nonnull
    @NotEmpty
    private String notEmptyString;
    @Nonnull
    @Email
    private String email;

    public String getMinMaxLengthString() {
        return minMaxLengthString;
    }
    public void setMinMaxLengthString(String minMaxLengthString) {
        this.minMaxLengthString = minMaxLengthString;
    }
    public String getMinMaxLengthCustomMessage() {
        return minMaxLengthCustomMessage;
    }
    public void setMinMaxLengthCustomMessage(String minMaxLengthCustomMessage) {
        this.minMaxLengthCustomMessage = minMaxLengthCustomMessage;
    }
    public String getMinMaxLengthCustomMessage2() {
        return minMaxLengthCustomMessage2;
    }
    public void setMinMaxLengthCustomMessage2(String minMaxLengthCustomMessage2) {
        this.minMaxLengthCustomMessage2 = minMaxLengthCustomMessage2;
    }
    public String getMinLengthCustomMessage() {
        return minLengthCustomMessage;
    }
    public void setMinLengthCustomMessage(String minLengthCustomMessage) {
        this.minLengthCustomMessage = minLengthCustomMessage;
    }
    public String getNotBlankString() {
        return notBlankString;
    }
    public void setNotBlankString(String notBlankString) {
        this.notBlankString = notBlankString;
    }
    public String getNotEmptyString() {
        return notEmptyString;
    }
    public void setNotEmptyString(String notEmptyString) {
        this.notEmptyString = notEmptyString;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

}
