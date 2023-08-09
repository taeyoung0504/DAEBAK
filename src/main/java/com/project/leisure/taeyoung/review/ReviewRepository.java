package com.project.leisure.taeyoung.review;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	Page<Review> findAllByAuthor(String author, Pageable pageable);

	Page<Review> findAll(Pageable pageable);
	
	Optional<Review> findById(Long id);
	
	Optional<Review> findByAuthor(String author);

}
