package com.example.application.data.service;

import com.example.application.data.entity.ValidationTestEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ValidationTestEntityRepository extends JpaRepository<ValidationTestEntity, Integer> {

}