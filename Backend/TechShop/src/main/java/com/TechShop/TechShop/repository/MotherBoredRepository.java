package com.TechShop.TechShop.repository;

import com.TechShop.TechShop.service.MotherBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MotherBoredRepository extends JpaRepository<MotherBoard,Long> {
    List<MotherBoard>findAll();
}
