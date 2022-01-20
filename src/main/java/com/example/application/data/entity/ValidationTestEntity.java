package com.example.application.data.entity;

import com.example.application.data.AbstractEntity;
import com.vaadin.fusion.Nonnull;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.validation.constraints.AssertFalse;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Negative;
import javax.validation.constraints.NegativeOrZero;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

@Entity
@Data
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

    @Null
    private String testNull;
    @NotNull
    private String testNotNull;
    @Nonnull
    @AssertTrue
    private boolean testAssertTrue;
    @Nonnull
    @AssertFalse
    private boolean testAssertFalse;
    @Nonnull
    @Min(5)
    private Integer testMin;
    @Nonnull
    @Max(-4)
    private Integer testMax;
    @Nonnull
    @DecimalMin(value = "5.5", inclusive = true)
    private BigDecimal testDecimalMin;
    @Nonnull
    @DecimalMin(value = "5.5", inclusive = false)
    private BigDecimal testDecimalMinExclusive;
    @Nonnull
    @DecimalMax(value = "-4.5", inclusive = true)
    private BigDecimal testDecimalMax;
    @Nonnull
    @DecimalMax(value = "-4.5", inclusive = false)
    private BigDecimal testDecimalMaxExclusive;
    @Nonnull
    @Negative
    private Integer testNegative;
    @Nonnull
    @NegativeOrZero
    private Integer testNegativeOrZero;
    @Nonnull
    @Positive
    private Integer testPositive;
    @Nonnull
    @PositiveOrZero
    private Integer testPositiveOrZero;
    @Nonnull
    @Size(min = 5)
    private String testSize1;
    @Nonnull
    @Size(max = 6)
    private String testSize2;
    @Nonnull
    @Digits(integer = 2, fraction = 2)
    private BigDecimal testDigits;
    @Nonnull
    @Past
    private LocalDate testPast;
    @Nonnull
    @Future
    private String testFuture;
    @Nonnull
    @Pattern(regexp = "\\d{3,5}")
    private String testPattern;
    @Nonnull
    @NotEmpty
    private String testNotEmpty;
    @Nonnull
    @NotBlank
    private String testNotBlank;
    @Nonnull
    @Email
    private String testEmail;


}
