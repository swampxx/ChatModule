package com.uploadFile;


import org.springframework.data.repository.CrudRepository;

import com.uploadFile.Texts;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TextsRepository extends CrudRepository<Texts, Long> {

}