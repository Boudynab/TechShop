package com.TechShop.TechShop.repository;

import com.TechShop.TechShop.service.MotherBoard;
import com.TechShop.TechShop.service.Ram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RamRepository extends JpaRepository<Ram,Long> {
    List<Ram> findAll();
}
