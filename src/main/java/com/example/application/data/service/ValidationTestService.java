package com.example.application.data.service;

import com.example.application.data.entity.ValidationTestEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vaadin.artur.helpers.CrudService;

@Service
public class ValidationTestService extends CrudService<ValidationTestEntity, Integer> {

    private ValidationTestEntityRepository repository;

    public ValidationTestService(@Autowired ValidationTestEntityRepository repository) {
        this.repository = repository;
    }

    @Override
    protected ValidationTestEntityRepository getRepository() {
        return repository;
    }

}
