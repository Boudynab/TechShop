package com.TechShop.TechShop.repository;

import com.TechShop.TechShop.service.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    Optional<User> findByUsername(String username);
}
